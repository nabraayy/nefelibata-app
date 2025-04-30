<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Maneja la solicitud entrante comprobando el rol del usuario.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  mixed  ...$roles
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        // Si no hay usuario autenticado, redirigir al login
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        // Si el rol del usuario no está permitido, mostrar error 403
        if (!in_array(Auth::user()->role, $roles)) {
            abort(403, 'No tienes permiso para acceder a esta página.');
        }

        // Si el rol coincide, continuar con la petición
        return $next($request);
    }
}
