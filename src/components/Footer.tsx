import React from "react";
import logo from "/icons/logo.svg";
import playstore from "/images/playstore.png";
import appstore from "/images/appstore.png";

// Types
interface FooterLink {
  label: string;
  href: string;
}

// Data
const MAIN_MENU_LINKS: FooterLink[] = [
  { label: "Categories", href: "#" },
  { label: "Flash Deals", href: "#" },
  { label: "Become Seller", href: "#" },
  { label: "Top Up Game", href: "#" },
  { label: "Track My Order", href: "#" },
  { label: "Bluee Article", href: "#" },
  { label: "Payment Method", href: "#" },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "Contact Us", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const SOCIAL_ICONS = [
  { icon: "/icons/ig.svg", href: "#" },
  { icon: "/icons/email.svg", href: "#" },
  { icon: "/icons/fb.svg", href: "#" },
  { icon: "/icons/tiktok.svg", href: "#" },
  { icon: "/icons/yt.svg", href: "#" },
  { icon: "/icons/twitter.svg", href: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-stroke-color w-full border-t bg-white">
      <div className="w-full max-w-[1176px] bg-white px-4 py-8 md:px-[52px] md:py-[52px] xl:mx-auto xl:px-0">
        <div className="flex flex-col gap-8 md:gap-9">
          {/* Top Section */}
          <div className="flex flex-col gap-10 xl:flex-row xl:gap-[72px]">
            {/* Brand Column */}
            <div className="flex w-full shrink-0 flex-col gap-4 md:gap-6 xl:w-[349px]">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img src={logo} alt="" />
                <span className="font-montserrat! text-black-color text-2xl font-black">
                  BLUEE
                </span>
              </div>
              {/* Description */}
              <p className="font-lexend text-sec-color text-base leading-[1.6] font-medium">
                Bluee is your trusted digital marketplace for everyday
                essentials, exclusive deals, and seamless shopping—fast, secure,
                and built for everyone.
              </p>
            </div>

            {/* Navigation Columns Wrapper */}
            <div className="flex flex-col gap-8 md:flex-row md:gap-[52px]">
              {/* Main Menu */}
              <div className="flex w-full flex-col gap-4 sm:w-[165px]">
                <h3 className="font-lexend text-base font-semibold text-[#292D32]">
                  Main Menu
                </h3>
                <ul className="flex flex-col gap-4">
                  {MAIN_MENU_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-lexend text-base font-medium text-[#6A7686] transition-colors hover:text-[#1053D5]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="flex w-[156px] flex-col gap-4">
                <h3 className="font-lexend text-base font-semibold text-[#292D32]">
                  Company
                </h3>
                <ul className="flex flex-col gap-4">
                  {COMPANY_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-lexend text-base font-medium text-[#6A7686] transition-colors hover:text-[#1053D5]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-[161px] shrink-0 flex-col gap-4 xl:hidden">
                <h3 className="font-lexend text-base font-semibold text-[#292D32]">
                  Download App
                </h3>
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
            <div className="hidden w-[161px] shrink-0 flex-col gap-4 xl:flex">
              <h3 className="font-lexend text-base font-semibold text-[#292D32]">
                Download App
              </h3>
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
          <div className="bg-stroke-color h-px w-full" />

          {/* Bottom Section */}
          <div className="flex flex-col-reverse items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <p className="font-lexend text-sec-color text-sm font-medium md:text-base">
              © 2025 Lorem Ipsum. All Rights Reserved
            </p>

            <div className="flex items-center gap-5">
              {SOCIAL_ICONS.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="transition-opacity hover:opacity-80"
                >
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
