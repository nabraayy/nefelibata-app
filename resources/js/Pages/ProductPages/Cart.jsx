import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import React from 'react';
import Footer from "@/Components/Footer";

export default function Cart() {
    const { auth, cart } = usePage().props;
    const user = auth.user;
    const cartItems = cart ?? [];

    const handleRemove = (id) => {
        router.post(route('cart.remove'), { product_id: id }, {
            preserveScroll: true,
        });
    };

    const handleQuantityChange = (id, quantity) => {
        if (quantity < 1) return;
        router.post(route('cart.update'), {
            product_id: id,
            quantity: quantity,
        }, {
            preserveScroll: true,
        });
    };

    const total = cartItems.reduce(
        (acc, item) => acc + parseFloat(item.price) * item.quantity,
        0
    );

    return (
        <AuthenticatedLayout>
            <Head title="Carrito de Compras" />

            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4 py-12" style={{ backgroundImage: "url('/nube3.png')" }}>
                <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-10 text-gray-900 text-center">Tu Carrito</h1>

                    {cartItems.length === 0 ? (
                        <p className="text-gray-600 text-lg text-center">Tu carrito está vacío.</p>
                    ) : (
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-between border rounded-xl p-4 shadow-sm bg-gray-50">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-16 w-16 object-contain rounded-lg bg-white p-2 border"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-800">{item.name}</p>
                                            <p className="text-sm text-gray-600">${parseFloat(item.price).toFixed(2)}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            className="w-8 h-8 border rounded-lg text-lg font-bold text-gray-700 hover:bg-gray-100"
                                        >
                                            −
                                        </button>
                                        <span className="text-gray-800">{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            className="w-8 h-8 border rounded-lg text-lg font-bold text-gray-700 hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="text-red-600 text-sm hover:underline"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            ))}

                            <div className="flex justify-between items-center pt-6 border-t mt-8">
                                <p className="text-xl font-semibold text-gray-900">Total: ${total.toFixed(2)}</p>

                                <PrimaryButton onClick={() => router.visit('/checkout')}>
                                    Finalizar compra
                                </PrimaryButton>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
