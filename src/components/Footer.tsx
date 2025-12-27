import React from 'react';
import logo from '/icons/logo.svg';
import playstore from '/images/playstore.png';
import appstore from '/images/appstore.png';

// Design Tokens
const COLORS = {
    black: '#292D32',
    secondary: '#6A7686',
    stroke: '#E8E8E8',
    primary: '#1053D5',
};

const FONTS = {
    montserrat: 'Montserrat, sans-serif',
    lexend: 'Lexend Deca, sans-serif',
};

// Types
interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

// Data
const MAIN_MENU_LINKS: FooterLink[] = [
    { label: 'Categories', href: '#' },
    { label: 'Flash Deals', href: '#' },
    { label: 'Become Seller', href: '#' },
    { label: 'Top Up Game', href: '#' },
    { label: 'Track My Order', href: '#' },
    { label: 'Bluee Article', href: '#' },
    { label: 'Payment Method', href: '#' },
];

const COMPANY_LINKS: FooterLink[] = [
    { label: 'Contact Us', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
];

const SOCIAL_ICONS = [
    { icon: '/icons/ig.svg', href: '#' },
    { icon: '/icons/email.svg', href: '#' },
    { icon: '/icons/fb.svg', href: '#' },
    { icon: '/icons/tiktok.svg', href: '#' },
    { icon: '/icons/yt.svg', href: '#' },
    { icon: '/icons/twitter.svg', href: '#' },
];

const Footer: React.FC = () => {
    return (
        <footer className='border-t border-stroke-color bg-white w-full'>
            <div className="w-full bg-white px-4 py-8 md:px-[52px] md:py-[52px] max-w-[1176px] xl:px-0 xl:mx-auto">
                <div className="flex flex-col gap-8 md:gap-9">

                    {/* Top Section */}
                    <div className="flex flex-col xl:flex-row gap-10 xl:gap-[72px]">

                        {/* Brand Column */}
                        <div className="flex flex-col gap-4 md:gap-6 w-full xl:w-[349px] shrink-0">
                            {/* Logo */}
                            <div className="flex items-center gap-3">
                                <img src={logo} alt="" />
                                <span className="font-montserrat! font-black text-2xl text-black-color">BLUEE</span>
                            </div>
                            {/* Description */}
                            <p className="font-lexend font-medium text-base text-sec-color leading-[1.6]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            </p>
                        </div>

                        {/* Navigation Columns Wrapper */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-[52px]">

                            {/* Main Menu */}
                            <div className="flex flex-col gap-4 w-full sm:w-[165px]">
                                <h3 className="font-lexend font-semibold text-base text-[#292D32]">Main Menu</h3>
                                <ul className="flex flex-col gap-4">
                                    {MAIN_MENU_LINKS.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="font-lexend font-medium text-base text-[#6A7686] hover:text-[#1053D5] transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Company */}
                            <div className="flex flex-col gap-4 w-[156px]">
                                <h3 className="font-lexend font-semibold text-base text-[#292D32]">Company</h3>
                                <ul className="flex flex-col gap-4">
                                    {COMPANY_LINKS.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="font-lexend font-medium text-base text-[#6A7686] hover:text-[#1053D5] transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4 w-[161px] shrink-0 xl:hidden">
                                <h3 className="font-lexend font-semibold text-base text-[#292D32]">Download App</h3>
                                <div className="flex flex-col gap-4">
                                    <a href="">
                                        <img src={playstore} alt="" />
                                    </a>
                                    <a href="">
                                        <img src={appstore} alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Download App Column */}
                        <div className="flex-col gap-4 w-[161px] shrink-0 hidden xl:flex">
                            <h3 className="font-lexend font-semibold text-base text-[#292D32]">Download App</h3>
                            <div className="flex flex-col gap-4">
                                <a href="">
                                    <img src={playstore} alt="" />
                                </a>
                                <a href="">
                                    <img src={appstore} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-stroke-color" />

                    {/* Bottom Section */}
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <p className="font-lexend font-medium text-sm md:text-base text-sec-color">
                            © 2025 Lorem Ipsum. All Rights Reserved
                        </p>

                        <div className="flex items-center gap-5">
                            {SOCIAL_ICONS.map((icon, index) => (
                                <a key={index} href="#" className="hover:opacity-80 transition-opacity">
                                    <img src={icon.icon} alt="" />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
