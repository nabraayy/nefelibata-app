import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PrimaryButton from '@/Components/PrimaryButton';
import Footer from "@/Components/Footer";


export default function Welcome({ auth }) {
    useEffect(() => {
        AOS.init({ once: true, duration: 800 });
    }, []);
/*const { reviews } = usePage().props;*/

    return (
        <>
            <Head title="Bienvenido">
                <link rel="icon" type="image/png" href="/logo.png" sizes="64x64" />
            </Head>

            <div className="min-h-screen flex flex-col" >

                {/* Header  */}
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
                                    backgroundColor: '#e4d4c8', 
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
                            <PrimaryButton className="animate-bounce px-8 py-4 text-lg rounded-full shadow-xl transition transform hover:scale-105 duration-300" href={route('register')}>
                                ¡Únete ahora!
                            </PrimaryButton>
                        </div>
                    </div>
                </section>
            
        
    



                {/* Sobre nosotros */}
               <section
                className="w-full px-6 sm:px-10 lg:px-24 py-28"
                style={{ backgroundColor: "#FFFFFF" }}
                data-aos="fade-up"
                >
                <div className="max-w-[1600px] mx-auto">
                   
                    <div className="mb-20 text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 relative inline-block text-[#2F4156] after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#567C8D] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
                        Sobre Nosotros
                    </h2>
                    <p className="text-lg text-[#567C8D] mt-6 max-w-2xl mx-auto bg-[#C8D9E6] py-2 px-4 rounded-xl">
                        Soluciones digitales a tu medida, sin complicaciones, sin límites.
                    </p>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                    
                    <div className="w-full lg:w-1/2 space-y-6 text-[#2F4156]" data-aos="fade-left">
                        <p className="text-lg leading-relaxed">
                        <strong className="text-[#567C8D]">Nefelibata</strong> es una plataforma <strong>intuitiva, escalable y segura</strong> que permite crear tiendas online en minutos, sin conocimientos técnicos.
                        </p>
                        <p className="text-lg leading-relaxed">
                        Integra herramientas completas de gestión de productos, pedidos y pagos, en un entorno personalizable con <strong>control total</strong>.
                        </p>
                        <p className="text-lg leading-relaxed">
                        Desarrollada con <strong className="text-[#567C8D]">React, Next.js y Laravel</strong>, y con integración a <strong className="text-[#567C8D]">Stripe</strong> y <strong className="text-[#567C8D]">PayPal</strong>, garantizamos una experiencia rápida y segura.
                        </p>
                        <p className="text-lg leading-relaxed">
                        Creamos un ecosistema pensado para <strong>pequeños negocios, autónomos y proyectos emergentes</strong> que desean emprender online con identidad propia.
                        </p>
                        <p className="text-lg font-semibold text-[#567C8D] italic">
                        En Nefelibata, tú sueñas. Nosotros lo hacemos posible.
                        </p>
                    </div>

                    
                    <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-right">
                        <div className="relative group">
                        <img
                            src="/Nefelibata.png"
                            alt="Sobre Nefelibata"
                            className="w-full max-w-[500px] rounded-2xl shadow-xl object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-0 left-0 w-full h-full rounded-2xl ring-2 ring-[#C8D9E6] opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>


                {/* Servicios */}
               <section
                className="w-full px-6 sm:px-10 lg:px-20 py-24 text-white relative overflow-hidden"
                style={{ backgroundColor: '#2F4156' }}
                data-aos="zoom-in-up"
                >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-white relative inline-block after:content-[''] after:absolute after:w-20 after:h-1 after:bg-[#567C8D] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
                    Nuestros Servicios
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {/* Misión */}
                    <div
                        className="bg-[#F5EFEB] text-[#2F4156] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="text-4xl mb-4 text-[#567C8D] group-hover:scale-110 transition-transform duration-300">🌟</div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#567C8D] transition-colors">Misión</h3>
                        <p className="text-base leading-relaxed">
                        Impulsar negocios mediante <strong>estrategias digitales</strong> que generan impacto real.
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C8D9E6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </div>

                    {/* Visión */}
                    <div
                        className="bg-[#F5EFEB] text-[#2F4156] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="text-4xl mb-4 text-[#567C8D] group-hover:scale-110 transition-transform duration-300">💡</div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#567C8D] transition-colors">Visión</h3>
                        <p className="text-base leading-relaxed">
                        Ser líderes en <strong>innovación digital</strong> para empresas en crecimiento.
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C8D9E6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </div>

                    {/* Valores */}
                    <div
                        className="bg-[#F5EFEB] text-[#2F4156] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="text-4xl mb-4 text-[#567C8D] group-hover:scale-110 transition-transform duration-300">🤝</div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#567C8D] transition-colors">Valores</h3>
                        <p className="text-base leading-relaxed">
                        Compromiso, creatividad, cercanía y <strong>excelencia</strong> en cada proyecto.
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C8D9E6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </div>
                    </div>
                </div>
                </section>



                {/* Galería */}
             <section
                className="py-16 px-6 sm:px-10 lg:px-20"
                style={{ backgroundColor: "#F5EFEB" }}
                data-aos="fade-up"
                >
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 text-[#2F4156] relative inline-block after:content-[''] after:absolute after:w-20 after:h-1 after:bg-[#567C8D] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
                    Galería
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                    "/portatil.png",
                    "/raton/raton1.webp",
                    "/tablet/tabl1.webp",
                    "/teclados/teclado1.png",
                    "/panatalla/pantalla1.webp",
                    "/webcam/web-cam4.webp",
                    ].map((src, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl"
                    >
                        <div className="relative w-full aspect-[5/4]">
                        <img
                            src={src}
                            alt={`Galería ${i + 1}`}
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        </div>
                    </div>
                    ))}
                </div>
                </section>




{/* Vista previa de productos (para no registrados) */}
{!auth.user && (
  <section
    className="py-20 px-6 sm:px-10 lg:px-20 bg-white text-center"
    data-aos="fade-up"
  >
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-[#2F4156] relative inline-block after:content-[''] after:absolute after:w-20 after:h-1 after:bg-[#567C8D] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
      Explora nuestro catálogo
    </h2>
    <p className="text-lg text-[#567C8D] max-w-xl mx-auto mb-12">
      Echa un vistazo a algunos de nuestros productos destacados. Para conocer los precios y comprarlos, por favor regístrate o inicia sesión.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {[
        { name: 'Portátil ASUS', image: '/portatil.png' },
        { name: 'Raton Gaming', image: '/raton/raton1.webp' },
        { name: 'Tablet Android', image: '/tablet/tabl1.webp' },
        { name: 'Pantalla UltraWide', image: '/panatalla/panatalla2.webp' },
        { name: 'Auriculares Bluetooth', image: '/auriculares/auri1.webp' },
        { name: 'WebCam 4HD', image: '/webcam/web-cam1.webp' },
        { name: 'Móvil Apple', image: '/moviles/m1.webp' },
        { name: 'Cargador Rápido', image: '/cargador/cargador1.webp' },
      ].map((product, index) => (
        <div
          key={index}
          className="bg-white border border-[#C8D9E6] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-default group"
        >
          <div className="flex justify-center mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="h-24 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-md font-semibold text-[#2F4156]">{product.name}</h3>
          <p className="text-sm text-[#999] mt-1 italic">Inicia sesión para ver más</p>
        </div>
      ))}
    </div>

    <div className="mt-12">
      <Link
        href={route('login')}
        className="inline-block bg-[#567C8D] hover:bg-[#2F4156] text-white font-medium px-6 py-3 rounded-full shadow transition"
      >
        Ver precios e iniciar sesión
      </Link>
    </div>
  </section>
)}




                {/* Dónde estamos */}
                <section
                className="py-20 px-6 sm:px-10 lg:px-24 w-full"
                style={{ backgroundColor: "#F5EFEB" }}
                data-aos="fade-up"
              >
                
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-[#2F4156] relative inline-block after:content-[''] after:absolute after:w-24 after:h-1 after:bg-[#567C8D] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
                  Dónde estamos
                </h2>

               
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  
                  <div
                    className="bg-white p-8 rounded-2xl shadow-md border border-[#C8D9E6] text-[#2F4156] space-y-4"
                    data-aos="fade-right"
                  >
                    <h3 className="text-2xl font-bold text-[#567C8D] mb-6">Nuestra Oficina</h3>
                    <div className="space-y-2 text-lg">
                      <p>
                        <span className="font-semibold">Dirección:</span> Calle Andorrana 123
                      </p>
                      <p>AD500, Andorra La Vella</p>
                      <p>
                        <span className="font-semibold">Teléfono:</span>{" "}
                        <a href="tel:+34123456789" className="hover:text-[#567C8D] transition">
                          +34 123 456 789
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        <a
                          href="mailto:info@nefelibata.com"
                          className="underline hover:text-[#567C8D] transition"
                        >
                          info@nefelibata.com
                        </a>
                      </p>
                    </div>
                  </div>

    {/* Mapa */}
    <div
      className="rounded-2xl overflow-hidden shadow-lg border-4 border-[#C8D9E6] w-full h-[300px] md:h-[350px] lg:h-[400px]"
      data-aos="fade-left"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.520918832216!2d1.518495376103824!3d42.50778682632568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bc5a3f89991c3d%3A0x405cf6cbac3db94!2sAndorra%20la%20Vella!5e0!3m2!1ses!2ses!4v1715107746327!5m2!1ses!2ses"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  </div>
</section>



                {/* Footer */}
                <Footer />
            </div>
            
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
