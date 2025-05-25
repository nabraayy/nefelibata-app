import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import Footer from "@/Components/Footer";
import PrimaryButton from '@/Components/PrimaryButton';

export default function Contact() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout>
            <Head title="Contacto" />

            <div className="min-h-screen bg-gradient-to-b from-[#F5EFEB] to-[#C8D9E6] flex items-center justify-center px-6 py-20">
                <div className="bg-white/80 backdrop-blur-lg border border-[#C8D9E6] rounded-3xl shadow-2xl p-10 w-full max-w-6xl">
                    <h2 className="text-4xl font-bold text-[#2F4156] mb-3 text-center">
                        Contacta con nosotros
                    </h2>
                    <p className="text-[#567C8D] mb-10 text-center text-lg">
                        ¿Tienes alguna duda? Envíanos un mensaje y te responderemos pronto.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Formulario */}
                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-[#2F4156] mb-1">Nombre</label>
                                <input
                                    type="text"
                                    className="w-full border border-[#C8D9E6] rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#567C8D] transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#2F4156] mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-[#C8D9E6] rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#567C8D] transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#2F4156] mb-1">Asunto</label>
                                <input
                                    type="text"
                                    className="w-full border border-[#C8D9E6] rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#567C8D] transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#2F4156] mb-1">Mensaje</label>
                                <textarea
                                    rows="5"
                                    className="w-full border border-[#C8D9E6] rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#567C8D] transition resize-none"
                                ></textarea>
                            </div>
                            <PrimaryButton
                                type="submit"
                                className="bg-[#567C8D] hover:bg-[#2F4156] text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all w-full"
                            >
                                Enviar mensaje
                            </PrimaryButton>
                        </form>

                        {/* Información de contacto */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-[#2F4156]">Información de contacto</h3>
                            <div className="text-[#2F4156] space-y-4 text-md">
                                <p className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#567C8D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 00-5.657 0l-3.536 3.536a8 8 0 1011.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    123 Calle Ejemplo, Ciudad, País
                                </p>
                                <p className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#567C8D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-4 4m4-4l-4-4" />
                                    </svg>
                                    info@nefelibata.com
                                </p>
                                <p className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#567C8D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59a1 1 0 00.92.61h8.72a1 1 0 00.92-.61L21 5H5" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 17a2 2 0 11-4 0 2 2 0 014 0zM8 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    +123 456 7890
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </AuthenticatedLayout>
    );
}
