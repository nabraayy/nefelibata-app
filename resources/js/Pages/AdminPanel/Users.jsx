import React from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Users({ users }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('¿Estás segura de que deseas eliminar este usuario?')) {
            destroy(route('admin.users.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout header={<h2 className="text-3xl font-bold text-[#2F4156] text-center py-4">Usuarios Registrados</h2>}>
            <Head title="Usuarios" />
            <div className="min-h-screen bg-[#F5EFEB] py-10 px-6">
                <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">
                    {users.length === 0 ? (
                        <p className="text-center text-[#2F4156]">No hay usuarios registrados.</p>
                    ) : (
                        <table className="w-full table-auto border-collapse">
                            <thead>
                                <tr className="text-left text-[#567C8D]">
                                    <th className="p-2 border-b">ID</th>
                                    <th className="p-2 border-b">Nombre</th>
                                    <th className="p-2 border-b">Email</th>
                                    <th className="p-2 border-b">Rol</th>
                                    <th className="p-2 border-b">Registrado</th>
                                    <th className="p-2 border-b">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id} className="border-t">
                                        <td className="p-2">{user.id}</td>
                                        <td className="p-2">{user.name}</td>
                                        <td className="p-2">{user.email}</td>
                                        <td className="p-2 capitalize">{user.role || 'usuario'}</td>
                                        <td className="p-2">{new Date(user.created_at).toLocaleDateString()}</td>
                                        <td className="p-2 space-x-2">
                                            <button
                                                onClick={() => router.get(route('admin.users.edit', user.id))}
                                                className="inline-block px-4 py-1 bg-[#2F4156] text-white text-sm rounded-xl hover:bg-[#1f2e3f] transition shadow"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="inline-block px-4 py-1 bg-red-500 text-white text-sm rounded-xl hover:bg-red-600 transition shadow"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
