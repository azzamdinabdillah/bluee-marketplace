import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Additional classes for the wrapper label
   */
  wrapperClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ className, wrapperClassName, ...props }) => {
  return (
    <label className={`relative inline-flex items-center cursor-pointer group ${wrapperClassName || ''}`}>
      <input
        type="checkbox"
        className={`peer sr-only ${className || ''}`}
        {...props}
      />
      <div className="
        size-5 
        rounded-[4px] 
        border-2 border-sec-color 
        bg-white 
        peer-checked:bg-primary-color 
        peer-checked:border-primary-color 
        flex items-center justify-center 
        transition-all duration-100 
        peer-checked:[&>svg]:opacity-100
        peer-checked:[&>svg]:scale-100
      ">
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-0 scale-75 transition-all duration-200 ease-in-out"
        >
          <path
            d="M1.25 4L3.75 6.5L8.75 1.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </label>
  );
};

export default Checkbox;
