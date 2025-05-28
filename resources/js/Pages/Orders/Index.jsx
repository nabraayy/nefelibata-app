import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import Swal from 'sweetalert2';


export default function OrdersIndex({ auth, orders }) {
    const statusColor = {
        pendiente: 'bg-yellow-100 text-yellow-800',
        pagada: 'bg-green-100 text-green-800',
        enviada: 'bg-blue-100 text-blue-800',
    };
const { flash } = usePage().props;

useEffect(() => {
    if (flash.status_updated) {
        Swal.fire({
            title: 'Estado actualizado',
            text: flash.status_updated,
            icon: 'info',
            confirmButtonText: 'Entendido',
            customClass: {
                popup: 'rounded-xl shadow-lg',
                title: 'text-xl font-bold text-[#2F4156]',
                htmlContainer: 'text-[#2F4156]',
                confirmButton: 'bg-[#2F4156] text-white px-4 py-2 rounded hover:bg-[#1e3143]',
            },
            buttonsStyling: false,
        });
    }
}, []);

    return (
        <AuthenticatedLayout
            header={<h2 className="text-3xl font-bold text-[#2F4156] text-center py-4">Mis Pedidos</h2>}
        >
            <div className="min-h-screen bg-[#F5EFEB] py-12 px-4">
                <div className="max-w-6xl mx-auto space-y-8">
                    {orders.length === 0 ? (
                        <div className="text-center text-[#2F4156] text-lg bg-white rounded-xl shadow p-8">
                            No tienes pedidos aún.
                        </div>
                    ) : (
                        orders.map((order) => (
                            <div key={order.id} className="bg-white border border-[#C8D9E6] rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                    <div>
                                        <p className="text-[#2F4156] font-semibold text-lg">Pedido #{order.id}</p>
                                        <p className="text-sm text-[#567C8D]">Método de pago: <span className="font-medium">{order.payment_method}</span></p>
                                        <div className="mt-1">
                                            <span className={`inline-block px-3 py-1 text-sm rounded-full font-medium capitalize ${statusColor[order.status] || 'bg-gray-100 text-gray-800'}`}>
                                                Estado: {order.status}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-xl font-bold text-[#2F4156] mt-4 md:mt-0">Total: {parseFloat(order.total).toFixed(2)} €</p>
                                </div>

                                <div className="mt-4">
                                    <p className="font-semibold text-[#2F4156] mb-2">Productos:</p>
                                    <ul className="space-y-2">
                                        {order.items.map((item) => (
                                            <li key={item.id} className="bg-[#F5EFEB] p-3 rounded-lg flex justify-between items-center">
                                                <div>
                                                    <p className="text-[#2F4156] font-medium">{item.product_name}</p>
                                                    <p className="text-sm text-[#567C8D]">{item.quantity} x {parseFloat(item.price).toFixed(2)} €</p>
                                                </div>
                                                <span className="text-[#2F4156] font-semibold">
                                                    {(item.quantity * item.price).toFixed(2)} €
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
