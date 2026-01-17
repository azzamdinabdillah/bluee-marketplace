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
import { Link } from "react-router-dom";
import InputInteractive from "@src/components/InputInteractive";
import Button from "@src/components/Button";
import Checkbox from "@src/components/Checkbox";
import SmsIcon from "@src/components/icons/SmsIcon";
import LockIcon from "@src/components/icons/LockIcon";
import sidebarLogo from "/icons/sidebar-logo.svg";
import KeyIcon from '@src/components/icons/KeyIcon';

export default function Login() {
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
        <div className="h-dvh w-full grid grid-cols-1 lg:grid-cols-2 bg-[#F3F5F9]">
            {/* Left Side - Carousel (Desktop Only) */}
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

            {/* Right Side - Login Form */}
            <div className="p-3 md:p-[30px]">
                <div className="h-full w-full rounded-[20px] flex items-center justify-center bg-white p-4 md:p-8 lg:p-6">
                    <form className="w-full flex flex-col gap-8 lg:gap-[40px] max-w-[512px] mx-auto">
                        {/* Header/Logo */}
                        <div className="flex justify-center items-center gap-3">
                            <img src={sidebarLogo} alt="Bluee" className="w-[41px] h-[32px]" />
                            <span className="text-[25px] md:text-[30px] font-black leading-[1.2] tracking-wider uppercase font-montserrat text-[#292D32]">BLUEE</span>
                        </div>

                        <div className="flex flex-col gap-6 md:gap-[30px] justify-center">
                            <div className="flex flex-col gap-3 justify-center mx-auto">
                                <h1 className="text-xl md:text-2xl lg:text-[24px] font-bold text-[#292D32] font-lexend">Hey🙌🏻, Welcome Back!</h1>
                                <p className="text-sm md:text-base lg:text-[16px] font-medium text-sec-color font-lexend">Login to your account to continue!</p>
                            </div>

                            <div className="flex flex-col gap-3 justify-center">
                                <div className="flex flex-col gap-3 md:gap-4">
                                    <InputInteractive
                                        label="Enter Your Email"
                                        icon={SmsIcon}
                                        type="email"
                                        className="font-lexend font-bold"
                                    />
                                    <InputInteractive
                                        label="Enter Your Password"
                                        icon={KeyIcon}
                                        type="password"
                                        className="font-lexend font-bold"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="remember" />
                                        <label htmlFor="remember" className="text-sm md:text-base font-semibold text-sec-color cursor-pointer font-lexend">Remember me</label>
                                    </div>
                                    <Link to="/forgot-password" className="text-sm md:text-base font-semibold text-sec-color font-lexend hover:underline">Reset Password</Link>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Button variant="blue" className="w-full rounded-full! text-base font-semibold" type="submit">
                                Sign In
                            </Button>

                            <div className="text-center">
                                <span className="text-sec-color font-medium text-sm md:text-base font-lexend">Don’t have account? </span>
                                <Link to="/register" className="text-primary-color font-semibold     text-sm md:text-base underline font-lexend">Create Account</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}