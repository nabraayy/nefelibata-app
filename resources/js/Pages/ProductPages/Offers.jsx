import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from '@/Components/Footer';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Offers() {
    const { auth, products } = usePage().props;
    const user = auth?.user;
    const MySwal = withReactContent(Swal);

    const showProductDetails = (product) => {
        const images = product.gallery?.length
            ? product.gallery.map(src => `<img src="${src}" style="max-width:100%;margin-bottom:12px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1);" />`).join('')
            : `<img src="${product.image}" style="max-width:100%;border-radius:12px;margin-bottom:12px;" />`;

        MySwal.fire({
            title: `<h2 style="color:#2F4156;font-weight:700;font-size:24px;margin-bottom:10px">${product.name}</h2>`,
            html: `
                <div style="max-height:400px;overflow:auto;text-align:left;">
                    ${images}
                    <p style="margin: 12px 0; font-size: 16px; color: #2F4156;"><strong>Precio:</strong> ${parseFloat(product.price).toFixed(2)} €</p>
                    <p style="font-size: 14px; color: #567C8D;">${product.description || ''}</p>
                    <p style="font-size: 14px; color: #D9534F; font-weight:bold;">Descuento: ${product.discount}%</p>
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
                router.post(route('cart.add'), { product_id: product.id });
            }
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Ofertas" />
            <div className="min-h-screen bg-gradient-to-b from-[#F5EFEB] to-[#C8D9E6] py-20 px-6">
                <h1 className="text-4xl font-bold text-center text-[#2F4156] mb-12">
                    Productos en Oferta 🔥
                </h1>

                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => showProductDetails(product)}
                                className="bg-white/90 border border-[#C8D9E6] rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.03] transition-all cursor-pointer text-center"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-36 w-full object-contain mb-4"
                                />
                                <h3 className="text-md font-semibold text-[#2F4156] mb-1">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-[#567C8D] font-medium mb-1">
                                    {parseFloat(product.price).toFixed(2)} €
                                </p>
                                <p className="text-xs text-[#D9534F] font-semibold">
                                    -{product.discount}% de descuento
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-[#2F4156] text-lg">
                            No hay productos en oferta actualmente.
                        </p>
                    )}
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
