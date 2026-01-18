import type { ProductType } from "@src/types/ProductTypes";
import ShoppingCart from "./icons/ShoppingCart";

export default function ProductDetailsCard({
  image,
  title,
  category,
  categoryIcon,
  weight,
  price,
  quantity,
  className = "",
}: ProductType) {
  const subtotal =
    typeof price === "number" && typeof quantity === "number"
      ? price * quantity
      : 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div
      className={`border-stroke-color flex w-full flex-col gap-2 rounded-[12px] border bg-white p-3 md:gap-4 md:rounded-[20px] md:p-5 lg:gap-[20px] lg:p-[20px] ${className}`}
    >
      {/* Mobile Layout (Vertical Column) */}
      <div className="flex flex-col gap-3 md:hidden">
        {/* Top: Image (Centered) */}
        <div className="flex w-full items-center justify-center rounded-[12px] bg-[#F3F5F9] py-2">
          <img
            src={Array.isArray(image) ? image[0] : image}
            alt={title}
            className="h-[120px] w-full object-contain"
          />
        </div>

        {/* Middle: Info */}
        <div className="flex flex-col gap-1">
          <h3 className="text-black-color truncate text-base font-bold">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5">
            {categoryIcon && (
              <img src={categoryIcon} alt="Category" className="h-4 w-4" />
            )}
            <span className="text-sec-color text-sm font-semibold">
              {category}
            </span>
            {weight && (
              <>
                <span className="text-sec-color text-sm">•</span>
                <span className="text-sec-color text-sm font-semibold">
                  {weight}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Bottom: Price & Subtotal */}
        <div className="border-stroke-color flex flex-col gap-2 border-t pt-2">
          <div className="flex items-center justify-between">
            <span className="text-sec-color text-sm font-semibold">Price</span>
            <div className="text-right">
              <span className="text-primary-color text-sm font-bold">
                {typeof price === "number" ? formatCurrency(price) : "-"}
              </span>
              <span className="text-sec-color ml-1 text-xs font-semibold">
                x {quantity}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sec-color text-sm font-semibold">
              Subtotal
            </span>
            <span className="text-primary-color text-base font-bold">
              {formatCurrency(subtotal)}
            </span>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Layout (Original Vertical Stack) */}
      <div className="hidden md:flex md:flex-col md:gap-4 lg:gap-[20px]">
        {/* Top Section */}
        <div className="flex flex-row items-start justify-between gap-3 md:gap-4 lg:gap-[14px]">
          {/* Image & Info */}
          <div className="flex min-w-0 flex-1 flex-row gap-3 md:gap-4 lg:gap-[14px]">
            <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[10px] bg-[#F3F5F9] md:h-20 md:w-20 lg:h-[92px] lg:w-[92px]">
              <img
                src={Array.isArray(image) ? image[0] : image}
                alt={title}
                className="h-full w-full object-contain p-2"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1 md:gap-1.5 lg:gap-[6px]">
              <h3 className="text-black-color text-responsive-18 truncate font-bold">
                {title}
              </h3>
              <div className="flex flex-wrap items-center gap-1.5">
                {categoryIcon && (
                  <img
                    src={categoryIcon}
                    alt="Category"
                    className="h-4 w-4 md:h-5 md:w-5"
                  />
                )}
                <span className="text-sec-color text-responsive-16 font-semibold">
                  {category}
                </span>
                {weight && (
                  <>
                    <span className="text-sec-color text-sm lg:text-[22px]">
                      •
                    </span>
                    <span className="text-sec-color text-responsive-16 font-semibold">
                      {weight}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Price & Qty */}
          <div className="flex shrink-0 flex-col items-end gap-1 text-right md:gap-1.5 lg:gap-2">
            <span className="text-primary-color text-sm font-bold md:text-base lg:text-[16px]">
              {typeof price === "number"
                ? formatCurrency(price)
                : "Price not available"}
            </span>
            <span className="text-sec-color text-sm font-semibold md:text-base lg:text-[16px]">
              ({quantity}x)
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-stroke-color h-px w-full" />

        {/* Bottom Section */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-1">
            <ShoppingCart className="text-sec-color h-4 w-4 md:h-5 md:w-5" />
            <span className="text-sec-color text-responsive-16 font-semibold">
              Subtotal
            </span>
          </div>
          <span className="text-primary-color text-base font-bold md:text-lg lg:text-[18px]">
            {formatCurrency(subtotal)}
          </span>
        </div>
      </div>
    </div>
  );
}
