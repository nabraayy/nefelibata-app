import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StripeCard({ amount, onSuccess, user }) {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        axios.post('/create-payment-intent', {
            amount: amount * 100
        }).then(res => {
            setClientSecret(res.data.clientSecret);
        }).catch(error => {
            console.error("Error al crear PaymentIntent:", error);
        });
    }, [amount]);

    const handleStripePayment = async () => {
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user.name,
                    email: user.email,
                },
            },
        });

        if (result.error) {
            alert(result.error.message);
        } else if (result.paymentIntent.status === 'succeeded') {
            onSuccess(result.paymentIntent);
        }
    };

    return (
        <div className="space-y-4">
            <div className="border p-4 rounded bg-gray-50">
                <CardElement />
            </div>
            <button
                type="button"
                onClick={handleStripePayment}
                disabled={!stripe || !clientSecret}
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
                Pagar con tarjeta ({amount.toFixed(2)} €)
            </button>
        </div>
    );
}
