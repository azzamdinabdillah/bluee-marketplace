import Banner from "./components/sections/Banner";
import Navbar from "./components/sections/Navbar";
import Categories from "./components/sections/Categories";
import ProductRecomendation from "./components/sections/ProductRecomendation";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />

      <div className="flex flex-col gap-6 mx-4 my-8 md:gap-10 md:mx-8 md:my-12 lg:gap-25 lg:my-18 max-w-[1176px] lg:mx-12 xl:mx-auto">
        <Categories />
        <ProductRecomendation />
      </div>
    </div>
  );
}
