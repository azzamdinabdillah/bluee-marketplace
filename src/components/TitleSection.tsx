import React, { type ReactNode } from "react";

interface TitleSectionProps {
  title: string;
  children?: ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
      <div className="relative text-[24px] leading-[140%] font-extrabold text-black md:text-[28px] md:leading-[160%] lg:text-[32px]">
        <p className="mb-0 md:w-[70%] md:max-w-[500px] lg:max-w-[570px]">
          {title}
        </p>
      </div>

      {children}
    </div>
  );
};

export default TitleSection;
