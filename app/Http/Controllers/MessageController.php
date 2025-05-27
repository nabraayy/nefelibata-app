<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string|max:2000',
        ]);

        Message::create($request->only('name', 'email', 'subject', 'message'));

        return redirect()->back()->with('success', 'Mensaje enviado correctamente.');
    }

    public function index()
    {
        $messages = Message::latest()->get();

        return Inertia::render('AdminPanel/Messages', [
            'messages' => $messages,
        ]);
    }
}
