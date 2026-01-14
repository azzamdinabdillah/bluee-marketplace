import ShoppingCart from "./icons/ShoppingCart";

interface ProductDetailsCardProps {
  image: string;
  title: string;
  category: string;
  weight: string;
  price: number;
  quantity: number;
  className?: string;
}

export default function ProductDetailsCard({
  image,
  title,
  category,
  weight,
  price,
  quantity,
  className = "",
}: ProductDetailsCardProps) {
  const subtotal = price * quantity;

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
      className={`border-stroke-color flex w-full flex-col gap-3 rounded-[20px] border bg-white p-4 md:gap-4 md:p-5 lg:gap-[20px] lg:p-[20px] ${className}`}
    >
      {/* Top Section */}
      <div className="flex flex-row items-start justify-between gap-3 md:gap-4 lg:gap-[14px]">
        {/* Image & Info */}
        <div className="flex flex-1 flex-row gap-3 md:gap-4 lg:gap-[14px]">
          <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[10px] bg-[#F3F5F9] md:h-20 md:w-20 lg:h-[92px] lg:w-[92px]">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-contain p-2"
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-[6px]">
            <h3 className="text-black-color line-clamp-2 text-sm font-bold md:text-base lg:text-[18px]">
              {title}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-primary-color text-xs font-bold md:text-sm lg:text-[16px]">
                {category}
              </span>
              <span className="text-sec-color text-sm lg:text-[22px]">•</span>
              <span className="text-sec-color text-xs font-semibold md:text-sm lg:text-[16px]">
                {weight}
              </span>
            </div>
          </div>
        </div>

        {/* Price & Qty */}
        <div className="flex shrink-0 flex-col items-end gap-1 text-right md:gap-1.5 lg:gap-2">
          <span className="text-primary-color text-sm font-bold md:text-base lg:text-[16px]">
            {formatCurrency(price)}
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
        <div className="flex flex-row items-center gap-1 md:gap-2">
          <ShoppingCart className="text-sec-color h-4 w-4 md:h-5 md:w-5" />
          <span className="text-sec-color text-xs font-semibold md:text-sm lg:text-[16px]">
            Subtotal
          </span>
        </div>
        <span className="text-primary-color text-base font-bold md:text-lg lg:text-[18px]">
          {formatCurrency(subtotal)}
        </span>
      </div>
    </div>
  );
}
