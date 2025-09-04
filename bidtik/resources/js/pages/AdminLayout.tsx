import Sidebar from '@/components/sidebar';
import { ReactNode } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <Sidebar />
            </aside>

            {/* Konten Utama */}
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
}
