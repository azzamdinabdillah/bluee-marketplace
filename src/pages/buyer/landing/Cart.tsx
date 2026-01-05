import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import shopIcon from "/icons/shop.svg";
import ProductItemLine from "@src/components/icons/ProductItemLine";
import Checkbox from "@src/components/Checkbox";
import shoppingCart from "/icons/shopping-cart-gray.svg";
import box from "/icons/box.svg";
import ticket from "/icons/ticket.svg";
import receipt from "/icons/receipt.svg";
import discount from "/icons/discount.svg";
import money from "/icons/money.svg";
import ticketDiscount from "/icons/ticket-discount.svg";
import arrowRightPlainWhite from "/icons/arrow-right-plain-white.svg";
// import CartEmptyState from "@src/components/sections/buyer/landing/cart/CartEmptyState";
import CartOrderSummary from "@src/components/sections/buyer/landing/cart/CartOrderSummary";
// import { useNavigate } from "react-router-dom";
import ChartItemProduct from "@src/components/CartItemProduct";
import { cartItems } from "@src/datas/CartProduct";

export default function Cart() {
  // const navigate = useNavigate();

  const summaryItems = [
    {
      icon: shoppingCart,
      label: "Total Items:",
      value: "2 Items",
    },
    {
      icon: box,
      label: "Total Quantity:",
      value: "10x",
    },
    {
      icon: receipt,
      label: "Sub Total:",
      value: "Rp 40.250",
    },
    {
      icon: ticket,
      label: "PPN 11%",
      value: "Rp 11.000",
    },
    {
      icon: discount,
      label: "Discount",
      value: "Rp 0",
    },
    {
      icon: money,
      label: "Grand total",
      value: "Rp 51.205",
      isGrandTotal: true,
    },
  ];

  return (
    <div className="bg-[#F3F5F9]">
      <Navbar />
      <div className="margin-top-navbar">
        <div className="padding-page max-w-1176 lg:pb-[100px]">
          <h3 className="text-black-color w-full pt-4 text-xl font-bold md:pt-6 md:text-2xl lg:pt-8 lg:text-[32px]">
            My Shopping Cart
          </h3>

          <div className="mt-6 grid gap-3 md:gap-5 min-[1250px]:grid-cols-[1fr_444px] items-start">
            <div className="flex-col gap-6 flex">
              {cartItems.map((store, storeIdx) => (
                <div
                  key={storeIdx}
                  className="rounded-xl bg-white p-3 md:rounded-[20px] md:p-5"
                >
                  <div className="flex items-stretch overflow-hidden">
                    <div className="flex shrink-0 flex-col items-center justify-start">
                      {/* <input type="checkbox" className="z-2" /> */}
                      <Checkbox wrapperClassName="z-2" />
                      {/* <div className="bg-stroke-color h-[80%] w-[2px]" /> */}
                    </div>
                    <div className="flex grow flex-col gap-2 pl-5 -translate-x-1">
                      <div className="flex items-center gap-1 -translate-y-[2px]">
                        <img src={shopIcon} alt="" />
                        <p className="text-sec-color text-base font-medium">
                          {store.storeName}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 md:gap-4">
                        {store.items.map((item, idx) => (
                          <div key={idx} className="relative flex items-center">
                            {/* <div className="text-stroke-color absolute top-0 left-[-1.7rem]">
                        <ProductItemLine />
                      </div> */}
                            <div className="text-stroke-color absolute top-[-70%] left-[-1.7rem]">
                              <div className="bg-stroke-color h-[300px] w-[2px] md:h-[150px]" />
                              <ProductItemLine />
                            </div>
                            <div className="z-2 w-full">
                              <ChartItemProduct item={item} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* if chart empty */}
            {/* <CartEmptyState onFindProduct={() => navigate("/browse-category-product/1")} /> */}

            <div className="flex flex-col gap-3 md:gap-5 lg:sticky lg:top-5">
              <div className="flex w-full cursor-pointer flex-row items-center justify-between gap-3 rounded-xl bg-[url('/images/bg-coupon.png')] bg-cover bg-center p-4 md:gap-[14px] md:rounded-[20px] md:p-5">
                <div className="flex flex-1 flex-row items-center gap-3 md:gap-[14px]">
                  <div className="border-2 border-[#ffffff17] bg-[#ffffff17] rounded-2xl md:rounded-[20px] p-2 md:p-4">
                    <img
                      src={ticketDiscount}
                      alt="coupon"
                      className=""
                    />
                  </div>
                  <div className="flex flex-col gap-1 md:gap-[4px]">
                    <h5 className="font-lexend text-base font-bold text-white md:text-lg">
                      Apply Discount Coupon
                    </h5>
                    <p className="font-lexend text-sm font-medium text-[#98E1E1] md:text-base">
                      You Have 23 Available Coupons
                    </p>
                  </div>
                </div>
                <img
                  src={arrowRightPlainWhite}
                  alt="arrow"
                  className="size-3 md:size-5"
                />
              </div>

              <CartOrderSummary summaryItems={summaryItems} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
