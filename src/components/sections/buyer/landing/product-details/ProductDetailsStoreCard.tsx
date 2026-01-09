import verify from "/icons/verify-blue.svg";
import box from "/icons/box.svg";
import { Link } from "react-router-dom";
import type { StoreType } from "@src/types/StoreTypes";

export default function ProductDetailsStoreCard({
  storeName,
  avatarUrl,
  totalProducts,
  href,
}: StoreType) {
  return (
    <Link to={href || "/"} className="border-stroke-color flex w-full flex-row items-center justify-between gap-3 rounded-3xl border bg-white p-3 md:justify-start md:gap-4 md:p-5 hover:ring-2 hover:ring-primary-color hover:ring-inset transition-all duration-200">
      <div className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#4e35b30d] p-4 md:size-[86px] md:p-6">
        <img src={avatarUrl} alt="Store Logo" />
      </div>
      <div className="flex flex-1 flex-col gap-1 min-w-0">
        <Link to={href || "/"} className="flex items-center gap-1.5">
          <h3 className="truncate text-base leading-[1.6] font-bold text-black md:text-lg">
            {storeName}
          </h3>
          <img src={verify} alt="" className="size-5 shrink-0 md:size-6" />
        </Link>
        <div className="flex items-center justify-start gap-1.5">
          <img src={box} alt="" className="size-4 md:size-6" />
          <span className="text-sec-color text-xs leading-tight font-semibold md:text-base">
            {totalProducts} Total Products
          </span>
        </div>
      </div>
      <Link
        to={href || "/"}
        className="text-primary-color shrink-0 text-sm leading-tight font-semibold hover:underline md:text-lg hidden md:block lg:block xl:block"
      >
        Visit Store
      </Link>
    </Link>
  );
}
