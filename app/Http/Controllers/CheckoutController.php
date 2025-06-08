<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Support\Facades\Session;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class CheckoutController extends Controller
{
    
    public function index()
    {
        return Inertia::render('CheckOutPages/Checkout', [
            'auth' => [
                'user' => auth()->user(),
            ],
            'cart' => array_values(session()->get('cart', [])),

        ]);
    }

    // Procesar el pedido
    public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string',
        'email' => 'required|email',
        'address' => 'required|string',
        'city' => 'required|string',
        'paymentMethod' => 'required|string',
    ]);

    $cart = Session::get('cart', []);
    $total = collect($cart)->sum(fn($item) => $item['price'] * $item['quantity']);

    // 👉 Si se ha pagado con tarjeta, confirmar el pago
    if ($request->paymentMethod === 'card' && $request->stripePaymentId) {
        Stripe::setApiKey(config('services.stripe.secret'));

        $paymentIntent = PaymentIntent::retrieve($request->stripePaymentId);

        if ($paymentIntent->status !== 'succeeded') {
            return back()->withErrors(['msg' => 'El pago no se completó correctamente.']);
        }
    }

    // Crear la orden
    $order = Order::create([
        'user_id' => auth()->id(),
        'products' => json_encode($cart),
        'total' => $total,
        'payment_method' => $request->paymentMethod,
        'status' => 'pagada', // ✅ ya está pagada si llegó aquí
    ]);

    foreach ($cart as $item) {
        OrderItem::create([
            'order_id' => $order->id,
            'product_id' => $item['id'],
            'product_name' => $item['name'],
            'price' => $item['price'],
            'quantity' => $item['quantity'],
        ]);
    }

    Session::forget('cart');

    return redirect()->route('order.confirmed')->with('success', 'Pedido realizado correctamente.');
}
    
}
