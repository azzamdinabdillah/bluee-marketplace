import Footer from "../../../components/Footer";
import Banner from "../../../components/sections/Banner";
import Categories from "../../../components/sections/Categories";
import Navbar from "../../../components/sections/Navbar";
import ProductRecomendation from "../../../components/sections/ProductRecomendation";
import SellerRecomendation from "../../../components/sections/SellerRecomendation";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="mt-[130px] md:mt-[105px] lg:mt-[121px]">
        <Banner />

        <div className="flex flex-col gap-6 mx-4 my-8 md:gap-10 md:mx-8 md:my-12 lg:gap-25 lg:my-18 max-w-[1176px] lg:mx-12 xl:mx-auto">
          <Categories />
          <ProductRecomendation />
          <SellerRecomendation />
        </div>

        <Footer />
      </div>
    </div>
  );
}
