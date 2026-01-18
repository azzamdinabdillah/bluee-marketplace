import timerIcon from "/icons/timer.svg";
import truckTimeIcon from "/icons/truck-time.svg";
import truckFastIcon from "/icons/truck-fast.svg";
import truckTickIcon from "/icons/truck-tick.svg";

export type TransactionStatusType =
    | "pending"
    | "processing"
    | "delivering"
    | "completed";

interface TransactionDetailsStatusProps {
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

export default function TransactionDetailsStatus({ status }: TransactionDetailsStatusProps) {
    const config = statusConfig[status];

    return (
        <div
            className={`flex w-full items-center gap-2.5 rounded-2xl md:rounded-[20px] bg-cover bg-center bg-no-repeat p-3 md:p-4 ${config.text} ${config.bg}`}
        >
            <img src={config.icon} alt={status} className="size-7 md:size-9 shrink-0" />
            <span className="text-sm leading-[1.4] font-bold md:text-lg">
                {config.label}
            </span>
        </div>
    );
}
