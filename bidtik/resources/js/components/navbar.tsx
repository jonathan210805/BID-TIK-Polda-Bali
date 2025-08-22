// src/components/Navbar.jsx
import { Link } from '@inertiajs/react';
import { Home, Newspaper, Phone, User } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-[#d2c2a6] px-6 py-3 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo dan Judul */}
                <div className="flex items-center space-x-3">
                    <img
                        src="/logo TIK baru.png"
                        alt="Logo"
                        className="h-12 w-12" // ganti dengan path logo Anda di public
                    />

                    <div className="flex flex-col leading-tight">
                        <span className="text-lg font-bold tracking-wide text-black">
                            TIK <span className="text-red-600">NEWS</span>
                        </span>
                        <span className="text-lg font-bold text-black">POLDA BALI</span>
                    </div>
                </div>

                {/* Menu */}
                <div className="flex space-x-6 font-medium text-black">
                    <Link href="/" className="flex items-center space-x-1 hover:underline">
                        <Home size={18} /> <span>Home</span>
                    </Link>
                    <Link href="/news" className="flex items-center space-x-1 hover:underline">
                        <Newspaper size={18} /> <span>Berita</span>
                    </Link>
                    <Link href="/profil" className="flex items-center space-x-1 hover:underline">
                        <User size={18} /> <span>Profil</span>
                    </Link>
                    <Link href="/contact" className="flex items-center space-x-1 hover:underline">
                        <Phone size={18} /> <span>Contact</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
