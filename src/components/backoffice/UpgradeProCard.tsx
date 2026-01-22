import React from "react";
import crownIcon from "/icons/crown-black.svg";
import arrowRightIcon from "/icons/arrow-circle-right-tick.svg";

const UpgradeProCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-full overflow-hidden rounded-2xl border border-stroke-color bg-[url(/images/bg-upgrade.png)] bg-no-repeat bg-cover bg-center p-4 transition-all md:p-5 lg:p-[21px]">
      {/* Background Decoration (Placeholder for 'Group 2') */}
      <div className="pointer-events-none absolute -top-[50%] -left-[20%] h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl md:h-[400px] md:w-[400px]"></div>

      <div className="relative z-10 flex items-center gap-3 md:gap-4 lg:gap-[12px]">
        {/* Icon & Badge Section */}
        <div className="relative flex shrink-0 items-center justify-center">
          {/* Lime Circle */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#CBEE5A] p-3 md:h-[60px] md:w-[60px] md:p-4 lg:p-[16px]">
            <img
              src={crownIcon}
              alt="Pro"
              className="h-6 w-6 object-contain md:h-7 md:w-7"
            />
          </div>

          {/* PRO Badge */}
          <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-[20px] bg-[#292D32] px-2 py-1 shadow-sm">
            <span className="font-lexend text-[8px] font-extrabold leading-none text-white md:text-[9px] lg:text-[10px]">
              PRO
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex min-w-0 flex-1 flex-col gap-1 md:gap-[5px] lg:gap-[4px]">
          <p className="font-lexend text-xs font-semibold text-[#DEFF6E] md:text-sm">
            Access Pro Featured
          </p>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-lexend text-lg font-bold leading-tight text-white md:text-xl lg:text-[22px]">
              Upgrade To Pro
            </h3>

            {/* CTA Button */}
            <button className="group flex cursor-pointer items-center gap-1 transition-all">
              <span className="whitespace-nowrap font-lexend text-xs font-semibold text-white md:text-sm lg:text-[14px]">
                Upgrade Now
              </span>
              <img
                src={arrowRightIcon}
                alt="Arrow"
                className="h-4 w-4 brightness-0 invert transition-transform group-hover:translate-x-1 md:h-5 md:w-5 lg:h-[20px] lg:w-[20px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeProCard;
