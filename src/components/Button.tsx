import React from 'react';

type ButtonVariant = 'black' | 'lightBlue' | 'blue' | 'gray';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: string;
    className?: string;
    variant?: ButtonVariant;
}

export default function Button({
    children,
    icon,
    className = "",
    variant = 'black',
    ...props
}: ButtonProps) {

    const variants = {
        black: "bg-black-color text-white hover:opacity-90",
        lightBlue: "bg-light-blue-color text-primary-color hover:bg-primary-color hover:text-white",
        blue: "bg-primary-color text-white hover:opacity-90",
        gray: "bg-transparent border-[1.5px] border-stroke-color text-sec-color hover:border-black-color hover:text-black-color"
    };

    return (
        <button
            className={`flex items-center justify-center gap-2.5 px-5 py-3 md:px-6 md:py-4 rounded-[14px] md:rounded-[18px] relative cursor-pointer transition-all duration-200 font-medium text-[14px] md:text-[16px] text-nowrap ${variants[variant]} ${className}`}
            {...props}
        >
            <div>
                {children}
            </div>

            {icon && (
                <div className="relative shrink-0 size-5 md:size-6">
                    <img src={icon} alt="" className="block size-full max-w-none" />
                </div>
            )}
        </button>
    );
}
