import React from "react";

interface StatCardProps {
    iconSrc: string;
    value: string;
    label: string;
    children?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({
    iconSrc,
    value,
    label,
    children,
}) => {
    return (
        <div className="flex w-full cursor-pointer flex-col gap-4 rounded-[20px] bg-white p-4 transition-all duration-300 md:gap-5 md:p-5 lg:gap-6">
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
                <div className="bg-light-blue-color flex h-12 w-12 items-center justify-center rounded-[50px] p-3 transition-transform group-hover:scale-105 md:h-[52px] md:w-[52px] md:p-[14px] lg:h-14 lg:w-14 lg:p-4">
                    <img
                        src={iconSrc}
                        alt={label}
                        className="size-5 object-contain md:size-[22px] lg:size-6"
                    />
                </div>
                <div className="flex flex-col gap-1 md:gap-[5px] lg:gap-[6px]">
                    <h3 className="text-2xl leading-tight font-bold text-[#292D32] md:text-3xl lg:text-4xl">
                        {value}
                    </h3>
                    <p className="text-sm leading-tight font-medium text-[#6A7686] md:text-base lg:text-lg">
                        {label}
                    </p>
                </div>
            </div>

            {children && <hr className="border-t border-[#E5E8ED]" />}

            {children}
        </div>
    );
};

export default StatCard;
