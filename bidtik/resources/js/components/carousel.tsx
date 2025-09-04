import Card from '@/components/card';
import Marquee from 'react-fast-marquee';

type NewsItem = {
    id: number;
    title: string;
    desc: string;
    day?: string | null;
    date?: string | null;
    time?: string | null;
    img?: string | null;
};

export default function Carousel({ newsData }: { newsData: NewsItem[] }) {
    if (!newsData || newsData.length === 0) {
        return <p className="text-center text-gray-500">Belum ada berita</p>;
    }

    return (
        <div className="w-full px-6 py-8">
            <Marquee pauseOnHover speed={50} gradient={false}>
                {newsData.map((item) => (
                    <div key={item.id} className="mx-3">
                        <Card
                            img={item.img || ''}
                            title={item.title || ''}
                            desc={item.desc || ''}
                            day={item.day || ''}
                            date={item.date || ''}
                            time={item.time || ''}
                            linkTo={`/news/${item.id}`}
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
