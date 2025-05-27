import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { loadFull } from 'tsparticles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import PrimaryButton from '@/Components/PrimaryButton';
import Footer from "@/Components/Footer";
import ReviewForm from '@/Components/ReviewForm';


export default function Dashboard() {
    const user = usePage().props.auth.user;
    const [darkMode, setDarkMode] = useState(false);
    const [showProductPopup, setShowProductPopup] = useState(true);
    const { props } = usePage();
    const initialReviews = props.reviews || [];
    const [reviews, setReviews] = useState(props.reviews || []);

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
    window.location.href = route('offers'); // Redirige a la página de ofertas
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
                <section
                className="py-24 px-6 sm:px-10 lg:px-20 bg-[#F5EFEB] text-center relative overflow-hidden"
                data-aos="fade-up"
                >
                {/* Fondo decorativo sutil */}
                <img
                    src="/nube4.png"
                    alt="Decoración"
                    className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
                />

                {/* Contenido principal */}
                <div className="relative z-10 max-w-3xl mx-auto bg-white/90 backdrop-blur-lg border border-[#C8D9E6] rounded-3xl p-10 shadow-xl hover:scale-[1.01] transition-transform duration-300">
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#2F4156] tracking-tight">
                    ¡Ofertas exclusivas de esta semana!
                    </h2>

                    <p className="text-lg text-[#567C8D] mb-8 font-medium">
                    Aprovecha hasta un <span className="text-red-600 font-bold">40% de descuento</span> en productos seleccionados.
                    </p>

                    <PrimaryButton
                    href={route('offers')} // Puedes dejarlo así, sin la ruta .offers
                    className="text-lg px-8 py-4 shadow-md hover:shadow-lg transition bg-[#567C8D] hover:bg-[#2F4156]"
                    >
                    Ver ofertas ahora
                    </PrimaryButton>
                </div>
                </section>

{/* Categorías */}
        <section
        className="py-24 px-6 sm:px-10 lg:px-20 bg-[#F5EFEB] text-center relative overflow-hidden"
        data-aos="fade-up"
        >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-[#2F4156]">
            Explora por Categoría
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                <div className="bg-white/90 backdrop-blur-lg border border-[#C8D9E6] rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 p-6 cursor-pointer group">
                <div className="flex justify-center mb-4">
                    <img
                    src={cat.icon}
                    alt={cat.name}
                    className="h-20 w-20 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <h3 className="text-md font-semibold text-[#2F4156] group-hover:text-[#567C8D] transition-colors">
                    {cat.name}
                </h3>
                </div>
            </Link>
            ))}
        </div>
        </section>




{/* Opiniones */}
            <section className="bg-[#F5EFEB] py-24 px-6 relative overflow-hidden" style={{ backgroundImage: "url('/nube3.png')" }} data-aos="fade-up">
                <h2 className="text-4xl font-extrabold text-center text-[#2F4156] mb-12">
                    Opiniones de nuestros clientes
                </h2>

                {user && (
                <ReviewForm onNewReview={(review) => setReviews([review, ...reviews])} />
                )}


                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
                    {reviews?.length > 0 ? (
                        reviews.map((review, i) => (
                            <div key={review.id} className="bg-white/90 backdrop-blur border border-[#C8D9E6] p-6 rounded-3xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-lg text-[#2F4156]">{review.user.name}</h3>
                                    <div className="flex gap-1 text-yellow-400">
                                        {Array.from({ length: 5 }).map((_, j) => (
                                            <svg key={j} xmlns="http://www.w3.org/2000/svg" fill={j < review.rating ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.911c.969 0 1.371 1.24.588 1.81l-3.976 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.89a1 1 0 00-1.176 0l-3.976 2.89c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.976-2.89c-.783-.57-.38-1.81.588-1.81h4.911a1 1 0 00.95-.69l1.518-4.674z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-[#2F4156] italic">"{review.comment}"</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-[#2F4156] col-span-full">Aún no hay opiniones de usuarios.</p>
                    )}
                </div>
            </section>


         

<Footer />
       
{/* Oferta Flash */}
            {showFlash && (
            <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-fade-in-up">
                <div
                className="bg-[#FFFFFF] border border-[#C8D9E6] rounded-2xl shadow-xl p-5 backdrop-blur-md transition-all duration-300 hover:shadow-2xl"
                >
                <div className="flex justify-between items-start">
                    <div>
                    <h2 className="text-lg font-bold text-[#2F4156] mb-1">
                        ⚡ Oferta Flash en portátiles
                    </h2>
                    <p className="text-sm text-[#567C8D] font-medium mb-1">
                        ¡Hasta un 30% de descuento solo por hoy!
                    </p>
                    <Countdown
                        date={Date.now() + 3600 * 1000}
                        renderer={({ hours, minutes, seconds }) => (
                        <p className="text-sm text-[#2F4156] font-semibold">
                            Finaliza en:{" "}
                            <span className="text-[#567C8D]">
                            {hours.toString().padStart(2, '0')}:
                            {minutes.toString().padStart(2, '0')}:
                            {seconds.toString().padStart(2, '0')}
                            </span>
                        </p>
                        )}
                    />
                    </div>
                    <button
                    onClick={(e) => {
                        e.preventDefault();
                        setShowFlash(false);
                    }}
                    className="text-[#567C8D] hover:text-[#2F4156] transition ml-3 text-xl leading-none font-bold"
                    aria-label="Cerrar oferta"
                    >
                    ×
                    </button>
                </div>

                <Link
                    href={route('offers')}
                    className="block mt-4 text-center font-medium text-white bg-[#567C8D] hover:bg-[#2F4156] rounded-lg px-6 py-2 transition-all"
                >
                    Ver ofertas
                </Link>
                </div>
            </div>
            )}
{/* Producto del día */}            
            {showProductPopup && (
            <div className="fixed bottom-6 left-6 z-50 w-full max-w-sm animate-fade-in-up">
                <div className="relative bg-white/90 backdrop-blur-lg border border-[#C8D9E6] p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                {/* Botón de cerrar */}
                <button
                    onClick={() => setShowProductPopup(false)}
                    className="absolute top-2 right-3 text-[#567C8D] hover:text-[#2F4156] text-xl font-bold"
                    aria-label="Cerrar popup"
                >
                    ×
                </button>

                {/* Contenido */}
                <h2 className="text-2xl font-extrabold text-[#2F4156] mb-4">
                    🔥 Producto del día
                </h2>

                <img
                    src="/portatil.png"
                    alt="Producto del día"
                    className="h-32 mx-auto mb-4 object-contain"
                />

                <h3 className="text-lg font-semibold text-[#567C8D] mb-1">
                    Portátil ASUS Zen
                </h3>

                <p className="text-sm text-[#2F4156] mb-4">
                    <span className="text-[#D9534F] font-bold">30% de descuento</span> solo por hoy
                </p>

                <PrimaryButton
                    onClick={handleProductDetails}
                    className="text-sm px-6 py-3 bg-[#567C8D] hover:bg-[#2F4156] transition"
                >
                    Ver más
                </PrimaryButton>
                </div>
            </div>
            )}




            </AuthenticatedLayout>
        </div>
    );
}
