import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import CartItemList from "@src/components/sections/buyer/landing/checkout/CartItemList";
import InputInteractive from "@src/components/InputInteractive";
import { cartItems } from "@src/datas/CartProduct";
import GlobalSearch from "@src/components/icons/GlobalSearch";
import { Buildings } from "@src/components/icons/Buildings";
import Keyboard from "@src/components/icons/Keyboard";
import Location from "@src/components/icons/Location";
import shieldTick from "/icons/shield-tick.svg";

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

            <div className="flex flex-col gap-3 md:gap-5">
              <div className="relative flex w-full max-w-[581px] items-center justify-center overflow-hidden rounded-[20px] bg-[url('/images/bg-secure.png')] bg-no-repeat bg-cover px-[18px] py-[16px] shadow-sm transition-all hover:shadow-md">
                
                {/* Main Content */}
                <div className="relative z-10 flex w-full flex-row items-center justify-center gap-[10px]">
                  <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center">
                    <img
                      src={shieldTick}
                      alt="Security Shield Icon"
                      className="size-7 md:size-[36px] object-contain"
                    />
                  </div>

                  <p className="md:text-[16px] font-bold leading-[1.4] text-white text-left text-sm">
                    Your personal data is securely protected by us
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 rounded-[20px] bg-white p-5">
                <h4 className="w-full text-xl font-bold leading-[1.25] text-[#292D32]">
                  Contact & Delivery Address
                </h4>

                <div className="flex flex-col gap-3">
                  <p className="text-base font-semibold leading-tight text-[#6A7686]">
                    Address Searching
                  </p>
                  <InputInteractive label="Enter Disctrict" icon={GlobalSearch} />
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-base font-semibold leading-tight text-[#6A7686]">
                    Your Address
                  </p>
                  <InputInteractive label="Enter Your Address" icon={Location} as="textarea" />
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-base font-semibold leading-tight text-[#6A7686]">
                    Your City
                  </p>
                  <InputInteractive label="Enter Your City" icon={Buildings} />
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-base font-semibold leading-tight text-[#6A7686]">
                    Post Code
                  </p>
                  <InputInteractive label="Enter Post Code" icon={Keyboard} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}