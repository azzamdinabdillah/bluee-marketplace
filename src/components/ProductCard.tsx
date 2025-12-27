import HeartIcon from './icons/HeartIcon';
import CartIcon from './icons/CartIcon';
import Button from './Button';

interface ProductCardProps {
  image?: string;
  title?: string;
  price?: string;
  sold?: string | number;
  tag?: string;
  onAddToCart?: () => void;
  onWishlist?: () => void;
  className?: string;
}

export default function ProductCard({
  image = "https://placehold.co/276x192",
  title = "SonicWhirl Wireless Headphone",
  price = "Rp 3.500.500",
  sold = "120 Sold",
  tag = "Gadget",
  onAddToCart,
  onWishlist,
  className = "",
}: ProductCardProps) {
  return (
    <div className={`flex flex-col w-full md:w-[276px] rounded-[14px] md:rounded-[20px] ${className}`}>
      {/* Product Image */}
      <div className="w-full h-[150px] md:h-[192px] relative bg-[#F3F5F9] flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="size-[90%] object-contain rounded-t-[14px] md:rounded-t-[20px]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 md:gap-6 p-3 md:p-5 border border-stroke-color border-t-0 rounded-b-[14px] md:rounded-b-[20px]">

        {/* Tag and Sold Count */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-primary-color/9 rounded px-1.5 py-1 md:px-2 md:py-2 flex items-center justify-center">
            <span className="text-primary-color font-bold text-xs md:text-base leading-4 md:leading-5">
              {tag}
            </span>
          </div>
          <span className="text-[#FF133D] font-semibold text-xs md:text-base leading-4 md:leading-5">
            {sold}
          </span>
        </div>

        {/* Title and Price */}
        <div className="flex flex-col gap-0.5 md:gap-1">
          <h3 className="text-black-color font-bold text-base md:text-lg lg:text-xl leading-[1.25em] truncate">
            {title}
          </h3>
          <p className="text-primary-color font-bold text-base md:text-lg lg:text-xl leading-[1.25em]">
            {price}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Wishlist Button */}
          <button
            onClick={onWishlist}
            className="flex cursor-pointer h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#FF3056]/9 transition-colors hover:bg-[#FF3056] group md:h-14 md:w-14 md:rounded-2xl"
            aria-label="Add to wishlist"
          >
            <HeartIcon
              className="h-5 w-5 fill-transparent stroke-current text-[#FF3056] transition-colors duration-200 group-hover:fill-white group-hover:stroke-white md:h-6 md:w-6"
            />
          </button>

          {/* Add to Cart Button */}
          <Button
            variant="lightBlue"
            onClick={onAddToCart}
            className="flex-1 h-10 md:h-14 rounded-[10px] md:rounded-2xl px-0"
          >
            <div className="flex items-center gap-1 md:gap-1.5">
              <CartIcon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-bold text-xs md:text-base leading-4 md:leading-5">Add to Cart</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
