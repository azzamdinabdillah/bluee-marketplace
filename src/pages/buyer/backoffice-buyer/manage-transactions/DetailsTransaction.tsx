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
import TransactionStatusSection from "../sections/manage-transactions-sections/transaction-details/TransactionDetailsStatus";
import ProductDetailsSection from "../sections/manage-transactions-sections/transaction-details/TransactionDetailsProduct";
import TransactionDetailsOrderReviews from "../sections/manage-transactions-sections/transaction-details/TransactionDetailsOrderReviews";
import TransactionDetailsCustomer from "../sections/manage-transactions-sections/transaction-details/TransactionDetailsCustomer";
import TransactionDetailsOrderStatus from "../sections/manage-transactions-sections/transaction-details/TransactionDetailsOrderStatus";

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
            title="Manage Transactions"
            subtitle="View & Update Your Transactions"
        >
            <div className="grid gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-3 md:gap-5">
                    <TransactionStatusSection status="pending" />

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
                        name="Mamat Gadger"
                        image={userImage}
                        details={customerDetails}
                    />

                    <div className="w-full bg-white rounded-xl md:rounded-2xl lg:rounded-[20px] p-3 md:p-4 lg:p-5 flex flex-col gap-3 md:gap-4 lg:gap-5">
                        <h3 className="font-lexend text-black-color text-lg font-bold md:text-xl lg:text-2xl">
                            Transaction Details
                        </h3>

                        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                            {paymentSummary.map((item, index) => (
                                <div key={index} className="flex flex-row items-center gap-2 md:gap-2.5 lg:gap-3 w-full">
                                    <div className="shrink-0 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex items-center justify-center">
                                        <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
                                    </div>
                                    <span className="flex-1 text-sm md:text-base lg:text-lg font-medium text-sec-color font-lexend text-left">
                                        {item.label}
                                    </span>
                                    <span className="text-base md:text-lg lg:text-xl font-bold font-lexend text-black-color text-right">
                                        {item.value}
                                    </span>
                                </div>
                            ))}

                            {/* Divider */}
                            <hr className="w-full h-px border border-stroke-color"></hr>

                            {/* Grand Total */}
                            <div className="flex flex-row items-center gap-2 md:gap-2.5 lg:gap-3 w-full">
                                <div className="shrink-0 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex items-center justify-center">
                                    <img src={moneyIcon} alt="Grand Total" className="w-full h-full object-contain" />
                                </div>
                                <span className="flex-1 text-sm md:text-base lg:text-lg font-medium text-sec-color font-lexend text-left">
                                    Grand Total
                                </span>
                                <span className="text-base md:text-lg lg:text-xl font-bold font-lexend text-primary-color text-right">
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
