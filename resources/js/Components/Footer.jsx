import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-white w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/nube4.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo e información */}
        <div className="flex items-start gap-4">
          <img src="/logo.png" alt="Logo Nefelibata" className="h-12 w-auto" />
          <div>
            <h2 className="text-lg font-semibold">NEFELIBATA</h2>
            <p className="text-sm">info@nefelibata.com</p>
            <p className="text-sm">+34 123 458 789</p>
          </div>
        </div>

        {/* Enlaces legales */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/politica-de-privacidad" className="hover:underline">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="/terminos-y-condiciones" className="hover:underline">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="/aviso-legal" className="hover:underline">
                Aviso legal
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Síguenos</h3>
          <img src="/logos1.png" alt="Redes sociales" className="h-16 w-auto mt-2" />
          <p className="mt-2 text-sm">Mantente conectado con nosotros.</p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white border-opacity-30 text-center py-4 text-xs text-white">
        © {new Date().getFullYear()} Nefelibata. Todos los derechos reservados.
      </div>
    </footer>
  );
}
