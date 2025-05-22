import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Welcome({ auth }) {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);

    return (
        <>
            <Head title="Bienvenido">
                <link rel="icon" type="image/png" href="/logo.png" sizes="64x64" />
            </Head>

            <div className="min-h-screen flex flex-col" >

                {/* Header (igual que antes) */}
                <header className="w-full px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center border-b">
                    <div className="flex items-center space-x-3">
                        <img src="/logo.png" alt="Logo Nefelibata" className="h-20 w-auto" />
                    </div>
                    <nav className="flex space-x-4 mt-4 sm:mt-0">
                        {auth.user ? (
                            <Link href={route('dashboard')} className="text-gray-800 hover:text-indigo-600 transition">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-gray-800 hover:text-indigo-600 transition">
                                    Log in
                                </Link>
                                <Link href={route('register')} className="text-gray-800 hover:text-indigo-600 transition">
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Hero con burbujas */}
                <section
                    className="w-full h-[90vh] bg-cover bg-center relative flex items-center justify-center text-white px-6 overflow-hidden"
                    style={{ backgroundImage: "url('/nube4.png')" }}
                    data-aos="fade-in"
                >
                    {/* Overlay de fondo desenfocado */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

                    
                    {/* Burbujas animadas */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        {[...Array(25)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    backgroundColor: '#e4d4c8', // naranja sólido (opaco)
                                    width: `${Math.random() * 50 + 30}px`,
                                    height: `${Math.random() * 50 + 30}px`,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animation: `floatUp ${4 + Math.random() * 4}s ease-in infinite`,
                                }}
                            />
                        ))}
                    </div>



                    

                    {/* Contenido principal */}
                    <div className="relative max-w-4xl mx-auto z-10">
                        <h1
                            className="text-4xl  md:text-6xl font-extrabold mb-8 drop-shadow-sm"
                            data-aos="fade-up"
                        >
                            IMPULSA TU NEGOCIO ONLINE 
                        </h1>

                        <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className="flex justify-center"
                        >
                            <PrimaryButton className="animate-bounce px-8 py-4 text-lg rounded-full shadow-xl transition transform hover:scale-105 duration-300">
                                ¡Únete ahora!
                            </PrimaryButton>
                        </div>
                    </div>
                </section>
            
        
    



                {/* Sobre nosotros */}
                <section className="w-full px-4 sm:px-8 lg:px-20 py-20 bg-white text-black" data-aos="fade-up">
                    <div className="max-w-[1600px] mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Sobre Nosotros</h2>

                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-right">
                                <img
                                    src="/Nefelibata.png"
                                    alt="Sobre Nefelibata"
                                    className="w-full max-w-[500px] rounded-xl shadow-md object-cover"
                                />
                            </div>

                            <div className="w-full lg:w-1/2 space-y-6 text-left" data-aos="fade-left">
                                <p className="text-lg leading-relaxed">
                                    <strong>Nefelibata</strong> es más que una plataforma digital. Es una solución pensada para pequeñas empresas, negocios locales y autónomos que quieren dar el salto al mundo online sin complicaciones.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Con una interfaz intuitiva, herramientas completas de gestión de productos, pedidos y pagos, y sin necesidad de conocimientos técnicos, ofrecemos la libertad de tener una tienda propia con total control.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Basado en tecnologías como <strong>React, Next.js y Laravel</strong>, Nefelibata garantiza seguridad, velocidad y escalabilidad, integrando pasarelas como <strong>Stripe</strong> y <strong>PayPal</strong> para facilitar las ventas.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Aquí creemos en el valor de cada idea y en el poder de emprender con identidad. Por eso, desarrollamos un entorno flexible y personalizable para que cada tienda sea tan única como quien la crea.
                                </p>
                                <p className="text-lg font-medium text-indigo-600">
                                    En Nefelibata, soñamos contigo. ¿Empezamos?
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Servicios */}
                <section className="px-4 sm:px-6 lg:px-8 py-16 text-black w-full" data-aos="zoom-in-up" style={{ backgroundColor: '#1A3D5B' }}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">Nuestros servicios</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full" >
                        <div className="bg-gray-100 p-6 rounded-xl shadow" style={{ backgroundColor: '#f6eee0' }}>
                            <h3 className="text-xl font-semibold mb-2" >🌟 Misión</h3>
                            <p>Impulsar negocios mediante estrategias digitales que generan impacto real.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-xl shadow" style={{ backgroundColor: '#f6eee0' }}>
                            <h3 className="text-xl font-semibold mb-2">💡 Visión</h3>
                            <p>Ser líderes en innovación digital para empresas en crecimiento.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-xl shadow" style={{ backgroundColor: '#f6eee0' }}>
                            <h3 className="text-xl font-semibold mb-2">🤝 Valores</h3>
                            <p>Compromiso, creatividad, cercanía y excelencia en cada proyecto.</p>
                        </div>
                    </div>
                </section>

                {/* Galería */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 w-full" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">Galería</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                        {[
                            '/portatil.png',
                            '/raton/raton1.webp',
                            '/tablet/tabl1.webp',
                            '/teclados/teclado1.png',
                            '/panatalla/pantalla1.webp',
                            '/webcam/web-cam4.webp',
                        ].map((src, i) => (
                            <div key={i} className="rounded-xl overflow-hidden shadow-lg group bg-white">
                                <div className="relative w-full pb-[75%]">
                                    <img
                                        src={src}
                                        alt={`Galería ${i + 1}`}
                                        className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dónde estamos */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 text-black w-full" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Dónde estamos</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                        <div data-aos="fade-right">
                            <h3 className="text-xl font-semibold mb-4">Nuestra Oficina</h3>
                            <p className="mb-2">Calle Ejemplo 123</p>
                            <p className="mb-2">AD500, Andorra La Vella</p>
                            <p className="mb-2">Tel: +34 123 456 789</p>
                            <p>Email: info@nefelibata.com</p>
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-lg w-full h-[300px]" data-aos="fade-left">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.520918832216!2d1.518495376103824!3d42.50778682632568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bc5a3f89991c3d%3A0x405cf6cbac3db94!2sAndorra%20la%20Vella!5e0!3m2!1ses!2ses!4v1715107746327!5m2!1ses!2ses"
                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-12 text-white w-full bg-cover bg-center"style={{ backgroundColor: '#3081B5' }}>
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
                <div className="border-t border-white border-opacity-30 text-center py-4 text-xs text-white" style={{ backgroundColor: '#1A3D5B' }}>
                    © {new Date().getFullYear()} Nefelibata. Todos los derechos reservados.
                </div>
            </footer>
            </div>
            {/* Animación CSS personalizada */}
            <style>{`
                @keyframes floatUp {
                    0% {
                        transform: translateY(0) scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-100px) scale(1.2);
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateY(-200px) scale(1);
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    );
}
