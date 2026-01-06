import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import { PRODUCTS } from "@src/datas/Products";
import HomeBanner from "@src/components/sections/buyer/landing/home/HomeBanner";
import HomeCategories from "@src/components/sections/buyer/landing/home/HomeCategories";
import HomeProductRecomendation from "@src/components/sections/buyer/landing/home/HomeProductRecomendation";
import HomeSellerRecomendation from "@src/components/sections/buyer/landing/home/HomeSellerRecomendation";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="mt-[130px] md:mt-[105px] lg:mt-[121px]">
        <HomeBanner />

        <div className="mx-4 my-8 flex max-w-[1176px] flex-col gap-6 md:mx-8 md:my-12 md:gap-10 lg:mx-12 lg:my-18 lg:gap-[100px] xl:mx-auto">
          <HomeCategories />
          <HomeProductRecomendation
            products={PRODUCTS}
            title="Shop Quality Picks from Top Sellers"
          />
          <HomeSellerRecomendation />
        </div>

        <Footer />
      </div>
    </div>
  );
}
