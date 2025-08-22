import Card from '@/components/card';
import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel: React.FC = () => {
    const newsData = [
        {
            title: 'Pemeliharaan Server Polda TIK Bali',
            date: '14 Juli 2025',
            day: 'Senin',
            time: '12.00',
            img: '/polisi.jpeg',
            desc: 'Kegiatan pemeliharaan server utama di Polda TIK Bali yang akan berdampak pada beberapa layanan publik online.',
        },
        {
            title: 'Rapat Koordinasi Keamanan Siber',
            date: '15 Juli 2025',
            day: 'Selasa',
            time: '09.00',
            img: '/polisi.jpeg',
            desc: 'Rapat membahas kesiapan keamanan siber dalam menghadapi potensi serangan menjelang acara besar nasional.',
        },
        {
            title: 'Update Sistem ETLE Nasional',
            date: '16 Juli 2025',
            day: 'Rabu',
            time: '10.00',
            img: '/polisi.jpeg',
            desc: 'Peningkatan fitur ETLE nasional agar dapat lebih cepat memproses data pelanggaran lalu lintas secara real time.',
        },
        {
            title: 'Pelatihan Operator Command Center',
            date: '17 Juli 2025',
            day: 'Kamis',
            time: '13.00',
            img: '/polisi.jpeg',
            desc: 'Pelatihan teknis bagi operator command center untuk meningkatkan responsibilitas terhadap kejadian darurat.',
        },
        {
            title: 'Apel Gabungan Persiapan G20',
            date: '18 Juli 2025',
            day: 'Jumat',
            time: '08.00',
            img: '/test.webp',
            desc: 'Apel gabungan bersama stakeholder terkait dalam rangka persiapan pengamanan kegiatan KTT G20 di Bali.',
        },
    ];

    const extendedNewsData = [...newsData, ...newsData];

    return (
        <div className="w-full px-6 py-8">
            <Swiper
                className="continuous-swiper"
                modules={[Autoplay, FreeMode]}
                spaceBetween={20}
                slidesPerView={3}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={5000} // Durasi transisi
                grabCursor={true}
            >
                {extendedNewsData.map((item, index) => (
                    <SwiperSlide key={`${item.title}-${index}`}>
                        <Card img={item.img} title={item.title} desc={item.desc} day={item.day} date={item.date} time={item.time} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
