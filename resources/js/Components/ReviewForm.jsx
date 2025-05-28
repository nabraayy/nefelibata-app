import { useForm } from '@inertiajs/react';

export default function ReviewForm({ onNewReview }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        rating: '',
        comment: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('reviews.store'), {
            onSuccess: () => {
                onNewReview({
                    user: { name: 'Tú' }, // Opcional: puedes omitirlo si haces reload
                    ...data,
                });
                reset();
            },
        });
    };

    return (
        <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-12">
            <h3 className="text-xl font-bold text-[#2F4156] mb-4">Deja tu opinión</h3>

            <div className="mb-4">
                <label className="block font-semibold mb-1 text-[#2F4156]">Valoración</label>
                <select
                    value={data.rating}
                    onChange={(e) => setData('rating', e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                >
                    <option value="">Selecciona una valoración</option>
                    {[5, 4, 3, 2, 1].map((val) => (
                        <option key={val} value={val}>{val} estrellas</option>
                    ))}
                </select>
                {errors.rating && <p className="text-red-600 text-sm">{errors.rating}</p>}
            </div>

            <div className="mb-4">
                <label className="block font-semibold mb-1 text-[#2F4156]">Comentario</label>
                <textarea
                    value={data.comment}
                    onChange={(e) => setData('comment', e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 h-24"
                />
                {errors.comment && <p className="text-red-600 text-sm">{errors.comment}</p>}
            </div>

            <button
                type="submit"
                disabled={processing}
                className="bg-[#2F4156] text-white px-6 py-2 rounded hover:bg-[#1e2f40] transition"
            >
                Enviar opinión
            </button>
        </form>
    );
}
