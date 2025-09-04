import { Link } from '@inertiajs/react';
import { useState } from 'react';

type CardProps = {
    img: string;
    title: string;
    desc: string;
    day: string;
    date: string;
    time: string;
    linkTo?: string;
};

export default function Card({ img, title, desc, day, date, time, linkTo }: CardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const limit = 20;
    const words = desc.trim().split(/\s+/);
    const shouldTruncate = words.length > limit;
    const truncated = shouldTruncate ? words.slice(0, limit - 1).join(' ') + ' ' : desc;

    const cardContent = (
        <div className="mx-auto flex min-h-[420px] w-[280px] flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <img src={img} alt={title} className="h-[250px] w-full object-cover" />
            <div className="flex flex-1 flex-col p-4">
                <h3 className="line-clamp-2 text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-2 line-clamp-3 text-sm break-words text-gray-600">
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
                <div className="mt-auto flex justify-between text-xs font-semibold text-gray-500">
                    <span>{day}</span>
                    <span>{date}</span>
                    <span>{time} WITA</span>
                </div>
            </div>
        </div>
    );

    return linkTo ? <Link href={linkTo}>{cardContent}</Link> : cardContent;
}
