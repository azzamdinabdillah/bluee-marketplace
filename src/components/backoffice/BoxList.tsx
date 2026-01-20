import React from "react";

export interface BoxListItem {
  icon: string;
  label: string;
  value: string | number;
  customClassStyleValue?: string;
}

interface BoxListProps {
  items: BoxListItem[];
}

export default function BoxList({ items }: BoxListProps) {
  return (
    <div className="border-stroke-color flex flex-col gap-2 rounded-lg border p-3 md:gap-3 md:rounded-xl md:p-5 lg:gap-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex w-full flex-row items-center gap-1.5">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center md:h-6 md:w-6">
              <img
                src={item.icon}
                alt={item.label}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-sec-color font-lexend text-responsive-18 flex-1 text-left font-medium">
              {item.label}
            </span>
            <span
              className={` ${
                item.customClassStyleValue
                  ? item.customClassStyleValue
                  : "font-lexend text-black-color text-responsive-18 text-right font-bold"
              }`}
            >
              {item.value}
            </span>
          </div>
          {index < items.length - 1 && (
            <hr className="bg-stroke-color border-none h-px w-full"></hr>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
