import React, { type ComponentType, type ReactNode, type SVGProps } from "react";

interface InputBasicProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>> | ReactNode | string;
  label?: string;
}

export default function InputBasic({
  containerClassName = "",
  className = "",
  Icon,
  label,
  ...props
}: InputBasicProps) {
  return (
    <div className={containerClassName}>
      {label && (
        <label className="text-sm font-medium text-sec-color mb-2 block">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`ring-stroke-color ring-inset placeholder:text-sec-color peer focus:ring-primary-color text-black-color w-full rounded-[12px] px-4 py-3 text-sm font-medium ring-[1.5px] transition-all duration-200 placeholder:text-sm placeholder:font-semibold focus:ring-2 focus:outline-none ${Icon ? "pl-12" : ""} ${className}`}
          {...props}
        />
        {Icon && (
          <>
            {typeof Icon === "string" ? (
              <img
                src={Icon}
                alt={label || "icon"}
                className="absolute top-1/2 left-4 size-5 -translate-y-1/2 object-contain"
              />
            ) : React.isValidElement(Icon) ? (
              React.cloneElement(Icon as React.ReactElement<{ className?: string }>, {
                className: `absolute top-1/2 left-4 size-5 -translate-y-1/2 ${(Icon as React.ReactElement<{ className?: string }>).props.className || ""
                  }`,
              })
            ) : (
              React.createElement(Icon as ComponentType<{ className?: string }>, {
                className:
                  "text-sec-color peer-focus:text-primary-color absolute top-1/2 left-4 size-5 -translate-y-1/2 transition-colors duration-200 md:h-auto md:w-auto",
              })
            )}
          </>
        )}
      </div>
    </div>
  );
}
