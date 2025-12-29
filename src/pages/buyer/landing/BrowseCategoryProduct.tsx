import Breadcrumb from "@src/components/Breadcrumb";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/sections/buyer/landing/Navbar";
import boxIcon from "/icons/box.svg";
import verifyIcon from "/icons/verify.svg";

export default function BrowseCategoryProduct() {
    return (
        <div>
            <Navbar />

            <div className="mt-[130px] md:mt-[105px] lg:mt-[121px]">
                <Breadcrumb title="Explore based on Gadget Category" items={[{ label: "Homepage", href: "/" }, { label: "Gadget", href: "/browse-category-product" }]}>
                    <div className="flex flex-row items-center gap-4 flex-wrap">
                        <div className="flex flex-row items-center gap-1 md:gap-[6px]">
                            <img src={boxIcon} alt="Total Products" className="size-4 md:size-5" />
                            <span className="font-semibold text-xs md:text-base leading-5 text-sec-color">
                                1,294 Total Products
                            </span>
                        </div>
                        <div className="flex flex-row items-center gap-1 md:gap-[6px]">
                            <img src={verifyIcon} alt="Authenticity Guaranteed" className="size-4 md:size-5" />
                            <span className="font-semibold text-xs md:text-base leading-5 text-sec-color">
                                Authenticity Guaranteed
                            </span>
                        </div>
                    </div>
                </Breadcrumb>

                <div className="flex flex-col gap-6 mx-4 my-8 md:gap-10 md:mx-8 md:my-12 lg:gap-[100px] lg:my-18 max-w-[1176px] lg:mx-12 xl:mx-auto">
                    <h3 className="text-xl md:text-2xl lg:text-[32px] font-bold text-black-color">Sedang Popular 🔥 </h3>
                </div>
            </div>

            <Footer />
        </div>
    );
}
