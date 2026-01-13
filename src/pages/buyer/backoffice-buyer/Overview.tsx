import React from "react";
import Sidebar from "@src/components/backoffice/Sidebar";
import HeaderBackoffice from "@src/components/backoffice/HeaderBackoffice";
import walletIcon from "/icons/wallet-2.svg";
import shoppingCartIcon from "/icons/shopping-cart-blue.svg";
import stickyNoteIcon from "/icons/stickynote-blue.svg";
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

const StatCard: React.FC<StatCardProps> = ({
  iconSrc,
  value,
  label,
  children,
}) => {
  return (
    <div className="flex w-full cursor-pointer flex-col gap-4 rounded-[20px] bg-white p-4 transition-all duration-300 md:gap-5 md:p-5 lg:gap-6">
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
        <div className="bg-black-color/9 flex h-12 w-12 items-center justify-center rounded-[50px] p-3 transition-transform group-hover:scale-105 md:h-[52px] md:w-[52px] md:p-[14px] lg:h-14 lg:w-14 lg:p-4">
          <img
            src={iconSrc}
            alt={label}
            className="size-5 object-contain md:size-[22px] lg:size-6"
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-[5px] lg:gap-[6px]">
          <h3 className="text-2xl leading-tight font-bold text-[#292D32] md:text-3xl lg:text-4xl">
            {value}
          </h3>
          <p className="text-sm leading-tight font-medium text-[#6A7686] md:text-base lg:text-lg">
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
      grandTotal: "Rp 3.200.506",
    },
    {
      id: 2,
      storeName: "Marct Beauty",
      date: "21 Mei 2025",
      totalProducts: 240,
      imageUrl: store3,
      totalQuantity: "1.260",
      grandTotal: "Rp 3.200.506",
    },
    {
      id: 3,
      storeName: "Rafly Bookstore",
      date: "21 Mei 2025",
      totalProducts: 240,
      imageUrl: store4,
      totalQuantity: "1.260",
      grandTotal: "Rp 3.200.506",
    },
    {
      id: 3,
      storeName: "Shayna Sport",
      date: "21 Mei 2025",
      totalProducts: 240,
      imageUrl: store5,
      totalQuantity: "1.260",
      grandTotal: "Rp 3.200.506",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F3F5F9] font-sans">
      <Sidebar />

      <div className="w-full overflow-hidden">
        <HeaderBackoffice
          title="Dashboard Overviews"
          subtitle="View Your Dashboard"
        />

        <div className="mt-16 flex w-full flex-1 flex-col gap-3 overflow-x-hidden p-4 md:gap-5 lg:mt-0 lg:px-5 lg:py-7.5">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-2">
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
            iconSrc={stickyNoteIcon}
            value="320"
            label="Total Transaction"
          >
            <h3 className="text-black-color text-base font-bold md:text-xl">
              Latest Transactions
            </h3>

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
                  onExport={() => console.log("Export clicked")}
                  onDetails={() => console.log("Details clicked")}
                />
              ))}
            </div>
          </StatCard>
        </div>
      </div>
    </div>
  );
}
