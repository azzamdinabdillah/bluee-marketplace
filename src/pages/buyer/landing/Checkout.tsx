import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import CartItemList from "@src/components/sections/buyer/landing/checkout/CartItemList";
import { cartItems } from "@src/datas/CartProduct";

export default function Checkout() {
  return (
    <div className="bg-[#F3F5F9]">
      <Navbar />
      <div className="margin-top-navbar">
        <div className="padding-page max-w-1176 lg:pb-[100px]">
          <h3 className="text-black-color w-full pt-4 text-xl font-bold md:pt-6 md:text-2xl lg:pt-8 lg:text-[32px]">
            Checkout Page
          </h3>

          <div className="mt-6 grid gap-3 md:gap-5 min-[1250px]:grid-cols-2 items-start">
            <div>
              <CartItemList stores={cartItems} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}