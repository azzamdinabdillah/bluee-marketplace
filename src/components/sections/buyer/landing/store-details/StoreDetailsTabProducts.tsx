import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import ProductCard from "@src/components/ProductCard";
import { PRODUCTS } from "@src/datas/Products";
import Button from "@src/components/Button";
import arrowDownWhite from "/icons/arrow-down-white.svg";
import gadgedIcon from "/icons/mobile.svg";
import furnitureIcon from "/icons/tree.svg";
import electronicIcon from "/icons/lamp.svg";
import type { ReactNode } from "react";

export default function StoreDetailsTabProducts() {
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
        icon: <span className="text-[16px] md:text-[19px]">🙌🏻</span>,
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
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-8">
      <h3 className="text-black-color text-[20px] leading-[1.6em] font-bold md:text-[32px]">
        Store Products
      </h3>

      <Tabs className="">
        <TabList className="scrollbar-hide flex flex-row gap-3 overflow-x-auto pb-2 md:gap-5">
          {storeTabs.map((tab) => (
            <Tab
              key={tab.id}
              className="border-stroke-color text-black-color flex min-w-fit cursor-pointer flex-row items-center gap-1.5 rounded-2xl border bg-white px-3 py-1.5 text-sm font-bold transition-colors outline-none md:gap-2 md:px-5 md:py-3 md:text-base"
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

        <TabPanel key="1" className="">
          <div className="product-container mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6 xl:grid-cols-4">
            {PRODUCTS.map((product) => (
              <Link key={product.id} to={`/product-details/${product.id}`}>
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
              <Link key={product.id} to={`/product-details/${product.id}`}>
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
              <Link key={product.id} to={`/product-details/${product.id}`}>
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
              <Link key={product.id} to={`/product-details/${product.id}`}>
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
  );
}
