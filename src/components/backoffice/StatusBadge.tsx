import React from 'react';

export type StatusBadgeVariant = 'delivering' | 'completed' | 'pending' | 'processing' | 'default';

interface StatusBadgeProps {
    status: string;
    variant?: StatusBadgeVariant;
    className?: string;
}

export default function StatusBadge({
    status,
    variant = 'default',
    className = ''
}: StatusBadgeProps) {
    const getStatusStyles = (variant: string) => {
        switch (variant) {
            case 'delivering':
                return { bg: 'bg-[#FF702117]', text: 'text-[#FF7020]' };
            case 'completed':
                return { bg: 'bg-[#00A48A17]', text: 'text-[#00A48A]' };
            case 'pending':
                return { bg: 'bg-[#FED833]', text: 'text-[#544607]' };
            case 'processing':
                return { bg: 'bg-[#1053D517]', text: 'text-[#1053D5]' };
            default:
                return { bg: 'bg-gray-100', text: 'text-gray-600' };
        }
    };

    const statusStyle = getStatusStyles(variant);

    return (
        <div
            className={`px-3 py-2 md:px-4 md:py-2.5 lg:px-[18px] lg:py-[12px] rounded-full flex flex-col items-center justify-center ${statusStyle.bg} ${className}`}
        >
            <span
                className={`font-lexend font-bold text-[10px] md:text-sm lg:text-base uppercase ${statusStyle.text}`}
            >
                {status}
            </span>
        </div>
    );
}
