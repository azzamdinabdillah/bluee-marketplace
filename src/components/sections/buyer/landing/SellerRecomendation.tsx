import TitleSection from "../../../TitleSection";
import Button from "../../../Button";
import arrowRight from "/icons/arrow-right.svg";
import SellerCard from "../../../SellerCard";
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
import "@src/css/SellerRecomendation.css";

export default function SellerRecomendation() {
  return (
    <div className="flex flex-col gap-6 md:gap-9 relative">
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
            <SellerCard
              storeName="Xiaomi Store Indonesia"
              brand="Xiaomi"
              sellerName="Budi Hartanto"
              city="Bandung"
              address="Cihampelas"
              coverImage={logo1}
              coverBackgroundColor="#FF6600" // Light red/pink
            />
          </SwiperSlide>
          <SwiperSlide>
            <SellerCard
              storeName="Samsung Official Store"
              brand="Samsung"
              sellerName="Siti Aminah"
              city="Jakarta"
              address="Grand Indonesia"
              coverImage={logo2}
              coverBackgroundColor="#295BA7" // Light cyan
            />
          </SwiperSlide>
          <SwiperSlide>
            <SellerCard
              storeName="iBox Apple Reseller"
              brand="Apple"
              sellerName="Rudi Hermawan"
              city="Surabaya"
              address="Tunjungan Plaza"
              coverImage={logo3}
              coverBackgroundColor="#000000" // Light purple
            />
          </SwiperSlide>
          {/* Add more slides if needed to demonstrate carousel */}
          <SwiperSlide>
            <SellerCard
              storeName="Xiaomi Store Indonesia"
              brand="Xiaomi"
              sellerName="Budi Hartanto"
              city="Bandung"
              address="Cihampelas"
              coverImage={logo1}
              coverBackgroundColor="#FF6600"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Custom Navigation and Pagination Container at the bottom */}
      <div className="flex items-center justify-center gap-4 md:gap-6 relative">
        <div className="swiper-button-prev-custom cursor-pointer size-11 md:size-14 flex items-center justify-center rounded-full border-[1.5px] border-stroke-color hover:bg-gray-200">
          <img src={arrowLeftBlack} alt="" className="" />
        </div>
        <div className="swiper-pagination-custom static! w-auto!"></div>
        <div className="swiper-button-next-custom cursor-pointer size-11 md:size-14 flex items-center justify-center rounded-full border-[1.5px] border-stroke-color hover:bg-gray-200">
          <img src={arrowLeftBlack} alt="" className="rotate-180" />
        </div>
      </div>
    </div>
  );
}
