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
        'comment' => 'required|string|max:500',
    ]);

    Review::create([
        'user_id' => auth()->id(), 
        'rating' => $request->rating,
        'comment' => $request->comment,
    ]);

    return redirect()->back()->with('success', 'Gracias por tu opinión.');
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
