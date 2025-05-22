import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Products() {
    const { auth, products } = usePage().props;
    const user = auth.user;
    const [search, setSearch] = useState('');
    const MySwal = withReactContent(Swal);

    const particlesInit = async (main) => {
        await loadFull(main);
    };

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
            ? product.gallery.map(src => `<img src="${src}" style="max-width:100%;margin-bottom:10px;border-radius:8px;" />`).join('')
            : `<img src="${product.image}" style="max-width:100%;border-radius:8px;" />`;

        MySwal.fire({
            title: product.name,
            html: `
                <div style="max-height:400px;overflow:auto;">
                    ${images}
                    <p style="margin-top: 10px; font-size: 16px;"><strong>Precio:</strong> ${parseFloat(product.price).toFixed(2)} €</p>
                    ${product.description ? `<p style="margin-top: 8px; color: #666;">${product.description}</p>` : ''}
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Añadir al carrito',
            cancelButtonText: 'Cerrar',
            confirmButtonColor: '#2563eb',
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route('cart.add'), { product_id: product.id }, {
                    onSuccess: () => {
                        MySwal.fire('Añadido al carrito', `"${product.name}" se ha agregado.`, 'success');
                    }
                });
            }
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Productos" />

            {/* Contenedor principal con fondo animado */}
            <div className="relative min-h-screen overflow-hidden">
                {/* Fondo de partículas */}
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    className="absolute inset-0 z-0"
                    options={{
                        fullScreen: false,
                        background: {
                            color: {
                                value: "transparent"
                            }
                        },
                        particles: {
                            number: {
                                value: 40,
                                density: {
                                    enable: true,
                                    area: 800
                                }
                            },
                            color: {
                                value: ["#60a5fa", "#cbd5e1"]
                            },
                            shape: {
                                type: "circle"
                            },
                            opacity: {
                                value: 0.2
                            },
                            size: {
                                value: { min: 1, max: 3 }
                            },
                            move: {
                                enable: true,
                                speed: 0.6,
                                direction: "none",
                                outModes: {
                                    default: "bounce"
                                }
                            }
                        },
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "repulse"
                                }
                            },
                            modes: {
                                repulse: {
                                    distance: 100,
                                    duration: 0.4
                                }
                            }
                        },
                        detectRetina: true
                    }}
                />

                {/* Contenido principal */}
                <div className="relative z-10 px-6 py-10">
                    <div className="max-w-7xl mx-auto mb-8">
                        <div className="flex justify-between items-center mb-4">
                            <input
                                type="text"
                                placeholder="Buscar productos"
                                className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
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

                    {Object.entries(groupedByCategory).map(([category, items]) => (
                        <div key={category} className="max-w-7xl mx-auto mb-12">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {items.map((product) => (
                                    <div
                                        key={product.id}
                                        onClick={() => showProductDetails(product)}
                                        className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-center cursor-pointer"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-40 w-full object-contain mb-4"
                                        />
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                                        <p className="text-sm text-gray-500">{parseFloat(product.price).toFixed(2)} €</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
