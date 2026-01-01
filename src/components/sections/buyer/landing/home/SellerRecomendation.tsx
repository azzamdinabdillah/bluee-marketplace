import TitleSection from "@src/components/TitleSection";
import Button from "@src/components/Button";
import arrowRight from "/icons/arrow-right.svg";
import StoreBigCard from "@src/components/StoreBigCard";
import logo1 from "/images/logo-1.png";
import logo2 from "/images/logo-2.png";
import logo3 from "/images/logo-3.png";
import arrowLeftBlack from "/icons/arrow-left-black.svg";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SellerRecomendation() {
  return (
    <div className="relative flex flex-col gap-6 md:gap-9">
      <TitleSection title="Trusted Sellers, Quality Guaranteed">
        <Button icon={arrowRight}>VIEW ALL</Button>
      </TitleSection>

      <div className="w-full">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="pb-12" // Add padding bottom for pagination/navigation space
        >
          <SwiperSlide>
            <StoreBigCard
              id={1}
              storeName="Xiaomi Store Indonesia"
              sellerName="Budi Hartanto"
              location="Cihampelas"
              avatarUrl={logo1}
              coverBackgroundColor="#FF6600" // Light red/pink
            />
          </SwiperSlide>
          <SwiperSlide>
            <StoreBigCard
              id={2}
              storeName="Samsung Official Store"
              sellerName="Siti Aminah"
              location="Grand Indonesia"
              avatarUrl={logo2}
              coverBackgroundColor="#295BA7" // Light cyan
            />
          </SwiperSlide>
          <SwiperSlide>
            <StoreBigCard
              id={3}
              storeName="iBox Apple Reseller"
              sellerName="Rudi Hermawan"
              location="Tunjungan Plaza"
              avatarUrl={logo3}
              coverBackgroundColor="#000000" // Light purple
            />
          </SwiperSlide>
          <SwiperSlide>
            <StoreBigCard
              id={4}
              storeName="Xiaomi Store Indonesia"
              sellerName="Budi Hartanto"
              location="Cihampelas"
              avatarUrl={logo1}
              coverBackgroundColor="#FF6600"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Custom Navigation and Pagination Container at the bottom */}
      <div className="relative flex items-center justify-center gap-4 md:gap-6">
        <div className="swiper-button-prev-custom border-stroke-color flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] hover:bg-gray-200 md:size-14">
          <img src={arrowLeftBlack} alt="" className="" />
        </div>
        <div className="swiper-pagination-custom static! w-auto!"></div>
        <div className="swiper-button-next-custom border-stroke-color flex size-11 cursor-pointer items-center justify-center rounded-full border-[1.5px] hover:bg-gray-200 md:size-14">
          <img src={arrowLeftBlack} alt="" className="rotate-180" />
        </div>
      </div>
    </div>
  );
}
