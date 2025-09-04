import Card from '@/components/card';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Pagination from '@/components/pagination';
import { Head, Link } from '@inertiajs/react';
import React, { useState } from 'react';

// Objek Berita
interface Berita {
    id: number;
    title: string;
    slug: string;
    desc: string;
    date: string;
    day: string;
    time: string;
    img: string;
}

// Prop Newspage
interface NewspageProps {
    allNews: Berita[]; // allNews adalah sebuah array dari objek Berita
}

// Tipe Komponen Newspage
const Newspage: React.FC<NewspageProps> = ({ allNews }) => {
    const itemsPerPage = 10; // 1 highlight + 9 card
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageNews = allNews.slice(startIndex, endIndex);

    const highlight = pageNews[0];
    const newsCards = pageNews.slice(1);

    const totalPages = Math.ceil(allNews.length / itemsPerPage);

    return (
        <>
            <Head title="Berita - TIK POLDA BALI" />
            <div className="flex min-h-screen flex-col bg-gray-50">
                <Navbar />

                <main className="mx-auto max-w-6xl flex-grow px-4 py-8">
                    {/* Bungkus Highlight dengan Link */}
                    {highlight && (
                        <Link href={`/news/${highlight.id}`}>
                            <div className="mb-10 flex justify-center">
                                <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg">
                                    <img
                                        src={highlight.img}
                                        alt={highlight.title}
                                        className="w-full rounded object-cover object-center md:h-[400px]"
                                    />
                                    <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <h2 className="text-lg font-bold text-white md:text-2xl">{highlight.title}</h2>
                                        <p className="text-sm text-gray-200">{highlight.date}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Card List */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {newsCards.map((news) => (
                            <Link key={news.id} href={`/news/${news.id}`}>
                                <Card img={news.img} title={news.title} desc={news.desc} day={news.day} date={news.date} time={news.time} />
                            </Link>
                        ))}
                    </div>

                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Newspage;
