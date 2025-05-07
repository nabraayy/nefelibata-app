<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function add(Request $request)
    {
        $productId = $request->input('product_id');
    
        // Aquí puedes usar una lógica real, pero como ejemplo:
        $cart = session()->get('cart', []);
        $cart[] = $productId;
        session()->put('cart', $cart);
    
        return redirect()->back()->with('success', 'Producto añadido al carrito');
    }
}
