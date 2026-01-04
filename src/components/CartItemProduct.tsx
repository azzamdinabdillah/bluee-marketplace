import type { ProductDetailType } from "@src/types/ProductTypes";
import { useState } from "react";
import Button from "./Button";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import TrashIcon from "./icons/TrashIcon";
import ShoppingCartIcon from "/icons/shopping-cart-gray.svg";

export interface CartItemType extends Partial<ProductDetailType> {
  quantity: number;
}

export default function ChartItemProduct({ item }: { item: CartItemType }) {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  return (
    <div className="border-stroke-color flex w-full flex-col gap-4 rounded-2xl border p-4 md:gap-5 md:rounded-[20px] md:p-5">
      {/* Top Section */}
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-[14px]">
        {/* Image & Info */}
        <div className="flex w-full flex-1 flex-row items-center gap-3 md:gap-[14px]">
          <img
            src={item.image || "/images/lp-1.png"}
            alt="Product"
            className="h-20 w-20 rounded object-cover md:h-[92px] md:w-[92px]"
          />
          <div className="flex flex-col gap-1 md:gap-[6px]">
            <h4 className="text-black-color font-lexend text-base leading-[1.25em] font-bold md:text-lg">
              {item.title}
            </h4>
            <div className="flex flex-row items-center gap-[6px]">
              <span className="text-primary-color font-lexend text-sm leading-[1.25em] font-bold md:text-base">
                {item.category}
              </span>
              <span className="text-sec-color text-lg leading-[1.21em] md:text-[22px]">
                •
              </span>
              <span className="text-sec-color font-lexend text-sm leading-[1.25em] font-semibold md:text-base">
                {item.weight}
              </span>
            </div>
          </div>
        </div>

        {/* Quantity Control */}
        <div className="border-stroke-color flex w-full items-center justify-center gap-3 rounded-xl border p-3 md:w-auto md:justify-start md:gap-4 md:rounded-2xl md:p-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-black-color flex h-5 w-5 cursor-pointer items-center justify-center hover:opacity-70"
          >
            <MinusIcon />
          </button>
          <div className="bg-stroke-color h-[18px] w-px"></div>
          <span className="text-black-color font-lexend w-10 text-center text-base leading-[1.25em] font-bold md:w-[46px] md:text-lg">
            {quantity}
          </span>
          <div className="bg-stroke-color h-[18px] w-px"></div>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-black-color flex h-5 w-5 cursor-pointer items-center justify-center hover:opacity-70"
          >
            <PlusIcon />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-stroke-color h-px w-full"></div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <div className="flex w-full flex-row items-center justify-between md:w-auto md:flex-col md:items-start md:justify-start md:gap-[6px]">
          <div className="flex items-center gap-1">
            <img src={ShoppingCartIcon} alt="" />
            <span className="text-sec-color font-lexend text-sm leading-[1.25em] font-semibold md:text-base">
              Subtotal
            </span>
          </div>
          <span className="text-primary-color font-lexend text-base leading-[1.25em] font-bold md:text-lg">
            {item.price}
          </span>
        </div>

        <Button
          variant="lightRed"
          icon={TrashIcon}
          iconPosition="left"
          className="font-lexend w-full font-semibold md:w-auto"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
