import { Head, Link, usePage } from '@inertiajs/react';
import { PlusCircle } from 'lucide-react';
import AdminLayout from './AdminLayout';

const StatCard = ({ label, value }: { label: string; value: string | number }) => (
    <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-5 shadow-sm">
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="mt-2 text-3xl font-extrabold text-red-600">{value}</p>
    </div>
);

export default function AdminDashboard() {
    const { totalBerita, publishBulanIni, aktivitas }: any = usePage().props;

    return (
        <AdminLayout>
            <Head title="Admin • Dashboard" />

            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-600">Selamat datang kembali, Admin! 🎉</p>
                </div>
                <Link
                    href={'/admin/news'}
                    className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-white shadow transition hover:bg-red-700"
                >
                    <PlusCircle className="h-4 w-4" />
                    Tambah Berita
                </Link>
            </div>

            {/* Statistik */}
            <div className="grid gap-4 text-center md:grid-cols-4">
                <StatCard label="Total Berita" value={totalBerita} />
                <StatCard label="Publish Bulan Ini" value={publishBulanIni} />
            </div>

            {/* Aktivitas terakhir */}
            <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold text-gray-800">Aktivitas Terakhir</h2>
                <ul className="space-y-3 text-sm">
                    {aktivitas && aktivitas.length > 0 ? (
                        aktivitas.map((berita: any) => (
                            <li key={berita.id} className="text-gray-700">
                                <span className="text-gray-500">
                                    [{new Date(berita.updated_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}]
                                </span>{' '}
                                Admin mempublikasikan <b className="text-red-600">{berita.judul}</b>
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-500 italic">Belum ada aktivitas</li>
                    )}
                </ul>
            </div>
        </AdminLayout>
    );
}
