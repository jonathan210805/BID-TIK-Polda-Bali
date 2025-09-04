import { useForm } from '@inertiajs/react';

type Props = {
    onSuccess?: () => void; // supaya bisa dipanggil dari parent untuk nutup modal
};

export default function AdminBeritaCreate({ onSuccess }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        judul: '',
        isi: '',
        gambar: null as File | null,
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/news', {
            forceFormData: true,
            onSuccess: () => {
                reset(); // reset form
                if (onSuccess) onSuccess(); // tutup modal
            },
        });
    };

    return (
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 text-black shadow-lg">
            <h1 className="mb-4 text-2xl font-bold">Tambah Berita</h1>

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
                    <label className="block font-medium">Gambar</label>
                    <input
                        type="file"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.files) {
                                setData('gambar', e.target.files[0]);
                            }
                        }}
                        className="w-full rounded-lg border p-2"
                    />
                    {errors.gambar && <p className="text-red-500">{errors.gambar}</p>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
                >
                    Simpan
                </button>
            </form>
        </div>
    );
}
