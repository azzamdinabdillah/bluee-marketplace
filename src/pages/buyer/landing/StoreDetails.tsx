import Breadcrumb from "@src/components/Breadcrumb";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/sections/buyer/landing/home/Navbar";
import StoreHeader from "@src/components/sections/buyer/landing/store-details/StoreHeader";
import avatar from "/images/store.png";
import promo1 from "/images/promo-1.png";
import promo2 from "/images/promo-2.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import gadgedIcon from "/icons/mobile.svg";
import furnitureIcon from "/icons/tree.svg";
import electronicIcon from "/icons/lamp.svg";
import { Link } from "react-router-dom";
import ProductCard from "@src/components/ProductCard";
import { PRODUCTS } from "@src/datas/Products";
import Button from "@src/components/Button";
import arrowDownWhite from "/icons/arrow-down-white.svg";

export default function StoreDetails() {
  const storeTabs = [
    {
      id: 1,
      label: "Just Released",
      icon: <span className="text-[19px]">🙌🏻</span>,
      dummyCount: 8,
      isReverse: true,
    },
    {
      id: 2,
      label: "Gadget",
      icon: <img src={gadgedIcon} alt="" className="size-4 md:size-6" />,
      dummyCount: 4,
      isUppercase: true,
    },
    {
      id: 3,
      label: "Furniture",
      icon: <img src={furnitureIcon} alt="" className="size-4 md:size-6" />,
      dummyCount: 6,
      isUppercase: true,
    },
    {
      id: 4,
      label: "Electronic",
      icon: <img src={electronicIcon} alt="" className="size-4 md:size-6" />,
      dummyCount: 5,
      isUppercase: true,
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="mt-[130px] md:mt-[105px] lg:mt-[121px]">
        <Breadcrumb
          items={[
            { label: "Homepage", href: "/" },
            { label: "Gadged", href: "/browse-category-product/gadged" },
            { label: "Product Details" },
            { label: "Store Details" },
          ]}
        />

        <div className="mx-4 my-4 flex max-w-1176 flex-col gap-6 md:mx-8 md:my-8 md:gap-10 lg:mx-[52px] lg:gap-[52px]">
          <div className="grid xl:grid-cols-2 gap-5">
            <StoreHeader
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
                className="rounded-xl md:rounded-3xl w-full object-cover h-[300px] md:h-[500px] xl:h-[300px]"
              />
              <img
                src={promo2}
                alt="Promo image 2"
                className="rounded-xl md:rounded-3xl w-full object-cover h-[300px] md:h-[500px] xl:h-[300px]"
              />
            </div>
          </div>

          <Tabs className="">
            <TabList className="flex flex-row gap-4 md:gap-[38px] items-center">
              <Tab
                className="text-lg md:text-[20px] leading-[1.6em] text-sec-color font-semibold cursor-pointer outline-none transition-colors"
                selectedClassName="!text-primary-color !font-bold"
              >
                Products
              </Tab>
              <Tab
                className="text-lg md:text-[20px] leading-[1.6em] text-sec-color font-semibold cursor-pointer outline-none transition-colors"
                selectedClassName="!text-primary-color !font-bold"
              >
                Testimony
              </Tab>
            </TabList>

            <div className="h-[1.5px] w-full bg-stroke-color mt-3" />

            <TabPanel>
              <div className="py-4 md:py-8 gap-4 flex flex-col md:gap-6">
                <h3 className="text-[20px] md:text-[32px] font-bold text-black-color leading-[1.6em]">
                  Store Products
                </h3>

                <Tabs className="">
                  <TabList className="flex flex-row gap-3 md:gap-5 overflow-x-auto pb-2 scrollbar-hide">
                    {storeTabs.map((tab) => (
                      <Tab
                        key={tab.id}
                        className="flex min-w-fit cursor-pointer flex-row items-center gap-2 rounded-2xl border border-stroke-color bg-white text-base font-bold text-black-color transition-colors outline-none px-4 py-2 md:px-5 md:py-3"
                        selectedClassName="!bg-black-color !text-white !border-black-color"
                      >
                        {tab.isReverse ? (
                          <>
                            <span>{tab.label}</span>
                            {tab.icon}
                          </>
                        ) : (
                          <>
                            {tab.icon}
                            <span className={tab.isUppercase ? "uppercase" : ""}>
                              {tab.label}
                            </span>
                          </>
                        )}
                      </Tab>
                    ))}
                  </TabList>

                  <TabPanel key="1" className="overflow-auto mt-6 scrollbar-hide">
                    <div className="product-container grid min-w-[880px] grid-cols-4 gap-4 md:min-w-[1160px] md:gap-6 overflow-hidden">
                      {PRODUCTS.map((product) => (
                        <Link key={product.id} to={`/product-details/${product.id}`}>
                          <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            sold={product.sold}
                            tag={product.tag}
                          />
                        </Link>
                      ))}
                    </div>

                    <Button className="mx-auto w-fit mt-4 md:mt-6" variant="black" icon={arrowDownWhite}>
                      Load More
                    </Button>
                  </TabPanel>
                  <TabPanel key="2">
                    222222
                  </TabPanel>
                  <TabPanel key="3">
                    33333333333
                  </TabPanel>
                  <TabPanel key="4">
                    444444444444
                  </TabPanel>

                </Tabs>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="py-4">
                <p className="text-gray-500">Testimony content goes here (Dummy)</p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
