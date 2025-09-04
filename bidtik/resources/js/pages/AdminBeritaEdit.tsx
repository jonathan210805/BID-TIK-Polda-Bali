import { useForm } from '@inertiajs/react';

type Berita = {
    id: number;
    judul: string;
    isi: string;
    gambar?: string | null;
    tanggal?: string;
};

type Props = {
    berita: Berita;
    onSuccess?: () => void; // Fungsi untuk menutup modal
};

export default function AdminBeritaEdit({ berita, onSuccess }: Props) {
    const { data, setData, put, processing, errors } = useForm<{
        judul: string;
        isi: string;
        gambar: File | null;
    }>({
        judul: berita.judul,
        isi: berita.isi,
        gambar: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const hasFile = data.gambar !== null;

        put(`/admin/news/${berita.id}`, {
            ...data,
            forceFormData: hasFile,
            onSuccess: () => {
                if (onSuccess) onSuccess();
            },
        });
    };

    return (
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 text-black shadow-lg">
            <h1 className="mb-4 text-2xl font-bold">Edit Berita</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Judul</label>
                    <input
                        type="text"
                        value={data.judul}
                        onChange={(e) => setData('judul', e.target.value)}
                        className="w-full rounded-lg border p-2"
                    />
                    {errors.judul && <p className="text-red-500">{errors.judul}</p>}
                </div>

                <div>
                    <label className="block font-medium">Isi</label>
                    <textarea value={data.isi} onChange={(e) => setData('isi', e.target.value)} className="h-32 w-full rounded-lg border p-2" />
                    {errors.isi && <p className="text-red-500">{errors.isi}</p>}
                </div>

                <div>
                    <label className="block font-medium">Gambar (opsional)</label>
                    <input
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.files && e.target.files[0]) {
                                setData('gambar', e.target.files[0]);
                            }
                        }}
                        className="w-full rounded-lg border p-2"
                    />
                    {errors.gambar && <p className="text-red-500">{errors.gambar}</p>}
                </div>

                <div className="flex justify-end space-x-3">
                    <button type="button" onClick={onSuccess} className="rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-400">
                        Batal
                    </button>
                    <button
                        type="submit"
                        disabled={processing}
                        className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-50"
                    >
                        Simpan Perubahan
                    </button>
                </div>
            </form>
        </div>
    );
}
