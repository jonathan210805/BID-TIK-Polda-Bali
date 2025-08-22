// resources/js/components/Footer.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#d2c0a0] p-6 text-black">
            <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
                {/* Left: Logo / Name */}
                <h2 className="text-lg font-bold">BID TIK POLDA BALI</h2>

                {/* Right: Icons */}
                <div className="mt-4 flex items-center space-x-4 text-2xl md:mt-0">
                    <FaYoutube className="cursor-pointer transition hover:scale-110" />
                    <IoClose className="cursor-pointer transition hover:scale-110" />
                    <FaFacebookF className="cursor-pointer transition hover:scale-110" />
                    <FaInstagram className="cursor-pointer transition hover:scale-110" />
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
