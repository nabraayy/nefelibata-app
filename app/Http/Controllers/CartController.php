<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;


class CartController extends Controller
{
    // Mostrar el carrito
    public function index()
        {
            $cart = session()->get('cart', []);
            
            return Inertia::render('ProductPages/Cart', [
                'auth' => [
                    'user' => auth()->user()
                ],
                'cart' => array_values($cart), // devuelve con clave 'cart'
            ]);
        }

    // Añadir producto al carrito
    public function add(Request $request)
    {
            $product = Product::findOrFail($request->product_id);

        $cart = session()->get('cart', []);

        if (isset($cart[$product->id])) {
            $cart[$product->id]['quantity'] += 1;
        } else {
            $cart[$product->id] = [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'image' => $product->image,
                'quantity' => 1,
            ];
        }

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
    
    public function update(Request $request)
{
    $productId = $request->input('product_id');
    $quantity = max(1, (int)$request->input('quantity'));

    $cart = session()->get('cart', []);
    if (isset($cart[$productId])) {
        $cart[$productId]['quantity'] = $quantity;
        session()->put('cart', $cart);
    }

    return redirect()->back();
}


    // Vaciar carrito
    public function clear()
    {
        session()->forget('cart');
        return redirect()->back()->with('message', 'Carrito vaciado.');
    }
}
