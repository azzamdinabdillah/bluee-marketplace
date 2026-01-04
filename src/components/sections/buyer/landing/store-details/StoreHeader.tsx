import Button from "@src/components/Button";

// Placeholder imports - User will replace these with actual paths
import verifyIcon from "/icons/verify-blue.svg";
import userIcon from "/icons/user.svg";
import locationIcon from "/icons/location.svg";
import FlagIcon from "@src/components/icons/FlagIcon";
import LinkIcon from "@src/components/icons/LinkIcon";
import StoreIcon from "@src/components/icons/StoreIcon";
import MessageIcon from "@src/components/icons/MessageIcon";
import boxIcon from "/icons/box.svg";
import type { StoreType } from "@src/types/StoreTypes";

export default function StoreHeader({
  storeName = "Bimore Gadget Universe",
  isVerified = true,
  totalProducts = 1294,
  sellerName = "Shadam Bimo",
  location = "Buitenzorg",
  avatarUrl,
  className = "",
}: StoreType) {
  return (
    <div
      className={`border-stroke-color flex w-full flex-col gap-5 rounded-[24px] border bg-white p-5 ${className}`}
    >
      {/* Top Section: Avatar & Store Info */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex flex-1 flex-row items-center gap-[14px]">
          {/* Avatar */}
          <div className="bg-[#4e35b30d] flex items-center justify-center rounded-full p-4 md:p-6 size-[60px] md:size-[72px] lg:size-[86px] shrink-0">
            <img
              src={avatarUrl}
              alt={storeName}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Store Info */}
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center gap-[6px]">
              <h2 className="text-black-color font-lexend text-lg font-bold text-ellipsis whitespace-nowrap overflow-hidden max-w-[150px] md:max-w-full">
                {storeName}
              </h2>
              {isVerified && (
                <img src={verifyIcon} alt="Verified" className="h-6 w-6" />
              )}
            </div>

            <div className="flex items-center gap-[6px]">
              <img src={boxIcon} alt="Products" className="h-5 w-5" />
              <p className="text-sec-color font-lexend text-base font-semibold">
                {totalProducts.toLocaleString()} Total Products
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Share & Report */}
        <div className="flex items-center gap-3">
          <button className="border-stroke-color hover:bg-primary-color group flex items-center justify-center rounded-full border bg-white p-4 transition-colors duration-200 group cursor-pointer">
            <FlagIcon className="text-sec-color group-hover:text-white" />
          </button>
          <button className="border-stroke-color hover:bg-primary-color group flex items-center justify-center rounded-full border bg-white p-4 transition-colors duration-200 group cursor-pointer group">
            <LinkIcon className="text-sec-color group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-stroke-color h-px w-full border-t"></div>

      {/* Details Section: Seller & Location */}
      <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
        {/* Seller Name */}
        <div className="flex flex-1 flex-col justify-center gap-[6px]">
          <h3 className="text-black-color font-lexend text-lg font-bold">
            {sellerName}
          </h3>
          <div className="flex items-center gap-[6px]">
            <img src={userIcon} alt="Seller" className="h-5 w-5" />
            <p className="text-sec-color font-lexend text-base font-semibold">
              Seller Name
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-1 flex-col justify-center gap-[6px]">
          <h3 className="text-black-color font-lexend text-lg font-bold">
            {location}
          </h3>
          <div className="flex items-center gap-[6px]">
            <img src={locationIcon} alt="Location" className="h-5 w-5" />
            <p className="text-sec-color font-lexend text-base font-semibold">
              Store Location
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 md:grid grid-cols-3">
        <Button variant="blue" icon={StoreIcon} className="w-full flex-1 md:col-span-2">
          Follow Store
        </Button>

        <Button
          variant="lightBlue"
          icon={MessageIcon}
          className="w-full flex-1"
        >
          Message
        </Button>
      </div>
    </div>
  );
}
