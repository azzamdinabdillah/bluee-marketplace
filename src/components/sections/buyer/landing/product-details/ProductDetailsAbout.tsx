import React, { useState } from "react";

interface ProductDetailsAboutProps {
  content: string;
}

const ProductDetailsAbout: React.FC<ProductDetailsAboutProps> = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortContent = content.split('Key Specs:')[0].trim();

  return (
    <div className="flex w-full flex-col gap-3">
      <h2 className="text-sm md:text-base lg:text-lg font-bold leading-[1.25em] text-black">
        Product About
      </h2>
      <div className="text-sec-color flex flex-col gap-4 text-sm md:text-base lg:text-lg font-medium leading-[1.6em]">
        <div className="whitespace-pre-line">
          {isExpanded ? content : `${shortContent}...`}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary-color w-fit font-medium hover:underline focus:outline-none"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsAbout;
