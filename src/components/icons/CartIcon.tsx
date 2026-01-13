import React from "react";

const CartIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M2 3H3.5L4.5 16H19.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4.5 5H18.5C19.6 5 20.5 5.9 20.5 7V13C20.5 14.1 19.6 15 18.5 15H4.5"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
        />
        <circle cx="7.5" cy="19.5" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="19.5" r="1.5" fill="currentColor" />
    </svg>
);

export default CartIcon;
