import React, { useState } from "react";
import ShoppingCart from "@src/components/icons/ShoppingCart";
import HeartIcon from "@src/components/icons/HeartIcon";
import StarIcon from "@src/components/icons/StarIcon";
import Button from "@src/components/Button";
import bagTickRed from "/icons/bag-tick-red.svg";

// Inline Icons for icons not available in project
const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4.16699 10H15.8337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AddIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 10H15M10 15V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export interface ProductActionCardProps {
  title: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: string;
  condition: string;
  weight: string;
  warranty: string;
  orderStatus: string;
  soldCount: number;
}

export default function ProductActionCard({
  title,
  category,
  rating,
  reviewCount,
  price,
  condition,
  weight,
  warranty,
  orderStatus,
  soldCount
}: ProductActionCardProps) {
  const [quantity, setQuantity] = useState(5);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col gap-6 md:gap-7 lg:gap-8 w-full">
      {/* Header Section */}
      <div className="flex flex-col gap-5 md:gap-6 w-full">
        {/* Title & Rating */}
        <div className="flex flex-col gap-2 md:gap-3 w-full">
          <h1 className="font-extrabold text-2xl md:text-[28px] lg:text-[32px] leading-[1.25em] text-black-color">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full">
            {/* Category Badge */}
            <div className="flex justify-center items-center px-2.5 py-2 md:px-3 md:py-2.5 bg-light-blue-color rounded-lg">
              <span className="font-bold text-base md:text-lg leading-[1.25em] text-primary-color">
                {category}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 md:gap-1.5">
              <div className="flex items-center gap-0.5 md:gap-1">
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                  <StarIcon fill="#FF6B00" className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="font-bold text-base md:text-lg leading-[1.25em] text-black-color">
                  {rating}
                </span>
              </div>
              <span className="font-semibold text-base md:text-lg leading-[1.25em] text-sec-color">
                ({reviewCount} Reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="flex flex-col gap-3 md:gap-4 p-4 lg:p-5 w-full rounded-xl border border-stroke-color">
          {/* Row 1: Condition */}
          <div className="flex items-center gap-1 w-full justify-between">
            <span className="font-semibold text-base md:text-lg leading-[1.25em] text-sec-color w-[120px] lg:w-[140px] shrink-0">
              Condition:
            </span>
            <span className="font-bold text-base md:text-lg leading-[1.25em] text-black-color text-right">
              {condition}
            </span>
          </div>

          <div className="w-full h-[1px] bg-stroke-color" />

          {/* Row 2: Weight */}
          <div className="flex items-center gap-1 w-full justify-between">
            <span className="font-semibold text-base md:text-lg leading-[1.25em] text-sec-color w-[120px] lg:w-[140px] shrink-0">
              Weight:
            </span>
            <span className="font-bold text-base md:text-lg leading-[1.25em] text-black-color text-right">
              {weight}
            </span>
          </div>

          <div className="w-full h-[1px] bg-stroke-color" />

          {/* Row 3: Warranty */}
          <div className="flex items-center gap-1 w-full justify-between">
            <span className="font-semibold text-base md:text-lg leading-[1.25em] text-sec-color w-[120px] lg:w-[140px] shrink-0">
              Warranty:
            </span>
            <span className="font-bold text-base md:text-lg leading-[1.25em] text-black-color text-right">
              {warranty}
            </span>
          </div>

          <div className="w-full h-[1px] bg-stroke-color" />

          {/* Row 4: Order Status */}
          <div className="flex items-center gap-1 w-full justify-between">
            <span className="font-semibold text-base md:text-lg leading-[1.25em] text-sec-color w-[120px] lg:w-[140px] shrink-0">
              Order Status:
            </span>
            <span className="font-bold text-base md:text-lg leading-[1.25em] text-black-color text-right">
              {orderStatus}
            </span>
          </div>
        </div>

        {/* Price & Quantity Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-5 lg:gap-6 w-full">
          <div className="flex flex-col justify-center gap-1 md:gap-1.5 w-full">
            <div className="flex items-center gap-1">
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-sec-color" />
              <span className="font-semibold text-sm md:text-base leading-[1.25em] text-sec-color">
                Subtotal
              </span>
            </div>
            <span className="font-bold text-xl md:text-2xl lg:text-24 leading-[1.25em] text-primary-color">
              {price}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 p-3 md:p-4 rounded-2xl border border-stroke-color w-full lg:w-auto justify-between lg:justify-start">
            <button
              onClick={handleDecrement}
              className="w-5 h-5 flex items-center justify-center text-black-color hover:text-primary-color transition-colors cursor-pointer"
            >
              <MinusIcon className="w-5 h-5" />
            </button>

            <div className="w-[1px] h-[18px] bg-stroke-color" />

            <div className="w-[40px] md:w-[46px] flex justify-center">
              <span className="font-bold text-base md:text-lg leading-[1.25em] text-black-color">
                {quantity}
              </span>
            </div>

            <div className="w-[1px] h-[18px] bg-stroke-color" />

            <button
              onClick={handleIncrement}
              className="w-5 h-5 flex items-center justify-center text-black-color hover:text-primary-color transition-colors cursor-pointer"
            >
              <AddIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>


      {/* Actions Section */}
      <div className="flex flex-col gap-3 md:gap-4 w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 items-stretch gap-3 md:gap-5 w-full">
          {/* Add to Cart Button */}
          <Button variant="blue" className="w-full rounded-2xl md:rounded-2xl">
            <span className="flex items-center gap-1.5">
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-white" />
              Add to Cart
            </span>
          </Button>

          {/* Wishlist Button */}
          <Button variant="gray" className="w-full rounded-2xl md:rounded-2xl group">
            <span className="flex items-center gap-1.5">
              <HeartIcon className="w-5 h-5 md:w-6 md:h-6 stroke-sec-color text-black-color group-hover:text-primary-color group-hover:stroke-primary-color" />
              Add To Wishlist
            </span>
          </Button>
        </div>

        {/* Sold Count */}
        <div className="flex items-center gap-1.5 w-full">
          <img src={bagTickRed} alt="bag tick red" className="size-4 md:size-5 text-primary-color" />
          <span className="font-bold text-base md:text-lg leading-[1.25em] text-red-color">
            {soldCount} Units Sold
          </span>
        </div>
      </div>
    </div>
  );
}
