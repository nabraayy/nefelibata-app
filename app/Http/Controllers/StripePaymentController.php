<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class StripePaymentController extends Controller
{
   public function createIntent(Request $request)
    {
        $request->validate([
        'amount' => 'required|integer|min:100', // mínimo 1€
    ]);

    Stripe::setApiKey(config('services.stripe.secret'));

    $intent = PaymentIntent::create([
        'amount' => $request->amount,
        'currency' => 'eur',
        'automatic_payment_methods' => ['enabled' => true],
    ]);

    return response()->json([
        'clientSecret' => $intent->client_secret,
    ]);
    }
}