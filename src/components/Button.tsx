import React from 'react';

type ButtonVariant = 'black' | 'lightBlue' | 'blue' | 'gray';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: string | React.ElementType;
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
        black: "bg-black-color text-white hover:bg-primary-color",
        lightBlue: "bg-light-blue-color text-primary-color hover:bg-primary-color hover:text-white",
        blue: "bg-primary-color text-white hover:bg-black-color",
        gray: "bg-transparent border-[1.5px] border-stroke-color text-sec-color hover:border-primary-color hover:text-primary-color hover:bg-primary-color/5"
    };

    return (
        <button
            className={`group flex items-center justify-center gap-2.5 px-5 py-3 md:px-6 md:py-4 rounded-[14px] md:rounded-[18px] relative cursor-pointer transition-all duration-300 ease-out active:scale-95 font-medium text-[14px] md:text-[16px] text-nowrap ${variants[variant]} ${className}`}
            {...props}
        >
            <div className="relative z-10">
                {children}
            </div>

            {icon && (
                <div className="relative shrink-0 size-5 md:size-6">
                    {typeof icon === 'string' ? (
                        <img
                            src={icon}
                            alt=""
                            className={`block size-full max-w-none object-contain transition-all duration-300 ${variant === 'lightBlue' ? 'group-hover:brightness-0 group-hover:invert' : ''} ${variant === 'gray' ? 'group-hover:sepia group-hover:hue-rotate-190 group-hover:saturate-500' : ''}`}
                        />
                    ) : (
                        (() => {
                            const Icon = icon;
                            return <Icon className="size-full transition-colors duration-300" />;
                        })()
                    )}
                </div>
            )}
        </button>
    );
}
