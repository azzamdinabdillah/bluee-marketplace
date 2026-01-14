import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";

type TransactionStatusType = 'pending' | 'processing' | 'delivering' | 'completed';

interface TransactionStatusProps {
    status: TransactionStatusType;
}

const statusConfig = {
    pending: {
        // bg-[#FED833] from Figma
        bg: 'bg-[#FED833]',
        text: 'text-[#544607]',
        icon: '/icons/timer.svg',
        label: 'Order pending. Waiting for your approval',
    },
    processing: {
        // bg-[#1053D5] from Figma
        bg: 'bg-[#1053D5]',
        text: 'text-white',
        icon: '/icons/truck-time.svg',
        label: 'Prepare the item for pickup by the courier',
    },
    delivering: {
        // bg-[#FF7020] from Figma
        bg: 'bg-[#FF7020]',
        text: 'text-white',
        icon: '/icons/truck-fast.svg',
        label: 'The order is heading to your address',
    },
    completed: {
        // bg-[#00A48A] from Figma
        bg: 'bg-[#00A48A]',
        text: 'text-white',
        icon: '/icons/truck-tick.svg',
        label: 'The order is arrived to your address',
    },
};

export function TransactionStatus({ status }: TransactionStatusProps) {
    const config = statusConfig[status];

    // Note: Background colors are applied based on Figma design. 
    // User mentioned providing backgrounds later, so these are placeholders/defaults.
    return (
        <div className={`flex items-center gap-2.5 p-4 rounded-[20px] w-full lg:w-[470px] ${config.bg} ${config.text}`}>
            <img
                src={config.icon}
                alt={status}
                className="w-9 h-9 shrink-0"
            />
            <span className="font-bold text-base md:text-lg leading-[1.4]">
                {config.label}
            </span>
        </div>
    );
}

export default function DetailsTransaction() {
    return (
        <TemplateLayoutBackoffice title="Manage Transactions" subtitle="View & Update Your Transactions">
            <div className="grid lg:grid-cols-2 gap-4">
                {/* Example usage of the TransactionStatus component */}
                <div className="col-span-2 space-y-4">
                    <TransactionStatus status="pending" />
                    {/* Uncomment to see other statuses */}
                    {/* <TransactionStatus status="processing" /> */}
                    {/* <TransactionStatus status="delivering" /> */}
                    {/* <TransactionStatus status="completed" /> */}
                </div>
            </div>
        </TemplateLayoutBackoffice>
    );
}
