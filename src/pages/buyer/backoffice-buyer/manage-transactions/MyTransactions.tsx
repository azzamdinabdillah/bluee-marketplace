import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import TransactionCard from "@src/components/backoffice/TransactionCard";
import Pagination from "@src/components/backoffice/Pagination";
import InputBasic from "@src/components/InputBasic";
import searchIcon from "/icons/receipt-search.svg";
import store2 from "/images/store-2.png";
import store3 from "/images/store-3.png";
import store4 from "/images/store-4.png";
import store5 from "/images/store-5.png";
import stickyNoteIcon from "/icons/stickynote.svg";
import arrowDownIcon from "/icons/arrow-down.svg";
import EmptyState from "@src/components/backoffice/EmptyState";
import { useNavigate } from "react-router-dom";

export default function MyTransactions() {
  const navigate = useNavigate();

  const transactions = [
    {
      id: 1,
      storeName: "Ichsan Electronics",
      date: "21 Mei 2025",
      headerDate: "21 Mei 2025",
      status: "DELIVERING",
      statusVariant: "delivering" as const,
      totalProducts: 240,
      totalQuantity: "1.260",
      grandTotal: "Rp 3.200.506",
      imageUrl: store2,
    },
    {
      id: 2,
      storeName: "Marct Beauty",
      date: "9 Mei 2025",
      headerDate: "9 Mei 2025",
      status: "COMPLETED",
      statusVariant: "completed" as const,
      totalProducts: 15,
      totalQuantity: "50",
      grandTotal: "Rp 1.500.000",
      imageUrl: store3,
    },
    {
      id: 3,
      storeName: "Gadget Store",
      date: "15 April 2025",
      headerDate: "15 April 2025",
      status: "PENDING",
      statusVariant: "pending" as const,
      totalProducts: 5,
      totalQuantity: "10",
      grandTotal: "Rp 5.200.000",
      imageUrl: store4,
    },
    {
      id: 4,
      storeName: "Fashion Hub",
      date: "10 April 2025",
      headerDate: "10 April 2025",
      status: "PROCESSING",
      statusVariant: "processing" as const,
      totalProducts: 120,
      totalQuantity: "300",
      grandTotal: "Rp 12.500.000",
      imageUrl: store5,
    },
  ];

  return (
    <TemplateLayoutBackoffice
      title="Manage Transactions"
      subtitle="View & Update Your Transactions"
    >
      <div className="flex w-full flex-col gap-4 md:gap-5 lg:gap-6">
        {/* Header & Controls Section */}
        <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 md:gap-5 md:rounded-[20px] md:p-5 lg:gap-6 lg:p-6">
          {/* Title & Badge */}
          <div className="flex flex-col gap-2">
            <h2 className="font-lexend text-responsive-20 text-black-color font-bold">
              All Transactions
            </h2>
            <div className="flex flex-row items-center gap-1">
              <img
                src={stickyNoteIcon}
                alt="Total"
                className="size-4 md:size-5"
              />
              <span className="font-lexend text-responsive-16 text-sec-color font-semibold">
                {transactions.length} Total Transactions
              </span>
            </div>
          </div>

          {/* Controls (Search & Filter) */}
          <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            {/* Search Bar */}
            <InputBasic
              containerClassName="w-full md:w-[320px] lg:w-[400px]"
              placeholder="Search transaction"
              Icon={searchIcon}
              className="rounded-2xl md:py-4 md:pr-4"
            />

            {/* Filter Show Entries */}
            <div className="flex w-full flex-row items-center justify-between gap-3 md:w-auto md:justify-end">
              <span className="font-lexend text-sec-color text-responsive-16 font-medium whitespace-nowrap">
                Show
              </span>
              <div className="relative min-w-[120px] md:min-w-[140px]">
                <select className="border-stroke-color font-lexend text-black-color focus:border-primary-color text-responsive-16 w-full cursor-pointer appearance-none rounded-2xl border bg-transparent py-2.5 pr-10 pl-4 font-semibold focus:outline-none md:py-3">
                  <option value="4">4 Entries</option>
                  <option value="10">10 Entries</option>
                  <option value="25">25 Entries</option>
                </select>
                <img
                  src={arrowDownIcon}
                  alt="Select"
                  className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 md:right-4 md:h-5 md:w-5"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 md:gap-5 lg:gap-6">
            {transactions.map((transaction) => (
              <TransactionCard
                key={transaction.id}
                storeName={transaction.storeName}
                date={transaction.date}
                headerDate={transaction.headerDate}
                status={transaction.status}
                statusVariant={transaction.statusVariant}
                totalProducts={transaction.totalProducts}
                totalQuantity={transaction.totalQuantity}
                grandTotal={transaction.grandTotal}
                imageUrl={transaction.imageUrl}
                onExport={() => console.log(`Export ${transaction.storeName}`)}
                onDetails={() =>
                  navigate(
                    `/backoffice-buyer/manage-transactions/${transaction.id}`,
                  )
                }
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination pages={[1, 2, 3, 5]} activePage={1} />

          <EmptyState />
        </div>
      </div>
    </TemplateLayoutBackoffice>
  );
}
