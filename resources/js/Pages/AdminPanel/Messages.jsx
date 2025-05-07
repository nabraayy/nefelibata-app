import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import React from 'react';

export default function AdminMessages() {
    const { auth } = usePage().props;
    const user = auth.user;

    // Simulación de mensajes (reemplazar por props si los cargas del backend)
    const messages = [
        { id: 1, name: "Laura Pérez", email: "laura@example.com", message: "Hola, estoy interesada en vuestro servicio." },
        { id: 2, name: "Carlos Ruiz", email: "carlos@example.com", message: "¿Puedo personalizar mis productos?" },
        { id: 3, name: "Marta López", email: "marta@example.com", message: "Gracias por la atención al cliente, muy buen trato." },
    ];

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Mensajes</h2>}
        >
            <Head title="Mensajes" />

            <div className="min-h-screen bg-gray-50 px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white shadow rounded-xl overflow-hidden">
                        <div className="p-6 border-b">
                            <h3 className="text-lg font-bold text-gray-800">Mensajes recibidos</h3>
                        </div>

                        <div className="divide-y">
                            {messages.map((msg) => (
                                <div key={msg.id} className="p-6 hover:bg-gray-50 transition">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="font-semibold text-gray-800">{msg.name}</p>
                                        <span className="text-sm text-gray-500">{msg.email}</span>
                                    </div>
                                    <p className="text-gray-700">{msg.message}</p>
                                </div>
                            ))}
                        </div>

                        {messages.length === 0 && (
                            <div className="p-6 text-center text-gray-500">
                                No hay mensajes nuevos.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
