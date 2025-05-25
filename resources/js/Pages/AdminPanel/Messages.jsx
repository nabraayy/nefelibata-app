import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import React from 'react';
import Footer from "@/Components/Footer";

export default function AdminMessages() {
    const { auth } = usePage().props;
    const user = auth.user;

    // Mensajes simulados
    const messages = [
        { id: 1, name: "Laura Pérez", email: "laura@example.com", message: "Hola, estoy interesada en vuestro servicio." },
        { id: 2, name: "Carlos Ruiz", email: "carlos@example.com", message: "¿Puedo personalizar mis productos?" },
        { id: 3, name: "Marta López", email: "marta@example.com", message: "Gracias por la atención al cliente, muy buen trato." },
    ];

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between px-4 py-4 bg-white/80 border-b border-[#C8D9E6] rounded-t-2xl shadow-sm backdrop-blur">
                    <h2 className="text-2xl font-bold text-[#2F4156]">📨 Mensajes Recibidos</h2>
                    <p className="text-sm text-[#567C8D]">Administrador: {user.name}</p>
                </div>
            }
        >
            <Head title="Mensajes" />

            <div className="min-h-screen bg-gradient-to-b from-[#F5EFEB] to-[#C8D9E6] px-6 py-12">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/90 backdrop-blur border border-[#C8D9E6] rounded-2xl shadow-md overflow-hidden">
                        <div className="p-6 border-b border-[#C8D9E6]">
                            <h3 className="text-xl font-bold text-[#2F4156]">📬 Bandeja de entrada</h3>
                        </div>

                        <div className="divide-y divide-[#F5EFEB]">
                            {messages.length > 0 ? (
                                messages.map((msg) => (
                                    <div key={msg.id} className="p-6 hover:bg-[#F5EFEB] transition-all">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="font-semibold text-[#2F4156]">{msg.name}</p>
                                            <span className="text-sm text-[#567C8D]">{msg.email}</span>
                                        </div>
                                        <p className="text-[#2F4156] text-sm">{msg.message}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="p-6 text-center text-[#567C8D]">
                                    No hay mensajes nuevos.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </AuthenticatedLayout>
    );
}
