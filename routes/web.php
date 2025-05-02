<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard')->middleware(['auth', 'verified']);


Route::middleware('auth','verified')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
});
Route::get('/products', function () {
    return Inertia::render('ProductPages/Products');
})->name('products');

Route::get('/contact', function () {
    return Inertia::render('ContactPages/Contact');
})->name('contact');
Route::get('/cart', function () {
    return Inertia::render('ProductPages/Cart');
})->name('cart');
Route::get('/checkout', function() {
    return Inertia::render('CheckOutPages/Checkout');
})->name('checkout');
Route::get('/order-confirmed', fn() => Inertia::render('CheckOutPages/OrderConfirmed'))->name('order.confirmed');




require __DIR__.'/auth.php';
