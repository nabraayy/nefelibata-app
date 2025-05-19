import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import React, { useState } from 'react';

export default function AdminOrders() {
    const { auth, orders } = usePage().props;
    const user = auth.user;

    const [search, setSearch] = useState('');

    const handleStatusChange = (orderId, newStatus) => {
        router.post(route('admin.orders.updateStatus', { order: orderId }), {
            status: newStatus,
        });
    };

    const filteredOrders = orders.filter(order => {
        const searchTerm = search.toLowerCase();
        return (
            order.user?.name.toLowerCase().includes(searchTerm) ||
            String(order.id).includes(searchTerm)
        );
    });

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Pedidos</h2>}>
            <Head title="Pedidos" />

            <div className="min-h-screen bg-gray-50 px-6 py-10">
                <div className="max-w-7xl mx-auto mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            placeholder="Buscar por nombre o #pedido"
                            className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Tabla de pedidos */}
                    <div className="bg-white shadow rounded-xl overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 font-medium text-gray-600"># Pedido</th>
                                    <th className="px-6 py-3 font-medium text-gray-600">Cliente</th>
                                    <th className="px-6 py-3 font-medium text-gray-600">Importe</th>
                                    <th className="px-6 py-3 font-medium text-gray-600">Método</th>
                                    <th className="px-6 py-3 font-medium text-gray-600">Estado</th>
                                    <th className="px-6 py-3 font-medium text-gray-600">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredOrders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="px-6 py-4 font-medium text-gray-800">#{order.id}</td>
                                        <td className="px-6 py-4">{order.user?.name || 'Sin nombre'}</td>
                                        <td className="px-6 py-4">{Number(order.total).toFixed(2)} €</td>
                                        <td className="px-6 py-4">{order.payment_method}</td>
                                        <td className="px-6 py-4 space-x-2">
                                            {['pendiente', 'pagada', 'enviada'].map((statusOption) => {
                                                const isActive = order.status === statusOption;
                                                const baseClasses = 'text-xs px-3 py-1 rounded-full font-semibold transition duration-200';

                                                const style = {
                                                    pendiente: isActive ? 'bg-gray-300 text-gray-900' : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                                                    pagada: isActive ? 'bg-green-400 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200',
                                                    enviada: isActive ? 'bg-blue-400 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200',
                                                }[statusOption];

                                                return (
                                                    <button
                                                        key={statusOption}
                                                        disabled={isActive}
                                                        onClick={() => handleStatusChange(order.id, statusOption)}
                                                        className={`${baseClasses} ${style} ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                                                    >
                                                        {statusOption.charAt(0).toUpperCase() + statusOption.slice(1)}
                                                    </button>
                                                );
                                            })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => router.get(route('admin.orders.show', { order: order.id }))}
                                                className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
                                            >
                                                Ver
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {filteredOrders.length === 0 && (
                                    <tr>
                                        <td className="px-6 py-4 text-center text-gray-500" colSpan="5">
                                            No se encontraron pedidos.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
