import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import React from 'react';

export default function OrderShow() {
    const { order } = usePage().props;

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Detalle del pedido #{order.id}</h2>}>
            <Head title={`Pedido #${order.id}`} />

            <div className="min-h-screen bg-gray-100 px-6 py-10">
                <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8 space-y-6">
                    
                    {/* Información del cliente */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Información del cliente</h3>
                        <p><strong>Nombre:</strong> {order.user?.name}</p>
                        <p><strong>Email:</strong> {order.user?.email}</p>
                    </div>

                    {/* Datos del pedido */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Datos del pedido</h3>
                        <p><strong>Método de pago:</strong> {order.payment_method}</p>
                        <p><strong>Estado:</strong> 
                            <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${
                                order.status === 'pendiente' ? 'bg-gray-300 text-gray-800' :
                                order.status === 'pagada' ? 'bg-green-400 text-white' :
                                'bg-blue-400 text-white'
                            }`}>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                        </p>
                        <p><strong>Total:</strong> {Number(order.total).toFixed(2)} €</p>
                    </div>

                    {/* Productos del pedido */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Productos</h3>
                        <table className="w-full text-sm border divide-y divide-gray-200">
                            <thead className="bg-gray-100 text-left text-gray-600">
                                <tr>
                                    <th className="px-4 py-2">Producto</th>
                                    <th className="px-4 py-2">Cantidad</th>
                                    <th className="px-4 py-2">Precio</th>
                                    <th className="px-4 py-2">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.items.map(item => (
                                    <tr key={item.id} className="border-t">
                                        <td className="px-4 py-2">{item.product_name}</td>
                                        <td className="px-4 py-2">{item.quantity}</td>
                                        <td className="px-4 py-2">{Number(item.price).toFixed(2)} €</td>
                                        <td className="px-4 py-2">{(item.quantity * item.price).toFixed(2)} €</td>
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
