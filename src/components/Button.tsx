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
        black: "bg-black-color text-white hover:bg-primary-color hover:text-white hover:-translate-y-0.5",
        lightBlue: "bg-light-blue-color text-primary-color hover:bg-primary-color hover:text-white hover:shadow-md",
        blue: "bg-primary-color text-white hover:bg-primary-color/90 hover:shadow-lg hover:-translate-y-0.5",
        gray: "bg-transparent border-[1.5px] border-stroke-color text-sec-color hover:border-black-color hover:text-black-color hover:bg-gray-50"
    };

    return (
        <button
            className={`flex items-center justify-center gap-2.5 px-5 py-3 md:px-6 md:py-4 rounded-[14px] md:rounded-[18px] relative cursor-pointer transition-all duration-200 active:scale-95 font-medium text-[14px] md:text-[16px] text-nowrap ${variants[variant]} ${className}`}
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
