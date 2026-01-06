import Breadcrumb from "@src/components/Breadcrumb";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import StoreDetailsCard from "@src/components/sections/buyer/landing/store-details/StoreDetailsCard";
import avatar from "/images/store.png";
import promo1 from "/images/promo-1.png";
import promo2 from "/images/promo-2.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StoreDetailsTabProducts from "@src/components/sections/buyer/landing/store-details/StoreDetailsTabProducts";
import StoreDetailsTabTestimonies from "@src/components/sections/buyer/landing/store-details/StoreDetailsTabTestimonies";

export default function StoreDetails() {
  return (
    <div>
      <Navbar />

      <div className="margin-top-navbar">
        <Breadcrumb
          items={[
            { label: "Homepage", href: "/" },
            { label: "Gadged", href: "/browse-category-product/gadged" },
            { label: "Product Details" },
            { label: "Store Details" },
          ]}
        />

        <div className="margin-page flex flex-col gap-6 md:gap-10 lg:gap-[52px] max-w-1176">
          <div className="grid gap-5 xl:grid-cols-2">
            <StoreDetailsCard
              id={1}
              storeName="Bimore Gadget Universe"
              isVerified={true}
              totalProducts={1294}
              sellerName="Shadam Bimo"
              location="Buitenzorg"
              avatarUrl={avatar}
            />

            <div className="grid grid-cols-2 gap-1.5 md:gap-[20px]">
              <img
                src={promo1}
                alt="Promo image 1"
                className="h-[300px] w-full rounded-xl object-cover md:h-[500px] md:rounded-3xl xl:h-[300px]"
              />
              <img
                src={promo2}
                alt="Promo image 2"
                className="h-[300px] w-full rounded-xl object-cover md:h-[500px] md:rounded-3xl xl:h-[300px]"
              />
            </div>
          </div>

          <Tabs className="">
            <TabList className="flex flex-row items-center gap-4 md:gap-[38px]">
              <Tab
                className="text-sec-color cursor-pointer text-lg leading-[1.6em] font-semibold transition-colors outline-none md:text-[20px]"
                selectedClassName="!text-primary-color !font-bold"
              >
                Products
              </Tab>
              <Tab
                className="text-sec-color cursor-pointer text-lg leading-[1.6em] font-semibold transition-colors outline-none md:text-[20px]"
                selectedClassName="!text-primary-color !font-bold"
              >
                Testimony
              </Tab>
            </TabList>

            <div className="bg-stroke-color mt-3 h-[1.5px] w-full" />

            <TabPanel>
              <StoreDetailsTabProducts />
            </TabPanel>
            <TabPanel>
              <StoreDetailsTabTestimonies />
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
