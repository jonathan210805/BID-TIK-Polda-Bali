import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type HeroItem = {
    id: number;
    judul?: string | null;
    deskripsi?: string | null;
    img: string;
};

type HeroProps = {
    heros: HeroItem[];
};

const Hero: React.FC<HeroProps> = ({ heros }) => {
    return (
        <div className="relative h-[90vh] w-full">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                loop
                className="h-full w-full"
            >
                {heros.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative h-full w-full">
                            <img src={item.img} alt={item.judul || 'Hero Slide'} className="h-full w-full object-cover" />
                            {/* Overlay untuk teks */}
                            <div className="absolute inset-0 flex flex-col items-start justify-end bg-black/40 px-6 text-left">
                                {item.judul && <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">{item.judul}</h1>}
                                {item.deskripsi && <p className="max-w-2xl text-sm text-gray-200 md:text-lg">{item.deskripsi}</p>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
