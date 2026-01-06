import React, { useState } from "react";
import ShoppingCart from "@src/components/icons/ShoppingCart";
import HeartIcon from "@src/components/icons/HeartIcon";
import StarIcon from "@src/components/icons/StarIcon";
import Button from "@src/components/Button";
import bagTickRed from "/icons/bag-tick-red.svg";
import type { ProductDetailType } from "@src/types/ProductTypes";

// Inline Icons for icons not available in project
const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.16699 10H15.8337"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AddIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 10H15M10 15V5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ProductDetailsActionCard({
  title,
  category,
  rating,
  reviewCount,
  price,
  condition,
  weight,
  warranty,
  orderStatus,
  soldCount,
}: ProductDetailType) {
  const [quantity, setQuantity] = useState(5);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex w-full flex-col gap-6 md:gap-7 lg:gap-8">
      {/* Header Section */}
      <div className="flex w-full flex-col gap-5 md:gap-6">
        {/* Title & Rating */}
        <div className="flex w-full flex-col gap-2 md:gap-3">
          <h1 className="text-black-color text-2xl leading-[1.25em] font-extrabold md:text-[28px] lg:text-[32px]">
            {title}
          </h1>

          <div className="flex w-full flex-wrap items-center gap-2 md:gap-3">
            {/* Category Badge */}
            <div className="bg-light-blue-color flex items-center justify-center rounded-lg px-2.5 py-2 md:px-3 md:py-2.5">
              <span className="text-primary-color text-base leading-[1.25em] font-bold md:text-lg">
                {category}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 md:gap-1.5">
              <div className="flex items-center gap-0.5 md:gap-1">
                <div className="flex h-5 w-5 items-center justify-center md:h-6 md:w-6">
                  <StarIcon fill="#FF6B00" className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <span className="text-black-color text-base leading-[1.25em] font-bold md:text-lg">
                  {rating}
                </span>
              </div>
              <span className="text-sec-color text-base leading-[1.25em] font-semibold md:text-lg">
                ({reviewCount} Reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="border-stroke-color flex w-full flex-col gap-3 rounded-xl border p-4 md:gap-4 lg:p-5">
          {/* Row 1: Condition */}
          <div className="flex w-full items-center justify-between gap-1">
            <span className="text-sec-color w-[120px] shrink-0 text-base leading-[1.25em] font-semibold md:text-lg lg:w-[140px]">
              Condition:
            </span>
            <span className="text-black-color text-right text-base leading-[1.25em] font-bold md:text-lg">
              {condition}
            </span>
          </div>

          <div className="bg-stroke-color h-px w-full" />

          {/* Row 2: Weight */}
          <div className="flex w-full items-center justify-between gap-1">
            <span className="text-sec-color w-[120px] shrink-0 text-base leading-[1.25em] font-semibold md:text-lg lg:w-[140px]">
              Weight:
            </span>
            <span className="text-black-color text-right text-base leading-[1.25em] font-bold md:text-lg">
              {weight}
            </span>
          </div>

          <div className="bg-stroke-color h-px w-full" />

          {/* Row 3: Warranty */}
          <div className="flex w-full items-center justify-between gap-1">
            <span className="text-sec-color w-[120px] shrink-0 text-base leading-[1.25em] font-semibold md:text-lg lg:w-[140px]">
              Warranty:
            </span>
            <span className="text-black-color text-right text-base leading-[1.25em] font-bold md:text-lg">
              {warranty}
            </span>
          </div>

          <div className="bg-stroke-color h-px w-full" />

          {/* Row 4: Order Status */}
          <div className="flex w-full items-center justify-between gap-1">
            <span className="text-sec-color w-[120px] shrink-0 text-base leading-[1.25em] font-semibold md:text-lg lg:w-[140px]">
              Order Status:
            </span>
            <span className="text-black-color text-right text-base leading-[1.25em] font-bold md:text-lg">
              {orderStatus}
            </span>
          </div>
        </div>

        {/* Price & Quantity Section */}
        <div className="flex w-full flex-col items-start gap-4 md:gap-5 lg:flex-row lg:items-center lg:gap-6">
          <div className="flex w-full flex-col justify-center gap-1 md:gap-1.5">
            <div className="flex items-center gap-1">
              <ShoppingCart className="text-sec-color h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sec-color text-sm leading-[1.25em] font-semibold md:text-base">
                Subtotal
              </span>
            </div>
            <span className="lg:text-24 text-primary-color text-xl leading-[1.25em] font-bold md:text-2xl">
              {price}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="border-stroke-color flex w-full items-center justify-between gap-4 rounded-2xl border p-3 md:p-4 lg:w-auto lg:justify-start">
            <button
              onClick={handleDecrement}
              className="text-black-color hover:text-primary-color flex h-5 w-5 cursor-pointer items-center justify-center transition-colors"
            >
              <MinusIcon className="h-5 w-5" />
            </button>

            <div className="bg-stroke-color h-[18px] w-px" />

            <div className="flex w-[40px] justify-center md:w-[46px]">
              <span className="text-black-color text-base leading-[1.25em] font-bold md:text-lg">
                {quantity}
              </span>
            </div>

            <div className="bg-stroke-color h-[18px] w-px" />

            <button
              onClick={handleIncrement}
              className="text-black-color hover:text-primary-color flex h-5 w-5 cursor-pointer items-center justify-center transition-colors"
            >
              <AddIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex w-full flex-col gap-3 md:gap-4">
        <div className="flex w-full flex-col items-stretch gap-3 md:grid md:grid-cols-2 md:gap-5">
          {/* Add to Cart Button */}
          <Button variant="blue" className="w-full rounded-2xl md:rounded-2xl">
            <span className="flex items-center gap-1.5">
              <ShoppingCart className="h-5 w-5 text-white md:h-6 md:w-6" />
              Add to Cart
            </span>
          </Button>

          {/* Wishlist Button */}
          <Button
            variant="gray"
            className="group w-full rounded-2xl md:rounded-2xl"
          >
            <span className="flex items-center gap-1.5">
              <HeartIcon className="stroke-sec-color text-black-color group-hover:text-primary-color group-hover:stroke-primary-color h-5 w-5 md:h-6 md:w-6" />
              Add To Wishlist
            </span>
          </Button>
        </div>

        {/* Sold Count */}
        <div className="flex w-full items-center gap-1.5">
          <img
            src={bagTickRed}
            alt="bag tick red"
            className="text-primary-color size-4 md:size-5"
          />
          <span className="text-red-color text-base leading-[1.25em] font-bold md:text-lg">
            {soldCount} Units Sold
          </span>
        </div>
      </div>
    </div>
  );
}
