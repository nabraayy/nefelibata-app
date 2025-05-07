import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

export default function OrderConfirmed() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pedido confirmado
                </h2>
            }
        >
            <Head title="Order Confirmed" />

            <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
                <div className="bg-white border rounded-2xl shadow p-10 text-center">
                    <div className="text-green-600 text-5xl mb-4">✔️</div>
                    <h1 className="text-2xl font-bold mb-2">Order confirmed</h1>
                    <p className="text-gray-600">Thank you for your purchase!</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
