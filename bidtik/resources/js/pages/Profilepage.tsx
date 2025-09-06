import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Head } from '@inertiajs/react';
import { Layers, Phone, Users } from 'lucide-react';
import React from 'react';

const ProfilePage: React.FC = () => {
    return (
        <>
            <Head title="Profil - BID TIK POLDA BALI" />
            <div className="flex min-h-screen flex-col bg-gray-50">
                <Navbar />

                {/* Hero Section */}
                <section className="bg-white py-16 shadow-sm">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <img
                            src="/kepalabidtik.webp"
                            alt="Kepala TIK Polda Bali"
                            className="mx-auto mb-6 h-40 w-40 rounded-full border-4 border-gray-200 object-cover shadow"
                        />
                        <h1 className="text-4xl font-bold text-gray-800">TIK POLDA BALI</h1>
                        <p className="mt-3 text-lg text-gray-600">Unit Teknologi Informasi dan Komunikasi Kepolisian Daerah Bali</p>
                    </div>
                </section>

                {/* Visi & Misi */}
                <section className="bg-gray-50 py-20">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="mb-8 flex items-center gap-3">
                            <Users className="h-8 w-8 text-red-600" />
                            <h2 className="text-2xl font-bold text-gray-800">Visi & Misi</h2>
                        </div>
                        <p className="text-lg leading-relaxed font-bold text-gray-700">
                            Mewujudkan teknologi informasi dan komunikasi yang modern, terintegrasi, dan berdaya saing guna mendukung kegiatan
                            Kepolisian di Wilayah Hukum Polda Bali dalam mewujudkan keamanan dan ketertiban masyarakat. <br />
                            <br />
                            Misi BID TIK Polda Bali
                        </p>
                        <ul className="mt-6 list-disc space-y-3 pl-6 font-bold text-gray-700">
                            <li>
                                Modern. Satker Bid TIK Polda Bali melakukan modernisasi dalam rangka penyelenggaraan pembinaan teknologi informasi dan
                                komunikasi kepolisian dalam rangka mendukung operasional Kepolisian, termasuk pemenuhan kebutuhan Almatsus yang makin
                                modern;
                            </li>
                            <li>
                                Handal. Satker Bid TIK Polda Bali, diharapkan memberikan dukungan teknis pembinaan dan penyelenggaraan sistem
                                informasi yang tangguh, aman dan terpercaya serta dapat diandalkan;
                            </li>
                            <li>
                                Terintegrasi. Satker Bid TIK Polda Bali dituntut untuk dapat menyelenggarakan pengembangan dan pembinaan sistem
                                teknologi informasi dan komunikasi yang saling terkoneksi (interkoneksi) pada jaringan sistem CCTV instansi terkait
                                antara lain jalan tol, Dishub dan Kominfo dengan RTMC Dit Lantas Polda Bali serta Command Center di seluruh Polres/ta
                                Se-Bali melalui sistem kendali monitoring di Ruang Command Center Biro Ops Polda Bali.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Struktur Organisasi */}
                <section className="bg-white py-20 shadow-inner">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="mb-8 flex items-center gap-3">
                            <Layers className="h-8 w-8 text-red-600" />
                            <h2 className="text-2xl font-bold text-gray-800">Struktur Organisasi</h2>
                        </div>
                        <p className="mb-6 text-lg leading-relaxed text-gray-700">
                            Struktur organisasi BID TIK Polda Bali dirancang untuk mendukung koordinasi yang efektif dan efisien. Berikut bagan
                            struktur organisasi:
                        </p>
                        <img
                            src="/struktur_organisasi_bid_tik.jpg"
                            alt="Struktur Organisasi BID TIK"
                            className="mx-auto rounded-lg text-gray-700 shadow-md"
                        />
                    </div>
                </section>

                {/* Kontak Kami */}
                <section className="bg-gray-50 py-20">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="mb-8 flex items-center gap-3">
                            <Phone className="h-8 w-8 text-red-600" />
                            <h2 className="text-2xl font-bold text-gray-800">Kontak Kami</h2>
                        </div>
                        <p className="mb-6 text-lg leading-relaxed text-gray-700">
                            Hubungi kami untuk informasi lebih lanjut atau layanan terkait BID TIK Polda Bali.
                        </p>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                <strong>Alamat:</strong> Jl. WR Supratman No.7, Sumerta Kauh, Kec. Denpasar Tim., Kota Denpasar, Bali 80236
                            </p>
                            <p>
                                <strong>Telepon:</strong> (0361) 227711
                            </p>
                            <p>
                                <strong>Email:</strong> emailtester@gmail.com
                            </p>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default ProfilePage;
