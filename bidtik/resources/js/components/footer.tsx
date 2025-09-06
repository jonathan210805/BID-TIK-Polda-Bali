import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#193043] p-6 text-gray-400">
            <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
                {/* Left: Name */}
                <h2 className="text-lg font-bold">BID TIK POLDA BALI</h2>

                {/* Right: Icons */}
                <div className="mt-4 flex items-center space-x-4 text-2xl md:mt-0">
                    <a href="https://www.youtube.com/@bidtikpoldabali">
                        <FaYoutube className="cursor-pointer transition hover:scale-110" />
                    </a>
                    <a href="https://www.tiktok.com/@bidtik_poldabali">
                        <FaTiktok className="cursor-pointer transition hover:scale-110" />
                    </a>
                    <a href="https://www.instagram.com/bidtikpoldabali_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <FaInstagram className="cursor-pointer transition hover:scale-110" />{' '}
                    </a>
                </div>
            </div>

            {/* Bottom Info */}
            <div className="mt-6 flex flex-col items-center justify-between text-sm md:flex-row">
                {/* Email */}
                <div className="flex items-center space-x-2">
                    <MdPhone />
                    <MdEmail />
                    <span>poldabali@gmail.com</span>
                </div>

                {/* Address */}
                <div className="mt-4 flex items-center space-x-2 md:mt-0">
                    <MdLocationOn />
                    <span>JL. WR Supratman No.7, Sumerta Kauh, Kec.Denpasar Timur, Kota Denpasar, Bali 80236</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
