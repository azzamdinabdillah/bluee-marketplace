import verify from "/icons/verify-blue.svg";
import box from "/icons/box.svg";
import { Link } from "react-router-dom";
import type { StoreType } from "@src/types/StoreTypes";

export default function StoreCard({
  storeName,
  avatarUrl,
  totalProducts,
  href,
}: StoreType) {
  return (
    <div className="border-stroke-color flex w-full flex-col items-center justify-center gap-4 rounded-3xl border bg-white p-4 md:flex-row md:justify-start md:p-5">
      <div className="flex size-[72px] items-center justify-center rounded-full bg-[#4e35b30d] p-6 md:size-[86px]">
        <img src={avatarUrl} alt="Store Logo" />
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <Link to={href || "/"} className="flex items-center gap-1.5">
          <h3 className="text-center text-lg leading-[1.6] font-bold text-black md:text-left">
            {storeName}
          </h3>
          <img src={verify} alt="" className="size-6" />
        </Link>
        <div className="flex items-center justify-center gap-1.5 md:justify-start">
          <img src={box} alt="" className="size-6" />
          <span className="text-sec-color text-base leading-tight font-semibold">
            {totalProducts} Total Products
          </span>
        </div>
      </div>
      <Link
        to={href || "/"}
        className="text-primary-color text-lg leading-tight font-semibold hover:underline lg:hidden xl:block"
      >
        Visit Store
      </Link>
    </div>
  );
}
