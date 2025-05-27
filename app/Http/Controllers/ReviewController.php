<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use Inertia\Inertia;
class ReviewController extends Controller
{
    public function store(Request $request)
{
    $request->validate([
        'rating' => 'required|integer|min:1|max:5',
        'comment' => 'required|string|max:1000',
    ]);

    $review = $request->user()->reviews()->create($request->only('rating', 'comment'));

    $review->load('user'); // Para que venga con el nombre del usuario

   return response()->json(['review' => $review]);
}
public function dashboard()
{
    $reviews = Review::with('user')->latest()->take(6)->get();

    return Inertia::render('Dashboard', [
        'reviews' => $reviews,
        'auth' => ['user' => auth()->user()]
    ]);
}


}
