import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import PrimaryButton from '@/Components/PrimaryButton';
import Footer from "@/Components/Footer";

export default function Checkout() {
    const { auth, cart = [] } = usePage().props;
    const user = auth.user;

    const totalPrice = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);

    const [form, setForm] = useState({
        name: user.name || '',
        email: user.email || '',
        address: '',
        city: '',
        paymentMethod: 'card',
        cardNumber: '',
        expirationDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: '¿Confirmar pedido?',
            text: `Vas a pagar un total de ${totalPrice.toFixed(2)} €. ¿Deseas continuar?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, confirmar',
            cancelButtonText: 'Cancelar',
            customClass: {
                popup: 'rounded-xl shadow-lg',
                title: 'text-lg font-semibold text-gray-800',
                confirmButton: 'bg-black text-white px-4 py-2 rounded hover:bg-gray-800',
                cancelButton: 'bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100',
            },
            buttonsStyling: false,
        });

        if (!result.isConfirmed) return;

        // Mostrar cargando
        Swal.fire({
            title: 'Realizando pedido...',
            text: 'Por favor, espera un momento',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
            customClass: {
                popup: 'rounded-xl shadow-md',
                title: 'text-lg text-gray-800',
            },
        });

        const orderItems = cart.map(item => ({
            product_id: item.id,
            quantity: item.quantity,
            price: Number(item.price),
        }));

        router.post(route('checkout.store'), {
            ...form,
            cart: orderItems,
            total: totalPrice,
        }, {
            onSuccess: () => {
                Swal.fire({
                    title: '¡Pedido realizado!',
                    text: 'Tu orden ha sido confirmada correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Ver mis pedidos',
                    customClass: {
                        popup: 'rounded-xl shadow-lg',
                        title: 'text-xl font-bold text-gray-900',
                        htmlContainer: 'text-gray-700',
                        confirmButton: 'bg-black text-white px-4 py-2 rounded hover:bg-gray-800',
                    },
                    buttonsStyling: false,
                }).then(() => {
                    router.visit('/orders'); // Puedes cambiar esta ruta si es necesario
                });
            },
            onError: () => {
                Swal.fire({
                    title: 'Error',
                    text: 'Ha ocurrido un error al procesar tu pedido.',
                    icon: 'error',
                    confirmButtonText: 'Intentar de nuevo',
                    customClass: {
                        popup: 'rounded-xl shadow-lg',
                        confirmButton: 'bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700',
                    },
                    buttonsStyling: false,
                });
            }
        });
    };

    useEffect(() => {
        if (form.paymentMethod !== 'paypal') return;

        const interval = setInterval(() => {
            const container = document.getElementById('paypal-button-container');
            if (!container) return;

            if (container.hasChildNodes()) {
                clearInterval(interval);
                return;
            }

            const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]');
            if (!existingScript) {
                const script = document.createElement('script');
                script.src = 'https://www.paypal.com/sdk/js?client-id=Af_uSCl9jdp8VB-NQro2lgF-qTUnWW_iK7vh7nzrvtT3ZXPSX5bC3XbWuXRq56O4ejeLnvzBHbmvnQ8og&currency=EUR';
                script.addEventListener('load', renderPaypalButton);
                document.body.appendChild(script);
            } else {
                renderPaypalButton();
            }

            function renderPaypalButton() {
                if (window.paypal) {
                    window.paypal.Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [{
                                    amount: {
                                        value: totalPrice.toFixed(2),
                                    },
                                }],
                            });
                        },
                        onApprove: (data, actions) => {
                            return actions.order.capture().then(details => {
                                const orderItems = cart.map(item => ({
                                    product_id: item.id,
                                    quantity: item.quantity,
                                    price: Number(item.price),
                                }));

                                router.post(route('checkout.paypal.complete'), {
                                    ...form,
                                    cart: orderItems,
                                    total: totalPrice,
                                    paypalDetails: details,
                                });
                            });
                        }
                    }).render('#paypal-button-container');
                }
            }

            clearInterval(interval);
        }, 300);

        return () => clearInterval(interval);
    }, [form.paymentMethod]);

    return (
        <AuthenticatedLayout>
            <Head title="Checkout" />

            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 py-12 px-4" style={{ backgroundImage: "url('/nube3.png')" }}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Resumen del pedido */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Resumen del pedido</h2>

                        {cart.length > 0 ? (
                            <>
                                <ul className="divide-y divide-gray-200 space-y-4">
                                    {cart.map((item, index) => (
                                        <li key={index} className="flex items-center justify-between py-2">
                                            <div className="flex gap-4 items-center">
                                                {item.image && (
                                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded border" />
                                                )}
                                                <div>
                                                    <p className="font-medium text-gray-800">{item.name}</p>
                                                    <p className="text-sm text-gray-500">
                                                        {item.quantity} x {Number(item.price).toFixed(2)} €
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="font-semibold text-gray-800">
                                                {(item.quantity * Number(item.price)).toFixed(2)} €
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="border-t mt-6 pt-4 text-right">
                                    <p className="text-xl font-bold text-gray-900">Total: {totalPrice.toFixed(2)} €</p>
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-500">Tu carrito está vacío.</p>
                        )}
                    </div>

                    {/* Formulario de pago */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-2xl shadow p-6 space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-gray-800">Finalizar compra</h2>

                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nombre completo" className="w-full border rounded-lg px-4 py-2 bg-gray-50" required />
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Correo electrónico" className="w-full border rounded-lg px-4 py-2 bg-gray-50" required />
                        <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Dirección" className="w-full border rounded-lg px-4 py-2 bg-gray-50" required />
                        <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="Ciudad" className="w-full border rounded-lg px-4 py-2 bg-gray-50" required />

                        <div>
                            <h3 className="font-semibold mb-2">Método de pago</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="paymentMethod" value="card" checked={form.paymentMethod === 'card'} onChange={handleChange} /> Tarjeta de crédito
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="paymentMethod" value="paypal" checked={form.paymentMethod === 'paypal'} onChange={handleChange} /> PayPal
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="paymentMethod" value="bank" checked={form.paymentMethod === 'bank'} onChange={handleChange} /> Transferencia bancaria
                                </label>
                            </div>
                        </div>

                        {form.paymentMethod === 'card' && (
                            <>
                                <input type="text" name="cardNumber" value={form.cardNumber} onChange={handleChange} placeholder="Número de tarjeta" className="w-full border rounded-lg px-4 py-2 bg-gray-50" />
                                <input type="text" name="expirationDate" value={form.expirationDate} onChange={handleChange} placeholder="Fecha de expiración" className="w-full border rounded-lg px-4 py-2 bg-gray-50" />
                            </>
                        )}

                        {form.paymentMethod === 'paypal' && (
                            <div id="paypal-button-container" className="pt-2" />
                        )}

                        <div className="pt-4">
                            <PrimaryButton className="w-full justify-center">
                                Confirmar y pagar {totalPrice.toFixed(2)} €
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
