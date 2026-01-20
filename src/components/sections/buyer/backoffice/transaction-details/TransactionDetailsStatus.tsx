import timerIcon from "/icons/timer.svg";
import truckTimeIcon from "/icons/truck-time.svg";
import truckFastIcon from "/icons/truck-fast.svg";
import truckTickIcon from "/icons/truck-tick.svg";

export type TransactionStatusType =
  | "pending"
  | "processing"
  | "delivering"
  | "completed";

export type TransactionRoleType = "buyer" | "seller" | "manager";

interface TransactionDetailsStatusProps {
  status: TransactionStatusType;
  role: TransactionRoleType;
}

const statusConfig = {
  pending: {
    bg: "bg-[url(/images/status-waiting.png)]",
    text: "text-[#544607]",
    icon: timerIcon,
    labels: {
      buyer: "Waiting for seller to approve your order",
      seller: "Order pending. Waiting for your approval",
      manager: "Order pending. Waiting for seller's approval",
    },
  },
  processing: {
    bg: "bg-[url(/images/status-processing.png)]",
    text: "text-white",
    icon: truckTimeIcon,
    labels: {
      buyer: "Seller is preparing your item",
      seller: "Prepare the item for pickup by the courier",
      manager: "Seller is preparing the item",
    },
  },
  delivering: {
    bg: "bg-[url(/images/status-delivering.png)]",
    text: "text-white",
    icon: truckFastIcon,
    labels: {
      buyer: "The order is heading to your address",
      seller: "The order is heading to customer address",
      manager: "The order is being delivered to the customer",
    },
  },
  completed: {
    bg: "bg-[url(/images/status-completed.png)]",
    text: "text-white",
    icon: truckTickIcon,
    labels: {
      buyer: "The order has arrived at your address",
      seller: "The order is arrived to customer address",
      manager: "The order has been completed",
    },
  },
};

export default function TransactionDetailsStatus({
  status,
  role,
}: TransactionDetailsStatusProps) {
  const config = statusConfig[status];

  return (
    <div
      className={`flex w-full items-center gap-2.5 rounded-2xl bg-cover bg-center bg-no-repeat p-3 md:rounded-[20px] md:p-4 ${config.text} ${config.bg}`}
    >
      <img
        src={config.icon}
        alt={status}
        className="size-7 shrink-0 md:size-9"
      />
      <span className="text-sm leading-[1.4] font-bold md:text-lg">
        {config.labels[role]}
      </span>
    </div>
  );
}
