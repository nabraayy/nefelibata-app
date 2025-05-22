import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Dashboard() {
    const user = usePage().props.auth.user;
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(!darkMode);
    const [showFlash, setShowFlash] = useState(true);
    const MySwal = withReactContent(Swal);

    // Cierra el popup automáticamente después de 1 hora
    useEffect(() => {
        const timeout = setTimeout(() => setShowFlash(false), 3600 * 1000);
        return () => clearTimeout(timeout);
    }, []);
    const particlesInit = async (main) => {
    await loadFull(main);
    };
    const handleProductDetails = () => {
  MySwal.fire({
    title: 'Portátil ASUS Zen',
    html: `
      <p style="font-size: 16px; color: #444;">30% de descuento solo por hoy</p>
      <img src="/portatil.png" alt="Producto" style="max-width: 100%; height: auto; margin-top: 15px;" />
      <p style="margin-top: 10px;">Procesador Intel i7, 16GB RAM, 512GB SSD.<br/>
      Ideal para productividad y diseño.</p>
    `,
    confirmButtonText: 'Ver más productos',
    confirmButtonColor: '#4f46e5',
    customClass: {
      popup: 'rounded-xl shadow-lg',
      confirmButton: 'px-6 py-2 font-semibold',
    },
  }).then(() => {
    window.location.href = route('products');
  });
};
    return (
        <div className={darkMode ? 'dark' : ''}>
            <AuthenticatedLayout>
                <Head title="Inicio" />

               

                <section
                className="w-full h-[90vh] bg-cover bg-center relative flex items-center justify-center text-white px-6 overflow-hidden"
                style={{ backgroundImage: "url('/nube4.png')" }}
                >
                
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    className="absolute inset-0 z-0"
                    options={{
                    background: { color: { value: 'transparent' } },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                        onHover: { enable: true, mode: 'repulse' },
                        resize: true
                        },
                        modes: { repulse: { distance: 80, duration: 0.4 } }
                    },
                    particles: {
                        color: { value: '#e4d4c8' },
                        links: {
                        enable: true,
                        distance: 120,
                        color: '#a47551',
                        opacity: 0.2,
                        width: 1
                        },
                        move: {
                        enable: true,
                        speed: 0.6,
                        direction: 'none',
                        outModes: { default: 'bounce' }
                        },
                        number: { value: 30, density: { enable: true, area: 800 } },
                        opacity: { value: 0.15 },
                        shape: { type: 'circle' },
                        size: { value: { min: 1, max: 3 } }
                    },
                    detectRetina: true
                    }}
                />

                
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-20 text-center max-w-3xl"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Tecnología que impulsa{' '}
                    <span className="text-indigo-400">
                        <Typewriter
                        words={['tus ideas', 'la innovación', 'tu negocio', 'la creatividad']}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                        />
                    </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-200 mb-8">
                    Descubre nuestros productos exclusivos al mejor precio.
                    </p>

                    <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    >
                    <PrimaryButton href={route('products')} className="text-lg px-8 py-4">
                    ¡Explora la tienda!
                    </PrimaryButton>


                    </motion.div>
                </motion.div>
                </section>
                
{/* Ofertas exclusivas */}
                <section className="py-20 px-6 bg-white text-center relative overflow-hidden">
    
                    <img
                        src="/nube4.png"
                        alt="Decoración"
                        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
                    />

                    
                    <div className="relative z-10 max-w-2xl mx-auto animate-fade-in-up transform transition duration-500 hover:scale-100 scale-95">
                        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">🎉 ¡OFERTAS EXCLUSIVAS DE ESTA SEMANA!</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Hasta un <span className="text-red-600 font-semibold">40% de descuento</span> en productos seleccionados.
                        </p>
                        <PrimaryButton href={route('products')} className="text-lg px-8 py-4">
                        Ver ofertas ahora
                        </PrimaryButton>

                    </div>
                </section>


{/* Producto del día */}
        <section className="py-16 px-6 bg-white text-center relative overflow-hidden" style={{ backgroundImage: "url('/nubes2.png')" }}>
            <div className="animate-fade-in-up max-w-md mx-auto bg-gray-100 p-8 rounded-2xl shadow-xl transition-transform hover:scale-105 duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🔥 Producto del día</h2>
            <img src="/portatil.png" alt="Producto del día" className="h-32 mx-auto mb-4 object-contain" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Portátil ASUS Zen</h3>
            <p className="text-gray-600 text-sm mb-6">30% de descuento solo por hoy</p>
            <PrimaryButton onClick={handleProductDetails} className="text-lg px-8 py-4">
            Ver más
            </PrimaryButton>

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
            <Link key={index} href={route('products')}>
                <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-6 cursor-pointer group">
                <div className="flex justify-center mb-4">
                    <img
                    src={cat.icon}
                    alt={cat.name}
                    className="h-20 w-20 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <h3 className="text-md font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {cat.name}
                </h3>
                </div>
            </Link>
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


        <footer className="mt-12 text-white w-full bg-cover bg-center"style={{ backgroundImage: "url('/nube4.png')" }}>
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
{/* Oferta Flash */}
            {showFlash && (
                <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-fade-in-up">
                    <Link
                        href={route('products')}
                        className="block bg-white/90 backdrop-blur border border-blue-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 group"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-lg font-bold text-blue-700 group-hover:text-blue-800 transition-colors">
                                    ⚡ Oferta Flash en portátiles
                                </h2>
                                <Countdown
                                    date={Date.now() + 3600 * 1000}
                                    renderer={({ hours, minutes, seconds }) => (
                                        <p className="text-sm font-semibold text-gray-800 mt-1">
                                            Finaliza en: <span className="text-blue-600">{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
                                        </p>
                                    )}
                                />
                            </div>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowFlash(false);
                                }}
                                className="text-gray-400 hover:text-gray-600 transition ml-3 text-xl leading-none"
                                aria-label="Cerrar oferta"
                            >
                                ×
                            </button>
                        </div>
                    </Link>
                </div>
            )}


            </AuthenticatedLayout>
        </div>
    );
}
