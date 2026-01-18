import { useState } from "react";
import SidebarOverview from "../icons/SidebarOverview";
import SidebarTransaction from "../icons/SidebarTransaction";
import SidebarAddress from "../icons/SidebarAddress";
import StoreIcon from "../icons/StoreIcon";
import { Group } from "../icons/Group";
import { Link, useLocation } from "react-router-dom";
import userIcon from "/icons/user.svg";
import logoutIcon from "/icons/logout.svg";
import profileIcon from "/images/user.png";

export type SidebarRole = "buyer" | "seller" | "manager";

interface SidebarProps {
  role?: SidebarRole;
}

export default function Sidebar({ role = "buyer" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = {
    buyer: [
      {
        id: "overview",
        label: "Overview",
        icon: SidebarOverview,
        path: "/backoffice-buyer/overview",
      },
      {
        id: "transactions",
        label: "My Transactions",
        icon: SidebarTransaction,
        path: "/backoffice-buyer/manage-transactions",
      },
      {
        id: "address",
        label: "My Address",
        icon: SidebarAddress,
        path: "/backoffice-buyer/my-address",
      },
    ],
    seller: [
      {
        id: "overview",
        label: "Overview",
        icon: SidebarOverview,
        path: "/backoffice-seller/overview",
      },
      {
        id: "products",
        label: "My Store",
        icon: StoreIcon,
        path: "/backoffice-seller/products",
      },
      {
        id: "orders",
        label: "My Products",
        icon: SidebarTransaction,
        path: "/backoffice-seller/orders",
      },
    ],
    manager: [
      {
        id: "overview",
        label: "Overview",
        icon: SidebarOverview,
        path: "/backoffice-manager/overview",
      },
      {
        id: "users",
        label: "Users",
        icon: Group,
        path: "/backoffice-manager/users",
      },
      {
        id: "settings",
        label: "Settings",
        icon: SidebarAddress,
        path: "/backoffice-manager/settings",
      },
    ],
  };

  const currentMenuItems = menuItems[role];

  const getRoleLabel = (r: SidebarRole) => {
    switch (r) {
      case "buyer":
        return "Buyer";
      case "seller":
        return "Seller";
      case "manager":
        return "Manager";
      default:
        return "Buyer";
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 right-0 left-0 z-40 flex h-16 items-center justify-between border-b border-gray-100 bg-white px-4 lg:hidden">
        <div className="flex items-center gap-2">
          <img
            src="/icons/sidebar-logo.svg"
            alt="Bluee"
            className="h-[24px] w-[30px]"
          />
          <span className="font-montserrat text-[20px] leading-[1.2] font-black tracking-wider text-black uppercase">
            Bluee
          </span>
        </div>
        <div className="flex items-center gap-1">
          {/* Profile Pill */}
          <div className="flex items-center gap-2 rounded-full bg-gray-50 py-1.5 pr-3 pl-1.5 md:hidden">
            <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-white">
              <img
                src={profileIcon}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-lexend text-xs leading-none font-bold text-gray-900">
                Bimore W
              </h3>
              <span className="font-lexend text-[10px] leading-none font-medium text-gray-500">
                {getRoleLabel(role)}
              </span>
            </div>
          </div>

          {/* Actions Group */}
          <div className="flex items-center pl-1">
            <button className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-50 md:hidden">
              <img
                src={logoutIcon}
                alt="Logout"
                className="h-5 w-5 opacity-60 transition-opacity hover:opacity-100"
              />
            </button>

            <button
              className="flex h-9 w-9 items-center justify-center rounded-full text-black hover:bg-gray-50"
              onClick={() => setIsOpen(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`sidebar fixed top-0 left-0 z-50 h-dvh w-[280px] shrink-0 border-r border-gray-100 bg-white transition-transform duration-300 ease-in-out lg:sticky ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex h-full flex-col gap-[30px] overflow-y-auto px-4 py-[30px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/icons/sidebar-logo.svg"
              alt="Bluee"
              className="h-[32px] w-[41px]"
            />
            <span className="font-montserrat text-[25px] leading-[1.2] font-black tracking-wider text-black uppercase">
              Bluee
            </span>
          </div>

          {/* Main Menu */}
          <div className="flex flex-col gap-4">
            <div className="text-sec-color text-base font-medium">
              Main Menu
            </div>
            <div className="flex flex-col gap-2">
              {currentMenuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    to={item.path}
                    key={item.id}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className={`group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-[16px] p-[10px_0_10px_16px] transition-colors lg:h-14 ${
                      isActive
                        ? "bg-primary-color/10 text-primary-color"
                        : "hover:text-primary-color text-black hover:bg-gray-50"
                    }`}
                  >
                    <item.icon
                      className={`${isActive ? "text-primary-color" : "group-hover:text-primary-color text-black"}`}
                      stroke="currentColor"
                    />
                    <span
                      className={`flex-1 font-['Lexend_Deca'] text-base ${isActive ? "font-bold" : "font-medium"}`}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <div className="bg-primary-color absolute top-1/2 right-0 h-7.5 w-2 -translate-y-1/2 rounded-l-[6px] md:h-9 md:rounded-l-[12px]"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Profile Section */}
          <div className="mt-auto md:hidden">
            <div className="flex w-full shrink-0 flex-row items-center justify-between gap-2 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="flex flex-row items-center gap-2">
                {/* Avatar */}
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <img
                    src={profileIcon}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-lexend text-black-color text-sm leading-tight font-semibold">
                    Bimore W
                  </h3>
                  <div className="text-sec-color flex flex-row items-center gap-1">
                    <img src={userIcon} alt="Role" className="h-3 w-3" />
                    <span className="font-lexend text-xs leading-tight font-medium">
                      {getRoleLabel(role)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Logout */}
              <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-50">
                <img src={logoutIcon} alt="Logout" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
