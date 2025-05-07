import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import React from 'react';

export default function AdminOrders() {
    const { auth } = usePage().props;
    const user = auth.user;

    // Simulación de pedidos (sustituir por props si se cargan desde backend)
    const orders = [
        { id: 1001, customer: "John Doe", amount: 123.00, status: "Pending" },
        { id: 1002, customer: "Jane Smith", amount: 79.00, status: "Completed" },
        { id: 1003, customer: "Michael Brown", amount: 189.00, status: "Pending" },
        { id: 1004, customer: "Emily Wilson", amount: 99.00, status: "Processing" },
    ];

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Pedidos</h2>}
        >
            <Head title="Pedidos" />

            <div className="min-h-screen bg-gray-50 px-6 py-10">
                <div className="max-w-7xl mx-auto mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            placeholder="Buscar pedidos"
                            className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {user.role === 'admin' && (
                            <button
                                className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                                onClick={() => alert("Redirigir a crear pedido")}
                            >
                                 Añadir pedido
                            </button>
                        )}
                    </div>

                    {/* Tabla de pedidos */}
                    <div className="bg-white shadow rounded-xl overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 font-medium text-gray-600">Pedido</th>
                                    <th className="px-6 py-3 font-medium text-gray-600">Cliente</th>
                                    <th className="px-6 py-3 font-medium text-gray-600">Importe</th>
                                    <th className="px-6 py-3 font-medium text-gray-600">Estado</th>
                                    <th className="px-6 py-3 font-medium text-gray-600">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="px-6 py-4 font-medium text-gray-800">#{order.id}</td>
                                        <td className="px-6 py-4">{order.customer}</td>
                                        <td className="px-6 py-4">${order.amount.toFixed(2)}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs px-2 py-1 rounded-full font-semibold 
                                                ${order.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                                                    order.status === "Completed" ? "bg-green-100 text-green-800" :
                                                    "bg-blue-100 text-blue-800"}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 space-x-2">
                                            <button className="px-3 py-1 border rounded text-sm hover:bg-gray-100">
                                                Ver
                                            </button>
                                            <button className="px-3 py-1 border rounded text-sm text-red-600 hover:bg-red-50">
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
