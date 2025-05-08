import React, { useState } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

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
            <div className="max-w-2xl mx-auto py-10">
                <h1 className="text-2xl font-bold mb-6">Editar producto</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    <input type="text" name="price" value={form.price} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    <input type="text" name="image" value={form.image} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Actualizar</button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}