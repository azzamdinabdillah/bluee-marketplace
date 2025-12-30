import { useState, useEffect } from 'react';
import lp1 from "/images/lp-2.png";
import lp2 from "/images/lp-1-2.png";
import lp3 from "/images/lp-1-3.png";
import lp4 from "/images/lp-1-4.png";

const ProductGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Array of 4 items to represent the 4 thumbnails in the design
  // Menggunakan string kosong untuk src gambar sesuai permintaan
  const images = [
    lp1,
    lp2,
    lp3,
    lp4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedIndex, images.length]);

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Main Image Container */}
      <div className="flex w-full aspect-580/356 items-center justify-center overflow-hidden bg-[#F3F5F9] rounded-xl md:rounded-2xl">
        <img
          src={images[selectedIndex]}
          alt="Main Product"
          className="h-full w-full object-contain mix-blend-multiply"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex w-full aspect-136/124 cursor-pointer items-center justify-center bg-[#F3F5F9] transition-all rounded-xl md:rounded-2xl duration-200 ${selectedIndex === index ? 'ring-2 ring-[#1053D5]' : 'ring ring-transparent'
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

export default ProductGallery;
