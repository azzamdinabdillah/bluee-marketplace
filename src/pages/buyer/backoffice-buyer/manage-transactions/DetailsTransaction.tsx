import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import product1 from "/images/lp-1.png";
import product2 from "/images/lp-2.png";
import product3 from "/images/hp-3.png";
import store from "/images/store.png";
import userIcon from "/icons/user.svg";
import boxIcon from "/icons/box-black.svg";
import shoppingCartIcon from "/icons/shopping-cart-black.svg";
import calendarIcon from "/icons/calendar-2-black.svg";
import TransactionStatusSection from "../sections/manage-transactions-sections/transaction-details/TransactionDetailsStatus";
import ProductDetailsSection from "../sections/manage-transactions-sections/transaction-details/TransactionDetailsProduct";
import TransactionDetailsOrderReviews from "../sections/manage-transactions-sections/transaction-details/TransactionDetailsOrderReviews";

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

            </div>
        </TemplateLayoutBackoffice>
    );
}
