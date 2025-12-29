import { useEffect, useRef, useState } from "react";
import logo from "/icons/logo.svg";
import menuSm from "/icons/menu-sm.svg";
import arrowDown from "/icons/arrow-down.svg";
import ShoppingCart from "../../../icons/ShoppingCart";
import Notification from "../../../icons/Notification";
import user from "/images/user.png";
import { Home } from "../../../icons/Home";
import { Flash } from "../../../icons/Flash";
import { BoxSearch } from "../../../icons/BoxSearch";
import { Note } from "../../../icons/Note";
import { Group } from "../../../icons/Group";
import { Buildings } from "../../../icons/Buildings";
import { CustomerService } from "../../../icons/CustomerService";
import SearchIcon from "../../../icons/SearchIcon";
import Button from "../../../Button";

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
      <div
        className={`border-stroke-color fixed top-0 left-0 z-50 w-full border-b bg-white transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div
          className={`grid p-4 transition-[grid-template-rows,gap] delay-[0s,150ms] duration-100 md:p-6 lg:p-8 ${
            isCategoriesOpen
              ? "grid-rows-[2fr] gap-4 md:gap-6"
              : "grid-rows-[0fr] gap-0"
          }`}
        >
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex gap-4 md:gap-6">
              <button
                className="flex items-center justify-center lg:hidden"
                onClick={handleMenuToggle}
              >
                <img src={menuSm} alt="" />
              </button>

              <a href="" className="flex items-center gap-2 md:gap-3">
                <img
                  src={logo}
                  alt=""
                  className="h-6 w-6 md:h-auto md:w-auto"
                />
                <p className="font-montserrat! text-xl font-extrabold md:text-2xl">
                  BLUEE
                </p>
              </a>

              <div
                className="hidden cursor-pointer items-center gap-2 select-none lg:flex"
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
                    className={`transition-transform duration-300 ${
                      isCategoriesOpen ? "" : "rotate-180"
                    }`}
                  />
                </div>
              </div>

              <div className="relative hidden grow md:block">
                <input
                  type="text"
                  className="ring-stroke-color placeholder:text-sec-color peer focus:ring-primary-color text-black-color w-full rounded-[12px] px-4 py-3 pl-12 text-base font-medium ring-[1.5px] transition-all duration-200 placeholder:text-sm placeholder:font-semibold focus:ring-2 focus:outline-none md:rounded-[18px] md:px-6 md:py-4 md:pl-14 md:placeholder:text-base"
                  placeholder="Search any products"
                />
                <SearchIcon className="text-sec-color peer-focus:text-primary-color absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 transition-colors duration-200 md:h-auto md:w-auto" />
              </div>

              <div className="ml-auto flex items-center gap-2 md:gap-3">
                <div className="group hover:bg-primary-color flex cursor-pointer items-center justify-center rounded-full bg-[#F3F3F3] p-2 transition-colors duration-200 md:p-4">
                  <Notification className="text-black-color h-5 w-5 transition-colors duration-200 group-hover:text-white md:h-6 md:w-6" />
                </div>
                <div className="group hover:bg-primary-color flex cursor-pointer items-center justify-center rounded-full bg-[#F3F3F3] p-2 transition-colors duration-200 md:p-4">
                  <ShoppingCart className="text-black-color h-5 w-5 transition-colors duration-200 group-hover:text-white md:h-6 md:w-6" />
                </div>
                {/* <div className="rounded-full bg-[#F3F3F3] flex justify-center items-center w-10 h-10 md:w-14 md:h-14 overflow-hidden">
                  <img src={user} alt="" className="w-full h-full object-cover" />
                </div> */}
                {/* If user is not logged in, show Sign In/Register button */}
                <Button variant="blue">
                  <span className="hidden lg:inline-block">Sign In/</span>
                  Register
                </Button>
              </div>
            </div>

            <div className="relative md:hidden">
              <input
                type="text"
                className="ring-stroke-color placeholder:text-sec-color peer focus:ring-primary-color text-black-color w-full rounded-[12px] px-4 py-3 pl-12 text-sm font-medium ring-[1.5px] transition-all duration-200 placeholder:text-sm placeholder:font-semibold focus:ring-2 focus:outline-none"
                placeholder="Search any product"
              />
              <SearchIcon className="text-sec-color peer-focus:text-primary-color absolute top-1/2 left-4 size-5 -translate-y-1/2 transition-colors duration-200 md:h-auto md:w-auto" />
            </div>
          </div>

          <div
            className={`hidden transition-[grid-template-rows] duration-300 ease-in-out lg:grid ${
              isCategoriesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <ul className="scrollbar-hide flex items-center gap-6 overflow-x-auto whitespace-nowrap md:gap-8">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="group flex shrink-0 items-center gap-2"
                  >
                    <item.icon className="text-sec-color group-hover:text-primary-color h-5 w-5 transition-all duration-200 md:h-6 md:w-6" />
                    <a
                      href={item.href}
                      className={`text-sec-color group-hover:text-primary-color inline-block text-sm font-medium transition-colors duration-200 md:text-base`}
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
        className={`fixed inset-0 z-50 h-full bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0 select-none"
        }`}
        onClick={handleMenuToggle}
      >
        <div
          className="h-full w-80 overflow-y-auto bg-white transition-transform duration-300 ease-in-out"
          style={{
            transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="border-stroke-color border-b p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-black-color text-lg font-bold">Menu</p>
              </div>
              <button
                onClick={handleMenuToggle}
                className="rounded-full p-2 transition-colors duration-200 hover:bg-[#F3F3F3]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-sec-color h-6 w-6"
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

            <div className="flex items-center gap-2 rounded-xl bg-[#F8F9FA] p-4">
              <img src={menuSm} alt="" />
              <div className="flex items-center gap-1">
                <p className="text-sec-color text-sm font-semibold">
                  Categories
                </p>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-2 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="group flex items-center gap-4 rounded-xl p-4 transition-all duration-200 hover:bg-[#F8F9FA]"
                >
                  <item.icon className="text-black-color group-hover:text-primary-color h-6 w-6 transition-all duration-200 group-hover:scale-110" />
                  <span className="text-black-color group-hover:text-primary-color text-base font-medium transition-colors duration-200">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="border-stroke-color border-t p-4">
            <div className="from-primary-color flex items-center gap-4 rounded-xl bg-gradient-to-r to-blue-600 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <img
                  src={user}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-white">
                  Welcome Back
                </p>
                <p className="text-sm text-white/70">Sign in to your account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
