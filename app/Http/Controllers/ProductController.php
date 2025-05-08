<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class ProductController extends Controller
{
        public function index()
        {
            $products = Product::all();
            return Inertia::render('ProductPages/Products', ['products' => $products]);
        }
        public function adminIndex()
        {
            $products = Product::all();
            return Inertia::render('AdminPanel/ProductIndex', ['products' => $products]);
        }

        public function create()
        {
            return Inertia::render('AdminPanel/ProductCreate');
        }

        public function store(Request $request)
        {
            $request->validate([
                'name' => 'required|string|max:255',
                'price' => 'required|numeric',
                'image' => 'required|string',
                'category' => 'required|string|max:255', 
            ]);

            Product::create($request->only('name', 'price', 'image', 'category'));

            return redirect()->route('admin.products.index')->with('message', 'Producto creado.');
        }

        public function edit(Product $product)
        {
            return Inertia::render('AdminPanel/ProductEdit', ['product' => $product]);
        }

        public function update(Request $request, Product $product)
        {
            $request->validate([
                'name' => 'required|string|max:255',
                'price' => 'required|numeric',
                'image' => 'required|string',
            ]);

            $product->update($request->only('name', 'price', 'image'));

            return redirect()->route('admin.products.index')->with('message', 'Producto actualizado.');
        }

        public function destroy(Product $product)
        {
            $product->delete();

            return redirect()->route('admin.products.index')->with('message', 'Producto eliminado.');
        }


}
