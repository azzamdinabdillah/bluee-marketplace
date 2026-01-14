import { useEffect, useRef, useState } from "react";
import profileCircle from "/icons/profile-circle.svg";
import stickyNote from "/icons/stickynote.svg";
import setting2 from "/icons/setting-2.svg";
import logoutIcon from "/icons/logout.svg";
import logo from "/icons/logo.svg";
import menuSm from "/icons/menu-sm.svg";
import arrowDown from "/icons/arrow-down.svg";
import ShoppingCart from "@src/components/icons/ShoppingCart";
import Notification from "@src/components/icons/Notification";
import user from "/images/user.png";
import { Home } from "@src/components/icons/Home";
import { Flash } from "@src/components/icons/Flash";
import { BoxSearch } from "@src/components/icons/BoxSearch";
import { Note } from "@src/components/icons/Note";
import { Group } from "@src/components/icons/Group";
import { Buildings } from "@src/components/icons/Buildings";
import { CustomerService } from "@src/components/icons/CustomerService";
import SearchIcon from "@src/components/icons/SearchIcon";
import { Link } from "react-router-dom";
import InputBasic from "./InputBasic";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMobileMenuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        popoverRef.current?.hidePopover();
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

  const navItems: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
  }[] = [
      { icon: Home, label: "Homepage", href: "/" },
      { icon: Flash, label: "Flash Sale", href: "" },
      { icon: BoxSearch, label: "Products", href: "/products" },
      { icon: Note, label: "Orders", href: "" },
      { icon: Group, label: "Community", href: "" },
      { icon: Buildings, label: "Wholesale", href: "" },
      { icon: CustomerService, label: "Customer Service", href: "" },
    ];

  return (
    <>
      <div className={`border-stroke-color fixed top-0 left-0 z-50 w-full border-b bg-white transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <div
          className="min-[1700px]:max-w-[2000px] mx-auto"
        >
          <div
            className={`grid p-4 min-[1700px]:px-0 transition-[grid-template-rows,gap] delay-[0s,150ms] duration-100 md:p-6 lg:p-8 ${isCategoriesOpen
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
                      className={`transition-transform duration-300 ${isCategoriesOpen ? "" : "rotate-180"
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
                  <Link
                    to="/cart"
                    className="group hover:bg-primary-color flex cursor-pointer items-center justify-center rounded-full bg-[#F3F3F3] p-2 transition-colors duration-200 md:p-4"
                  >
                    <ShoppingCart className="text-black-color h-5 w-5 transition-colors duration-200 group-hover:text-white md:h-6 md:w-6" />
                  </Link>
                  <div className="relative">
                    <button
                      popoverTarget="user-menu"
                      className="anchor/--user-anchor rounded-full bg-yellow flex justify-center items-center w-9 h-9 md:w-14 md:h-14 overflow-hidden cursor-pointer"
                    >
                      <img src={user} alt="" className="w-full h-full object-cover" />
                    </button>

                    <div popover="auto" id="user-menu" ref={popoverRef} className="anchored/--user-anchor anchored-bottom-span-left translate-y-3 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.09)] rounded-[20px_0px_20px_20px] bg-white">
                      <div className="w-[201px] flex flex-col gap-[18px] py-6 px-4 z-50">
                        <div className="flex items-center justify-between gap-2 cursor-pointer hover:opacity-80">
                          <p className="text-[#6A7686] font-medium text-base leading-5">
                            My Profile
                          </p>
                          <img className="h-6 w-6" src={profileCircle} alt="" />
                        </div>
                        <div className="flex items-center justify-between gap-2 cursor-pointer hover:opacity-80">
                          <Link to={'/backoffice-buyer/manage-transactions'} className="text-[#6A7686] font-medium text-base leading-5">
                            My Transactions
                          </Link>
                          <img className="h-6 w-6" src={stickyNote} alt="" />
                        </div>
                        <div className="flex items-center justify-between gap-2 cursor-pointer hover:opacity-80">
                          <p className="text-[#6A7686] font-medium text-base leading-5">
                            Settings
                          </p>
                          <img className="h-6 w-6" src={setting2} alt="" />
                        </div>
                        <div className="h-[1px] w-full bg-[#E8E8E8]"></div>
                        <div className="flex items-center justify-between gap-2 cursor-pointer hover:opacity-80">
                          <p className="text-[#FF133D] font-medium text-base leading-5">
                            Log Out
                          </p>
                          <img className="h-6 w-6" src={logoutIcon} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* If user is not logged in, show Sign In/Register button */}
                  {/* <Button variant="blue">
                  <span className="hidden lg:inline-block">Sign In/</span>
                  Register
                </Button> */}

                </div>

              </div>

              <div className="relative md:hidden">
                <InputBasic
                  type="text"
                  placeholder="Search any products"
                  Icon={SearchIcon}
                  className="text-sm"
                />
              </div>
            </div>

            <div
              className={`hidden transition-[grid-template-rows] duration-300 ease-in-out lg:grid ${isCategoriesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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

      </div>
      <div
        className={`fixed inset-0 z-50 h-full bg-black/50 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen
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
            <div className="from-primary-color flex items-center gap-4 rounded-xl bg-linear-to-r to-blue-600 p-4">
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
    </>
  );
}
