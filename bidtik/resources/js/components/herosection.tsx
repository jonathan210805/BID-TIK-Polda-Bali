import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero: React.FC = () => {
    const heroImages = [
        { src: '/polisi.jpeg', alt: 'Slide 1' },
        { src: '/logo TIK baru.png', alt: 'Slide 2' },
        { src: '/test.webp', alt: 'Slide 3' },
    ];

    return (
        <div className="h-[80vh] w-full">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                loop
                className="h-full w-full"
            >
                {heroImages.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full w-full">
                            <img src={item.src} alt={item.alt} className="h-full w-full object-contain" />
                            {/* Overlay untuk teks */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <h1 className="text-3xl font-bold text-white md:text-5xl">Selamat Datang di Website TIK</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
