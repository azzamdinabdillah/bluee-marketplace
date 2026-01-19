import React from 'react';

interface InputRadioInteractiveProps {
    label: string;
    value: string;
    selectedValue: string;
    onChange: (value: string) => void;
    icon: React.ElementType;
    name?: string;
    className?: string;
}

export default function InputRadioInteractive({
    label,
    value,
    selectedValue,
    onChange,
    icon: Icon,
    className = ""
}: InputRadioInteractiveProps) {
    const isSelected = value === selectedValue;

    return (
        <button
            type="button"
            onClick={() => onChange(value)}
            className={`flex items-center gap-3 md:gap-[18px] p-4 md:py-6 md:px-5 md:h-[76px] rounded-[18px] border-[1.5px] transition-colors group w-full justify-between
                ${isSelected ? 'border-primary-color bg-white' : 'border-stroke-color bg-white hover:border-primary-color'} ${className}`}
        >
            <div className="flex items-center gap-3 md:gap-[18px]">
                <Icon className={`size-5 md:size-6 transition-colors shrink-0 ${isSelected ? 'text-primary-color' : 'text-sec-color group-hover:text-primary-color'}`} />
                <div className={`w-[1.5px] h-6 md:h-8 transition-colors ${isSelected ? 'bg-primary-color' : 'bg-stroke-color group-hover:bg-primary-color'}`}></div>
                <span className="text-sm md:text-base font-bold text-black-color font-lexend">{label}</span>
            </div>
            
            {/* Radio Indicator */}
            <div className={`size-[18px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-colors
                ${isSelected ? 'border-primary-color' : 'border-sec-color'}`}>
                {isSelected && <div className="size-2.5 bg-primary-color rounded-full" />}
            </div>
        </button>
    );
}
