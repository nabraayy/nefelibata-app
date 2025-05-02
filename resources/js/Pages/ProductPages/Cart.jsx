import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import React, { useState } from 'react';

export default function Cart() {
    const user = usePage().props.auth.user;

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Example Product',
            price: 29.99,
            quantity: 1,
            image: '/shirt.png',
        },
        {
            id: 2,
            name: 'Example Product',
            price: 49.99,
            quantity: 1,
            image: '/shirt.png',
        },
        {
            id: 3,
            name: 'Example Product',
            price: 39.99,
            quantity: 1,
            image: '/shirt.png',
        },
    ]);

    const handleQuantityChange = (id, delta) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity:
                              item.quantity + delta > 0
                                  ? item.quantity + delta
                                  : 1,
                      }
                    : item
            )
        );
    };

    const handleRemove = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <AuthenticatedLayout>
            <Head title="Carrito de Compras" />

            <div className="min-h-screen bg-white px-6 py-12 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>

                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-separate space-y-4">
                        <thead>
                            <tr className="text-gray-600 font-semibold text-sm border-b">
                                <th className="py-2">Product</th>
                                <th className="py-2">Price</th>
                                <th className="py-2">Quantity</th>
                                <th className="py-2 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id} className="align-middle">
                                    <td className="py-4 flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-12 w-12 object-contain bg-gray-100 p-2 rounded"
                                        />
                                        <span>{item.name}</span>
                                    </td>
                                    <td className="py-4 text-gray-700">
                                        ${item.price.toFixed(2)}
                                    </td>
                                    <td className="py-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        -1
                                                    )
                                                }
                                                className="px-2 py-1 rounded border"
                                            >
                                                −
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() =>
                                                    handleQuantityChange(
                                                        item.id,
                                                        1
                                                    )
                                                }
                                                className="px-2 py-1 rounded border"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-4 text-right">
                                        <button
                                            onClick={() =>
                                                handleRemove(item.id)
                                            }
                                            className="text-red-600 hover:underline text-sm"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 text-right">
                    <p className="text-xl font-semibold mb-4">
                        Total: ${total.toFixed(2)}
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800" onClick="/checkout">
                        Checkout
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
