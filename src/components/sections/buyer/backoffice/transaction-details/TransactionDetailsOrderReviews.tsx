import DetailsBoxList from "@src/components/backoffice/DetailsBoxList";

interface DetailItem {
    icon: string;
    value: string | number;
    label: string;
}

interface TransactionDetailsOrderReviewsProps {
    details: DetailItem[];
    brandImage: string;
    storeName: string;
    userImage: string;
    userName: string;
}

export default function TransactionDetailsOrderReviews({
    details,
    brandImage,
    storeName,
    userImage,
    userName,
}: TransactionDetailsOrderReviewsProps) {
    return (
        <div className="flex w-full flex-col gap-3 rounded-[20px] bg-white p-3 md:gap-4 md:p-4 lg:gap-5 lg:p-5">
            {/* Header */}
            <h3 className="font-lexend text-black-color font-bold text-responsive-20">
                Order Reviews
            </h3>

            {/* Product Info */}
            <div className="flex items-center gap-3 md:gap-[14px]">
                {/* Product Image */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F3F3F3] md:h-20 md:w-20 lg:h-[92px] lg:w-[92px]">
                    <img
                        src={brandImage}
                        alt="Brand"
                        className="size-[45%] object-contain"
                    />
                </div>

                <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
                    <h4 className="font-lexend text-black-color text-base font-bold md:text-xl lg:text-[22px]">
                        {storeName}
                    </h4>
                    <div className="flex items-center gap-1">
                        <img
                            src={userImage}
                            alt="User"
                            className="size-5 md:size-6"
                        />
                        <span className="font-lexend text-sec-color font-semibold text-base md:text-lg">
                            {userName}
                        </span>
                    </div>
                </div>
            </div>

            {/* Details Box */}
            <DetailsBoxList items={details} />
        </div>
    );
}
