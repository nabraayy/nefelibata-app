<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\IsAdmin;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\CartController;


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



Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
});
Route::middleware(['auth'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('/admin/orders', [AdminController::class, 'orders'])->name('admin.orders');
    Route::get('/admin/messages', [AdminController::class, 'messages'])->name('admin.messages');
});
Route::post('/cart/add', [CartController::class, 'add'])->name('cart.add');


require __DIR__.'/auth.php';
