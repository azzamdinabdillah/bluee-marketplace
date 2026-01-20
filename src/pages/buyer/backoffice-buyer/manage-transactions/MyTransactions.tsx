import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import TransactionCard from "@src/components/backoffice/TransactionCard";
import Pagination from "@src/components/backoffice/Pagination";
import stickyNoteIcon from "/icons/stickynote.svg";
import SectionFilter from "@src/components/backoffice/SectionFilter";
import store2 from "/images/store-2.png";
import store3 from "/images/store-3.png";
import store4 from "/images/store-4.png";
import store5 from "/images/store-5.png";
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
        <SectionFilter
          title="All Transactions"
          badgeIcon={stickyNoteIcon}
          badgeValue={transactions.length}
          badgeLabel="Total Transactions"
          searchPlaceholder="Search transaction"
        >
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
        </SectionFilter>
      </div>
    </TemplateLayoutBackoffice>
  );
}
