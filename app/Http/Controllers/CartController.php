<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    // Mostrar el carrito
    public function index()
    {
        $cart = session()->get('cart', []);
        return Inertia::render('Cart/Index', [
            'cart' => $cart
        ]);
    }

    // Añadir producto al carrito
    public function add(Request $request)
    {
        $productId = $request->input('product_id');

        // Simulación de búsqueda de producto (puedes reemplazar con DB::table o modelo Product)
        $fakeProducts = [
            1 => ['name' => 'Portátil HP', 'price' => 799.99, 'image' => '/portatil.png'],
            2 => ['name' => 'Tablet Samsung', 'price' => 299.99, 'image' => '/tablet/tabl1.webp'],
            3 => ['name' => 'Ratón óptico', 'price' => 59.99, 'image' => '/raton/raton1.webp'],
        ];

        if (!isset($fakeProducts[$productId])) {
            return redirect()->back()->withErrors(['Producto no encontrado.']);
        }

        $product = $fakeProducts[$productId];

        $cart = session()->get('cart', []);
        $cart[$productId] = [
            'id' => $productId,
            'name' => $product['name'],
            'price' => $product['price'],
            'image' => $product['image'],
            'quantity' => isset($cart[$productId]) ? $cart[$productId]['quantity'] + 1 : 1
        ];

        session()->put('cart', $cart);

        return redirect()->back()->with('message', 'Producto añadido al carrito.');
    }

    // Eliminar producto del carrito
    public function remove(Request $request)
    {
        $productId = $request->input('product_id');
        $cart = session()->get('cart', []);
        unset($cart[$productId]);
        session()->put('cart', $cart);
        return redirect()->back()->with('message', 'Producto eliminado del carrito.');
    }

    // Vaciar carrito
    public function clear()
    {
        session()->forget('cart');
        return redirect()->back()->with('message', 'Carrito vaciado.');
    }
}
