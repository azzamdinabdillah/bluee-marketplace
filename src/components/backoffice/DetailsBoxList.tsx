import React from 'react';

interface DetailItem {
  icon: string;
  value: string | number;
  label: string;
}

interface DetailsBoxListProps {
  items: DetailItem[];
}

export default function DetailsBoxList({ items }: DetailsBoxListProps) {
  return (
    <div className="border-stroke-color flex flex-col gap-3 rounded-[20px] border p-3 md:gap-4 md:p-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center gap-[10px]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3F3F3] md:h-[60px] md:w-[60px]">
              <img src={item.icon} alt={item.label} className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-lexend text-black-color text-base font-bold md:text-lg">
                {item.value}
              </span>
              <span className="font-lexend text-sec-color text-sm font-semibold md:text-base">
                {item.label}
              </span>
            </div>
          </div>
          {index < items.length - 1 && (
            <div className="bg-stroke-color h-px w-full"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
