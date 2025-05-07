import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/inertia';


import React, { useState } from 'react';

export default function Products() {
    const { auth } = usePage().props;
    const user = auth.user;
    const [search, setSearch] = useState('');

    const categories = {
        "Ordenadores": [
            {
                id: 1,
                name: "Portátil HP",
                price: "799.99",
                image: "/portatil.png",
            },
            {
                id: 4,
                name: "Base refrigeradora",
                price: "19.99",
                image: "/refri/base-refri1.webp",
            },
            {
                id: 6,
                name: "Pantalla LED 24\"",
                price: "149.00",
                image: "/panatalla/panatalla2.webp",
            },
        ],
        "Móviles": [
            {
                id: 7,
                name: "Smartphone Android",
                price: "399.00",
                image: "/moviles/m1.webp",
            },
            {
                id: 9,
                name: "Smartphone Android",
                price: "399.00",
                image: "/moviles/mo1.webp",
            },
            {
                id: 10,
                name: "Smartphone Android",
                price: "399.00",
                image: "/moviles/mov1.webp",
            },
            {
                id: 11,
                name: "Smartphone Android",
                price: "399.00",
                image: "/moviles/movi1.webp",
            },
            {
                id: 12,
                name: "Smartphone Android",
                price: "399.00",
                image: "/moviles/movil1.webp",
            },
        ],
        "Tablets": [
            {
                id: 3,
                name: "Tablet Samsung",
                price: "299.99",
                image: "/tablet/tabl1.webp",
            },
            {
                id: 13,
                name: "Tablet Apple",
                price: "499.99",
                image: "/tablet/tablet1.webp",
            },
        ],
        "Auriculares": [
            {
                id: 2,
                name: "Auriculares inalámbricos",
                price: "59.99",
                image: "/auriculares/auri1.webp",
            },
            {
                id: 8,
                name: "Cascos con micrófono",
                price: "39.99",
                image: "/cascos/cascos1.webp",
            },
        ],
        "Ratones": [
            {
                id: 5,
                name: "Ratón óptico",
                price: "59.99",
                image: "/raton/raton1.webp",
            },
        ],
    };

    const filteredCategories = Object.entries(categories).map(([category, products]) => {
        const filtered = products.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
        );
        return [category, filtered];
    }).filter(([_, products]) => products.length > 0);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Productos
                </h2>
            }
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

                        {user.role === 'admin' && (
                            <button
                                onClick={() => window.location.href = route('admin.products.create')}
                                className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm shadow"
                            >
                                Añadir producto
                            </button>
                        )}
                    </div>
                </div>

                {filteredCategories.map(([category, products]) => (
                    <div key={category} className="max-w-7xl mx-auto mb-12">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-xl p-4 shadow hover:shadow-md transition text-center"
                                >
                                    <div className="bg-gray-100 p-4 rounded mb-3">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-24 mx-auto object-contain"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">${product.price}</p>

                                    <button
                                        onClick={() => router.post(route('cart.add'), { product_id: product.id })}
                                        className="mb-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                                    >
                                        Añadir al carrito
                                    </button>

                                    {user.role === 'admin' && (
                                        <div className="flex justify-center gap-2 mt-2">
                                            <button className="text-sm px-3 py-1 border border-yellow-500 text-yellow-600 rounded hover:bg-yellow-50">
                                                ✏️ Editar
                                            </button>
                                            <button className="text-sm px-3 py-1 border border-red-500 text-red-600 rounded hover:bg-red-50">
                                                🗑️ Eliminar
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
