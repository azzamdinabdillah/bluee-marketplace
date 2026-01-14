import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import product1 from "/images/store.png";
import timerIcon from "/icons/timer.svg";
import truckTimeIcon from "/icons/truck-time.svg";
import truckFastIcon from "/icons/truck-fast.svg";
import truckTickIcon from "/icons/truck-tick.svg";
import userIcon from "/icons/user.svg";
import boxIcon from "/icons/box-black.svg";
import shoppingCartIcon from "/icons/shopping-cart.svg";
import calendarIcon from "/icons/calendar-2-black.svg";

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
      <div className="border-stroke-color flex flex-col gap-3 rounded-[20px] border p-3 md:gap-4 md:p-4">
        {/* Total Products */}
        <div className="flex items-center gap-[10px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3F3F3] md:h-[60px] md:w-[60px]">
            <img src={boxIcon} alt="Products" className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-lexend text-black-color text-base font-bold md:text-lg">
              3
            </span>
            <span className="font-lexend text-sec-color text-sm font-semibold md:text-base">
              Total Products
            </span>
          </div>
        </div>

        <div className="bg-stroke-color h-[1px] w-full"></div>

        {/* Total Quantity */}
        <div className="flex items-center gap-[10px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3F3F3] md:h-[60px] md:w-[60px]">
            <img src={shoppingCartIcon} alt="Quantity" className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-lexend text-black-color text-base font-bold md:text-lg">
              21
            </span>
            <span className="font-lexend text-sec-color text-sm font-semibold md:text-base">
              Total Quantity
            </span>
          </div>
        </div>

        <div className="bg-stroke-color h-[1px] w-full"></div>

        {/* Date Transaction */}
        <div className="flex items-center gap-[10px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3F3F3] md:h-[60px] md:w-[60px]">
            <img src={calendarIcon} alt="Date" className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-lexend text-black-color text-base font-bold md:text-lg">
              4 April 2025
            </span>
            <span className="font-lexend text-sec-color text-sm font-semibold md:text-base">
              Date Transaction
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DetailsTransaction() {
  return (
    <TemplateLayoutBackoffice
      title="Manage Transactions"
      subtitle="View & Update Your Transactions"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Example usage of the TransactionStatus component */}
        <div className="">
          <TransactionStatus status="pending" />
          <div className="mt-4">
            <TransactionDetailCard />
          </div>
        </div>

        <div></div>
      </div>
    </TemplateLayoutBackoffice>
  );
}
