import React from "react";
import ArrowDownIcon from "/icons/arrow-down-select.svg";

interface Option {
  value: string;
  label: string;
}

interface SelectInteractiveProps extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
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
  const selectedLabel = options.find((opt) => opt.value === value)?.label || value || label;
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
    return <IconComponent className="h-5 w-5 text-black-color md:h-6 md:w-6" />;
  };

  return (
    <div className={`flex w-full flex-col gap-1 ${className || ""}`}>
      <div
        className={`relative flex w-full items-center gap-3 rounded-xl ring-[1.5px] ring-solid ring-stroke-color bg-white px-4 py-4.5 transition-all hover:ring-primary-color hover:ring-2 focus-within:ring-2 focus-within:ring-primary-color md:gap-[18px] md:rounded-[18px] md:px-5 md:py-5 ${
          error ? "border-red-color" : ""
        }`}
      >
        {/* Left Icon */}
        <div className="flex shrink-0 items-center justify-center">
          {renderIcon()}
        </div>

        {/* Vertical Separator */}
        <div className="h-6 w-[2px] shrink-0 bg-stroke-color md:mx-0 md:h-8"></div>

        {/* Text Content */}
        <div className="flex flex-1 items-center overflow-hidden">
            <span className={`text-sm font-bold font-lexend text-black-color truncate md:text-[16px] ${!isSelected && !value ? 'text-black-color' : ''}`}>
                {selectedLabel}
            </span>
        </div>

        {/* Right Icon (Arrow) */}
        <div className="flex shrink-0 items-center justify-center">
             <img src={ArrowDownIcon} className="h-5 w-5 text-black-color md:h-6 md:w-6" />
        </div>

        {/* Hidden Native Select for Interaction */}
        <select
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0 appearance-none"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        >
          <option value="" disabled>{label}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      
      {error && (
        <span className="text-red-color text-xs md:text-sm font-medium">{error}</span>
      )}
    </div>
  );
}
