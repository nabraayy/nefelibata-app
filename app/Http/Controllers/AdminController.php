<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if ($user->role !== 'admin') {
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        return Inertia::render('AdminDashboard');

    }
    

    
    public function orders() {
        return Inertia::render('AdminPanel/Orders');
    }
    
    public function messages() {
        return Inertia::render('AdminPanel/Messages');
    }
}