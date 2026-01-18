import DetailsBoxList from "@src/components/backoffice/DetailsBoxList";
import Phone from "/icons/call.svg";

interface DetailItem {
    icon: string;
    value: string | number;
    label: string;
}

interface TransactionDetailsCustomerProps {
    name: string;
    image: string;
    phoneNumber: number | string;
    details: DetailItem[];
}

export default function TransactionDetailsCustomer({
    name,
    image,
    details,
    phoneNumber
}: TransactionDetailsCustomerProps) {
    return (
        <div className="flex w-full flex-col gap-3 rounded-[20px] bg-white p-3 md:gap-4 md:p-4 lg:gap-5 lg:p-5">
            <h3 className="font-lexend text-black-color font-bold text-responsive-20">
                Customer Details
            </h3>

            {/* Custom Top Section */}
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
                <div className="h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full md:h-[76px] md:w-[76px] lg:h-[92px] lg:w-[92px]">
                    <img
                        src={image}
                        alt="Customer"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-0.5 md:gap-1 lg:gap-1.5">
                    <h4 className="font-lexend text-black-color font-bold text-responsive-20">
                        {name}
                    </h4>
                    <div className="font-lexend flex gap-1 items-center text-sec-color text-responsive-18 font-semibold">
                        <img src={Phone} alt="" className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                        {phoneNumber}
                    </div>
                </div>
            </div>

            <DetailsBoxList items={details} />
        </div>
    );
}
