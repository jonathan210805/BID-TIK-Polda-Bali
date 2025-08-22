import Card from '@/components/card';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Newspage() {
    // Semua berita (urut dari terbaru ke terlama)
    const allNews = Array.from({ length: 95 }).map((_, i) => ({
        title: `Berita ${i + 1}`,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, maxime!',
        date: '14 Juli 2025',
        day: 'Rabu',
        time: '12.00',
        img: '/polisi.jpeg',
    }));

    const itemsPerPage = 10; // 1 highlight + 9 card
    const [currentPage, setCurrentPage] = useState(1);

    // Hitung range berita tiap halaman
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageNews = allNews.slice(startIndex, endIndex);

    // Highlight selalu berita pertama di page itu
    const highlight = pageNews[0];
    const newsCards = pageNews.slice(1);

    const totalPages = Math.ceil(allNews.length / itemsPerPage);

    // Fungsi bikin pagination numbers dengan ellipsis
    const getPageNumbers = () => {
        const pages = [];
        const maxShown = 3; // jumlah halaman ditampilkan di sekitar currentPage

        if (totalPages <= 7) {
            // kalau halaman sedikit tampilkan semua
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <>
            <Head title="Berita - TIK POLDA BALI" />
            <div className="flex min-h-screen flex-col bg-gray-50">
                {/* Navbar */}
                <Navbar />

                <main className="mx-auto max-w-6xl flex-grow px-4 py-8">
                    {/* Highlight */}
                    {highlight && (
                        <div className="mb-10 flex justify-center">
                            <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg">
                                <img src={highlight.img} alt={highlight.title} className="w-full rounded object-cover object-center md:h-[400px]" />
                                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h2 className="text-lg font-bold text-white md:text-2xl">{highlight.title}</h2>
                                    <p className="text-sm text-gray-200">{highlight.date}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* List berita */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {newsCards.map((news, index) => (
                            <Card key={index} img={news.img} title={news.title} desc={news.desc} day={news.day} date={news.date} time={news.time} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-10 flex justify-center space-x-2">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="rounded-md border px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                        >
                            «
                        </button>

                        {getPageNumbers().map((page, i) =>
                            page === '...' ? (
                                <span key={i} className="px-3 py-1 text-gray-500">
                                    ...
                                </span>
                            ) : (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(Number(page))}
                                    className={`rounded-md border px-3 py-1 ${
                                        currentPage === page ? 'border-blue-600 bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {page}
                                </button>
                            ),
                        )}

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="rounded-md border px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                        >
                            »
                        </button>
                    </div>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
