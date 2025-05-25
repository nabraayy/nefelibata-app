import React from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from "@/Components/Footer";

export default function ProductIndex() {
    const { products } = usePage().props;

    const handleDelete = (id) => {
        if (confirm('¿Seguro que quieres eliminar este producto?')) {
            router.delete(route('admin.products.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Administrar Productos" />
            <div className="min-h-screen bg-[#F5EFEB] py-12 px-6">
                <div className="max-w-7xl mx-auto bg-white border border-[#C8D9E6] rounded-2xl shadow-lg p-8">

                    {/* Encabezado */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                        <h1 className="text-3xl font-bold text-[#2F4156] mb-4 sm:mb-0">Gestión de Productos</h1>
                        <Link
                            href={route('admin.products.create')}
                            className="bg-[#567C8D] hover:bg-[#2F4156] text-white px-5 py-2 rounded-xl text-sm shadow transition"
                        >
                            + Añadir Producto
                        </Link>
                    </div>

                    {/* Tabla */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm bg-white border border-[#C8D9E6] rounded-xl overflow-hidden">
                            <thead className="bg-[#C8D9E6] text-[#2F4156] uppercase text-xs tracking-wider">
                                <tr>
                                    <th className="px-6 py-3 text-left">ID</th>
                                    <th className="px-6 py-3 text-left">Nombre</th>
                                    <th className="px-6 py-3 text-left">Precio</th>
                                    <th className="px-6 py-3 text-left">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F5EFEB] text-[#2F4156]">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-[#F5EFEB]/60 transition">
                                        <td className="px-6 py-4 font-medium">{product.id}</td>
                                        <td className="px-6 py-4">{product.name}</td>
                                        <td className="px-6 py-4">{parseFloat(product.price).toFixed(2)} €</td>
                                        <td className="px-6 py-4 space-x-3">
                                            <Link
                                                href={route('admin.products.edit', product.id)}
                                                className="text-sm text-[#567C8D] hover:underline font-semibold"
                                            >
                                                ✏️ Editar
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="text-sm text-[#D9534F] hover:underline font-semibold"
                                            >
                                                🗑 Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {products.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className="text-center py-6 text-[#567C8D] italic">
                                            No hay productos registrados.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />
        </AuthenticatedLayout>
    );
}
