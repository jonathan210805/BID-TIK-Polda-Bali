import { useState } from 'react';

type CardProps = {
    img: string;
    title: string;
    desc: string;
    day: string;
    date: string;
    time: string;
};

export default function Card({ img, title, desc, day, date, time }: CardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const limit = 20; // maks 20 kata
    const words = desc.trim().split(/\s+/);
    const shouldTruncate = words.length > limit;
    const truncated = shouldTruncate ? words.slice(0, limit - 1).join(' ') + ' ' : desc;

    return (
        <div className="mx-auto min-h-[420px] w-[280px] overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            {/* Gambar */}
            <img src={img} alt={title} className="h-[250px] w-full object-cover" />

            {/* Isi Card */}
            <div className="flex flex-col p-4">
                {/* Judul */}
                <h3 className="line-clamp-2 text-lg font-bold text-gray-900">{title}</h3>

                {/* Deskripsi */}
                <p className="mt-2 text-sm text-gray-600">
                    {isExpanded || !shouldTruncate ? (
                        <>
                            {desc}{' '}
                            {shouldTruncate && (
                                <button onClick={() => setIsExpanded(false)} className="text-blue-600 hover:underline">
                                    sembunyikan
                                </button>
                            )}
                        </>
                    ) : (
                        <>
                            {truncated}
                            <button onClick={() => setIsExpanded(true)} className="text-blue-600 hover:underline">
                                ...selengkapnya
                            </button>
                        </>
                    )}
                </p>

                {/* Info tanggal */}
                <div className="mt-3 flex justify-between text-xs font-semibold text-gray-500">
                    <span>{day}</span>
                    <span>{date}</span>
                    <span>{time} WITA</span>
                </div>
            </div>
        </div>
    );
}
