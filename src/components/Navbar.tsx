import logo from "/icons/logo.svg";
import menuSm from "/icons/menu-sm.svg";
import arrowDown from "/icons/arrow-down.svg";
import searchNormal from "/icons/search-normal.svg";
import notification from "/icons/notification.svg";
import shoppingCart from "/icons/shopping-cart.svg";
import user from "/images/user.png";
import home from "/icons/home.svg";
import flash from "/icons/flash.svg";
import boxSearch from "/icons/box-search.svg";
import note from "/icons/note.svg";
import group from "/icons/group.svg";
import buildings from "/icons/buildings.svg";
import cs from "/icons/cs.svg";

export default function Navbar() {
  const navItems = [
    { icon: home, label: "Homepage", href: "" },
    { icon: flash, label: "Flash Sale", href: "" },
    { icon: boxSearch, label: "Products", href: "" },
    { icon: note, label: "Orders", href: "" },
    { icon: group, label: "Community", href: "" },
    { icon: buildings, label: "Wholesale", href: "" },
    { icon: cs, label: "Customer Service", href: "" },
  ];

  return (
    <div className="flex flex-col gap-6 border-b border-stroke-color p-8">
      <div className="flex gap-6">
        <div className="flex gap-3 items-center">
          <img src={logo} alt="" />
          <p className="font-extrabold text-2xl">BLUEE</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src={menuSm} alt="" />
          <div className="flex items-center gap-1">
            <p className="text-sec-color text-base font-semibold">Categories</p>
            <img src={arrowDown} alt="" />
          </div>
        </div>
        <div className="relative grow">
          <input
            type="text"
            className="py-4 px-6 pl-14 w-full border border-stroke-color rounded-[18px] placeholder:text-base placeholder:text-sec-color placeholder:font-semibold"
            placeholder="Search any products"
          />
          <img
            src={searchNormal}
            alt=""
            className="absolute left-6 top-1/2 -translate-y-1/2"
          />
        </div>

        <div className="gap-3 flex items-center">
          <div className="p-4 rounded-full bg-[#F3F3F3] flex justify-center items-center">
            <img src={notification} alt="" />
          </div>
          <div className="p-4  rounded-full bg-[#F3F3F3] flex justify-center items-center">
            <img src={shoppingCart} alt="" />
          </div>
          <div className="rounded-full bg-[#F3F3F3] flex justify-center items-center w-14 overflow-hidden">
            <img src={user} alt="" />
          </div>
        </div>
      </div>

      <ul className="flex items-center gap-8 flex-wrap">
        {navItems.map((item, index) => (
          <li key={index} className="flex gap-2 items-center group">
            <img
              src={item.icon}
              alt=""
              className="group-hover:opacity-70 group-hover:scale-105 transition-opacity-transform duration-200"
            />
            <a
              href={item.href}
              className={`text-sec-color inline-block text-base font-medium group-hover:text-primary-color transition-colors duration-200 group-hover:text-shadow-[0_0_0.5px] group-hover:text-shadow-primary-color`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
