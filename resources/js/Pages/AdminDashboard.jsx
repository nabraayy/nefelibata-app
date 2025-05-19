import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function AdminDashboard() {
    const { auth, totalSales, orders, products, users, recentOrders } = usePage().props;
    const user = auth.user;

    const getStatusClass = (status) => {
        switch (status) {
            case 'pagada': return 'bg-green-100 text-green-800';
            case 'pendiente': return 'bg-gray-200 text-gray-800';
            case 'enviada': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Panel de Administración - {user.name}
            </h2>
        }>
            <Head title="Panel Administración">
                <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
            </Head>

            <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
                {/* Métricas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h2 className="text-xl font-semibold">{Number(totalSales).toFixed(2)} €</h2>
                        <p className="text-gray-500">Ventas Totales</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h2 className="text-xl font-semibold">{orders}</h2>
                        <p className="text-gray-500">Pedidos</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h2 className="text-xl font-semibold">{products}</h2>
                        <p className="text-gray-500">Productos</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h2 className="text-xl font-semibold">{users}</h2>
                        <p className="text-gray-500">Usuarios</p>
                    </div>
                </div>

                {/* Pedidos recientes e inventario */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-lg font-bold mb-4">Pedidos Recientes</h3>
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="text-gray-500">
                                    <th>ID</th>
                                    <th>Cliente</th>
                                    <th>Fecha</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentOrders.map(order => (
                                    <tr key={order.id} className="border-t">
                                        <td>#{order.id}</td>
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

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-lg font-bold mb-4">Resumen de Inventario</h3>
                        <div className="flex justify-center">
                            <img src="/chart-placeholder.png" alt="Gráfico de Inventario" className="w-48 h-48" />
                        </div>
                        <ul className="mt-4 space-y-1 text-sm">
                            <li><span className="inline-block w-3 h-3 bg-blue-700 mr-2 rounded-full"></span>En Stock</li>
                            <li><span className="inline-block w-3 h-3 bg-blue-400 mr-2 rounded-full"></span>Poco Stock</li>
                            <li><span className="inline-block w-3 h-3 bg-blue-200 mr-2 rounded-full"></span>Agotado</li>
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
