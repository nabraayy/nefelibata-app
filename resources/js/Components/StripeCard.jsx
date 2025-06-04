import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PrimaryButton from './PrimaryButton';
import Swal from 'sweetalert2';

export default function StripeCard({ amount, onSuccess, user }) {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.post('/create-payment-intent', {
            amount: amount * 100
        }).then(res => {
            setClientSecret(res.data.clientSecret);
        }).catch(error => {
            console.error("Error al crear PaymentIntent:", error);
            Swal.fire({
                title: 'Error',
                text: 'No se pudo iniciar el proceso de pago. Intenta más tarde.',
                icon: 'error',
                confirmButtonText: 'Cerrar',
                customClass: {
                    popup: 'rounded-xl shadow-lg',
                    confirmButton: 'bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700',
                },
                buttonsStyling: false,
            });
        });
    }, [amount]);

    const handleStripePayment = async () => {
        if (!stripe || !elements || !clientSecret) return;

        setLoading(true);

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user.name,
                    email: user.email,
                },
            },
        });

        setLoading(false);

        if (result.error) {
            Swal.fire({
                title: 'Error con la tarjeta',
                text: result.error.message || 'Ha ocurrido un error con el pago.',
                icon: 'error',
                confirmButtonText: 'Revisar',
                customClass: {
                    popup: 'rounded-xl shadow-lg',
                    confirmButton: 'bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700',
                },
                buttonsStyling: false,
            });
        } else if (result.paymentIntent.status === 'succeeded') {
            Swal.fire({
                title: 'Pago completado',
                text: 'Tu pago se ha realizado correctamente.',
                icon: 'success',
                confirmButtonText: 'Continuar',
                customClass: {
                    popup: 'rounded-xl shadow-lg',
                    confirmButton: 'bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700',
                },
                buttonsStyling: false,
            }).then(() => {
                onSuccess(result.paymentIntent);
            });
        }
    };

    return (
        <div className="space-y-4">
            <div className="border p-4 rounded bg-gray-50">
                <CardElement />
            </div>

            <PrimaryButton
                type="button"
                onClick={handleStripePayment}
                disabled={!stripe || !clientSecret || loading}
                className="w-full justify-center"
            >
                {loading ? "Procesando..." : `Pagar con tarjeta (${amount.toFixed(2)} €)`}
            </PrimaryButton>
        </div>
    );
}
