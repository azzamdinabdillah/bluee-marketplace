import React from "react";
import InputBasic from "@src/components/InputBasic";
import searchIcon from "/icons/receipt-search.svg";
import arrowDownIcon from "/icons/arrow-down.svg";

interface SectionFilterProps {
  title: string;
  badgeIcon: string;
  badgeValue: string | number;
  badgeLabel: string;
  rightElement?: React.ReactNode;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  entriesValue?: string | number;
  onEntriesChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  showSearch?: boolean;
  showEntries?: boolean;
  children: React.ReactNode;
}

const SectionFilter: React.FC<SectionFilterProps> = ({
  title,
  badgeIcon,
  badgeValue,
  badgeLabel,
  rightElement,
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  entriesValue,
  onEntriesChange,
  showSearch = true,
  showEntries = true,
  children,
}) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 md:gap-5 md:rounded-[20px] md:p-5 lg:gap-6 lg:p-6">
      {/* Title & Badge */}
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div className="flex flex-col gap-2">
          <h2 className="font-lexend text-responsive-20 text-black-color font-bold">
            {title}
          </h2>
          <div className="flex flex-row items-center gap-1">
            <img src={badgeIcon} alt="Total" className="size-4 md:size-5" />
            <span className="font-lexend text-responsive-16 text-sec-color font-semibold">
              {badgeValue} {badgeLabel}
            </span>
          </div>
        </div>

        {rightElement && rightElement}
      </div>

      {/* Controls (Search & Filter) */}
      {(showSearch || showEntries) && (
        <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          {/* Search Bar */}
          {showSearch && (
            <InputBasic
              containerClassName="w-full md:w-[320px] lg:w-[400px]"
              placeholder={searchPlaceholder}
              Icon={searchIcon}
              className="rounded-2xl md:py-4 md:pr-4"
              value={searchValue}
              onChange={onSearchChange}
            />
          )}

          {/* Filter Show Entries */}
          {showEntries && (
            <div className="flex w-full flex-row items-center justify-between gap-3 md:w-auto md:justify-end">
              <span className="font-lexend text-sec-color text-responsive-16 font-medium whitespace-nowrap">
                Show
              </span>
              <div className="relative min-w-[120px] md:min-w-[140px]">
                <select
                  value={entriesValue}
                  onChange={onEntriesChange}
                  className="border-stroke-color font-lexend text-black-color focus:border-primary-color text-responsive-16 w-full cursor-pointer appearance-none rounded-2xl border bg-transparent py-2.5 pr-10 pl-4 font-semibold focus:outline-none md:py-3"
                >
                  <option value="4">4 Entries</option>
                  <option value="10">10 Entries</option>
                  <option value="25">25 Entries</option>
                </select>
                <img
                  src={arrowDownIcon}
                  alt="Select"
                  className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 md:right-4 md:h-5 md:w-5"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {children}
    </div>
  );
};

export default SectionFilter;
