import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Contact() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout>
            <Head title="Contacto" />

            <div className="min-h-screen bg-white px-6 py-12">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
                    <p className="text-gray-500 mb-10">Feel free to contact us.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <form className="space-y-4 w-full">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                            >
                                Send
                            </button>
                        </form>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold">Contact Information</h3>
                            <div className="text-gray-700 space-y-4">
                                <p className="flex items-center gap-2"><span>📍</span>123 Example St, City, Country</p>
                                <p className="flex items-center gap-2"><span>✉️</span>info@nefelibata.com</p>
                                <p className="flex items-center gap-2"><span>📞</span>+123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
