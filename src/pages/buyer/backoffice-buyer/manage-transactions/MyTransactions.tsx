import TemplateLayoutBackoffice from '@src/components/backoffice/TemplateLayoutBackoffice';
import TransactionCard from '@src/components/backoffice/TransactionCard';
import Pagination from '@src/components/backoffice/Pagination';
import InputBasic from '@src/components/InputBasic';
import searchIcon from '/icons/receipt-search.svg';
import store2 from '/images/store-2.png';
import store3 from '/images/store-3.png';
import store4 from '/images/store-4.png';
import store5 from '/images/store-5.png';
import stickyNoteIcon from '/icons/stickynote.svg';
import arrowDownIcon from '/icons/arrow-down.svg';
import EmptyState from '@src/components/backoffice/EmptyState';
import { useNavigate } from 'react-router-dom';

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
        }
    ];

    return (
        <TemplateLayoutBackoffice title="Manage Transactions" subtitle="View & Update Your Transactions">
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full">

                {/* Header & Controls Section */}
                <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 p-4 md:p-5 lg:p-6 bg-white rounded-2xl md:rounded-[20px] w-full">

                    {/* Title & Badge */}
                    <div className="flex flex-col gap-2">
                        <h2 className="font-lexend font-bold text-responsive-20 text-black-color">
                            All Transactions
                        </h2>
                        <div className="flex flex-row items-center gap-1">
                            <img src={stickyNoteIcon} alt="Total" className="size-4 md:size-5" />
                            <span className="font-lexend font-semibold text-responsive-16 text-sec-color">
                                {transactions.length} Total Transactions
                            </span>
                        </div>
                    </div>

                    {/* Controls (Search & Filter) */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full">

                        {/* Search Bar */}
                        <InputBasic
                            containerClassName="w-full md:w-[320px] lg:w-[400px]"
                            placeholder="Search transaction"
                            Icon={searchIcon}
                            className="rounded-2xl md:py-4 md:pr-4"
                        />

                        {/* Filter Show Entries */}
                        <div className="flex flex-row items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                            <span className="font-lexend font-medium text-sm md:text-base text-sec-color whitespace-nowrap">
                                Show
                            </span>
                            <div className="relative min-w-[120px] md:min-w-[140px]">
                                <select className="w-full appearance-none pl-4 pr-10 py-2.5 md:py-3 rounded-2xl border border-stroke-color bg-transparent font-lexend font-semibold text-sm md:text-base text-black-color focus:outline-none focus:border-primary-color cursor-pointer">
                                    <option value="4">4 Entries</option>
                                    <option value="10">10 Entries</option>
                                    <option value="25">25 Entries</option>
                                </select>
                                <img
                                    src={arrowDownIcon}
                                    alt="Select"
                                    className="absolute right-3.5 md:right-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full">
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
                                onDetails={() => navigate(`/backoffice-buyer/manage-transactions/${transaction.id}`)}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <Pagination
                        pages={[1, 2, 3, 5]}
                        activePage={1}
                    />

                    <EmptyState />
                </div>
            </div>
        </TemplateLayoutBackoffice>
    );
}
