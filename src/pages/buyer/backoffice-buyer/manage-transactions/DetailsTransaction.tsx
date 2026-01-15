import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import DetailsBoxList from "@src/components/backoffice/DetailsBoxList";
import ProductDetailsCard from "@src/components/ProductDetailsCard";
import product1 from "/images/lp-1.png";
import product2 from "/images/lp-2.png";
import product3 from "/images/hp-3.png";
import timerIcon from "/icons/timer.svg";
import truckTimeIcon from "/icons/truck-time.svg";
import truckFastIcon from "/icons/truck-fast.svg";
import truckTickIcon from "/icons/truck-tick.svg";
import userIcon from "/icons/user.svg";
import boxIcon from "/icons/box-black.svg";
import shoppingCartIcon from "/icons/shopping-cart-gray.svg";
import calendarIcon from "/icons/calendar-2-black.svg";
import arrowDownIcon from "/icons/arrow-circle-down.svg";
import bagIcon from "/icons/bag-gray.svg";

type TransactionStatusType =
    | "pending"
    | "processing"
    | "delivering"
    | "completed";

interface TransactionStatusProps {
    status: TransactionStatusType;
}

const statusConfig = {
    pending: {
        // bg-[#FED833] from Figma
        bg: "bg-[url(/images/status-waiting.png)]",
        text: "text-[#544607]",
        icon: timerIcon,
        label: "Order pending. Waiting for your approval",
    },
    processing: {
        // bg-[#1053D5] from Figma
        bg: "bg-[url(/images/status-processing.png)]",
        text: "text-white",
        icon: truckTimeIcon,
        label: "Prepare the item for pickup by the courier",
    },
    delivering: {
        // bg-[#FF7020] from Figma
        bg: "bg-[url(/images/status-delivering.png)]",
        text: "text-white",
        icon: truckFastIcon,
        label: "The order is heading to your address",
    },
    completed: {
        // bg-[#00A48A] from Figma
        bg: "bg-[url(/images/status-completed.png)]",
        text: "text-white",
        icon: truckTickIcon,
        label: "The order is arrived to your address",
    },
};

export function TransactionStatus({ status }: TransactionStatusProps) {
    const config = statusConfig[status];

    return (
        <div
            className={`flex w-full items-center gap-2.5 rounded-[20px] bg-cover bg-center bg-no-repeat p-4 ${config.text} ${config.bg}`}
        >
            <img src={config.icon} alt={status} className="h-9 w-9 shrink-0" />
            <span className="text-base leading-[1.4] font-bold md:text-lg">
                {config.label}
            </span>
        </div>
    );
}

function TransactionDetailCard() {
    const details = [
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

    return (
        <div className="flex w-full flex-col gap-3 rounded-[20px] bg-white p-3 md:gap-4 md:p-4 lg:gap-5 lg:p-5">
            {/* Header */}
            <h3 className="font-lexend text-black-color text-base font-bold md:text-lg lg:text-xl">
                Order Reviews
            </h3>

            {/* Product Info */}
            <div className="flex items-center gap-3 md:gap-[14px]">
                {/* Product Image */}
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#F3F3F3] md:h-[80px] md:w-[80px] lg:h-[92px] lg:w-[92px]">
                    <img
                        src={product1}
                        alt="Product"
                        className="h-[60%] w-[60%] object-contain"
                    />
                </div>

                <div className="flex flex-col gap-1 md:gap-[6px]">
                    <h4 className="font-lexend text-black-color text-lg font-bold md:text-xl lg:text-[22px]">
                        Bimore Gadget Universe
                    </h4>
                    <div className="flex items-center gap-1">
                        <img src={userIcon} alt="User" className="h-5 w-5 md:h-6 md:w-6" />
                        <span className="font-lexend text-sec-color text-sm font-semibold md:text-base lg:text-lg">
                            Mamat Gadger
                        </span>
                    </div>
                </div>
            </div>

            {/* Details Box */}
            <DetailsBoxList items={details} />
        </div>
    );
}

export default function DetailsTransaction() {
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
                {/* Example usage of the TransactionStatus component */}
                <div className="flex flex-col gap-3 md:gap-5">
                    <TransactionStatus status="pending" />

                    <TransactionDetailCard />

                    <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white p-4 md:gap-5 md:p-5">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-lexend text-black-color text-base font-bold md:text-lg lg:text-xl">
                                    Product Details
                                </h3>
                                <img
                                    src={arrowDownIcon}
                                    alt="Toggle"
                                    className="h-6 w-6 cursor-pointer"
                                />
                            </div>
                            <div className="flex items-center gap-1">
                                <img
                                    src={shoppingCartIcon}
                                    alt="Cart"
                                    className="h-6 w-6"
                                />
                                <span className="font-lexend text-sec-color text-sm font-semibold md:text-base">
                                    4 Total Products
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {products.map((product) => (
                                <ProductDetailsCard
                                    className="lg:p-4!"
                                    key={product.id}
                                    image={product.image}
                                    title={product.title}
                                    category={product.category}
                                    categoryIcon={bagIcon}
                                    price={product.price}
                                    quantity={product.quantity}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </TemplateLayoutBackoffice>
    );
}
