import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import banner1 from "/images/banner-1.png";
import banner2 from "/images/banner-2.png";
import "swiper/css";

const banners: string[] = [banner1, banner2, banner1, banner2];

export default function Banner() {
  return (
    <div className="bg-[#F3F5F9] p-4 px-0! md:p-6 lg:p-8">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 1.3,
          },
          1280: {
            slidesPerView: 1.6,
          },
        }}
        className="w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide
            key={index}
            className="h-full w-full overflow-hidden pl-4 md:pl-6 lg:pl-8"
          >
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full overflow-hidden object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
