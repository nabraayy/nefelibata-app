import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import React, { useState } from 'react';

export default function Checkout() {
    const { auth, cart = [] } = usePage().props;
    const user = auth.user;

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const [form, setForm] = useState({
        name: user.name || '',
        email: user.email || '',
        address: '',
        city: '',
        paymentMethod: 'card',
        cardNumber: '',
        expirationDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const orderItems = cart.map(item => ({
            product_id: item.id,
            quantity: item.quantity,
            price: item.price
        }));

        router.post(route('checkout.store'), {
            ...form,
            cart: orderItems,
            total: totalPrice,
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Checkout" />

            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Formulario */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-lg shadow-md border space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-gray-800">Finalizar compra</h2>

                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nombre completo" className="w-full border rounded px-4 py-2" required />
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Correo electrónico" className="w-full border rounded px-4 py-2" required />
                        <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Dirección" className="w-full border rounded px-4 py-2" required />
                        <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="Ciudad" className="w-full border rounded px-4 py-2" required />

                        <div>
                            <h3 className="font-semibold mb-2">Método de pago</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="paymentMethod" value="card" checked={form.paymentMethod === 'card'} onChange={handleChange} /> Tarjeta de crédito
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="paymentMethod" value="paypal" checked={form.paymentMethod === 'paypal'} onChange={handleChange} /> PayPal
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="paymentMethod" value="bank" checked={form.paymentMethod === 'bank'} onChange={handleChange} /> Transferencia bancaria
                                </label>
                            </div>
                        </div>

                        {form.paymentMethod === 'card' && (
                            <>
                                <input type="text" name="cardNumber" value={form.cardNumber} onChange={handleChange} placeholder="Número de tarjeta" className="w-full border rounded px-4 py-2" />
                                <input type="text" name="expirationDate" value={form.expirationDate} onChange={handleChange} placeholder="Fecha de expiración" className="w-full border rounded px-4 py-2" />
                            </>
                        )}

                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                            Confirmar y pagar {totalPrice.toFixed(2)} €
                        </button>
                    </form>

                    {/* Resumen del carrito */}
                    <div className="bg-white p-8 rounded-lg shadow-md border">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Resumen del pedido</h2>
                        {cart.length > 0 ? (
                            <>
                                <ul className="divide-y divide-gray-200">
                                    {cart.map((item, index) => (
                                        <li key={index} className="py-3 flex justify-between items-center">
                                            <div>
                                                <p className="font-medium text-gray-700">{item.name}</p>
                                                <p className="text-sm text-gray-500">{item.quantity} x {item.price.toFixed(2)} €</p>
                                            </div>
                                            <p className="font-semibold text-gray-800">{(item.quantity * item.price).toFixed(2)} €</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="border-t mt-4 pt-4 text-right">
                                    <p className="text-lg font-bold text-gray-900">Total: {totalPrice.toFixed(2)} €</p>
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-500">Tu carrito está vacío.</p>
                        )}
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}