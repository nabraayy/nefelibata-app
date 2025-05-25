import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from "@/Components/Footer";
import PrimaryButton from '@/Components/PrimaryButton';

export default function Products() {
    const { auth, products } = usePage().props;
    const user = auth.user;
    const [search, setSearch] = useState('');
    const MySwal = withReactContent(Swal);


    const groupedByCategory = products.reduce((acc, product) => {
        const category = product.category || 'Otros';
        if (!acc[category]) acc[category] = [];
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            acc[category].push(product);
        }
        return acc;
    }, {});

    const showProductDetails = (product) => {
    const images = product.gallery?.length
        ? product.gallery
            .map(src => `<img src="${src}" style="max-width:100%;margin-bottom:12px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1);" />`)
            .join('')
        : `<img src="${product.image}" style="max-width:100%;border-radius:12px;margin-bottom:12px;" />`;

    MySwal.fire({
        title: `<h2 style="color:#2F4156;font-weight:700;font-size:24px;margin-bottom:10px">${product.name}</h2>`,
        html: `
            <div style="max-height:400px;overflow:auto;text-align:left;">
                ${images}
                <p style="margin: 12px 0; font-size: 16px; color: #2F4156;"><strong>Precio:</strong> ${parseFloat(product.price).toFixed(2)} €</p>
                ${product.description ? `<p style="font-size: 14px; color: #567C8D;">${product.description}</p>` : ''}
            </div>
        `,
        background: '#F5EFEB',
        showCancelButton: true,
        confirmButtonText: '🛒 Añadir al carrito',
        cancelButtonText: 'Cerrar',
        confirmButtonColor: '#567C8D',
        cancelButtonColor: '#888',
        customClass: {
            popup: 'rounded-3xl shadow-lg',
            confirmButton: 'px-6 py-2 font-semibold rounded-lg',
            cancelButton: 'px-5 py-2 font-normal text-sm',
        },
    }).then((result) => {
        if (result.isConfirmed) {
            router.post(route('cart.add'), { product_id: product.id }, {
                onSuccess: () => {
                    MySwal.fire({
                        icon: 'success',
                        title: '¡Añadido!',
                        text: `"${product.name}" se ha agregado al carrito.`,
                        confirmButtonColor: '#567C8D',
                        confirmButtonText: 'Seguir comprando',
                        background: '#F5EFEB',
                        customClass: {
                            popup: 'rounded-2xl',
                        },
                    });
                }
            });
        }
    });
};

    return (
        <AuthenticatedLayout>
            <Head title="Productos" />

            {/* Contenedor principal con fondo animado */}
            <div
            className="relative min-h-screen overflow-hidden py-20 px-4 sm:px-8"
            style={{
                background: "linear-gradient(to bottom, #F5EFEB 0%, #C8D9E6 50%)"
            }}
            >
            

                {/* Contenido principal */}
                <div className="relative z-10 px-6 py-10">
                    <div className="max-w-7xl mx-auto mb-12">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <input
                            type="text"
                            placeholder="Buscar productos"
                            className="w-full md:w-1/2 border border-[#C8D9E6] rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-[#567C8D] transition"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {user?.role === 'admin' && (
                            <PrimaryButton
                            onClick={() => router.visit(route('admin.products.create'))}
                            className="bg-[#567C8D] hover:bg-[#2F4156] text-white px-6 py-3 rounded-xl shadow transition-all"
                            >
                            Añadir producto
                            </PrimaryButton>
                        )}
                        </div>
                    </div>

                    {Object.entries(groupedByCategory).map(([category, items]) => (
                    <div key={category} className="max-w-7xl mx-auto mb-16">
                    <h3 className="text-3xl font-bold text-[#2F4156] mb-8">
                        {category}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {items.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => showProductDetails(product)}
                            className="bg-white/90 backdrop-blur border border-[#C8D9E6] rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 cursor-pointer text-center"
                        >
                            <img
                            src={product.image}
                            alt={product.name}
                            className="h-36 w-full object-contain mb-4"
                            />
                            <h3 className="text-md font-semibold text-[#2F4156] mb-1">
                            {product.name}
                            </h3>
                            <p className="text-sm text-[#567C8D] font-medium">
                            {parseFloat(product.price).toFixed(2)} €
                            </p>
                        </div>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
            
            <Footer />
        </AuthenticatedLayout>
    );
}
