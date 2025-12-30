import Footer from "../../../components/Footer";
import Banner from "../../../components/sections/buyer/landing/home/Banner";
import Categories from "../../../components/sections/buyer/landing/home/Categories";
import Navbar from "../../../components/sections/buyer/landing/home/Navbar";
import ProductRecomendation from "../../../components/sections/buyer/landing/home/ProductRecomendation";
import SellerRecomendation from "../../../components/sections/buyer/landing/home/SellerRecomendation";
import type { ProductType } from "@src/types/ProductType";

const PRODUCTS: ProductType[] = [
  {
    id: 1,
    image: "/images/product-1.png",
    title: "SonicWhirl Wireless Headphone",
    price: "Rp 3.500.500",
    sold: "120 Sold",
    tag: "Gadget",
  },
  {
    id: 2,
    image: "/images/product-2.png",
    title: "LuminaSmart Home Hub",
    price: "Rp 1.250.000",
    sold: "85 Sold",
    tag: "Home",
  },
  {
    id: 3,
    image: "/images/product-3.png",
    title: "X-Pro Mechanical Keyboard",
    price: "Rp 850.000",
    sold: "340 Sold",
    tag: "Gaming",
  },
  {
    id: 4,
    image: "/images/product-4.png",
    title: "UltraView 4K Monitor",
    price: "Rp 4.500.000",
    sold: "65 Sold",
    tag: "Electronics",
  },
  {
    id: 5,
    image: "/images/product-5.png",
    title: "ErgoLift Office Chair",
    price: "Rp 2.800.000",
    sold: "210 Sold",
    tag: "Furniture",
  },
  {
    id: 6,
    image: "/images/product-6.png",
    title: "PixelClear Webcam 1080p",
    price: "Rp 650.000",
    sold: "500+ Sold",
    tag: "Accessories",
  },
  {
    id: 7,
    image: "/images/product-7.png",
    title: "SoundBlast Bluetooth Speaker",
    price: "Rp 450.000",
    sold: "1.2k Sold",
    tag: "Audio",
  },
  {
    id: 8,
    image: "/images/product-8.png",
    title: "PowerMax Power Bank 20000mAh",
    price: "Rp 350.000",
    sold: "2k+ Sold",
    tag: "Gadget",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="mt-[130px] md:mt-[105px] lg:mt-[121px]">
        <Banner />

        <div className="mx-4 my-8 flex max-w-[1176px] flex-col gap-6 md:mx-8 md:my-12 md:gap-10 lg:mx-12 lg:my-18 lg:gap-[100px] xl:mx-auto">
          <Categories />
          <ProductRecomendation
            products={PRODUCTS}
            title="Shop Quality Picks from Top Sellers"
          />
          <SellerRecomendation />
        </div>

        <Footer />
      </div>
    </div>
  );
}
