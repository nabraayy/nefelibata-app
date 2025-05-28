<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderStatusUpdated;


class AdminController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        
        if ($user->role !== 'admin') {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        return Inertia::render('AdminDashboard', [
        'auth' => ['user' => $user],
        'totalSales' => Order::sum('total'),
        'orders' => Order::count(),
        'products' => Product::count(),
        'users' => User::count(),
        'recentOrders' => Order::with('user')
            ->latest()
            ->take(5)
            ->get()
            ->map(fn($order) => [
                'id' => $order->id,
                'name' => $order->user->name ?? 'Sin nombre',
                'date' => $order->created_at->diffForHumans(),
                'status' => $order->status,
            ]),
    ]);

    }
    

    
    public function orders()
    {
        $orders = Order::with('user')->latest()->get();

        return Inertia::render('AdminPanel/Orders', [
            'orders' => $orders,
        ]);
    }
    public function updateOrderStatus(Request $request, Order $order)
{
    $request->validate([
        'status' => 'required|string|in:pendiente,pagada,enviada',
    ]);

    $order->status = $request->status;
    $order->save();

    // Enviar correo al usuario
    if ($order->user && $order->user->email) {
        Mail::to($order->user->email)->send(new OrderStatusUpdated($order));
    }

    // Mensaje flash para mostrar en frontend del admin
    return back()->with('status_updated', "El estado del pedido #{$order->id} fue actualizado a '{$order->status}' y el cliente ha sido notificado.");
}
    public function showOrder(Order $order)
{
    $order->load('items', 'user');

    return Inertia::render('AdminPanel/OrderShow', [
        'order' => $order,
    ]);
}

    public function messages() {
        return Inertia::render('AdminPanel/Messages');
    }
}