import React, { type ReactNode } from "react";

interface TitleSectionProps {
  title: string;
  children?: ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
      <div className="relative text-[24px] md:text-[28px] lg:text-[32px] text-black font-extrabold leading-[140%] md:leading-[160%]">
        <p className="mb-0 md:w-[70%] md:max-w-[500px] lg:max-w-[600px]">
          {title}
        </p>
      </div>

      {children}
    </div>
  );
};

export default TitleSection;
