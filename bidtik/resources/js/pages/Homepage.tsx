import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Bidtik - Beranda" />

            <div className="min-h-screen bg-gray-100">
                {/* Header */}
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-6xl px-4 py-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold text-blue-600">BIDTIK</h1>
                            <nav className="space-x-6">
                                <a href="/" className="text-gray-700 hover:text-blue-600">
                                    Beranda
                                </a>
                                <a href="/berita" className="text-gray-700 hover:text-blue-600">
                                    Berita
                                </a>
                                <a href="/tentang" className="text-gray-700 hover:text-blue-600">
                                    Tentang
                                </a>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main>
                    {/* Hero Section */}
                    <section className="bg-blue-600 py-16 text-white">
                        <div className="mx-auto max-w-6xl px-4 text-center">
                            <h2 className="mb-4 text-4xl font-bold">Selamat Datang di Bidtik</h2>
                            <p className="text-xl">Portal berita dan informasi terkini</p>
                        </div>
                    </section>

                    {/* Berita Section */}
                    <section className="py-12">
                        <div className="mx-auto max-w-6xl px-4">
                            <h3 className="mb-8 text-center text-3xl font-bold">Berita Terbaru</h3>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {/* Card Berita 1 */}
                                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                                    <div className="h-48 bg-gray-300"></div>
                                    <div className="p-4">
                                        <h4 className="mb-2 text-lg font-bold">Judul Berita Pertama</h4>
                                        <p className="mb-3 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Baca Selengkapnya →</button>
                                    </div>
                                </div>

                                {/* Card Berita 2 */}
                                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                                    <div className="h-48 bg-gray-300"></div>
                                    <div className="p-4">
                                        <h4 className="mb-2 text-lg font-bold">Judul Berita Kedua</h4>
                                        <p className="mb-3 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Baca Selengkapnya →</button>
                                    </div>
                                </div>

                                {/* Card Berita 3 */}
                                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                                    <div className="h-48 bg-gray-300"></div>
                                    <div className="p-4">
                                        <h4 className="mb-2 text-lg font-bold">Judul Berita Ketiga</h4>
                                        <p className="mb-3 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Baca Selengkapnya →</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-gray-800 py-8 text-white">
                    <div className="mx-auto max-w-6xl px-4 text-center">
                        <p>&copy; 2024 Bidtik. Semua hak dilindungi.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
