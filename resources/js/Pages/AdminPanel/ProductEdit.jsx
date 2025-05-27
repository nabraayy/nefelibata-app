import React, { useState } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from "@/Components/Footer";

export default function ProductEdit() {
    const { product } = usePage().props;
    const [form, setForm] = useState({ ...product });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route('admin.products.update', product.id), form);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Editar Producto" />

            <div className="min-h-screen bg-gradient-to-b from-[#F5EFEB] to-[#C8D9E6] py-16 px-6 flex items-center justify-center">
                <div className="bg-white border border-[#C8D9E6] rounded-2xl shadow-xl p-10 w-full max-w-xl">

                    <h1 className="text-3xl font-bold text-[#2F4156] mb-8 text-center">
                        Editar producto
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-[#2F4156] mb-1">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border border-[#C8D9E6] rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#567C8D] transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#2F4156] mb-1">Precio (€)</label>
                            <input
                                type="number"
                                step="0.01"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                className="w-full border border-[#C8D9E6] rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#567C8D] transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#2F4156] mb-1">Imagen (URL)</label>
                            <input
                                type="text"
                                name="image"
                                value={form.image}
                                onChange={handleChange}
                                className="w-full border border-[#C8D9E6] rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#567C8D] transition"
                            />
                        </div>
                        <div>
                        <label className="block text-sm font-semibold text-[#2F4156] mb-1">Descuento (%)</label>
                        <input
                            type="number"
                            name="discount"
                            value={form.discount || ''}
                            onChange={handleChange}
                            className="w-full border border-[#C8D9E6] rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-[#567C8D] transition"
                        />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#567C8D] hover:bg-[#2F4156] text-white font-semibold py-3 rounded-xl shadow-md transition"
                        >
                            Actualizar producto
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </AuthenticatedLayout>
    );
}
