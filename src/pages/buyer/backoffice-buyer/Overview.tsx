import React from "react";
import Sidebar from "@src/components/backoffice/Sidebar";
import HeaderBackoffice from "@src/components/backoffice/HeaderBackoffice";
import walletIcon from "/icons/wallet-2.svg";
import shoppingCartIcon from "/icons/shopping-cart-blue.svg";
import TransactionCard from "@src/components/backoffice/TransactionCard";
import store2 from "/images/store-2.png";
import store3 from "/images/store-3.png";
import store4 from "/images/store-4.png";
import store5 from "/images/store-5.png";

interface StatCardProps {
    iconSrc: string;
    value: string;
    label: string;
    children?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ iconSrc, value, label, children }) => {
    return (
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 p-4 md:p-5 bg-white rounded-[20px] w-full transition-all duration-300 cursor-pointer">
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
                <div className="flex items-center justify-center w-12 h-12 md:w-[52px] md:h-[52px] lg:w-14 lg:h-14 rounded-[50px] bg-black-color/9 p-3 md:p-[14px] lg:p-4 transition-transform group-hover:scale-105">
                    <img
                        src={iconSrc}
                        alt={label}
                        className="size-5 md:size-[22px] lg:size-6 object-contain"
                    />
                </div>
                <div className="flex flex-col gap-1 md:gap-[5px] lg:gap-[6px]">
                    <h3 className="text-[#292D32] font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
                        {value}
                    </h3>
                    <p className="text-[#6A7686] font-medium text-sm md:text-base lg:text-lg leading-tight">
                        {label}
                    </p>
                </div>
            </div>

            {children && <hr className="border-t border-[#E5E8ED]" />}

            {children}
        </div>
    );
};

export default function Overview() {
    const transactions = [
        {
            id: 1,
            storeName: "Ichsan Electronics",
            date: "21 Mei 2025",
            totalProducts: 240,
            imageUrl: store2,
            totalQuantity: "1.260",
            grandTotal: "Rp 3.200.506"
        },
        {
            id: 2,
            storeName: "Marct Beauty",
            date: "21 Mei 2025",
            totalProducts: 240,
            imageUrl: store3,
            totalQuantity: "1.260",
            grandTotal: "Rp 3.200.506"
        },
        {
            id: 3,
            storeName: "Rafly Bookstore",
            date: "21 Mei 2025",
            totalProducts: 240,
            imageUrl: store4,
            totalQuantity: "1.260",
            grandTotal: "Rp 3.200.506"
        },
        {
            id: 3,
            storeName: "Shayna Sport",
            date: "21 Mei 2025",
            totalProducts: 240,
            imageUrl: store5,
            totalQuantity: "1.260",
            grandTotal: "Rp 3.200.506"
        }
    ];

    return (
        <div className="flex min-h-screen bg-[#F3F5F9] font-sans">
            <Sidebar />

            <div className="flex-1 p-4 mt-16 lg:mt-0 lg:py-7.5 lg:px-5 w-full overflow-x-hidden flex gap-3 md:gap-5 flex-col">
                <HeaderBackoffice
                    title="Dashboard Overviews"
                    subtitle="View Your Dashboard"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 w-full">
                    <StatCard
                        iconSrc={walletIcon}
                        value="Rp 920.650.320"
                        label="Total Expense"
                    />
                    <StatCard
                        iconSrc={shoppingCartIcon}
                        value="16.200"
                        label="Total Products"
                    />
                </div>

                <StatCard
                    iconSrc={shoppingCartIcon}
                    value="16.200"
                    label="Total Products"
                >
                    <h3 className="text-base md:text-xl text-black-color font-bold">Latest Transactions</h3>

                    <div className="flex flex-col gap-4">
                        {transactions.map((transaction) => (
                            <TransactionCard
                                key={transaction.id}
                                storeName={transaction.storeName}
                                date={transaction.date}
                                totalProducts={transaction.totalProducts}
                                imageUrl={transaction.imageUrl}
                                totalQuantity={transaction.totalQuantity}
                                grandTotal={transaction.grandTotal}
                                onExport={() => console.log('Export clicked')}
                                onDetails={() => console.log('Details clicked')}
                            />
                        ))}
                    </div>
                </StatCard>

            </div>
        </div>
    );
}
