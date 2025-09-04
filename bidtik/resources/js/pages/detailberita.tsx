import Card from '@/components/card';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

// Tipe data berita
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

interface DetailBeritaProps {
    berita: Berita;
    relatedBerita: Berita[];
}

const DetailBerita: React.FC<DetailBeritaProps> = ({ berita, relatedBerita }) => {
    return (
        <>
            <Head title={berita.title} />
            <div className="flex min-h-screen flex-col bg-gray-50">
                <Navbar />
                <main className="mx-auto max-w-4xl flex-grow px-4 py-8">
                    {/* Artikel utama */}
                    <article>
                        <h1 className="mb-4 text-3xl font-bold">{berita.title}</h1>
                        <p className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                            <span className="font-semibold">{berita.day}</span>
                            <span>{berita.date}</span>
                            <span>{berita.time} WITA</span>
                        </p>
                        <img src={berita.img} alt={berita.title} className="mb-8 w-full rounded-2xl break-all shadow" />
                        <div className="prose lg:prose-lg max-w-none text-justify break-all text-black">
                            <p>{berita.desc}</p>
                        </div>
                    </article>

                    {/* Bagian Section Baca Juga */}
                    {relatedBerita.length > 0 && (
                        <section className="mt-12">
                            <h2 className="mb-6 text-2xl font-bold">Baca Juga</h2>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {relatedBerita.map((news) => (
                                    <Link key={news.id} href={`/news/${news.id}`}>
                                        <Card img={news.img} title={news.title} desc={news.desc} day={news.day} date={news.date} time={news.time} />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default DetailBerita;
