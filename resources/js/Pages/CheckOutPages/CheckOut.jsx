import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import React, { useState } from 'react';

export default function Checkout() {
    const user = usePage().props.auth.user;

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
        // Aquí enviarías a tu backend, por ahora solo redirigimos
        router.visit('/order-confirmed');
    };

    return (
        <AuthenticatedLayout>
            <Head title="Checkout" />

            <div className="min-h-screen bg-white px-6 py-12 flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-white border rounded-xl shadow p-8 space-y-6"
                >
                    <h1 className="text-3xl font-bold text-center">Checkout</h1>

                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full border rounded px-4 py-2"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full border rounded px-4 py-2"
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="w-full border rounded px-4 py-2"
                            required
                        />
                        <input
                            type="text"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="w-full border rounded px-4 py-2"
                            required
                        />
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Payment Method</h3>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="card"
                                    checked={form.paymentMethod === 'card'}
                                    onChange={handleChange}
                                />
                                Credit Card
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="paypal"
                                    checked={form.paymentMethod === 'paypal'}
                                    onChange={handleChange}
                                />
                                PayPal
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="bank"
                                    checked={form.paymentMethod === 'bank'}
                                    onChange={handleChange}
                                />
                                Bank Transfer
                            </label>
                        </div>
                    </div>

                    {form.paymentMethod === 'card' && (
                        <>
                            <input
                                type="text"
                                name="cardNumber"
                                value={form.cardNumber}
                                onChange={handleChange}
                                placeholder="Card Number"
                                className="w-full border rounded px-4 py-2"
                            />
                            <input
                                type="text"
                                name="expirationDate"
                                value={form.expirationDate}
                                onChange={handleChange}
                                placeholder="Expiration Date"
                                className="w-full border rounded px-4 py-2"
                            />
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                    >
                        $59.97 Pay Now
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
