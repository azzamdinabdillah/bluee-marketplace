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
import discountIcon from "/icons/discount-shape.svg";
import TransactionStatusSection from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsStatus";
import ProductDetailsSection from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsProduct";
import TransactionDetailsOrderReviews from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsOrderReviews";
import TransactionDetailsCustomer from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsCustomer";
import TransactionDetailsOrderStatus from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsOrderStatus";
import BoxList from "@src/components/backoffice/BoxList";
import type { ProductType } from "@src/types/ProductTypes";

export const transactionDetails = [
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

export const products: ProductType[] = [
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

export const customerDetails = [
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

export const paymentSummary = [
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
  {
    icon: discountIcon,
    label: "Discount",
    value: "Rp 0",
    customClassStyleValue: "",
  },
  {
    icon: moneyIcon,
    label: "Grand Total",
    value: "Rp 202.772.500",
    customClassStyleValue:
      "font-lexend text-primary-color text-responsive-20 text-right font-bold",
  },
];

export default function DetailsTransaction() {
  return (
    <TemplateLayoutBackoffice
      showBackButton
      title="Manage Transactions"
      subtitle="View & Update Your Transactions"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div className="flex flex-col gap-3 md:gap-5">
          <div className="flex flex-col gap-3 md:gap-5">
            <TransactionStatusSection status="pending" role="buyer" />
            <TransactionStatusSection status="processing" role="buyer" />
            <TransactionStatusSection status="delivering" role="buyer" />
            <TransactionStatusSection status="completed" role="buyer" />
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
            <h3 className="font-lexend text-black-color text-responsive-20 font-bold">
              Transaction Details
            </h3>

            <BoxList items={paymentSummary} />
          </div>

          <TransactionDetailsOrderStatus />
        </div>
      </div>
    </TemplateLayoutBackoffice>
  );
}
