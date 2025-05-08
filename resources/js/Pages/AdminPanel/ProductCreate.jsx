import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ProductCreate() {
    const [form, setForm] = useState({
        name: '',
        price: '',
        image: '',
        category: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route('admin.products.store'), form);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Crear Producto" />
            <div className="max-w-2xl mx-auto py-10">
                <h1 className="text-2xl font-bold mb-6">Añadir nuevo producto</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="Precio"
                        value={form.price}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="URL de la imagen"
                        value={form.image}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Categoría (por ejemplo: Ordenadores)"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Guardar
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
