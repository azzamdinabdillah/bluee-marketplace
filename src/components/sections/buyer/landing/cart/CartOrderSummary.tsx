import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@src/components/Button';
import arrowRight from '/icons/arrow-right-rounded.svg';

export interface SummaryItem {
  icon: string;
  label: string;
  value: string;
  isGrandTotal?: boolean;
}

interface CartOrderSummaryProps {
  summaryItems: SummaryItem[];
}

export default function CartOrderSummary({ summaryItems }: CartOrderSummaryProps) {
  return (
    <div className="flex h-fit w-full flex-col gap-3 rounded-xl bg-white p-4 md:gap-4 md:rounded-[20px] md:p-5">
      <h3 className="text-black-color font-lexend text-lg font-bold md:text-xl">
        Order Summary
      </h3>

      <div className="border-stroke-color flex flex-col gap-3 rounded-xl border p-4 md:gap-4 md:p-5">
        {summaryItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-1">
              <img
                src={item.icon}
                alt="icon"
                className="size-5 md:size-6"
              />
              <span className="text-sec-color font-lexend flex-1 text-[15px] font-semibold md:text-lg">
                {item.label}
              </span>
              <span
                className={`font-lexend text-[15px] font-bold md:text-lg ${
                  item.isGrandTotal ? "text-primary-color" : "text-black-color"
                }`}
              >
                {item.value}
              </span>
            </div>
            {index < summaryItems.length - 1 && (
              <div className="bg-stroke-color h-px w-full"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <Link to="/cart/checkout">
        <Button
          variant="blue"
          icon={arrowRight}
          className="w-full rounded-xl md:rounded-2xl"
        >
          Continue To Checkout
        </Button>
      </Link>
    </div>
  );
}
