import { useNavigate } from "react-router-dom";
import SearchIcon from "@src/components/icons/SearchIcon";
import Notification from "@src/components/icons/Notification";
import crownIcon from "/icons/crown-black.svg";
import userIcon from "/icons/user.svg";
import logoutIcon from "/icons/logout.svg";
import arrowLeftIcon from "/icons/back-arrow.svg";
import profileIcon from "/images/user.png";

interface HeaderBackofficeProps {
  title: string;
  subtitle: string;
  showBackButton?: boolean;
}

export default function HeaderBackoffice({
  title,
  subtitle,
  showBackButton = false,
}: HeaderBackofficeProps) {
  const navigate = useNavigate();

  const content = (
    <div className="mx-auto flex max-w-[1460px] flex-col gap-3 md:flex-row md:gap-5">
      <div className="flex w-full flex-col items-start justify-between gap-4 rounded-2xl bg-white p-4 md:flex-row md:items-center md:gap-5 md:rounded-[18px] md:p-5 lg:gap-6 lg:rounded-[20px] lg:px-5 lg:py-[18px]">
        <div className="flex flex-col gap-1">
          <h2 className="text-black-color font-lexend text-lg font-bold md:text-xl lg:text-2xl">
            {title}
          </h2>
          <div className="flex items-center gap-1">
            {showBackButton && (
              <button
                onClick={() => navigate(-1)}
                className="hover:scale-110 flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-200 cursor-pointer"
              >
                <img
                  src={arrowLeftIcon}
                  alt="Back"
                  className="h-4 w-4 md:h-5 md:w-5"
                />
              </button>
            )}
            <p className="text-sec-color font-lexend text-sm font-semibold md:text-[15px] lg:text-base">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3">
          <button className="group hover:bg-primary-color flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F3F3F3] transition-colors duration-200 md:h-12 md:w-12 lg:h-14 lg:w-14">
            <SearchIcon className="h-5 w-5 text-[#292D32] transition-colors duration-200 group-hover:text-white md:h-[22px] md:w-[22px] lg:h-6 lg:w-6" />
          </button>

          <button className="group hover:bg-primary-color flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F3F3F3] transition-colors duration-200 md:h-12 md:w-12 lg:h-14 lg:w-14">
            <Notification className="h-5 w-5 text-[#292D32] transition-colors duration-200 group-hover:text-white md:h-[22px] md:w-[22px] lg:h-6 lg:w-6" />
          </button>

          <div className="relative">
            <button className="group hover:bg-primary-color flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#CBEE5A] transition-colors duration-200 md:h-12 md:w-12 lg:h-14 lg:w-14">
              <img
                src={crownIcon}
                alt=""
                className="h-5 w-5 transition-all duration-200 group-hover:brightness-0 group-hover:invert md:h-[22px] md:w-[22px] lg:h-6 lg:w-6"
              />
            </button>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-[20px] bg-[#292D32] px-2 py-1 text-[8px] font-extrabold text-white">
              PRO
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-full shrink-0 flex-row items-center justify-between gap-2 rounded-2xl bg-white p-3 shadow-sm transition-shadow duration-300 hover:shadow-md md:flex md:w-fit md:gap-2.5 md:rounded-[18px] md:p-4 lg:gap-[10px] lg:rounded-[20px] lg:px-[20px] lg:py-[18px] xl:w-[260px]">
        <div className="flex flex-row items-center gap-2 md:gap-2.5 lg:gap-[10px]">
          {/* Avatar */}
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100 md:h-12 md:w-12 lg:h-[56px] lg:w-[56px]">
            <img
              src={profileIcon}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-0.5 md:gap-1 lg:gap-1.5">
            <h3 className="font-lexend text-black-color text-sm leading-tight font-semibold md:text-[15px] lg:text-base">
              Bimore W
            </h3>
            <div className="text-sec-color flex flex-row items-center gap-1">
              <img
                src={userIcon}
                alt="Role"
                className="h-3 w-3 md:h-4 md:w-4"
              />
              <span className="font-lexend text-xs leading-tight font-medium md:text-sm lg:text-base">
                Buyer
              </span>
            </div>
          </div>
        </div>

        {/* Logout */}
        <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-50 md:h-9 md:w-9 lg:h-10 lg:w-10">
          <img
            src={logoutIcon}
            alt="Logout"
            className="h-5 w-5 md:h-[22px] md:w-[22px] lg:h-6 lg:w-6"
          />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Fixed Header */}
      <div className="top-16 right-0 left-0 z-30 bg-[#F3F5F9]/95 px-4 backdrop-blur-sm transition-all duration-300 md:fixed md:pt-4 md:pb-4 lg:top-0 lg:left-[280px] lg:px-5 lg:pt-4 lg:pb-4">
        {content}
      </div>

      {/* Spacer to maintain flow */}
      {/* <div className="pointer-events-none hidden md:block invisible -mx-4 px-4 pt-2 pb-2 md:pt-4 md:pb-4 lg:-mx-5 lg:-mt-4 lg:px-5 lg:pt-4 lg:pb-4">
        {content}
      </div> */}
    </>
  );
}
