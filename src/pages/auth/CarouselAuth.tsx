import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import arrowLeftIcon from "/icons/arrow-circle-left.svg";
import arrowRightIcon from "/icons/arrow-circle-right.svg";
import starIcon from "/icons/star-2.svg";
import login1 from "/images/login-1.png";
import login2 from "/images/login-2.png";
import login3 from "/images/login-3.png";

export default function CarouselAuth() {
    const swiperRef = useRef<SwiperType>(null);

    const slides = [
        {
            id: 1,
            image: login1,
            quote: "Moving my business online was the best decision I ever made. The platform's ease of use and support are unmatched.",
            author: "Jasmine Putri",
            role: "Business Owner",
            rating: 5
        },
        {
            id: 2,
            image: login2,
            quote: "The quality of products and the seamless buying experience have completely transformed how I source inventory.",
            author: "Sarah Chen",
            role: "Fashion Retailer",
            rating: 5
        },
        {
            id: 3,
            image: login3,
            quote: "I've never seen such a comprehensive marketplace. It's truly a game-changer for wholesale buyers.",
            author: "Michael Ross",
            role: "Procurement Manager",
            rating: 5
        }
    ];

    return (
        <div className="hidden lg:block relative h-full w-full bg-gray-900 overflow-hidden">
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={0}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative h-full w-full">
                        <div className="absolute inset-0 bg-black/20 z-10" />
                        <img
                            src={slide.image}
                            alt={slide.author}
                            className="h-full w-full object-cover"
                        />

                        {/* Testimonial Card Overlay */}
                        <div className="absolute bottom-0 left-0 z-20 w-full bg-linear-to-b from-transparent via-[#0E1626]/75 to-[#0E1626] px-12 pb-12 pt-24">
                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(slide.rating)].map((_, i) => (
                                    <img key={i} src={starIcon} alt="star" className="size-5" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-white text-[26px] font-medium leading-[1.6] mb-12 max-w-[600px]">
                                "{slide.quote}"
                            </blockquote>

                            {/* Footer Row */}
                            <div className="flex items-end justify-between w-full">
                                {/* Author Info */}
                                <div>
                                    <div className="text-white text-[20px] font-semibold mb-1">{slide.author}</div>
                                    <div className="text-white text-[16px] font-medium opacity-80">{slide.role}</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="flex gap-1.5 absolute bottom-12 right-12 z-2">
                    <img src={arrowLeftIcon} alt="" onClick={() => swiperRef.current?.slidePrev()} className="cursor-pointer hover:scale-110 transition-all active:scale-100" />
                    <img src={arrowRightIcon} alt="" onClick={() => swiperRef.current?.slideNext()} className="cursor-pointer hover:scale-110 transition-all active:scale-100" />
                </div>
            </Swiper>
        </div>
    );
}
