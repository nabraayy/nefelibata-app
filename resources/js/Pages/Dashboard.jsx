import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Bienvenido/a {user.name}
                </h2>
            }
        >
            <Head title="Inicio" />
           
                


            
            <footer className="w-full py-10 px-6 text-black ">
                            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 w-full">
                                {/* Logo y contacto */}
                                <div className="flex items-center gap-4">
                                    <img src="/logo.png" alt="Logo Nefelibata" className="h-10 w-auto" />
                                    <div>
                                        <h2 className="text-lg font-semibold">NEFELIBATA</h2>
                                        <p className="text-sm">info@nefelibata.com</p>
                                        <p className="text-sm">+34 123 458 789</p>
                                    </div>
                                </div>

                                {/* Redes sociales */}
                                <div className="flex items-center gap-4">
                                    <img src='/logos1.png' alt='Logos Redes' className='h-20 w-auto' />
                                </div>
                            </div>
                        </footer>
        </AuthenticatedLayout>
        
    );
}
