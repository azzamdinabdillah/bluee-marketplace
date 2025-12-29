import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "@src/components/TestimonialCard";
import arrowLeftBlack from "/icons/arrow-left-black.svg";

interface Testimonial {
  name: string;
  time: string;
  review: string;
  avatar: string;
  rating: number;
}

interface ProductTestimonyProps {
  testimonials: Testimonial[];
}

export default function ProductTestimony({
  testimonials,
}: ProductTestimonyProps) {
  return (
    <div className="flex w-full flex-col gap-6">
      <h3 className="text-[18px] leading-[1.25em] font-bold text-black">
        Product Testimony
      </h3>

      <div className="w-full">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          // autoplay={{
          //     delay: 3000,
          //     disableOnInteraction: false,
          // }}
          // loop={true}
          // spaceBetween={24}
          slidesPerView={1}
          // breakpoints={{
          //     0: {
          //         slidesPerView: 1,
          //     },
          //     640: {
          //         slidesPerView: 2,
          //     }
          // }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          navigation={{
            nextEl: ".swiper-button-next-testimony",
            prevEl: ".swiper-button-prev-testimony",
          }}
          className="w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation & Pagination */}
      <div className="relative flex items-center justify-start gap-4 md:gap-6">
        <div className="swiper-button-prev-testimony border-stroke-color flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] hover:bg-gray-200 md:size-14">
          <img src={arrowLeftBlack} alt="" className="" />
        </div>
        <div className="swiper-pagination-custom static! w-auto!"></div>
        <div className="swiper-button-next-testimony border-stroke-color flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] hover:bg-gray-200 md:size-14">
          <img src={arrowLeftBlack} alt="" className="rotate-180" />
        </div>
      </div>
    </div>
  );
}
