import HeartIcon from "./icons/HeartIcon";
import CartIcon from "./icons/CartIcon";
import StoreIcon from "./icons/StoreIcon";
import Button from "./Button";
import type { ProductType } from "../types/ProductTypes";
import { Link } from "react-router-dom";

export default function ProductCard({
  image = "https://placehold.co/276x192",
  title = "SonicWhirl Wireless Headphone",
  price = "Rp 3.500.500",
  sold = "120 Sold",
  tag = "Gadget",
  store = "Official Store",
  onAddToCart,
  onWishlist,
  className = "",
}: ProductType) {
  return (
    <div
      className={`flex w-full flex-col rounded-[14px] md:w-[276px] md:rounded-[20px] ${className} overflow-hidden`}
    >
      {/* Product Image */}
      <div className="relative flex h-[150px] w-full items-center justify-center bg-[#F3F5F9] md:h-[192px]">
        <img
          src={image}
          alt={title}
          className="size-[90%] rounded-t-[14px] object-contain md:rounded-t-[20px]"
        />
      </div>

      {/* Content */}
      <div className="border-stroke-color flex flex-col gap-3 rounded-b-[14px] border border-t-0 p-3 md:gap-6 md:rounded-b-[20px] md:p-5">
        {/* Tag and Sold Count */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-primary-color/9 flex items-center justify-center rounded px-1.5 py-1 md:px-2 md:py-2">
            <span className="text-primary-color text-xs leading-4 font-bold md:text-base md:leading-5">
              {tag}
            </span>
          </div>
          <span className="text-xs leading-4 font-semibold text-[#FF133D] md:text-base md:leading-5">
            {sold}
          </span>
        </div>

        {/* Title and Price */}
        <div className="flex flex-col gap-0.5 md:gap-1">
          <h3 className="text-black-color truncate text-base leading-[1.25em] font-bold md:text-lg lg:text-xl">
            {title}
          </h3>
          <p className="text-primary-color text-base leading-[1.25em] font-bold md:text-lg lg:text-xl">
            {price}
          </p>
        </div>

        {/* Store Info */}
        <Link to={'/store-details/1'} className="group flex cursor-pointer items-center gap-1.5 md:gap-2">
          <StoreIcon className="h-4 w-4 text-[#8C8C8C] transition-colors group-hover:text-primary-color md:h-5 md:w-5" />
          <span className="text-xs leading-4 font-semibold text-[#8C8C8C] transition-colors group-hover:text-primary-color md:text-base md:leading-5">
            {store}
          </span>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Wishlist Button */}
          <button
            onClick={onWishlist}
            className="group flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-[10px] bg-[#FF3056]/9 transition-colors hover:bg-[#FF3056] md:h-14 md:w-14 md:rounded-2xl"
            aria-label="Add to wishlist"
          >
            <HeartIcon className="h-5 w-5 fill-transparent stroke-current text-[#FF3056] transition-colors duration-200 group-hover:fill-white group-hover:stroke-white md:h-6 md:w-6" />
          </button>

          {/* Add to Cart Button */}
          <Button
            variant="lightBlue"
            onClick={onAddToCart}
            className="h-10 flex-1 rounded-[10px] px-0 md:h-14 md:rounded-2xl"
          >
            <div className="flex items-center gap-1 md:gap-1.5">
              <CartIcon className="h-5 w-5 md:h-6 md:w-6" />
              <span className="text-xs leading-4 font-bold md:text-base md:leading-5">
                Add to Cart
              </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
