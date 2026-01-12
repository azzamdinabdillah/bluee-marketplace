import React from "react";

export default function CrownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2 6.51L17.5 17.5H6.5L3.8 6.51C3.5 5.21 4.7 4.21 5.8 4.91L9.2 7.11L11.2 3.61C11.6 2.91 12.5 2.91 12.9 3.61L14.9 7.11L18.3 4.91C19.4 4.21 20.6 5.21 20.2 6.51Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 22H19C20.1 22 21 21.1 21 20V19H3V20C3 21.1 3.9 22 5 22Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
