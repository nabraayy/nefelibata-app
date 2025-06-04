<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\IsAdmin;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\AdminUserController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware('auth')->post('/reviews', [ReviewController::class, 'store'])->name('reviews.store');






Route::get('/dashboard', [ReviewController::class, 'dashboard'])->name('dashboard');



Route::middleware('auth','verified')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
});
/*Route::get('/products', function () {
    return Inertia::render('ProductPages/Products');
})->name('products');*/
Route::get('/products', [ProductController::class, 'index'])->name('products');


Route::get('/contact', function () {
    return Inertia::render('ContactPages/Contact');
})->name('contact');

Route::get('/cart', function () {
    return Inertia::render('ProductPages/Cart');
})->name('cart');
Route::post('/contact', [MessageController::class, 'store'])->name('contact.store');

Route::get('/admin/messages', [MessageController::class, 'index'])->middleware(['auth'])->name('admin.messages');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/users', [AdminController::class, 'users'])->name('admin.users');
});




Route::get('/checkout', [OrderController::class, 'checkout'])->middleware(['auth'])->name('checkout');
Route::post('/checkout', [OrderController::class, 'store'])->middleware(['auth'])->name('checkout.store');
Route::post('/checkout/paypal-complete', [OrderController::class, 'paypalComplete'])->name('checkout.paypal.complete');

Route::get('/order-confirmed', fn() => Inertia::render('CheckOutPages/OrderConfirmed'))->name('order.confirmed');
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/orders', [AdminController::class, 'orders'])->name('orders');
    Route::post('/orders/{order}/update-status', [AdminController::class, 'updateStatus'])->name('orders.updateStatus');
    Route::get('/orders/{order}', [AdminController::class, 'showOrder'])->name('orders.show');
});
Route::get('/orders', [OrderController::class, 'index'])->middleware(['auth'])->name('orders.index');



/*
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
});*/
Route::middleware(['auth'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('/admin/orders', [AdminController::class, 'orders'])->name('admin.orders');
    Route::post('/admin/orders/{order}/update-status', [AdminController::class, 'updateOrderStatus'])->name('admin.orders.updateStatus');
    /*Route::get('/admin/messages', [AdminController::class, 'messages'])->name('admin.messages');*/
});

Route::middleware(['auth'])->group(function () {
    Route::get('/cart', [CartController::class, 'index'])->name('cart');
    Route::post('/cart', [CartController::class, 'add'])->name('cart.add');
    Route::post('/cart/remove', [CartController::class, 'remove'])->name('cart.remove');
    Route::post('/cart/update', [CartController::class, 'update'])->name('cart.update');


});
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/products', [ProductController::class, 'adminIndex'])->name('products.index');
    Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
    Route::post('/products', [ProductController::class, 'store'])->name('products.store');
    Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');
    Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');
    Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy');
    Route::get('/users', [AdminUserController::class, 'index'])->name('users');
    Route::get('/users/{user}/edit', [AdminUserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{user}', [AdminUserController::class, 'update'])->name('users.update');
    Route::delete('/users/{user}', [AdminUserController::class, 'destroy'])->name('users.destroy');
   


});

// Stripe payment routes
Route::post('/create-payment-intent', [StripePaymentController::class, 'createIntent']);

   



Route::get('/products/offers', [ProductController::class, 'offers'])->name('products.offers');
Route::get('/offers', [ProductController::class, 'offers'])->name('offers');


require __DIR__.'/auth.php';
