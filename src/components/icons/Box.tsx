import React from 'react';

export const Box = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.0001 7.14001L3.92006 11.5201C3.47006 11.7701 3.47006 12.4201 3.92006 12.6701L11.9901 17.0501C12.0001 17.0501 12.0001 17.0501 12.0101 17.0501C12.0101 17.0501 12.0101 17.0501 12.0201 17.0501C12.0201 17.0501 12.0301 17.0501 12.0301 17.0501C12.0401 17.0501 12.0401 17.0501 12.0501 17.0501C12.0501 17.0501 12.0601 17.0501 12.0601 17.0501C12.0701 17.0401 12.0801 17.0401 12.0801 17.0401C12.0901 17.0401 12.1001 17.0301 12.1101 17.0301L20.0801 12.6601C20.5301 12.4101 20.5301 11.7601 20.0801 11.5101L12.0001 7.14001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17.05V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 13.76V10.42C22 8.74 21.05 7.14 19.5 6.27L14.5 3.46C12.95 2.59 11.05 2.59 9.5 3.46L4.5 6.27C2.95 7.14 2 8.74 2 10.42V17.02C2 18.94 3.26 20.69 5.09 21.32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
