import { useEffect, useRef, useState } from "react";
import logo from "/icons/logo.svg";
import menuSm from "/icons/menu-sm.svg";
import arrowDown from "/icons/arrow-down.svg";
import searchNormal from "/icons/search-normal.svg";
import ShoppingCart from "../icons/ShoppingCart";
import Notification from "../icons/Notification";
import user from "/images/user.png";
import { Home } from "../icons/Home";
import { Flash } from "../icons/Flash";
import { BoxSearch } from "../icons/BoxSearch";
import { Note } from "../icons/Note";
import { Group } from "../icons/Group";
import { Buildings } from "../icons/Buildings";
import { CustomerService } from "../icons/CustomerService";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMobileMenuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCategoriesToggle = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const navItems = [
    { icon: Home, label: "Homepage", href: "" },
    { icon: Flash, label: "Flash Sale", href: "" },
    { icon: BoxSearch, label: "Products", href: "" },
    { icon: Note, label: "Orders", href: "" },
    { icon: Group, label: "Community", href: "" },
    { icon: Buildings, label: "Wholesale", href: "" },
    { icon: CustomerService, label: "Customer Service", href: "" },
  ];

  return (
    <div>
      <div className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-stroke-color transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className={`grid p-4 md:p-6 lg:p-8 transition-[grid-template-rows,gap] duration-100 delay-[0s,150ms] ${isCategoriesOpen ? "grid-rows-[2fr] gap-4 md:gap-6" : "grid-rows-[0fr] gap-0"
          }`}>
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex gap-4 md:gap-6">
              <button
                className="lg:hidden flex items-center justify-center"
                onClick={handleMenuToggle}
              >
                <img src={menuSm} alt="" />
              </button>

              <div className="flex gap-2 md:gap-3 items-center">
                <img src={logo} alt="" className="w-6 h-6 md:w-auto md:h-auto" />
                <p className="font-extrabold text-xl md:text-2xl font-montserrat!">BLUEE</p>
              </div>

              <div
                className="hidden lg:flex gap-2 items-center cursor-pointer select-none"
                onClick={handleCategoriesToggle}
              >
                <img src={menuSm} alt="" />
                <div className="flex items-center gap-1">
                  <p className="text-sec-color text-base font-semibold">
                    Categories
                  </p>
                  <img
                    src={arrowDown}
                    alt=""
                    className={`transition-transform duration-300 ${isCategoriesOpen ? "" : "rotate-180"
                      }`}
                  />
                </div>
              </div>

              <div className="relative grow hidden md:block">
                <input
                  type="text"
                  className="py-3 md:py-4 px-4 md:px-6 pl-12 md:pl-14 w-full border border-stroke-color rounded-[12px] md:rounded-[18px] placeholder:text-sm md:placeholder:text-base placeholder:text-sec-color placeholder:font-semibold focus:outline-none focus:border-primary-color transition-colors duration-200"
                  placeholder="Search any products"
                />
                <img
                  src={searchNormal}
                  alt=""
                  className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-4 h-4 md:w-auto md:h-auto"
                />
              </div>

              <div className="flex items-center gap-2 md:gap-3 ml-auto">
                <div className="p-2 md:p-4 rounded-full bg-[#F3F3F3] flex justify-center items-center group cursor-pointer hover:bg-primary-color/10 transition-colors duration-200">
                  <Notification className="w-5 h-5 md:w-6 md:h-6 text-black-color group-hover:text-primary-color transition-colors duration-200" />
                </div>
                <div className="p-2 md:p-4 rounded-full bg-[#F3F3F3] flex justify-center items-center group cursor-pointer hover:bg-primary-color/10 transition-colors duration-200">
                  <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-black-color group-hover:text-primary-color transition-colors duration-200" />
                </div>
                <div className="rounded-full bg-[#F3F3F3] flex justify-center items-center w-10 h-10 md:w-14 md:h-14 overflow-hidden">
                  <img src={user} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="relative md:hidden">
              <input
                type="text"
                className="py-3 px-4 pl-12 w-full border border-stroke-color rounded-[12px] placeholder:text-sm placeholder:text-sec-color placeholder:font-semibold focus:outline-none focus:border-primary-color transition-colors duration-200"
                placeholder="Search any products"
              />
              <img
                src={searchNormal}
                alt=""
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
              />
            </div>
          </div>

          <div
            className={`hidden lg:grid transition-[grid-template-rows] duration-300 ease-in-out ${isCategoriesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
          >
            <div className="overflow-hidden">
              <ul className="flex items-center gap-6 md:gap-8 overflow-x-auto scrollbar-hide whitespace-nowrap">
                {navItems.map((item, index) => (
                  <li key={index} className="flex gap-2 items-center group shrink-0">
                    <item.icon
                      className="w-5 h-5 md:w-6 md:h-6 text-sec-color group-hover:text-primary-color transition-all duration-200"
                    />
                    <a
                      href={item.href}
                      className={`text-sec-color inline-block text-sm md:text-base font-medium group-hover:text-primary-color transition-colors duration-200`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 h-full bg-black/50 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 select-none pointer-events-none"
          }`}
        onClick={handleMenuToggle}
      >
        <div
          className="bg-white w-80 h-full overflow-y-auto transition-transform duration-300 ease-in-out"
          style={{
            transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-stroke-color">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2 items-center">
                <p className="text-black-color text-lg font-bold">Menu</p>
              </div>
              <button
                onClick={handleMenuToggle}
                className="p-2 rounded-full hover:bg-[#F3F3F3] transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-sec-color"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2 p-4 bg-[#F8F9FA] rounded-xl">
              <img src={menuSm} alt="" />
              <div className="flex items-center gap-1">
                <p className="text-sec-color text-sm font-semibold">
                  Categories
                </p>
              </div>
            </div>
          </div>

          <ul className="p-4 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex gap-4 items-center p-4 rounded-xl hover:bg-[#F8F9FA] transition-all duration-200 group"
                >
                  <item.icon
                    className="w-6 h-6 text-black-color group-hover:text-primary-color group-hover:scale-110 transition-all duration-200"
                  />
                  <span className="text-black-color text-base font-medium group-hover:text-primary-color transition-colors duration-200">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="p-4 border-t border-stroke-color">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary-color to-blue-600 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <img
                  src={user}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-base">
                  Welcome Back
                </p>
                <p className="text-white/70 text-sm">Sign in to your account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
