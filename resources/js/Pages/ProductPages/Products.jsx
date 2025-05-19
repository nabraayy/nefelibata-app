import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import React, { useState } from 'react';

export default function Products() {
    const { auth, products } = usePage().props;
    const user = auth.user;
    const [search, setSearch] = useState('');

    // Agrupar productos por categoría
    const groupedByCategory = products.reduce((acc, product) => {
        const category = product.category || 'Otros';
        if (!acc[category]) {
            acc[category] = [];
        }

        // Filtrar por búsqueda
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            acc[category].push(product);
        }

        return acc;
    }, {});

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Productos</h2>}
        >
            <Head title="Productos" />

            <div className="min-h-screen bg-gray-50 px-6 py-10">
                <div className="max-w-7xl mx-auto mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            placeholder="Buscar productos"
                            className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        {user?.role === 'admin' && (
                            <button
                                onClick={() => router.visit(route('admin.products.create'))}
                                className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm shadow"
                            >
                                Añadir producto
                            </button>
                        )}
                    </div>
                </div>

                {Object.entries(groupedByCategory).map(([category, categoryProducts]) => (
                    <div key={category} className="max-w-7xl mx-auto mb-12">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {categoryProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-xl p-4 shadow hover:shadow-md transition text-center">
                                    <div className="bg-gray-100 p-4 rounded mb-3">
                                        <img src={product.image} alt={product.name} className="h-24 mx-auto object-contain" />
                                    </div>
                                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">${parseFloat(product.price).toFixed(2)}</p>

                                    <button
                                        onClick={() => router.post(route('cart.add'), { product_id: product.id })}
                                        className="mb-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                                    >
                                        Añadir al carrito
                                    </button>

                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
