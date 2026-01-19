import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import statusUpIcon from '/icons/status-up.svg';
import calendarIcon from '/icons/calendar-2.svg';
import trashIcon from '/icons/trash-red.svg';
import boxIcon from '/icons/box-black.svg';
import editIcon from '/icons/edit.svg';
import giftIcon from '/icons/gift.svg';
import box3Icon from '/icons/box-3.svg';
import bagIcon from '/icons/bag-4.svg';
import bag2Icon from '/icons/bag-2.svg';
import Button from "@src/components/Button";
import DetailsBoxList from "@src/components/backoffice/DetailsBoxList";
import lp1 from "/images/lp-1.png";
import lp2 from "/images/lp-2.png";
import lp3 from "/images/lp-1-1.png";
import lp4 from "/images/lp-1-2.png";

export default function MyProductDetails() {
    return (
        <TemplateLayoutBackoffice
            role="seller"
            title="Manage My Products"
            subtitle="View and Update Your Products"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 items-center">
                <div className="w-full bg-white rounded-[20px] p-4 md:p-5 flex flex-col gap-4 md:gap-6">
                    {/* Header Section */}
                    <div className="flex items-center gap-3 md:gap-[14px]">
                        <div className="w-[70px] h-[70px] md:w-[92px] md:h-[92px] bg-[#F3F5F9] shrink-0 overflow-hidden rounded-xl md:rounded-2xl p-2">
                            {/* Image Placeholder */}
                            <img src={lp1} alt="Product" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-1 md:gap-[6px]">
                            <h2 className="text-black-color font-lexend text-responsive-18 font-bold leading-tight">
                                Macbook Pro M2
                            </h2>
                            <div className="flex items-center gap-1.5 md:gap-[6px] flex-wrap">
                                <span className="text-primary-color font-lexend text-responsive-16 font-bold">
                                    Gadget
                                </span>
                                <span className="text-sec-color text-lg md:text-[22px] leading-[1.2]">
                                    •
                                </span>
                                <span className="text-sec-color font-lexend text-responsive-16 font-semibold">
                                    Laptop
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <DetailsBoxList
                        items={[
                            {
                                icon: statusUpIcon,
                                label: "Total Sold",
                                value: "500",
                            },
                            {
                                icon: boxIcon,
                                label: "Total Stock",
                                value: "5.760",
                            },
                        ]}
                    />

                    <div className="h-[1px] bg-stroke-color w-full"></div>

                    {/* Description Section */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-black-color font-lexend text-responsive-18 font-bold">
                            About Product
                        </h3>
                        <p className="text-sec-color font-lexend text-responsive-16 font-semibold leading-[1.6]">
                            iPhone 16 Pro Max offers a premium design with a larger display, ultra-fast performance powered by the latest chip, and an advanced camera system for professional-quality photos and videos.
                        </p>
                    </div>

                    <div className="h-[1px] bg-stroke-color w-full"></div>

                    {/* Footer Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-[14px]">
                        <div className="flex items-center gap-2">
                            <img src={calendarIcon} alt="calendar-icon" className="w-5 h-5 md:w-6 md:h-6" />
                            <span className="text-sec-color font-lexend text-responsive-16 font-semibold">
                                Created on 19/02/2020
                            </span>
                        </div>

                        <div className="flex items-center gap-3 md:gap-[14px] self-end md:self-auto">
                            <button className="flex items-center justify-center p-3 md:p-4 rounded-[16px] bg-red-color/10 hover:bg-red-color/20 transition-colors">
                                <img src={trashIcon} alt="trash-icon" className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                            <Button variant="black" iconPosition="left" icon={editIcon}>
                                Edit
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white rounded-[20px] p-4 md:p-5 lg:p-5 flex flex-col gap-4 md:gap-6">
                    {/* Image Gallery Section */}
                    <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-[16px] overflow-x-auto scrollbar-hide">
                        {[lp1, lp2, lp3, lp4].map((img, index) => (
                            <div 
                                key={index} 
                                className="relative  h-[100px] md:h-[110px] lg:h-[121px] bg-light-blue-color rounded-xl md:rounded-2xl overflow-hidden shrink-0"
                            >
                                <img src={img} alt={`Product gallery ${index + 1}`} className="w-full h-full object-contain" />
                                {index === 2 && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                        <span className="text-white font-lexend text-responsive-18 font-bold">2+</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Info List Section */}
                    <DetailsBoxList 
                        items={[
                            {
                                icon: box3Icon,
                                value: "5.760",
                                label: "Product Stock"
                            },
                            {
                                icon: bagIcon,
                                value: "Gadget",
                                label: "Product Category"
                            },
                            {
                                icon: bag2Icon,
                                value: "Laptop",
                                label: "Product Sub Category"
                            },
                            {
                                icon: giftIcon,
                                value: "New Item",
                                label: "Product Type"
                            }
                        ]}
                    />
                </div>
            </div>
        </TemplateLayoutBackoffice>
    );
}