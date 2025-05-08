import React from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function ProductIndex() {
    const { products, auth } = usePage().props;

    const handleDelete = (id) => {
        if (confirm('¿Seguro que quieres eliminar este producto?')) {
            router.delete(route('admin.products.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Administrar Productos" />
            <div className="max-w-7xl mx-auto py-10">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Gestión de Productos</h1>
                    <Link href={route('admin.products.create')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Añadir Producto</Link>
                </div>
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-2">ID</th>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Precio</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-t">
                                <td className="p-2">{product.id}</td>
                                <td className="p-2">{product.name}</td>
                                <td className="p-2">${product.price}</td>
                                <td className="p-2 space-x-2">
                                    <Link href={route('admin.products.edit', product.id)} className="text-yellow-600 hover:underline">Editar</Link>
                                    <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:underline">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}