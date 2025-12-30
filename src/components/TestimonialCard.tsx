import StarIcon from "./icons/StarIcon";

interface TestimonialCardProps {
  name: string;
  time: string;
  review: string;
  avatar: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  time,
  review,
  avatar,
  rating = 5,
}: TestimonialCardProps) {
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
      <p className="text-xs font-semibold leading-[1.5em] text-[#292D32] md:text-base md:leading-[2em]">
        "{review}"
      </p>

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
