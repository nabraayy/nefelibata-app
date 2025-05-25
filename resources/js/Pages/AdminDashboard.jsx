import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from "@/Components/Footer";

export default function AdminDashboard() {
    const { auth, totalSales, orders, products, users, recentOrders } = usePage().props;
    const user = auth.user;

    const getStatusClass = (status) => {
        switch (status) {
            case 'pagada': return 'bg-green-100 text-green-700 border border-green-300';
            case 'pendiente': return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
            case 'enviada': return 'bg-blue-100 text-blue-700 border border-blue-300';
            default: return 'bg-gray-100 text-gray-700 border';
        }
    };

    return (
        <AuthenticatedLayout header={
            <div className="flex items-center justify-between px-4 py-4 bg-white/80 border-b border-[#C8D9E6] rounded-t-2xl shadow-sm backdrop-blur">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2F4156]">
                    Panel de Administración
                </h2>
                <p className="text-sm text-[#567C8D] font-medium hidden sm:block">
                    Bienvenido, <span className="text-[#2F4156] font-semibold">{user.name}</span>
                </p>
            </div>
        }>
            <Head title="Panel Administración">
                <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-[#F5EFEB] to-[#C8D9E6] p-8 text-[#2F4156]">
                {/* Métricas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: 'Ventas Totales', value: `${Number(totalSales).toFixed(2)} €` },
                        { label: 'Pedidos', value: orders },
                        { label: 'Productos', value: products },
                        { label: 'Usuarios', value: users }
                    ].map((metric, idx) => (
                        <div key={idx} className="bg-white/80 backdrop-blur border border-[#C8D9E6] p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold mb-1">{metric.value}</h2>
                            <p className="text-sm text-[#567C8D]">{metric.label}</p>
                        </div>
                    ))}
                </div>

                {/* Pedidos recientes e inventario */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Pedidos Recientes */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-6 border border-[#C8D9E6]">
                        <h3 className="text-xl font-semibold mb-4 text-[#2F4156]">📦 Pedidos Recientes</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr className="text-[#567C8D] font-medium">
                                        <th className="pb-2">ID</th>
                                        <th>Cliente</th>
                                        <th>Fecha</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentOrders.map(order => (
                                        <tr key={order.id} className="border-t border-[#E0E0E0]">
                                            <td className="py-2">#{order.id}</td>
                                            <td>{order.name}</td>
                                            <td>{order.date}</td>
                                            <td>
                                                <span className={`px-2 py-1 text-xs rounded-full ${getStatusClass(order.status)}`}>
                                                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Inventario */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-6 border border-[#C8D9E6]">
                        <h3 className="text-xl font-semibold mb-4 text-[#2F4156]">📊 Resumen de Inventario</h3>
                        <div className="flex justify-center mb-4">
                            <img src="/chart-placeholder.png" alt="Gráfico de Inventario" className="w-40 h-40 object-contain" />
                        </div>
                        <ul className="space-y-2 text-sm text-[#567C8D]">
                            <li><span className="inline-block w-3 h-3 bg-blue-700 rounded-full mr-2"></span>En Stock</li>
                            <li><span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>Poco Stock</li>
                            <li><span className="inline-block w-3 h-3 bg-red-300 rounded-full mr-2"></span>Agotado</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </AuthenticatedLayout>
    );
}
