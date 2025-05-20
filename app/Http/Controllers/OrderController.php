<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function checkout()
    {
        return Inertia::render('CheckOutPages/Checkout', [
            'auth' => [
                'user' => Auth::user(),
            ],
            'cart' => array_values(Session::get('cart', [])),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'           => 'required|string',
            'email'          => 'required|email',
            'address'        => 'required|string',
            'city'           => 'required|string',
            'paymentMethod'  => 'required|string',
        ]);

        $cart = Session::get('cart', []);
        $total = collect($cart)->sum(fn($item) => floatval($item['price']) * intval($item['quantity']));

        $order = Order::create([
            'user_id'        => Auth::id(),
            'products'       => json_encode($cart),
            'total'          => $total,
            'payment_method' => $request->paymentMethod,
            'status'         => 'pendiente',
        ]);

        foreach ($cart as $item) {
            OrderItem::create([
                'order_id'     => $order->id,
                'product_id'   => $item['id'],
                'product_name' => $item['name'],
                'price'        => floatval($item['price']),
                'quantity'     => intval($item['quantity']),
            ]);
        }

        Session::forget('cart');

        return redirect()->route('order.confirmed')->with('success', 'Pedido realizado correctamente.');
    }
    public function paypalComplete(Request $request)
{
    $cart = $request->input('cart', []);
    $total = $request->input('total');
    $paypal = $request->input('paypalDetails');

    $order = Order::create([
        'user_id' => Auth::id(),
        'products' => json_encode($cart),
        'total' => $total,
        'payment_method' => 'paypal',
        'status' => 'pagado',
    ]);

    foreach ($cart as $item) {
        OrderItem::create([
            'order_id' => $order->id,
            'product_id' => $item['product_id'],
            'product_name' => 'N/A', // Puedes cambiarlo si necesitas el nombre
            'price' => $item['price'],
            'quantity' => $item['quantity'],
        ]);
    }

    // Aquí puedes notificar al admin (email, DB, etc.)

    Session::forget('cart');

    return redirect()->route('order.confirmed');
}

}
