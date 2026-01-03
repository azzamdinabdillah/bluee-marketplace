import React from "react";
import GlobalSearch from "@src/components/icons/GlobalSearch";

interface InputInteractiveProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ElementType;
}

export default function InputInteractive({
  label,
  icon: Icon = GlobalSearch,
  id,
  className,
  ...props
}: InputInteractiveProps) {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="group relative flex w-full items-center rounded-xl border-[1.5px] border-[#E8E8E8] px-4 py-2.5 transition-colors focus-within:border-primary-color focus-within:ring-2 focus-within:ring-primary-color md:rounded-[18px] md:px-5 md:py-3.5">
      <Icon className="h-5 w-5 text-[#6A7686] transition-colors group-focus-within:text-primary-color md:h-6 md:w-6" />
      <div className="mx-3 h-6 w-[1.5px] bg-[#E8E8E8] transition-colors group-focus-within:bg-primary-color md:mx-[18px] md:h-8"></div>
      <div className="relative flex h-full w-full flex-col justify-center">
        <input
          type="text"
          id={inputId}
          className={`peer w-full bg-transparent pt-3 text-sm font-bold text-[#292D32] outline-none placeholder:text-transparent md:pt-4 md:text-base ${className || ""}`}
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={inputId}
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#6A7686] transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:font-semibold peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold md:text-base md:peer-focus:top-1.5 md:peer-focus:text-sm md:peer-[:not(:placeholder-shown)]:top-1.5 md:peer-[:not(:placeholder-shown)]:text-sm"
        >
          {label}
        </label>
      </div>
    </div>
  );
}
