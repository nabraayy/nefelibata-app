import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Bienvenido">
                <link rel="icon" type="image/png" href="/logo.png" sizes='64x64' />
            </Head>

            
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] ">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">
                                <img
                                    src="/logo.png"
                                    alt="Logo Nefelibata"
                                    className="h-16 w-auto lg:h-20"
                                />
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>
                        <div className="text-black">
                        <header className="bg-cover bg-center text-black py-20"style={{ backgroundImage: "url('/nube4.png')" }}>
                            <div className="max-w-7xl mx-auto px-4 text-center">
                                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">IMPULSA TU NEGOCIO ONLINE 🌥️</h1>
                                <a
                                    href="{{ route('register') }}"
                                    className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition"
                                    >
                                        ¡Únete ahora!
                                    </a>
                                </div>
                        </header>
                        </div>
                        <section className=" py-16 text-black">
                            <div className="max-w-7xl mx-auto px-6 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre nosotros</h2>
                                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                                    En <span className="font-semibold">Nefelibata</span>, ayudamos a emprendedores y negocios a llevar su presencia online al siguiente nivel. 
                                    Nuestro equipo combina creatividad, estrategia y tecnología para ofrecer soluciones digitales efectivas y personalizadas.
                                </p>
                            </div>
                        </section>
                        <section className='text-black'>
                            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-center'>Nuestros servicios</h2>
                                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                                    
                                    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                                        <h3 className="text-xl font-semibold mb-2">🌟 Misión</h3>
                                        <p>Impulsar negocios mediante estrategias digitales que generan impacto real.</p>
                                    </div>
                                    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                                        <h3 className="text-xl font-semibold mb-2">💡 Visión</h3>
                                        <p>Ser líderes en innovación digital para empresas en crecimiento.</p>
                                    </div>
                                    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                                        <h3 className="text-xl font-semibold mb-2">🤝 Valores</h3>
                                        <p>Compromiso, creatividad, cercanía y excelencia en cada proyecto.</p>
                                    </div>
                                </div>
                            </section>
                        <section className="py-16">
                            <div className="max-w-7xl mx-auto px-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Galería</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {[
                                        '/productos.png',
                                        '/nubes2.png',
                                        '/nubes1.png',
                                        '/nube3.png',
                                        '/logo.png',
                                        '/logos1.png',
                                    ].map((src, i) => (
                                        <div key={i} className="overflow-hidden rounded-xl shadow-md group">
                                            <img
                                                src={src}
                                                alt={`Galería ${i + 1}`}
                                                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <section className=" py-16">
                            <div className="max-w-7xl mx-auto px-6 text-black">
                                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Dónde estamos</h2>
                                
                                <div className="grid md:grid-cols-2 gap-10 items-center">
                                    {/* Info de contacto */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Nuestra Oficina</h3>
                                        <p className="mb-2">Calle Ejemplo 123</p>
                                        <p className="mb-2">28000, Madrid, España</p>
                                        <p className="mb-2">Tel: +34 123 456 789</p>
                                        <p>Email: contacto@nefelibata.com</p>
                                    </div>

                                    {/* Mapa de Google */}
                                    <div className="rounded-xl overflow-hidden shadow-lg">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.6186032227894!2d-3.703790684846052!3d40.416775979364376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422887627ec4f5%3A0x4a2d82a96d90c787!2sMadrid!5e0!3m2!1ses!2ses!4v1615480707821!5m2!1ses!2ses"
                                            width="100%"
                                            height="300"
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </section>




                        
                        

                        <footer className="w-full py-10 px-6 text-black ">
                            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                                {/* Logo y contacto */}
                                <div className="flex items-center gap-4">
                                    <img src="/logo.png" alt="Logo Nefelibata" className="h-10 w-auto" />
                                    <div>
                                        <h2 className="text-lg font-semibold">NEFELIBATA</h2>
                                        <p className="text-sm">info@nefelibata.com</p>
                                        <p className="text-sm">+34 123 458 789</p>
                                    </div>
                                </div>

                                {/* Redes sociales */}
                                <div className="flex items-center gap-4">
                                    <img src='/logos1.png' alt='Logos Redes' className='h-20 w-auto' />
                                </div>
                            </div>
                        </footer>


                    </div>
                </div>
            </div>
        </>
    );
}
