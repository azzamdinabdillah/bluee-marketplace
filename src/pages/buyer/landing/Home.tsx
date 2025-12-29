import Footer from "../../../components/Footer";
import Banner from "../../../components/sections/buyer/landing/home/Banner";
import Categories from "../../../components/sections/buyer/landing/home/Categories";
import Navbar from "../../../components/sections/buyer/landing/home/Navbar";
import ProductRecomendation from "../../../components/sections/buyer/landing/home/ProductRecomendation";
import SellerRecomendation from "../../../components/sections/buyer/landing/home/SellerRecomendation";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="mt-[130px] md:mt-[105px] lg:mt-[121px]">
        <Banner />

        <div className="mx-4 my-8 flex max-w-[1176px] flex-col gap-6 md:mx-8 md:my-12 md:gap-10 lg:mx-12 lg:my-18 lg:gap-[100px] xl:mx-auto">
          <Categories />
          <ProductRecomendation />
          <SellerRecomendation />
        </div>

        <Footer />
      </div>
    </div>
  );
}
