import Pagination from "@src/components/backoffice/Pagination";
import SectionFilter from "@src/components/backoffice/SectionFilter";
import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import StatusBadge, {
  type StatusBadgeVariant,
} from "@src/components/backoffice/StatusBadge";
import Button from "@src/components/Button";

// Icons
import stickyNoteIcon from "/icons/stickynote.svg";
import calendarIcon from "/icons/calendar-2.svg";
import boxIcon from "/icons/box-black.svg";
import shoppingCartIcon from "/icons/shopping-cart.svg";
import moneyIcon from "/icons/money.svg";
import eyeIcon from "/icons/eye.svg";
import callIcon from "/icons/call.svg";
import exportIcon from "/icons/receive-square.svg";

// Images
import user1 from "/images/user.png";
import user2 from "/images/user-2.png";
import user3 from "/images/user-3.png";

interface Transaction {
  id: string;
  orderId: string;
  customerName: string;
  customerImage: string;
  customerPhone: string;
  date: string;
  totalProducts: number;
  totalQuantity: number;
  grandTotal: number;
  status: string;
  statusVariant: StatusBadgeVariant;
}

const transactionsData: Transaction[] = [
  {
    id: "1",
    orderId: "INV-20240120-001",
    customerName: "Muhammad Azam",
    customerImage: user1,
    customerPhone: "0812-3456-7890",
    date: "20 Jan 2024",
    totalProducts: 2,
    totalQuantity: 3,
    grandTotal: 19500000,
    status: "Delivering",
    statusVariant: "delivering",
  },
  {
    id: "2",
    orderId: "INV-20240120-002",
    customerName: "Siti Aminah",
    customerImage: user2,
    customerPhone: "0898-7654-3210",
    date: "19 Jan 2024",
    totalProducts: 1,
    totalQuantity: 1,
    grandTotal: 500000,
    status: "Completed",
    statusVariant: "completed",
  },
  {
    id: "3",
    orderId: "INV-20240120-003",
    customerName: "Budi Santoso",
    customerImage: user3,
    customerPhone: "0852-1122-3344",
    date: "18 Jan 2024",
    totalProducts: 3,
    totalQuantity: 5,
    grandTotal: 7500000,
    status: "Pending",
    statusVariant: "pending",
  },
  {
    id: "4",
    orderId: "INV-20240120-004",
    customerName: "Lestari Putri",
    customerImage: user2,
    customerPhone: "0813-9988-7766",
    date: "17 Jan 2024",
    totalProducts: 1,
    totalQuantity: 2,
    grandTotal: 1200000,
    status: "Processing",
    statusVariant: "processing",
  },
];

export default function Transactions() {
  return (
    <TemplateLayoutBackoffice
      role="seller"
      title="Manage My Transactions"
      subtitle="View and Update Your Store Transactions"
    >
      <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
        {/* Transactions List Section */}
        <SectionFilter
          title="All Transactions"
          badgeIcon={stickyNoteIcon}
          badgeValue={transactionsData.length}
          badgeLabel="Total Transactions"
          searchPlaceholder="Search order ID or product name..."
        >
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
            {transactionsData.map((transaction) => (
              <div
                key={transaction.id}
                className="border-stroke-color flex w-full flex-col gap-4 rounded-2xl border bg-white p-4 md:gap-5 md:rounded-[20px] md:p-5 lg:gap-6 lg:p-[18px_20px]"
              >
                {/* Header Section */}
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-1.5 md:gap-2">
                    <img
                      src={calendarIcon}
                      alt="Date"
                      className="size-4 md:size-5 lg:size-6"
                    />
                    <span className="font-lexend text-responsive-16 text-sec-color font-semibold">
                      {transaction.date}
                    </span>
                  </div>
                  <StatusBadge
                    status={transaction.status}
                    variant={transaction.statusVariant}
                  />
                </div>

                {/* Divider */}
                <div className="bg-stroke-color h-px w-full"></div>

                {/* Top Section */}
                <div className="flex w-full flex-col items-start gap-4 md:gap-5 lg:flex-row lg:items-center lg:gap-6">
                  {/* Customer Info */}
                  <div className="flex w-full shrink-0 flex-row items-center gap-3 md:gap-[14px] lg:w-[350px]">
                    <img
                      src={transaction.customerImage}
                      alt={transaction.customerName}
                      className="size-[60px] shrink-0 rounded-full bg-gray-100 object-cover md:size-[70px] lg:size-[84px]"
                    />
                    <div className="flex flex-col gap-1 md:gap-[6px]">
                      <h3 className="font-lexend text-responsive-18 text-black-color line-clamp-1 font-bold">
                        {transaction.customerName}
                      </h3>
                      <div className="flex flex-row items-center gap-1.5">
                        <img
                          src={callIcon}
                          alt="Phone"
                          className="size-3.5 md:size-4 lg:size-5"
                        />
                        <span className="font-lexend text-sec-color text-responsive-14 font-semibold">
                          {transaction.customerPhone}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex w-full flex-col gap-3 md:flex-row md:gap-4 lg:gap-5">
                    {/* Total Products */}
                    <div className="flex flex-1 flex-row items-center gap-2 rounded-xl bg-gray-50 p-3 md:gap-[10px] md:rounded-none md:bg-transparent md:p-0">
                      <div className="shrink-0 rounded-full bg-gray-100 p-2 md:rounded-[47px] md:p-3 lg:p-4">
                        <img
                          src={boxIcon}
                          alt="Products"
                          className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 md:gap-1">
                        <span className="font-lexend text-responsive-18 text-black-color font-bold">
                          {transaction.totalProducts}
                        </span>
                        <span className="font-lexend text-sec-color text-responsive-16 font-semibold">
                          Total Products
                        </span>
                      </div>
                    </div>

                    {/* Total Quantity */}
                    <div className="flex flex-1 flex-row items-center gap-2 rounded-xl bg-gray-50 p-3 md:gap-[10px] md:rounded-none md:bg-transparent md:p-0">
                      <div className="shrink-0 rounded-full bg-gray-100 p-2 md:rounded-[47px] md:p-3 lg:p-4">
                        <img
                          src={shoppingCartIcon}
                          alt="Quantity"
                          className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 md:gap-1">
                        <span className="font-lexend text-responsive-18 text-black-color font-bold">
                          {transaction.totalQuantity}
                        </span>
                        <span className="font-lexend text-sec-color text-responsive-16 font-semibold">
                          Total Quantity
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="bg-stroke-color h-px w-full"></div>

                {/* Bottom Section */}
                <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-5">
                  {/* Price & Date */}
                  <div className="flex w-full flex-col gap-2 md:w-auto md:gap-3">
                    <div className="flex flex-col gap-1 md:gap-[6px]">
                      <span className="font-lexend text-responsive-20 text-primary-color font-bold">
                        Rp {transaction.grandTotal.toLocaleString("id-ID")}
                      </span>
                      <div className="flex flex-row items-center gap-[6px]">
                        <img
                          src={moneyIcon}
                          alt="Total"
                          className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
                        />
                        <span className="font-lexend text-sec-color text-responsive-16 font-semibold">
                          Grand Total
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex w-full flex-row items-center gap-3 md:w-auto md:gap-[14px]">
                    <Button
                      variant="black"
                      icon={exportIcon}
                      iconPosition="right"
                      className="text-responsive-16 flex-1 py-2.5 md:flex-none md:py-3 lg:py-[14px]"
                    >
                      Export
                    </Button>
                    <Button
                      to="/backoffice-seller/transactions/1"
                      variant="blue"
                      icon={eyeIcon}
                      iconPosition="left"
                      className="text-responsive-16 w-auto flex-1 py-2.5 md:w-[126px] md:flex-none md:py-3 lg:py-[14px]"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 flex w-full flex-row items-center justify-end md:justify-start">
            <Pagination pages={[1, 2, 3, 5]} activePage={1} />
          </div>
        </SectionFilter>
      </div>
    </TemplateLayoutBackoffice>
  );
}
