<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        // Compartir el usuario con todas las vistas Inertia
        Inertia::share([
            'auth' => fn () => [
                'user' => Auth::check() ? Auth::user() : null,
            ],
        ]);
    }
}
