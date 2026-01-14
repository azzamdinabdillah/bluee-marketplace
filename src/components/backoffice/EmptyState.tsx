import React from "react";
import noteRemoveIcon from "/icons/note-remove.svg";

interface EmptyStateProps {
    message?: string;
    iconSrc?: string;
    className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
    message = "Oops, you don't have any data yet",
    iconSrc = noteRemoveIcon,
    className = "",
}) => {
    return (
        <div className={`empty-state flex w-full flex-col items-center justify-center gap-3 py-8 md:gap-4 lg:gap-4 ${className}`}>
            <img
                src={iconSrc}
                alt="No data"
                className="size-10 object-contain md:size-11 lg:size-[52px]"
            />
            <div className="flex flex-col items-center gap-1">
                <span className="text-center text-sm font-semibold text-[#6A7686] md:text-base lg:text-lg">
                    {message}
                </span>
            </div>
        </div>
    );
};

export default EmptyState;
