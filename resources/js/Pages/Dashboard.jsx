import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import Countdown from 'react-countdown';

export default function Dashboard() {
    const user = usePage().props.auth.user;
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <AuthenticatedLayout>
                <Head title="Inicio" />

               

                {/* Hero Section */}
                <section className="w-full bg-cover bg-center text-white py-24 px-6 text-center relative" style={{ backgroundImage: "url('/nube4.png')" }}>
                    <div className="bg-black bg-opacity-50 p-8 rounded-xl inline-block animate-fade-in">
                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Tecnología que impulsa tus ideas</h1>
                        <p className="text-lg sm:text-xl mb-6">Descubre nuestros productos exclusivos al mejor precio</p>
                        <Link
                            href={route('products')}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
                        >
                            ¡Explora la tienda!
                        </Link>
                    </div>
                </section>

                {/* Flash Sale Countdown */}
                <section className="bg-red-100 text-center py-6 px-4">
                    <h2 className="text-xl font-semibold text-red-800 mb-2">⚡ Oferta Flash en portátiles</h2>
                    <Countdown date={Date.now() + 3600 * 1000} renderer={({ hours, minutes, seconds }) => (
                        <p className="text-lg font-bold text-red-600">Finaliza en: {hours}:{minutes}:{seconds}</p>
                    )} />
                </section>

                {/* Ofertas */}
                <section className="bg-yellow-100 py-12 px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">🎉 ¡OFERTAS EXCLUSIVAS DE ESTA SEMANA!</h2>
                    <p className="text-lg mb-6">Hasta un <span className="font-bold text-red-600">40% de descuento</span> en productos seleccionados.</p>
                    <Link href={route('products')} className="bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-3 rounded-lg">
                        Ver ofertas ahora
                    </Link>
                </section>

                {/* Producto destacado */}
                <section className="py-12 px-6 bg-white text-center" style={{ backgroundImage: "url('/nubes2.png')"}}>
                    <h2 className="text-2xl font-bold mb-4">🔥 Producto del día</h2>
                    <div className="bg-gray-100 p-6 rounded-xl shadow inline-block">
                        <img src="/portatil.png" alt="Producto del día" className="h-28 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">Portátil ASUS Zen</h3>
                        <p className="text-sm text-gray-700 mb-2">30% de descuento solo por hoy</p>
                        <Link href={route('products')} className="text-blue-600 hover:underline text-sm">Ver más</Link>
                    </div>
                </section>

                {/* Categorías */}
                <section className="py-20 px-6 bg-white text-center animate-slide-up">
                <h2 className="text-4xl font-extrabold mb-10 text-gray-800">Explora por Categoría</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {[
                        { name: 'Portátiles', icon: '/portatil.png' },
                        { name: 'Auriculares Gaming', icon: '/cascos/cascos1.webp' },
                        { name: 'Pantallas', icon: '/panatalla/panatalla2.webp' },
                        { name: 'Ratones', icon: '/raton/raton1.webp' },
                        { name: 'Teclado', icon: '/teclados/teclado1.png' },
                        { name: 'Tablet', icon: '/tablet/tabl1.webp' },
                        { name: 'Base Refri', icon: '/refri/base-refri1.webp' },
                        { name: 'Móvil', icon: '/moviles/mo1.webp' },
                        { name: 'Auriculares', icon: '/auriculares/auri1.webp' },
                        { name: 'Cargadores', icon: '/cargador/cargador1.webp' },
                        { name: 'Baterías', icon: '/bateria/bateria1.webp' },
                    ].map((cat, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-6 cursor-pointer group"
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src={cat.icon}
                                    alt={cat.name}
                                    className="h-20 w-20 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-md font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                        </div>
                    ))}
                </div>
            </section>


                {/* Opiniones */}
                <section className="bg-gray-100 py-16 px-6 animate-fade-in" style={{ backgroundImage: "url('/nube3.png')" }}>
    <h2 className="text-3xl font-bold text-center mb-8">Opiniones de nuestros clientes</h2>
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {[
            {
                name: "Laura Martínez",
                rating: 5,
                comment: "Entrega rápida y productos de alta calidad. ¡Volveré a comprar!",
            },
            {
                name: "Carlos López",
                rating: 4,
                comment: "Me encantó el diseño de la tienda y la atención al cliente. Muy recomendable.",
            },
            {
                name: "Sofía Romero",
                rating: 5,
                comment: "Los mejores precios del mercado. El portátil llegó en perfectas condiciones.",
            }
        ].map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg text-gray-800">{review.name}</h3>
                    <div className="flex gap-1 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, j) => (
                            <svg key={j} xmlns="http://www.w3.org/2000/svg" fill={j < review.rating ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.911c.969 0 1.371 1.24.588 1.81l-3.976 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.89a1 1 0 00-1.176 0l-3.976 2.89c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.976-2.89c-.783-.57-.38-1.81.588-1.81h4.911a1 1 0 00.95-.69l1.518-4.674z" />
                            </svg>
                        ))}
                    </div>
                </div>
                <p className="text-sm text-gray-700 italic">"{review.comment}"</p>
            </div>
        ))}
    </div>
</section>


                <footer
    className="mt-12 text-white w-full bg-cover bg-center"
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
                    <a href="/politica-de-privacidad" className="hover:underline">Política de privacidad</a>
                </li>
                <li>
                    <a href="/terminos-y-condiciones" className="hover:underline">Términos y condiciones</a>
                </li>
                <li>
                    <a href="/aviso-legal" className="hover:underline">Aviso legal</a>
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


            </AuthenticatedLayout>
        </div>
    );
}
