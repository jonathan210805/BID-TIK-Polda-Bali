import Carousel from '@/components/carousel';
import Footer from '@/components/footer';
import Hero from '@/components/herosection';
import InfoSection from '@/components/infosection';
import Navbar from '@/components/navbar';
import { Head } from '@inertiajs/react';
export default function Welcome() {
    return (
        <>
            <Head title="Bidtik - Beranda" />

            <div className="flex min-h-screen flex-col bg-gray-100">
                {/* Navbar */}
                <Navbar />

                {/* Content */}
                <main className="flex-grow">
                    {/* Hero Section pakai slider */}
                    <Hero />

                    {/* Berita Section (pakai carousel) */}
                    <section className="py-12">
                        <div className="mx-auto max-w-6xl px-4">
                            <h3 className="mb-8 text-center text-3xl font-extrabold text-black">Berita Terkini</h3>
                            <Carousel />
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
