import Button from "@src/components/Button";

// Placeholder imports - User will replace these with actual paths
// import verifyIcon from "@src/assets/icons/verify.svg";
// import boxIcon from "@src/assets/icons/box.svg";
// import userIcon from "@src/assets/icons/user.svg";
// import locationIcon from "@src/assets/icons/location.svg";
// import shopAddIcon from "@src/assets/icons/shop-add.svg";
// import messageIcon from "@src/assets/icons/message.svg";
// import defaultAvatar from "@src/assets/images/default-avatar.png";

// Temporary placeholders to prevent build errors
const verifyIcon = "/icons/verify.svg";
const boxIcon = "/icons/box.svg";
const userIcon = "/icons/user.svg";
const locationIcon = "/icons/location.svg";
const shopAddIcon = "/icons/shop-add.svg";
const messageIcon = "/icons/message.svg";
const defaultAvatar = "/images/default-avatar.png";

interface StoreHeaderProps {
  storeName?: string;
  isVerified?: boolean;
  totalProducts?: number;
  sellerName?: string;
  location?: string;
  avatarUrl?: string;
  className?: string;
}

export default function StoreHeader({
  storeName = "Bimore Gadget Universe",
  isVerified = true,
  totalProducts = 1294,
  sellerName = "Shadam Bimo",
  location = "Buitenzorg",
  avatarUrl = defaultAvatar,
  className = "",
}: StoreHeaderProps) {
  return (
    <div
      className={`border-stroke-color flex w-full max-w-[630px] flex-col gap-5 rounded-[24px] border bg-white p-5 lg:w-[630px] ${className}`}
    >
      {/* Top Section: Avatar & Store Info */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex flex-1 flex-row items-center gap-[14px]">
          {/* Avatar */}
          <div className="h-[86px] w-[86px] shrink-0 overflow-hidden rounded-full md:rounded-none">
            <img
              src={avatarUrl}
              alt={storeName}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Store Info */}
          <div className="flex flex-col gap-[6px]">
            <div className="flex flex-wrap items-center gap-[6px]">
              <h2 className="text-black-color font-lexend text-lg font-bold">
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
          <button className="border-stroke-color hover:bg-primary-color group flex items-center justify-center rounded-[16px] border bg-white p-4 transition-colors duration-200">
            <img
              src=""
              alt="Share"
              className="h-6 w-6 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
            />
          </button>
          <button className="border-stroke-color hover:bg-primary-color group flex items-center justify-center rounded-[16px] border bg-white p-4 transition-colors duration-200">
            <img
              src=""
              alt="Report"
              className="h-6 w-6 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
            />
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
      <div className="flex flex-col gap-4 md:flex-row">
        <Button variant="blue" icon={shopAddIcon} className="w-full flex-1">
          Follow Store
        </Button>

        <Button
          variant="lightBlue"
          icon={messageIcon}
          className="w-full flex-1"
        >
          Message
        </Button>
      </div>
    </div>
  );
}
