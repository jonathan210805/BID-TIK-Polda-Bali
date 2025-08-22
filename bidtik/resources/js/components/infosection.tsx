import React, { useState } from 'react';
import { FaAward, FaBuilding, FaFacebookF, FaInstagram, FaShieldAlt, FaTwitter, FaYoutube } from 'react-icons/fa';

// Tipe data tab
type ActiveTab = 'achievement' | 'polres' | 'social';

// Data Dummy
const achievementData = [
    {
        icon: <FaAward />,
        title: 'Juara 1 Lomba Polmas Tingkat Nasional',
        description: 'Diraih oleh Bhabinkamtibmas Polres Badung atas inovasi program "Polisi Peduli Sesama".',
    },
    {
        icon: <FaAward />,
        title: 'Pengungkapan Kasus Narkoba Jaringan Internasional',
        description: 'Tim Reserse Narkoba Polda Bali berhasil mengungkap jaringan narkotika dan menyita 25 kg sabu.',
    },
    {
        icon: <FaAward />,
        title: 'Peringkat WBK (Wilayah Bebas Korupsi) 2024',
        description: 'Polresta Denpasar berhasil mempertahankan predikat WBK dari KemenPAN-RB.',
    },
];

const polresData = [
    { icon: <FaBuilding />, name: 'Polresta Denpasar' },
    { icon: <FaBuilding />, name: 'Polres Badung' },
    { icon: <FaBuilding />, name: 'Polres Gianyar' },
    { icon: <FaBuilding />, name: 'Polres Tabanan' },
    { icon: <FaBuilding />, name: 'Polres Klungkung' },
    { icon: <FaBuilding />, name: 'Polres Bangli' },
    { icon: <FaBuilding />, name: 'Polres Karangasem' },
    { icon: <FaBuilding />, name: 'Polres Jembrana' },
    { icon: <FaBuilding />, name: 'Polres Buleleng' },
];

const socialMediaData = [
    {
        icon: <FaInstagram />,
        name: 'Instagram',
        handle: '@divisihumaspolri',
        url: 'https://www.instagram.com/divisihumaspolri/',
    },
    {
        icon: <FaFacebookF />,
        name: 'Facebook',
        handle: 'Divisi Humas Polri',
        url: 'https://www.facebook.com/DivHumasPolri/',
    },
    {
        icon: <FaTwitter />,
        name: 'Twitter (X)',
        handle: '@DivHumas_Polri',
        url: 'https://twitter.com/DivHumas_Polri',
    },
    {
        icon: <FaYoutube />,
        name: 'YouTube',
        handle: 'DIVISI HUMAS POLRI',
        url: 'https://www.youtube.com/c/DIVISIHUMASPOLRI',
    },
];

const InfoSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ActiveTab>('achievement');

    const renderContent = () => {
        switch (activeTab) {
            case 'achievement':
                return (
                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {achievementData.map((item, index) => (
                            <div key={index} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                                <div className="mb-4 text-4xl text-blue-600">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'polres':
                return (
                    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {polresData.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center rounded-2xl border border-gray-100 bg-white p-4 shadow-md transition-all hover:shadow-xl"
                            >
                                <div className="mr-3 text-2xl text-blue-500">{item.icon}</div>
                                <span className="font-medium text-gray-700">{item.name}</span>
                            </div>
                        ))}
                    </div>
                );
            case 'social':
                return (
                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {socialMediaData.map((item, index) => (
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                className="flex items-center rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition-all hover:shadow-xl"
                            >
                                <div className="mr-4 text-3xl text-blue-600">{item.icon}</div>
                                <div>
                                    <p className="font-semibold text-gray-800">{item.name}</p>
                                    <p className="text-sm text-blue-500">{item.handle}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="my-12">
            {/* Heading */}
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Informasi Kepolisian</h2>
                <p className="text-sm text-gray-500">Ikuti terus pencapaian, informasi Polres jajaran, dan media sosial resmi Polri.</p>
            </div>

            {/* Tab Menu */}
            <div className="mb-8 flex justify-center">
                <div className="inline-flex rounded-full bg-gray-100 p-1">
                    <button
                        onClick={() => setActiveTab('achievement')}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                            activeTab === 'achievement' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:text-blue-600'
                        }`}
                    >
                        <FaAward className="mr-2 inline-block" /> Achievement
                    </button>
                    <button
                        onClick={() => setActiveTab('polres')}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                            activeTab === 'polres' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:text-blue-600'
                        }`}
                    >
                        <FaShieldAlt className="mr-2 inline-block" /> Polres Jajaran
                    </button>
                    <button
                        onClick={() => setActiveTab('social')}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                            activeTab === 'social' ? 'bg-blue-600 text-white shadow' : 'text-gray-600 hover:text-blue-600'
                        }`}
                    >
                        <FaInstagram className="mr-2 inline-block" /> Media Sosial
                    </button>
                </div>
            </div>

            {/* Content */}
            {renderContent()}
        </section>
    );
};

export default InfoSection;
