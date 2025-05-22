import { useEffect, useRef } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import TypeIt from 'typeit';

export default function Hero() {
    const typeRef = useRef(null);

    useEffect(() => {
        new TypeIt(typeRef.current, {
            strings: ['IMPULSA TU NEGOCIO ONLINE 🌥️', 'VENDE MÁS, LLEGA MÁS LEJOS 📈', 'CREA TU TIENDA DIGITAL 💻'],
            speed: 60,
            breakLines: false,
            deleteSpeed: 40,
            waitUntilVisible: true,
            loop: true,
        }).go();
    }, []);

    return (
        <section
            className="relative w-full bg-cover bg-center text-black py-40 text-center px-4 overflow-hidden"
            style={{ backgroundImage: "url('/nube4.png')" }}
            data-aos="fade-in"
        >
            {/* Parallax overlay */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

            <div className="relative max-w-4xl mx-auto z-10">
                <h1
                    className="text-3xl md:text-5xl font-extrabold mb-8 drop-shadow-sm"
                    data-aos="fade-up"
                >
                    <span ref={typeRef} />
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
    );
}
