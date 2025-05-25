import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import React from 'react';

export default function OrderShow() {
    const { order } = usePage().props;

    const getStatusClasses = (status) => {
        switch (status) {
            case 'pendiente': return 'bg-[#F5EFEB] text-[#2F4156]';
            case 'pagada': return 'bg-green-500 text-white';
            case 'enviada': return 'bg-[#567C8D] text-white';
            default: return 'bg-gray-300 text-gray-800';
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold text-[#2F4156]">
                    Detalle del pedido #{order.id}
                </h2>
            }
        >
            <Head title={`Pedido #${order.id}`} />

            <div className="min-h-screen bg-[#F5EFEB] px-6 py-12">
                <div className="max-w-4xl mx-auto bg-white border border-[#C8D9E6] rounded-2xl shadow-xl p-8 space-y-8">

                    {/* Cliente */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#2F4156] mb-3">Información del cliente</h3>
                        <div className="space-y-1 text-[#567C8D]">
                            <p><strong>Nombre:</strong> {order.user?.name}</p>
                            <p><strong>Email:</strong> {order.user?.email}</p>
                        </div>
                    </div>

                    {/* Pedido */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#2F4156] mb-3">📦 Detalles del pedido</h3>
                        <div className="space-y-2 text-[#567C8D]">
                            <p><strong>Método de pago:</strong> {order.payment_method}</p>
                            <p className="flex items-center gap-2">
                                <strong>Estado:</strong>
                                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusClasses(order.status)}`}>
                                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                </span>
                            </p>
                            <p><strong>Total:</strong> {Number(order.total).toFixed(2)} €</p>
                        </div>
                    </div>

                    {/* Productos */}
                    <div>
                        <h3 className="text-lg font-semibold text-[#2F4156] mb-4">🛒 Productos incluidos</h3>
                        <div className="overflow-x-auto rounded-xl border border-[#C8D9E6]">
                            <table className="min-w-full text-sm text-[#2F4156]">
                                <thead className="bg-[#C8D9E6] text-left">
                                    <tr>
                                        <th className="px-4 py-3">Producto</th>
                                        <th className="px-4 py-3">Cantidad</th>
                                        <th className="px-4 py-3">Precio</th>
                                        <th className="px-4 py-3">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-[#F5EFEB]">
                                    {order.items.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-4 py-3">{item.product_name}</td>
                                            <td className="px-4 py-3">{item.quantity}</td>
                                            <td className="px-4 py-3">{Number(item.price).toFixed(2)} €</td>
                                            <td className="px-4 py-3">{(item.quantity * item.price).toFixed(2)} €</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
