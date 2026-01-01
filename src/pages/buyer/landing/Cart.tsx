import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";

export default function Cart() {
  return (
    <div className="bg-[#F3F5F9]">
      <Navbar />
      <div className="margin-top-navbar">
        <div className="padding-page max-w-1176">
          <h3 className="text-black-color w-full text-xl font-bold md:text-2xl lg:text-[32px] pt-4 md:pt-6 lg:pt-8">
            My Shopping Cart
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}
