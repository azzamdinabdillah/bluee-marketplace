import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />

      <div className="flex flex-col gap-25 px-13 py-18">
        <Categories />
      </div>
    </div>
  );
}
