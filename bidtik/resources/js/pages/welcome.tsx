import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome Admin" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
                {/* Logo dan Judul */}
                <div className="mb-8 text-center">
                    <img src="/logo TIK baru.png" alt="Logo TIK POLDA BALI" className="mx-auto mb-4 h-24 w-24" />
                    <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
                    <p className="text-gray-600">BID TIK POLDA BALI</p>
                </div>

                {/* Tombol Login/Dashboard */}
                <nav>
                    {auth.user ? (
                        <Link
                            href={route('admin.dashboard')}
                            className="rounded-lg bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-red-700"
                        >
                            Masuk ke Dashboard
                        </Link>
                    ) : (
                        <Link
                            href={route('login')}
                            className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
                        >
                            Login Admin
                        </Link>
                    )}
                </nav>
            </div>
        </>
    );
}
