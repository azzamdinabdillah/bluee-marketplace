import StarIcon from "./icons/StarIcon";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface TestimonialCardProps {
  name: string;
  time: string;
  review: string;
  avatar: string;
  rating?: number;
  images?: string[];
}

export default function TestimonialCard({
  name,
  time,
  review,
  avatar,
  rating = 5,
  images,
}: TestimonialCardProps) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3 rounded-[14px] border border-[#E8E8E8] p-3 md:gap-4 md:rounded-[20px] md:p-5">
      {/* User Info */}
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-10 w-10 rounded-full object-cover md:h-16 md:w-16"
        />
        <div className="flex flex-col">
          <h4 className="text-sm font-bold text-[#292D32] md:text-lg">{name}</h4>
          <span className="text-xs font-medium text-[#6A7686] md:text-base">{time}</span>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-sm font-semibold leading-[1.5em] text-[#292D32] md:text-base md:leading-[2em]">
        "{review}"
      </p>

      {/* Images */}
      {images && images.length > 0 && (
        <>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`testimony-image-${index}`}
                className="h-16 w-16 cursor-pointer rounded-lg object-cover transition-opacity hover:opacity-80 md:h-20 md:w-20"
                onClick={() => {
                  setImageIndex(index);
                  setOpen(true);
                }}
              />
            ))}
          </div>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={imageIndex}
            slides={images.map((src) => ({ src }))}
          />
        </>
      )}

      {/* Rating */}
      <div className="flex items-center gap-0.5 md:gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon
            key={index}
            className="h-4 w-4 md:h-5 md:w-5"
            fill={index < rating ? "#FFC107" : "#E8E8E8"}
          />
        ))}
      </div>
    </div>
  );
}
