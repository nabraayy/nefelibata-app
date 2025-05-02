import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import React from 'react';

export default function Products() {
    const user = usePage().props.auth.user;

    const productList = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        name: "Product name",
        price: "00.00",
        image: "/shirt.png", // Asegúrate de tener esta imagen en /public
    }));

    return (
        <AuthenticatedLayout>
            <Head title="Productos" />

            <div className="min-h-screen bg-gray-50 px-6 py-10">
                <div className="max-w-7xl mx-auto mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Products</h2>
                    <input
                        type="text"
                        placeholder="Search products"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Product grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {productList.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl p-4 shadow hover:shadow-md transition text-center">
                            <div className="bg-gray-100 p-4 rounded mb-3">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-16 mx-auto object-contain"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-sm text-gray-500">${product.price}</p>
                            <button className="mt-3 border border-gray-700 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
