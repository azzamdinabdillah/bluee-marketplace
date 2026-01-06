import React from "react";

export interface SummaryItem {
  icon: string;
  label: string;
  value: string;
  isTotal?: boolean;
}

interface OrderSummaryProps {
  items: SummaryItem[];
  button?: React.ReactNode;
}

const CheckoutOrderSummary: React.FC<OrderSummaryProps> = ({ items, button }) => {
  return (
    <div className="flex h-fit w-full flex-col gap-3 rounded-xl bg-white p-4 md:gap-4 md:rounded-[20px] md:p-5">
      <h3 className="text-black-color font-lexend text-lg font-bold md:text-xl">
        Order Summary
      </h3>

      <div className="border-stroke-color flex flex-col gap-3 rounded-xl border p-4 md:gap-4 md:p-5">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-1">
              <img
                src={item.icon}
                alt="icon"
                className="h-5 w-5 md:h-6 md:w-6"
              />
              <span className="text-sec-color font-lexend flex-1 text-base font-semibold md:text-lg">
                {item.label}
              </span>
              <span
                className={`${
                  item.isTotal ? "text-primary-color" : "text-black-color"
                } font-lexend text-base font-bold md:text-lg`}
              >
                {item.value}
              </span>
            </div>
            {index < items.length - 1 && (
              <div className="bg-stroke-color h-px w-full"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {button}
    </div>
  );
};

export default CheckoutOrderSummary;
