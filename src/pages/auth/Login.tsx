import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Login() {
    const swiperRef = useRef<SwiperType>(null);

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
            title: "Discover the Latest Trends",
            subtitle: "Shop the most stylish collections from top brands around the world."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
            title: "Premium Quality Products",
            subtitle: "Experience luxury and comfort with our carefully curated items."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
            title: "Exclusive Deals & Offers",
            subtitle: "Get access to limited-time discounts and special promotions."
        }
    ];

    return (
        <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Carousel (Desktop Only) */}
            <div className="hidden lg:block relative h-full w-full bg-gray-900 overflow-hidden">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={0}
                    pagination={{
                        el: '.swiper-custom-pagination',
                        clickable: true,
                        renderBullet: function (_index, className) {
                            return '<span class="' + className + ' h-2.5! w-2.5! bg-white/50! hover:bg-white! transition-all! duration-300!"></span>';
                        },
                    }}
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
                            <div className="absolute inset-0 bg-black/30 z-10" />
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 pb-40">
                                <h2 className="text-4xl font-bold text-white mb-4 max-w-lg">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-200 text-lg max-w-md">
                                    {slide.subtitle}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Controls - Bottom Left */}
                <div className="absolute bottom-12 left-12 z-30 flex flex-col gap-8">
                    {/* Pagination */}
                    <div className="swiper-custom-pagination flex gap-3 w-auto! static!" />

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
                            aria-label="Previous slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
                            aria-label="Next slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form (Placeholder) */}
            <div className="h-full w-full flex items-center justify-center bg-white p-8">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
                        <p className="text-gray-500 mt-2">Welcome back! Please enter your details.</p>
                    </div>
                    {/* Form content would go here */}
                    <div className="space-y-4">
                        <div className="h-12 w-full bg-gray-100 rounded-lg"></div>
                        <div className="h-12 w-full bg-gray-100 rounded-lg"></div>
                        <div className="h-12 w-full bg-blue-600 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}