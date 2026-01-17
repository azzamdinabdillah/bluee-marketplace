import walletIcon from "/icons/wallet-2.svg";
import shoppingCartIcon from "/icons/shopping-cart-blue.svg";
import stickyNoteIcon from "/icons/stickynote-blue.svg";
import TransactionCard from "@src/components/backoffice/TransactionCard";
import store2 from "/images/store-2.png";
import store3 from "/images/store-3.png";
import store4 from "/images/store-4.png";
import store5 from "/images/store-5.png";
import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import EmptyState from "@src/components/backoffice/EmptyState";
import StatCard from "@src/components/backoffice/StatCard";

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
            id: 4,
            storeName: "Shayna Sport",
            date: "21 Mei 2025",
            totalProducts: 240,
            imageUrl: store5,
            totalQuantity: "1.260",
            grandTotal: "Rp 3.200.506",
        },
    ];

    return (
        <TemplateLayoutBackoffice title="Dashboard Overviews" subtitle="View Your Dashboard">
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

                    <EmptyState />
                </div>
            </StatCard>
        </TemplateLayoutBackoffice>
    );
}
