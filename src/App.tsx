import Banner from "./components/sections/Banner";
import Navbar from "./components/sections/Navbar";
import Categories from "./components/sections/Categories";
import ProductRecomendation from "./components/sections/ProductRecomendation";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />

      <div className="flex flex-col gap-6 px-4 py-8 md:gap-10 md:px-8 md:py-12 lg:gap-25 lg:px-13 lg:py-18">
        <Categories />
        <ProductRecomendation />
      </div>
    </div>
  );
}
