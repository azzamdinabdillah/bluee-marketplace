import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import product1 from "/images/lp-1.png";
import product2 from "/images/lp-2.png";
import product3 from "/images/hp-3.png";
import store from "/images/store.png";
import userIcon from "/icons/user.svg";
import userImage from "/images/user.png";
import boxIcon from "/icons/box-black.svg";
import shoppingCartIcon from "/icons/shopping-cart-black.svg";
import shoppingCartGrayIcon from "/icons/shopping-cart-gray.svg";
import calendarIcon from "/icons/calendar-2-black.svg";
import emailIcon from "/icons/sms.svg";
import buildingsIcon from "/icons/buildings-black.svg";
import locationIcon from "/icons/routing.svg";
import postCodeIcon from "/icons/keyboard.svg";
import receiptIcon from "/icons/receipt.svg";
import truckIcon from "/icons/group-gray.svg";
import noteIcon from "/icons/note-text.svg";
import moneyIcon from "/icons/money.svg";
import TransactionStatusSection from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsStatus";
import ProductDetailsSection from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsProduct";
import TransactionDetailsOrderReviews from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsOrderReviews";
import TransactionDetailsCustomer from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsCustomer";
import TransactionDetailsOrderStatus from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsOrderStatus";

export default function DetailsTransaction() {
  const transactionDetails = [
    {
      icon: boxIcon,
      value: 3,
      label: "Total Products",
    },
    {
      icon: shoppingCartIcon,
      value: 21,
      label: "Total Quantity",
    },
    {
      icon: calendarIcon,
      value: "4 April 2025",
      label: "Date Transaction",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Iphone 15 Pro Max",
      category: "Electronics",
      price: 18120500,
      quantity: 6,
      image: product1,
    },
    {
      id: 2,
      title: "Macbook Pro M1",
      category: "Electronics",
      price: 21500500,
      quantity: 3,
      image: product2,
    },
    {
      id: 3,
      title: "Airpods Gen 12",
      category: "Electronics",
      price: 2456500,
      quantity: 12,
      image: product3,
    },
  ];

  const customerDetails = [
    {
      icon: emailIcon,
      value: "mamatgadger@gmail.com",
      label: "Email",
    },
    {
      icon: buildingsIcon,
      value: "Malang",
      label: "City Location",
    },
    {
      icon: locationIcon,
      value: "Wolf Street No 32",
      label: "Street Address",
    },
    {
      icon: postCodeIcon,
      value: "32250",
      label: "Post Code",
    },
  ];

  const paymentSummary = [
    {
      icon: receiptIcon,
      label: "Subtotal",
      value: "Rp 202.702.500",
    },
    {
      icon: shoppingCartGrayIcon,
      label: "Service Fee",
      value: "Rp 5.000",
    },
    {
      icon: truckIcon,
      label: "Delivery Fee",
      value: "Rp 25.000",
    },
    {
      icon: noteIcon,
      label: "PPN 12%",
      value: "Rp 40.000",
    },
  ];

  return (
    <TemplateLayoutBackoffice
      showBackButton
      title="Manage Transactions"
      subtitle="View & Update Your Transactions"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-3 md:gap-5">
          <div className="flex flex-col gap-3 md:gap-5">
            <TransactionStatusSection status="pending" />
            <TransactionStatusSection status="processing" />
            <TransactionStatusSection status="delivering" />
            <TransactionStatusSection status="completed" />
          </div>

          <TransactionDetailsOrderReviews
            details={transactionDetails}
            brandImage={store}
            storeName="Bimore Gadget Universe"
            userImage={userIcon}
            userName="Mamat Gadger"
          />

          <ProductDetailsSection products={products} />
        </div>

        <div className="flex flex-col gap-3 md:gap-5">
          <TransactionDetailsCustomer
            phoneNumber={"081255553005"}
            name="Mamat Gadger"
            image={userImage}
            details={customerDetails}
          />

          <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-3 md:gap-4 md:rounded-2xl md:p-4 lg:gap-5 lg:rounded-[20px] lg:p-5">
            <h3 className="font-lexend text-black-color font-bold text-responsive-20">
              Transaction Details
            </h3>

            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
              {paymentSummary.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full flex-row items-center gap-1.5"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center md:h-6 md:w-6">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-sec-color font-lexend flex-1 text-left text-sm font-medium md:text-base">
                    {item.label}
                  </span>
                  <span className="font-lexend text-black-color text-right text-base font-bold md:text-lg">
                    {item.value}
                  </span>
                </div>
              ))}

              {/* Divider */}
              <hr className="border-stroke-color h-px w-full border"></hr>

              {/* Grand Total */}
              <div className="flex w-full flex-row items-center gap-1.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center md:h-6 md:w-6">
                  <img
                    src={moneyIcon}
                    alt="Grand Total"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-sec-color font-lexend flex-1 text-left text-sm font-medium md:text-base lg:text-lg">
                  Grand Total
                </span>
                <span className="font-lexend text-primary-color text-right text-base font-bold md:text-lg lg:text-xl">
                  Rp 202.772.500
                </span>
              </div>
            </div>
          </div>

          <TransactionDetailsOrderStatus />
        </div>
      </div>
    </TemplateLayoutBackoffice>
  );
}
