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
    <div className={`flex flex-col w-[276px] rounded-[20px] ${className}`}>
      {/* Product Image */}
      <div className="w-full h-[192px] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-[20px]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 p-5 border border-stroke-color border-t-0 rounded-b-[20px]">

        {/* Tag and Sold Count */}
        <div className="flex items-center gap-3">
          <div className="bg-primary-color/9 rounded px-2 py-2 flex items-center justify-center">
            <span className="text-primary-color font-bold text-base leading-5">
              {tag}
            </span>
          </div>
          <span className="text-[#FF133D] font-semibold text-base leading-5">
            {sold}
          </span>
        </div>

        {/* Title and Price */}
        <div className="flex flex-col gap-1">
          <h3 className="text-black-color font-bold text-xl leading-[1.25em] truncate">
            {title}
          </h3>
          <p className="text-primary-color font-bold text-xl leading-[1.25em]">
            {price}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Wishlist Button */}
          <button
            onClick={onWishlist}
            className="w-14 h-14 rounded-2xl bg-[#FF3056]/9 flex items-center justify-center cursor-pointer hover:bg-[#FF3056]/20 transition-colors"
            aria-label="Add to wishlist"
          >
            <HeartIcon className="text-[#FF3056] w-6 h-6" strokeWidth={2} />
          </button>

          {/* Add to Cart Button */}
          <Button
            variant="lightBlue"
            onClick={onAddToCart}
            className="flex-1 h-14 rounded-2xl"
          >
            <div className="flex items-center gap-1.5">
              <CartIcon className="w-6 h-6" />
              <span className="font-bold text-base leading-5">Add to Cart</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
