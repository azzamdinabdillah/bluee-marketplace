import React from "react";
import GlobalSearch from "@src/components/icons/GlobalSearch";

// type InputType = "text" | "password" | "email" | "number" | "tel" | "url" | "search";

interface BaseProps {
  label: string;
  icon?: React.ElementType;
  id?: string;
  className?: string;
  as?: "input" | "textarea";
  error?: string;
}

type InputProps = BaseProps & React.InputHTMLAttributes<HTMLInputElement> & { as?: "input" };
type TextareaProps = BaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

type InputInteractiveProps = InputProps | TextareaProps;

export default function InputInteractive({
  label,
  icon: Icon = GlobalSearch,
  id,
  className,
  as = "input",
  error,
  ...props
}: InputInteractiveProps) {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const isTextarea = as === "textarea";

  const commonClasses = `peer w-full bg-transparent text-sm font-bold text-[#292D32] outline-none placeholder:text-transparent md:text-base autofill:bg-transparent! ${className || ""}`;
  const inputClasses = `${commonClasses} pt-3 md:pt-4 `;
  const textareaClasses = `${commonClasses} pt-5 min-h-24 resize-y`;

  const containerBorderClasses = error
    ? "ring-red-color border-0! outline-none ring-2 focus-within:ring-red-color focus-within:ring-2 focus-within:ring-red-color"
    : "ring-stroke-color focus-within:ring-primary-color focus-within:ring-2 focus-within:ring-primary-color";

  return (
    <div className="flex w-full flex-col gap-1">
      <div className={`group relative flex w-full ${isTextarea ? "items-stretch" : "items-center"} rounded-xl ring-[1.5px] ${containerBorderClasses} px-4 py-2.5 transition-colors md:rounded-[18px] md:px-5 md:py-3.5`}>
        <div className={`flex shrink-0 ${isTextarea ? "pt-3 md:pt-4" : "items-center"}`}>
          <Icon className={`h-5 w-5 text-sec-color transition-colors group-focus-within:text-primary-color md:h-6 md:w-6`} />
        </div>
        <div className={`mx-3 w-[2px] bg-stroke-color transition-colors group-focus-within:bg-primary-color md:mx-[18px] ${isTextarea ? "" : "h-6 md:h-8"}`}></div>
        <div className="relative flex h-full w-full flex-col justify-center">
          {isTextarea ? (
            <textarea
              id={inputId}
              className={textareaClasses}
              placeholder={label}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              type="text" // Default type, can be overridden by props
              id={inputId}
              className={inputClasses}
              placeholder={label}
              {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
          <label
            htmlFor={inputId}
            className={`pointer-events-none absolute left-0 z-10 w-full bg-white pr-1 text-sm font-semibold text-sec-color transition-all peer-focus:text-xs peer-focus:font-semibold peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold
              md:text-base md:peer-focus:text-sm md:peer-[:not(:placeholder-shown)]:text-sm
              ${isTextarea
                ? "top-6 -translate-y-1/2 peer-focus:top-2 peer-[:not(:placeholder-shown)]:top-2 md:top-7 md:peer-focus:top-2.5 md:peer-[:not(:placeholder-shown)]:top-2.5"
                : "top-1/2 -translate-y-1/2 peer-focus:top-1 peer-[:not(:placeholder-shown)]:top-1 md:peer-focus:top-1.5 md:peer-[:not(:placeholder-shown)]:top-1.5"
              }
            `}
          >
            {label}
          </label>
        </div>
      </div>
      {error && (
        <span className="text-red-color text-xs md:text-sm font-medium">{error}</span>
      )}
    </div>
  );
}
