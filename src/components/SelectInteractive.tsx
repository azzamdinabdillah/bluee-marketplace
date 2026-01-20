import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectInteractiveProps extends Omit<
  React.InputHTMLAttributes<HTMLSelectElement>,
  "onChange" | "value"
> {
  label?: string;
  icon?: React.ElementType | string;
  options?: Option[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  error?: string;
  placeholder?: string;
}

export default function SelectInteractive({
  label = "Select Category",
  icon: Icon,
  options = [],
  value,
  onChange,
  className,
  error,
  placeholder,
  ...props
}: SelectInteractiveProps) {
  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || value || label;
  const isSelected = !!value;

  const renderIcon = () => {
    if (!Icon) return null;
    if (typeof Icon === "string") {
      return (
        <img
          src={Icon}
          alt=""
          className="h-5 w-5 object-contain md:h-6 md:w-6"
        />
      );
    }
    const IconComponent = Icon as React.ElementType;
    return (
      <IconComponent className="text-sec-color group-hover:text-primary-color group-focus-within:text-primary-color h-5 w-5 transition-colors md:h-6 md:w-6" />
    );
  };

  return (
    <div className={`flex w-full flex-col gap-1 ${className || ""}`}>
      <div
        className={`group ring-solid ring-stroke-color hover:ring-primary-color focus-within:ring-primary-color relative flex w-full items-center gap-3 rounded-xl bg-white px-4 py-4.5 ring-[1.5px] transition-all focus-within:ring-2 hover:ring-2 md:gap-[18px] md:rounded-[18px] md:px-5 md:py-5 ${
          error ? "border-red-color" : ""
        }`}
      >
        {/* Left Icon */}
        <div className="flex shrink-0 items-center justify-center">
          {renderIcon()}
        </div>

        {/* Vertical Separator */}
        <div className="bg-stroke-color group-hover:bg-primary-color group-focus-within:bg-primary-color h-6 w-[2px] shrink-0 transition-colors md:mx-0 md:h-8"></div>

        {/* Text Content */}
        <div className="flex flex-1 items-center overflow-hidden">
          <span
            className={`font-lexend text-black-color truncate text-sm font-bold md:text-[16px] ${!isSelected && !value ? "text-black-color" : ""}`}
          >
            {selectedLabel}
          </span>
        </div>

        {/* Right Icon (Arrow) */}
        <div className="flex shrink-0 items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-sec-color group-hover:text-primary-color group-focus-within:text-primary-color h-5 w-5 transition-colors md:h-6 md:w-6"
          >
            <path
              d="M4.07992 8.9502L10.5999 15.4702C11.3699 16.2402 12.6299 16.2402 13.3999 15.4702L19.9199 8.9502"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Hidden Native Select for Interaction */}
        <select
          className="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        >
          <option value="" disabled>
            {label}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <span className="text-red-color text-xs font-medium md:text-sm">
          {error}
        </span>
      )}
    </div>
  );
}
