import { Head, router, usePage } from '@inertiajs/react';
import { PlusCircle, X } from 'lucide-react';
import { useState } from 'react';
import AdminBeritaCreate from './AdminBeritaCreate';
import AdminBeritaEdit from './AdminBeritaEdit';
import AdminLayout from './AdminLayout';

type Berita = {
    id: number;
    judul: string;
    isi: string;
    gambar?: string | null;
    tanggal?: string;
};

export default function AdminNews() {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState<Berita | null>(null);

    const { props } = usePage<{ berita: Berita[] }>();
    const berita = props.berita || [];

    const truncateIsi = (text: string, maxChars = 150) => {
        return text.length > maxChars ? text.slice(0, maxChars) + '...' : text;
    };

    return (
        <AdminLayout>
            <Head title="Admin • Berita" />

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Kelola Berita</h1>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-white shadow transition hover:bg-red-700"
                >
                    <PlusCircle className="h-4 w-4" /> Tambah Berita
                </button>
            </div>

            {/* Tabel Berita */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full table-fixed border-collapse border border-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="w-1/4 px-6 py-3 font-medium text-gray-600">Judul</th>
                            <th className="w-2/4 px-6 py-3 font-medium text-gray-600">Isi</th>
                            <th className="w-1/6 px-6 py-3 font-medium text-gray-600">Tanggal</th>
                            <th className="w-1/6 px-6 py-3 font-medium text-gray-600">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {berita.map((b) => (
                            <tr key={b.id} className="border-t align-top hover:bg-gray-50">
                                <td className="w-1/4 px-6 py-3 break-words whitespace-normal text-black">{b.judul}</td>
                                <td className="w-2/4 px-6 py-3 break-words whitespace-normal text-black">{truncateIsi(b.isi, 150)}</td>
                                <td className="w-1/6 px-6 py-3 text-black">{b.tanggal ?? '-'}</td>
                                <td className="w-1/6 space-x-2 px-6 py-3">
                                    <button
                                        onClick={() => setShowEditModal(b)}
                                        className="rounded-lg bg-blue-500 px-3 py-1 text-xs text-white hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (confirm('Yakin ingin menghapus berita ini?')) {
                                                router.delete(`/admin/news/${b.id}`);
                                            }
                                        }}
                                        className="rounded-lg bg-red-500 px-3 py-1 text-xs text-white hover:bg-red-600"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Create */}
            {showCreateModal && (
                <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                    <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
                        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={() => setShowCreateModal(false)}>
                            <X className="h-5 w-5" />
                        </button>
                        <AdminBeritaCreate onSuccess={() => setShowCreateModal(false)} />
                    </div>
                </div>
            )}

            {/* Modal Edit */}
            {showEditModal && (
                <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                    <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
                        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" onClick={() => setShowEditModal(null)}>
                            <X className="h-5 w-5" />
                        </button>
                        <AdminBeritaEdit berita={showEditModal} onSuccess={() => setShowEditModal(null)} />
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
