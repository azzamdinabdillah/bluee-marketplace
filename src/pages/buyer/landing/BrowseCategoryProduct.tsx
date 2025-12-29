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

        <div className="mx-4 my-8 flex max-w-[1176px] flex-col gap-6 md:mx-8 md:my-12 md:gap-10 lg:mx-12 lg:my-18 lg:gap-[100px] xl:mx-auto">
          <h3 className="text-black-color text-xl font-bold md:text-2xl lg:text-[32px]">
            Sedang Popular 🔥{" "}
          </h3>
        </div>
      </div>

      <Footer />
    </div>
  );
}
