import { useState } from "react";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import CartItemList from "@src/components/sections/buyer/landing/checkout/CartItemList";
import InputInteractive from "@src/components/InputInteractive";
import { cartItems } from "@src/datas/CartProduct";
import GlobalSearch from "@src/components/icons/GlobalSearch";
import { Buildings } from "@src/components/icons/Buildings";
import Keyboard from "@src/components/icons/Keyboard";
import Location from "@src/components/icons/Location";
import SelectCourier, { type CourierOption } from "@src/components/sections/buyer/landing/checkout/SelectCourier";
import shieldTick from "/icons/shield-tick.svg";
import OrderSummary from "@src/components/sections/buyer/landing/checkout/OrderSummary";
import Button from "@src/components/Button";
import shoppingCart from "/icons/shopping-cart-gray.svg";
import box from "/icons/box.svg";
import ticket from "/icons/ticket.svg";
import receipt from "/icons/receipt.svg";
import money from "/icons/money.svg";
import arrowRight from "/icons/arrow-right-rounded.svg";
import cardTick from "/icons/card-tick.svg";
import group from "/icons/group.svg";
import bagTick from "/images/bag-tick.png";
import Modal from "@src/components/Modal";

interface PaymentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function PaymentSuccessModal({ isOpen, onClose }: PaymentSuccessModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Payment Successful"
      width="max-w-[400px]"
      footer={
        <div className="flex flex-col gap-3">
          <Button
            variant="blue"
            className="w-full rounded-2xl"
            onClick={onClose}
            to="/"
          >
            View Transaction
          </Button>
          <Button
            variant="lightBlue"
            className="w-full rounded-2xl"
            onClick={onClose}
            to="/"
          >
            Back to Homepage
          </Button>
        </div>
      }
    >
      <div className="flex flex-col items-center gap-2 py-4 text-center">
        <div className="mb-4 flex size-[72px] items-center justify-center">
          {/* Empty Image as requested */}
          <img src={bagTick} alt="Success Icon" className="size-full object-contain" />
        </div>

        <h4 className="font-lexend text-xl font-bold text-[#292D32]">
          Thank You!
        </h4>
        <p className="font-lexend text-base font-semibold text-[#6A7686]">
          Your order has been placed successfully.
        </p>
      </div>
    </Modal>
  );
}

export default function Checkout() {
  const [selectedCourier, setSelectedCourier] = useState<CourierOption | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <div className="bg-[#F3F5F9]">
      <Navbar />
      <PaymentSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
      <div className="margin-top-navbar">
        <div className="padding-page max-w-1176 lg:pb-[100px]">
          <h3 className="text-black-color w-full pt-4 text-xl font-bold md:pt-6 md:text-2xl lg:pt-8 lg:text-[32px]">
            Checkout Page
          </h3>

          <div className="mt-6 grid items-start gap-3 min-[1250px]:grid-cols-2 md:gap-5">
            <div>
              <CartItemList stores={cartItems} />
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-[url('/images/bg-secure.png')] bg-cover bg-center bg-no-repeat px-4 py-3 shadow-sm transition-all hover:shadow-md md:rounded-[20px] md:px-[18px] md:py-[16px]">
                {/* Main Content */}
                <div className="z-10 flex w-full flex-row items-center justify-start gap-[10px]">
                  <div className="flex shrink-0 items-center justify-center">
                    <img
                      src={shieldTick}
                      alt="Security Shield Icon"
                      className="size-8 object-contain md:size-[36px]"
                    />
                  </div>

                  <p className="text-left text-sm md:text-base leading-[1.4] font-bold text-white">
                    Your personal data is securely protected by us
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 rounded-[20px] bg-white p-5">
                <h4 className="w-full text-xl leading-tight font-bold text-[#292D32]">
                  Contact & Delivery Address
                </h4>

                <div className="flex flex-col gap-3">
                  <p className="text-base leading-tight font-semibold text-[#6A7686]">
                    Address Searching
                  </p>
                  <InputInteractive
                    label="Enter Disctrict"
                    icon={GlobalSearch}
                    error="Format email tidak valid"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-base leading-tight font-semibold text-[#6A7686]">
                    Your Address
                  </p>
                  <InputInteractive
                    label="Enter Your Address"
                    icon={Location}
                    as="textarea"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-base leading-tight font-semibold text-[#6A7686]">
                    Your City
                  </p>
                  <InputInteractive label="Enter Your City" icon={Buildings} />
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-base leading-tight font-semibold text-[#6A7686]">
                    Post Code
                  </p>
                  <InputInteractive label="Enter Post Code" icon={Keyboard} />
                </div>
              </div>

              <div>
                <SelectCourier
                  selectedCourier={selectedCourier}
                  onChangeCourier={setSelectedCourier}
                />
              </div>

              <div>
                <OrderSummary
                  items={[
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
                      icon: cardTick,
                      label: "Service Fee:",
                      value: "Rp 50.000",
                    },
                    {
                      icon: group,
                      label: "Delivery Fee:",
                      value: "Rp 350.000",
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
                      icon: money,
                      label: "Grand total",
                      value: "Rp 56.250",
                      isTotal: true,
                    },
                  ]}
                  button={
                    <Button
                      variant="blue"
                      icon={arrowRight}
                      className="w-full rounded-xl md:rounded-2xl"
                      onClick={() => setShowSuccessModal(true)}
                    >
                      Pay Now
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
