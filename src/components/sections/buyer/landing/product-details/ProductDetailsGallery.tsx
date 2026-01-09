import { useState, useEffect } from "react";

interface ProductDetailsGalleryProps {
  images: string[];
}

const ProductDetailsGallery = ({ images }: ProductDetailsGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedIndex, images.length]);

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Main Image Container */}
      <div className="flex aspect-580/356 w-full items-center justify-center overflow-hidden rounded-xl bg-[#F3F5F9] md:rounded-2xl">
        <img
          key={selectedIndex}
          src={images[selectedIndex]}
          alt="Main Product"
          className="size-[80%] animate-fade-in object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex aspect-136/124 w-full cursor-pointer items-center justify-center rounded-xl bg-[#F3F5F9] transition-all duration-200 md:rounded-2xl ${selectedIndex === index
                ? "ring-2 ring-primary-color ring-inset"
                : "ring ring-transparent"
              }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="max-h-[80%] max-w-[80%] object-contain mix-blend-multiply"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsGallery;
