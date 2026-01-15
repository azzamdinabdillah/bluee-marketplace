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
    details: DetailItem[];
}

export default function TransactionDetailsCustomer({
    name,
    image,
    details,
}: TransactionDetailsCustomerProps) {
    return (
        <div className="flex w-full flex-col gap-3 rounded-[20px] bg-white p-3 md:gap-4 md:p-4 lg:gap-5 lg:p-5">
            <h3 className="font-lexend text-black-color text-base font-bold md:text-lg lg:text-xl">
                Customer Details
            </h3>

            {/* Custom Top Section */}
            <div className="flex items-center gap-3 md:gap-[14px]">
                <div className="h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full md:h-[80px] md:w-[80px] lg:h-[92px] lg:w-[92px]">
                    <img
                        src={image}
                        alt="Customer"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-1 md:gap-[6px]">
                    <h4 className="font-lexend text-black-color text-lg font-bold md:text-xl">
                        {name}
                    </h4>
                    <div className="font-lexend flex gap-1 items-center text-sec-color text-sm font-semibold md:text-base lg:text-[18px]">
                        <img src={Phone} alt="" />
                        Customer
                    </div>
                </div>
            </div>

            <DetailsBoxList items={details} />
        </div>
    );
}
