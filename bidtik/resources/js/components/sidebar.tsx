import { Link, usePage } from '@inertiajs/react';
import { FileText, Home, Image, Settings } from 'lucide-react';

export default function Sidebar() {
    const { url } = usePage();

    const menus = [
        { name: 'Dashboard', href: '/admin', icon: <Home size={18} /> },
        { name: 'Berita', href: '/admin/news', icon: <FileText size={18} /> },
        { name: 'Hero Section', href: '/admin/hero', icon: <Image size={18} /> },
        { name: 'Pengaturan', href: '/admin/settings', icon: <Settings size={18} /> },
    ];

    return (
        <div className="flex h-screen w-64 flex-col bg-white p-4 shadow-md">
            <div className="mb-8">
                <h1 className="text-xl font-bold text-red-600">Admin Panel</h1>
                <p className="text-sm text-gray-500">BID TIK POLDA BALI</p>
            </div>

            <nav className="flex flex-1 flex-col gap-2">
                {menus.map((menu, i) => (
                    <Link
                        key={i}
                        href={menu.href}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2 transition ${
                            (menu.href === '/admin' && url === '/admin') || (menu.href !== '/admin' && url.startsWith(menu.href))
                                ? 'bg-red-100 font-semibold text-red-600'
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        {menu.icon}
                        {menu.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
