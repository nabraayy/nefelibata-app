import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import Footer from "@/Components/Footer";

export default function AdminOrders() {
    const { auth, orders } = usePage().props;
    const user = auth.user;

    const [search, setSearch] = useState('');

    const handleStatusChange = (orderId, newStatus) => {
        router.post(route('admin.orders.updateStatus', { order: orderId }), { status: newStatus });
    };

    const filteredOrders = orders.filter(order => {
        const searchTerm = search.toLowerCase();
        return (
            order.user?.name.toLowerCase().includes(searchTerm) ||
            String(order.id).includes(searchTerm)
        );
    });

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center px-6 py-4 bg-[#2F4156] rounded-t-2xl shadow text-white">
                    <h2 className="text-xl font-bold">📦 Pedidos - Admin {user.name}</h2>
                </div>
            }
        >
            <Head title="Pedidos" />

            <div className="min-h-screen bg-[#F5EFEB] px-6 py-12">
                <div className="max-w-7xl mx-auto space-y-8">
                    {/* Buscador */}
                    <div className="flex justify-between items-center">
                        <input
                            type="text"
                            placeholder="Buscar por nombre o #pedido"
                            className="w-full md:w-1/2 border border-[#C8D9E6] bg-white px-4 py-3 rounded-lg shadow-sm focus:ring-2 focus:ring-[#567C8D] transition"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Tabla */}
                    <div className="overflow-x-auto bg-white border border-[#C8D9E6] rounded-xl shadow-lg">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-[#C8D9E6] text-[#2F4156]">
                                <tr>
                                    <th className="px-6 py-4 font-semibold"># Pedido</th>
                                    <th className="px-6 py-4 font-semibold">Cliente</th>
                                    <th className="px-6 py-4 font-semibold">Importe</th>
                                    <th className="px-6 py-4 font-semibold">Método</th>
                                    <th className="px-6 py-4 font-semibold">Estado</th>
                                    <th className="px-6 py-4 font-semibold">Acción</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F5EFEB] text-[#2F4156]">
                                {filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-[#F5EFEB]/60 transition">
                                        <td className="px-6 py-4 font-semibold">#{order.id}</td>
                                        <td className="px-6 py-4">{order.user?.name || 'Sin nombre'}</td>
                                        <td className="px-6 py-4">{Number(order.total).toFixed(2)} €</td>
                                        <td className="px-6 py-4 capitalize">{order.payment_method}</td>
                                        <td className="px-6 py-4 space-x-1">
                                            {['pendiente', 'pagada', 'enviada'].map((statusOption) => {
                                                const isActive = order.status === statusOption;
                                                const base = 'text-xs px-3 py-1 rounded-full font-medium transition duration-200';

                                                const colorClasses = {
                                                    pendiente: isActive ? 'bg-[#F5EFEB] text-[#2F4156]' : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                                                    pagada: isActive ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200',
                                                    enviada: isActive ? 'bg-[#567C8D] text-white' : 'bg-[#C8D9E6] text-[#2F4156] hover:bg-[#b1c6d5]',
                                                };

                                                return (
                                                    <button
                                                        key={statusOption}
                                                        disabled={isActive}
                                                        onClick={() => handleStatusChange(order.id, statusOption)}
                                                        className={`${base} ${colorClasses[statusOption]} ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                                                    >
                                                        {statusOption.charAt(0).toUpperCase() + statusOption.slice(1)}
                                                    </button>
                                                );
                                            })}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => router.get(route('admin.orders.show', { order: order.id }))}
                                                className="text-sm bg-[#2F4156] text-white px-4 py-1 rounded-md hover:bg-[#1e3143] transition"
                                            >
                                                Ver
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {filteredOrders.length === 0 && (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-8 text-center text-[#567C8D] italic">
                                            No se encontraron pedidos.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />
        </AuthenticatedLayout>
    );
}
