import Breadcrumb from "@src/components/Breadcrumb";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
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
import TestimonialCard from "@src/components/TestimonialCard";
import user1 from "/images/user.png";
import user2 from "/images/user-2.png";
import user3 from "/images/user-3.png";
import type { ReactNode } from "react";

export default function StoreDetails() {
  const storeTabs: {
    id: number;
    label: string;
    icon: ReactNode;
    dummyCount: number;
    isReverse?: boolean;
    isUppercase?: boolean;
  }[] = [
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

      <div className="margin-top-navbar">
        <Breadcrumb
          items={[
            { label: "Homepage", href: "/" },
            { label: "Gadged", href: "/browse-category-product/gadged" },
            { label: "Product Details" },
            { label: "Store Details" },
          ]}
        />

        <div className="padding-page flex flex-col gap-6 md:gap-10 lg:gap-[52px] max-w-1176">
          <div className="grid gap-5 xl:grid-cols-2">
            <StoreHeader
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
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-8">
                <h3 className="text-black-color text-[20px] leading-[1.6em] font-bold md:text-[32px]">
                  Store Products
                </h3>

                <Tabs className="">
                  <TabList className="scrollbar-hide flex flex-row gap-3 overflow-x-auto pb-2 md:gap-5">
                    {storeTabs.map((tab) => (
                      <Tab
                        key={tab.id}
                        className="border-stroke-color text-black-color flex min-w-fit cursor-pointer flex-row items-center gap-2 rounded-2xl border bg-white px-4 py-2 text-base font-bold transition-colors outline-none md:px-5 md:py-3"
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
                            <span
                              className={tab.isUppercase ? "uppercase" : ""}
                            >
                              {tab.label}
                            </span>
                          </>
                        )}
                      </Tab>
                    ))}
                  </TabList>

                  <TabPanel key="1" className="">
                    <div className="product-container mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 xl:grid-cols-4">
                      {PRODUCTS.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product-details/${product.id}`}
                        >
                          <ProductCard
                            id={product.id}
                            store={product.store}
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

                    <Button
                      className="mx-auto mt-4 w-fit md:mt-6"
                      variant="black"
                      icon={arrowDownWhite}
                    >
                      Load More
                    </Button>
                  </TabPanel>
                  <TabPanel key="2" className="">
                    <div className="product-container mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                      {PRODUCTS.slice(0, 4).map((product) => (
                        <Link
                          key={product.id}
                          to={`/product-details/${product.id}`}
                        >
                          <ProductCard
                            id={product.id}
                            store={product.store}
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

                    <Button
                      className="mx-auto mt-4 w-fit md:mt-6"
                      variant="black"
                      icon={arrowDownWhite}
                    >
                      Load More
                    </Button>
                  </TabPanel>
                  <TabPanel key="3" className="">
                    <div className="product-container mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                      {PRODUCTS.slice(4, 8).map((product) => (
                        <Link
                          key={product.id}
                          to={`/product-details/${product.id}`}
                        >
                          <ProductCard
                            id={product.id}
                            store={product.store}
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

                    <Button
                      className="mx-auto mt-4 w-fit md:mt-6"
                      variant="black"
                      icon={arrowDownWhite}
                    >
                      Load More
                    </Button>
                  </TabPanel>
                  <TabPanel key="4" className="">
                    <div className="product-container mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 xl:grid-cols-4">
                      {PRODUCTS.slice(8, 12).map((product) => (
                        <Link
                          key={product.id}
                          to={`/product-details/${product.id}`}
                        >
                          <ProductCard
                            id={product.id}
                            store={product.store}
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

                    <Button
                      className="mx-auto mt-4 w-fit md:mt-6"
                      variant="black"
                      icon={arrowDownWhite}
                    >
                      Load More
                    </Button>
                  </TabPanel>
                </Tabs>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col gap-6 py-8">
                <h3 className="text-black-color text-[20px] leading-[1.6em] font-bold md:text-[32px]">
                  Testimony
                </h3>
                <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-6">
                  {[
                    {
                      id: 1,
                      name: "Angga Risky",
                      time: "2 days ago",
                      review:
                        "The item is very good, my son likes it very much and plays it every day 💯",
                      avatar: user1,
                      rating: 5,
                      images: [
                        "https://picsum.photos/seed/101/200/200",
                        "https://picsum.photos/seed/102/200/200",
                      ],
                    },
                    {
                      id: 2,
                      name: "Bimo Semesta",
                      time: "4 days ago",
                      review:
                        "The seller is very fast in responding to chats and the items are also very good",
                      avatar: user2,
                      rating: 5,
                      images: ["https://picsum.photos/seed/201/200/200"],
                    },
                    {
                      id: 3,
                      name: "Shadam Bimo",
                      time: "4 days ago",
                      review:
                        "The items are very good, the shipping is also very fast",
                      avatar: user3,
                      rating: 5,
                    },
                    {
                      id: 4,
                      name: "Dian Sastro",
                      time: "4 days ago",
                      review:
                        "The items are very good, the shipping is also very fast",
                      avatar: user1,
                      rating: 5,
                      images: [
                        "https://picsum.photos/seed/401/200/200",
                        "https://picsum.photos/seed/402/200/200",
                        "https://picsum.photos/seed/403/200/200",
                      ],
                    },
                  ].map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      name={testimonial.name}
                      time={testimonial.time}
                      review={testimonial.review}
                      avatar={testimonial.avatar}
                      rating={testimonial.rating}
                      images={testimonial.images}
                    />
                  ))}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
