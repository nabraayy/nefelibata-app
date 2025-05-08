import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Contact() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout>
            <Head title="Contacto" />
            <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex items-center justify-center px-6 py-12">
                <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl p-10 w-full max-w-5xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Contacta con nosotros</h2>
                    <p className="text-gray-600 mb-10 text-center">¿Tienes alguna duda? Envíanos un mensaje.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Formulario */}
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Nombre</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Asunto</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Mensaje</label>
                                <textarea rows="5" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 w-full">
                                Enviar
                            </button>
                        </form>

                        {/* Información de contacto */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold">Información de contacto</h3>
                            <div className="text-gray-700 space-y-4">
                                <p>📍 123 Calle Ejemplo, Ciudad, País</p>
                                <p>✉️ info@nefelibata.com</p>
                                <p>📞 +123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
