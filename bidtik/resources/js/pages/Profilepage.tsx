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
                        <p className="text-lg leading-relaxed text-gray-700">
                            Visi kami adalah mewujudkan kepolisian yang modern, profesional, dan terpercaya melalui pemanfaatan teknologi informasi.{' '}
                            <br />
                            <br />
                            Misi kami meliputi:
                        </p>
                        <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-700">
                            <li>Meningkatkan sistem informasi yang handal dan aman</li>
                            <li>Mendukung operasional kepolisian dengan solusi teknologi</li>
                            <li>Meningkatkan pelayanan publik berbasis digital</li>
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
                        <img src="/struktur-bidtik.webp" alt="Struktur Organisasi BID TIK" className="mx-auto rounded-lg text-gray-700 shadow-md" />
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
                                <strong>Alamat:</strong> Jl. WR Supratman, Denpasar, Bali
                            </p>
                            <p>
                                <strong>Telepon:</strong> (0361) 123456
                            </p>
                            <p>
                                <strong>Email:</strong> info@bidtikpoldabali.go.id
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
