import Carousel from '@/components/carousel';
import Footer from '@/components/footer';
import Hero from '@/components/herosection';
import InfoSection from '@/components/infosection';
import Navbar from '@/components/navbar';
import { Head, usePage } from '@inertiajs/react';

type NewsItem = {
    id: number;
    title: string;
    desc: string;
    day?: string | null;
    date?: string | null;
    time?: string | null;
    img?: string | null;
};

type HeroItem = {
    id: number;
    judul?: string | null;
    deskripsi?: string | null;
    img: string;
};

export default function Homepage() {
    const { props } = usePage<{ berita: NewsItem[]; heros: HeroItem[] }>();
    const berita = props.berita || [];
    const heros = props.heros || [];

    return (
        <>
            <Head title="Bidtik - Beranda" />
            <div className="flex min-h-screen flex-col bg-gray-100">
                {/* Navbar */}
                <Navbar />

                {/* Content */}
                <main className="flex-grow">
                    {/* Hero Section */}
                    <Hero heros={heros} />

                    {/* Berita Section */}
                    <section className="py-12">
                        <div className="mx-auto max-w-6xl px-4">
                            <h3 className="mb-8 text-center text-3xl font-extrabold text-black">Berita Terkini</h3>
                            <div>
                                <Carousel newsData={berita} />
                            </div>
                        </div>
                    </section>
                </main>

                {/* Info Section */}
                <InfoSection />

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
