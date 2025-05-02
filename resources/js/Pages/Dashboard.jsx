import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout>
            <Head title="Inicio" />

            <div className="min-h-screen bg-gray-50 py-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-3xl shadow p-8">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">Welcome, {user.name}</h1>
                                <p className="text-gray-500">Manage your online store with ease.</p>
                            </div>
                            
                        </div>

                        {/* Products */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Products</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { name: 'T-shirt', price: '20.00', img: '/shirt.png' },
                                    { name: 'Tote Bag', price: '15.00', img: '/bag.png' },
                                    { name: 'Caffee Mug', price: '12.00', img: '/mug.png' },
                                    { name: 'Sneakers', price: '35.00', img: '/shoes.png' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-gray-100 rounded-xl p-4 text-center shadow hover:shadow-md transition">
                                        <img src={item.img} alt={item.name} className="h-24 mx-auto mb-4 object-contain" />
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-600">${item.price}</p>
                                        <button className="mt-3 text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Buy</button>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 mt-6">
                                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-50">+ Add New Product</button>
                                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-50">View Orders</button>
                                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-50">Manage Customers</button>
                            </div>
                        </div>

                        {/* Analytics & Settings */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <h3 className="font-semibold mb-4">Analytics</h3>
                                <img src="/analytics.png" alt="Analytics" className="h-32 w-full object-cover rounded" />
                                <button className="mt-4 px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">View Analytics</button>
                            </div>
                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <h3 className="font-semibold mb-4">Store Settings</h3>
                                <img src="/map.png" alt="Settings" className="h-32 w-full object-cover rounded" />
                                <button className="mt-4 px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">Manage Settings</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-12 px-6 text-black">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                        <div className="flex items-center gap-4">
                            <img src="/logo.png" alt="Logo Nefelibata" className="h-10 w-auto" />
                            <div>
                                <h2 className="text-lg font-semibold">NEFELIBATA</h2>
                                <p className="text-sm">info@nefelibata.com</p>
                                <p className="text-sm">+34 123 458 789</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src='/logos1.png' alt='Redes' className='h-20 w-auto' />
                        </div>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
