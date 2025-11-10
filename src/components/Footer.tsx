import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Span from './Span';
import Paragraph from './Paragraph';
import Section from './Section';

const Footer = () => {
    return (
        <footer className="bg-(--teal) text-white text-center pt-10 sm:pt-20 pb-10 relative ">
            <Section>
                {/* Logo and Social Icons */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <div className="mb-4 md:mb-0 flex items-center gap-2">
                        <Image
                            src="/logo/logo.svg"
                            alt="Logo"
                            width={500}
                            height={500}
                            className="h-[60px] w-auto"
                        />
                    </div>
                    <div className="flex gap-4">
                        <Link href="#" aria-label="Facebook" className="hover:text-(--white)">
                            <FaFacebookF className="w-5 h-5" />
                        </Link>
                        <Link href="#" aria-label="Instagram" className="hover:text-(--white)">
                            <FaInstagram className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
                {/* Navigation Links */}
                <div className="mb-6 text-sm flex flex-wrap justify-center gap-2">
                    {['Kochi', 'Kollam', 'Palakkad', 'Calicut', 'Thrissur', 'Pathanamthitta', 'Wayanad', 'Nagercoil', 'Perinthalmanna', 'Thiruvananthapuram', 'Mysore', 'Dubai'].map((city, idx) => (
                        <Span key={city}>
                            {city}
                            {idx !== 11 && <span className="mx-1">|</span>}
                        </Span>
                    ))}
                </div>
                {/* Address Info */}
                <div className="mb-4 text-xs leading-relaxed">
                    <Paragraph size='base'>Head Office: 5th floor, Puthuran Plaza, Mahatma Gandhi Rd. near Maharajas metro station,<br />Ernakulam South, Kochi, Kerala 682011</Paragraph>
                    <Paragraph size='base' className="mt-2">Calicut: 11/47 G, Cherooty Road, Kozhikode, Kerala, 673001</Paragraph>
                </div>
                <hr className="border-t border-white/30 my-4" />
                {/* Copyright and Contact */}
                <div className="flex flex-col md:flex-row items-center justify-between text-xs">
                    <Span className="mb-2 md:mb-0">@ 2025 - All Rights Reserved by <Span className="font-semibold">leadzstudyabroad.com</Span></Span>
                    <div className="flex items-center gap-4">
                        <Span className="flex items-center gap-1"><i className="fas fa-phone-alt"></i> +91 8893 2700 50</Span>
                        <Span className="flex items-center gap-1"><i className="fas fa-envelope"></i> info@leadzedu.com</Span>
                    </div>
                </div>
            </Section>
            {/* WhatsApp Floating Icon */}
            {/* <a href="https://wa.me/918893270050" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 bg-green-500 rounded-full p-2 shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-8 w-8" />
            </a> */}
        </footer>
    );
};

export default Footer;
