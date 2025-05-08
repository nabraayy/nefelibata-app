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
                <section className="py-12 px-6 bg-white text-center">
                    <h2 className="text-2xl font-bold mb-4">🔥 Producto del día</h2>
                    <div className="bg-gray-100 p-6 rounded-xl shadow inline-block">
                        <img src="/portatil.png" alt="Producto del día" className="h-28 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">Portátil ASUS Zen</h3>
                        <p className="text-sm text-gray-700 mb-2">30% de descuento solo por hoy</p>
                        <Link href={route('products')} className="text-blue-600 hover:underline text-sm">Ver más</Link>
                    </div>
                </section>

                {/* Categorías */}
                <section className="py-16 px-6 bg-white text-center animate-slide-up">
                    <h2 className="text-3xl font-bold mb-8">Explora por Categoría</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[{ name: 'Portátiles', icon: '/portatil.png' }, 
                            { name: 'Auriculares Gaming', icon: '/cascos/cascos1.webp' }, 
                            { name: 'Pantallas', icon: '/panatalla/panatalla2.webp' }, 
                            { name: 'Ratones', icon: '/raton/raton1.webp' },
                            { name: 'Teclado', icon: ['/teclados/teclado1.png'] },
                            { name: 'Tablet', icon: ['/tablet/tabl1.webp'] },
                            { name: 'Base Refri', icon: ['/refri/base-refri1.webp'] },
                            { name: 'Móvil', icon: ['/moviles/mo1.webp'] },
                            { name: 'Auriculares', icon: ['/auriculares/auri1.webp'] },
                            { name: 'Cargadores', icon: ['/cargador/cargador1.webp'] },
                            { name: 'Baterias', icon: ['/bateria/bateria1.webp'] },


                        ].map((cat, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition text-center">
                                <img src={cat.icon} alt={cat.name} className="h-20 mx-auto mb-4 object-contain" />
                                <h3 className="font-semibold">{cat.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Opiniones */}
                <section className="bg-gray-100 py-16 px-6 animate-fade-in">
                    <h2 className="text-3xl font-bold text-center mb-8">Lo que opinan nuestros clientes</h2>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-left">
                        {["Entrega rápida y productos de alta calidad. ¡Volveré a comprar!", "Me encantó el diseño de la tienda y la atención al cliente. Muy recomendable.", "Los mejores precios del mercado. El portátil llegó en perfectas condiciones."].map((text, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow">
                                <p>"{text}"</p>
                                <p className="mt-2 text-sm text-gray-500">- Cliente</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Blog Tips */}
                <section className="bg-white py-16 px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Consejos y Guías</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
                        {["Cómo elegir el portátil perfecto", "Guía para configurar tu espacio de trabajo en casa"].map((tip, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                                <h3 className="text-xl font-semibold mb-2">{tip}</h3>
                                <p className="text-gray-600 text-sm">Explora consejos prácticos para mejorar tu experiencia tecnológica diaria.</p>
                            </div>
                        ))}
                    </div>
                </section>

               
                <footer className="mt-12 px-4 sm:px-6 lg:px-12 xl:px-24 text-black w-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                        <div className="flex items-center gap-4">
                            <img src="/logo.png" alt="Logo Nefelibata" className="h-10 w-auto" />
                            <div>
                                <h2 className="text-lg font-semibold">NEFELIBATA</h2>
                                <p className="text-sm">info@nefelibata.com</p>
                                <p className="text-sm">+34 123 458 789</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="/logos1.png" alt="Redes" className="h-20 w-auto" />
                        </div>
                    </div>
                </footer>
            </AuthenticatedLayout>
        </div>
    );
}
