import Breadcrumb from "@src/components/Breadcrumb";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import boxIcon from "/icons/box.svg";
import verifyIcon from "/icons/verify.svg";
import BrowseCategoryPopular from "@src/components/sections/buyer/landing/browse-category/BrowseCategoryPopular";
import BrowseCategoryJustRelease from "@src/components/sections/buyer/landing/browse-category/BrowseCategoryJustRelease";

export default function BrowseCategoryProduct() {
  return (
    <div>
      <Navbar />

      <div className="margin-top-navbar">
        <Breadcrumb
          title="Explore based on Gadget Category"
          items={[
            { label: "Homepage", href: "/" },
            { label: "Gadget", href: "/browse-category-product" },
          ]}
        >
          <div className="flex flex-row flex-wrap items-center gap-4">
            <div className="flex flex-row items-center gap-1 md:gap-[6px]">
              <img
                src={boxIcon}
                alt="Total Products"
                className="size-4 md:size-5"
              />
              <span className="text-sec-color text-xs leading-5 font-semibold md:text-base">
                1,294 Total Products
              </span>
            </div>
            <div className="flex flex-row items-center gap-1 md:gap-[6px]">
              <img
                src={verifyIcon}
                alt="Authenticity Guaranteed"
                className="size-4 md:size-5"
              />
              <span className="text-sec-color text-xs leading-5 font-semibold md:text-base">
                Authenticity Guaranteed
              </span>
            </div>
          </div>
        </Breadcrumb>

        <div className="mx-4 my-8 flex max-w-1176 flex-col gap-6 md:mx-8 md:my-12 md:gap-10 lg:mx-[52px] lg:my-18 lg:gap-[100px]">
          <BrowseCategoryPopular />
          <BrowseCategoryJustRelease />
        </div>
      </div>

      <Footer />
    </div>
  );
}
