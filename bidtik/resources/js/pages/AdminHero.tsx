import { Head, useForm, usePage } from '@inertiajs/react';
import AdminLayout from './AdminLayout';

type HeroItem = {
    id: number;
    judul?: string;
    deskripsi?: string;
    gambar: string;
    urutan?: number;
};

export default function AdminHero() {
    const { props } = usePage<{ heros: HeroItem[] }>();
    const heros = props.heros || [];

    // Inertia form state
    const { data, setData, post, processing, reset, errors } = useForm({
        judul: '',
        deskripsi: '',
        gambar: null as File | null,
        urutan: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.hero.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AdminLayout>
            <Head title="Admin • Hero Section" />

            <div className="p-6 text-black">
                <h1 className="mb-6 text-2xl font-bold">Hero Section</h1>

                {/* --- Form Tambah Hero --- */}
                <form onSubmit={submit} className="mb-8 space-y-4 rounded border bg-white p-6 shadow">
                    <h2 className="text-lg font-semibold">Tambah Hero</h2>

                    <div>
                        <label className="block text-sm font-medium">Judul</label>
                        <input
                            type="text"
                            value={data.judul}
                            onChange={(e) => setData('judul', e.target.value)}
                            className="mt-1 w-full rounded border p-2"
                        />
                        {errors.judul && <p className="text-sm text-red-500">{errors.judul}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Deskripsi</label>
                        <textarea
                            value={data.deskripsi}
                            onChange={(e) => setData('deskripsi', e.target.value)}
                            className="mt-1 w-full rounded border p-2"
                        />
                        {errors.deskripsi && <p className="text-sm text-red-500">{errors.deskripsi}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Gambar</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData('gambar', e.target.files ? e.target.files[0] : null)}
                            className="mt-1 w-full rounded border p-2"
                        />
                        {errors.gambar && <p className="text-sm text-red-500">{errors.gambar}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Urutan</label>
                        <input
                            type="number"
                            value={data.urutan}
                            onChange={(e) => setData('urutan', e.target.value)}
                            className="mt-1 w-full rounded border p-2"
                        />
                        {errors.urutan && <p className="text-sm text-red-500">{errors.urutan}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                    >
                        {processing ? 'Menyimpan...' : 'Simpan'}
                    </button>
                </form>

                {/* --- Menampilkan List Hero yang Ada --- */}
                {heros.length === 0 ? (
                    <p className="text-gray-500">Belum ada slide hero.</p>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2">
                        {heros.map((hero) => (
                            <div key={hero.id} className="rounded border bg-white p-4 shadow-sm">
                                <h2 className="font-semibold">{hero.judul || 'Tanpa Judul'}</h2>
                                <p className="text-sm text-gray-500">{hero.deskripsi}</p>
                                <p className="text-xs text-gray-400">Urutan: {hero.urutan}</p>
                                <img src={`/storage/${hero.gambar}`} alt={hero.judul || ''} className="mt-2 w-full rounded" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
