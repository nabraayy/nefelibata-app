import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function AdminDashboard() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Panel de Administración - {user.name}
                </h2>
            }
        >
            <Head title="Panel Administración" >
            <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
            </Head>


            <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
               

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h2 className="text-xl font-semibold">$1.200</h2>
                        <p className="text-gray-500">Ventas Totales</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h2 className="text-xl font-semibold">45</h2>
                        <p className="text-gray-500">Pedidos</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h2 className="text-xl font-semibold">32</h2>
                        <p className="text-gray-500">Productos</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h2 className="text-xl font-semibold">78</h2>
                        <p className="text-gray-500">Usuarios</p>
                    </div>
                </div>

                {/* Recent Orders + Inventory */}
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
                                {[
                                    { id: 1001, name: "John Smith", date: "Hoy", status: "Completed" },
                                    { id: 1002, name: "Alice Johnson", date: "Ayer", status: "Pending" },
                                    { id: 1003, name: "Michael Brown", date: "22 Abril 2024", status: "Processing" },
                                    { id: 1004, name: "Emily White", date: "21 Abril 2024", status: "Processing" },
                                    { id: 1005, name: "David Wilson", date: "20 Abril 2024", status: "Processing" },
                                ].map((order) => (
                                    <tr key={order.id} className="border-t">
                                        <td>{order.id}</td>
                                        <td>{order.name}</td>
                                        <td>{order.date}</td>
                                        <td>
                                            <span className={`px-2 py-1 text-xs rounded-full ${
                                                order.status === "Completed"
                                                    ? "bg-green-100 text-green-800"
                                                    : order.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-800"
                                                    : "bg-blue-100 text-blue-800"
                                            }`}>
                                                {order.status}
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

                {/* Manage Products */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-lg font-bold mb-4">Gestión de Productos</h3>
                    <div className="flex flex-wrap gap-4">
                        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">➕ Añadir</button>
                        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">✏️ Editar</button>
                        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">🗑️ Eliminar</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
