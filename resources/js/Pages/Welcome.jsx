import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Bienvenido">
                <link rel="icon" type="image/png" href="/logo.png" sizes='64x64' />
            </Head>
            {/* FONDO DE NUBES APLICADO AQUÍ */}
            <div
                className="min-h-screen bg-cover bg-center text-black/50 dark:text-white/50"
                style={{ backgroundImage: "url('/nube3.png')" }}
            >
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] ">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">
                                <img
                                    src="/logo.png"
                                    alt="Logo Nefelibata"
                                    className="h-16 w-auto lg:h-20"
                                />
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        

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


                    </div>
                </div>
            </div>
        </>
    );
}
