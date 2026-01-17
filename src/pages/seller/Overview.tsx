import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import walletIcon from "/icons/wallet-2.svg";
import shoppingCartIcon from "/icons/shopping-cart-blue.svg";
import StatCard from "@src/components/backoffice/StatCard";
import Profile2User from "/icons/profile-2user.svg";
import callIcon from "/icons/call.svg";
import cartIcon from "/icons/shopping-cart.svg";
import userIcon from "/images/user.png";
import starIcon from "/icons/star-2.svg";
import receiptIcon from "/icons/stickynote-blue.svg";
import Button from "@src/components/Button";

const transactions = [
    {
        id: 1,
        name: "Uciha Shayna",
        phone: "081255553005",
        amount: "Rp 384.000",
        products: 12,
    },
    {
        id: 2,
        name: "Masayoshi Mazdo",
        phone: "081255553005",
        amount: "Rp 384.000",
        products: 12,
    },
    {
        id: 3,
        name: "Rafly Ackerman",
        phone: "081255553005",
        amount: "Rp 384.000",
        products: 12,
    },
];

const reviews = [
    {
        id: 1,
        name: "Echa Marica",
        phone: "081255553005",
        content: "The iPhone is super fast and the camera is amazing!",
        rating: 5,
    },
    {
        id: 2,
        name: "Souma Yeager",
        phone: "081255553005",
        content: "Great service and fast delivery. Highly recommended.",
        rating: 5,
    },
    {
        id: 3,
        name: "Rafly Ackerman",
        phone: "081255553005",
        content: "Great service and fast delivery. Highly recommended.",
        rating: 5,
    },
];

export default function Overview() {
    return (
        <TemplateLayoutBackoffice title="Dashboard Overviews" subtitle="View Your Dashboard">
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-2 xl:grid-cols-[40fr_30fr_30fr]">
                <StatCard
                    iconSrc={walletIcon}
                    value="Rp 920.650.320"
                    label="Total Revenue"
                />
                <StatCard
                    iconSrc={shoppingCartIcon}
                    value="16.200"
                    label="Total Products"
                />
                <StatCard
                    iconSrc={Profile2User}
                    value="3.200"
                    label="Total Buyers"
                />
            </div>

            <div className="grid gap-3 md:gap-5 lg:grid-cols-2 items-start">
                <StatCard
                    iconSrc={receiptIcon}
                    value="3.200"
                    label="Total Transaction"
                >
                    <h3 className="text-base font-bold text-black-color md:text-xl">
                        Latest Transactions
                    </h3>

                    <div className="flex flex-col gap-4">
                        {transactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="flex flex-col gap-4 rounded-2xl border border-stroke-color p-4 md:gap-5 md:rounded-[20px] md:p-5 lg:gap-6"
                            >
                                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                                    <div className="flex items-center gap-2.5 md:gap-3 lg:gap-4">
                                        <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 md:h-14 md:w-14 lg:h-16 lg:w-16">
                                            <img
                                                src={userIcon}
                                                alt={transaction.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1 md:gap-1.5">
                                            <h4 className="text-base font-bold text-black-color md:text-[17px] lg:text-lg">
                                                {transaction.name}
                                            </h4>
                                            <div className="flex items-center gap-1 md:gap-1.5">
                                                <img
                                                    src={callIcon}
                                                    alt="phone"
                                                    className="h-4 w-4 md:h-[18px] md:w-[18px] lg:h-5 lg:w-5"
                                                />
                                                <span className="text-sm font-semibold text-sec-color md:text-[15px] lg:text-base">
                                                    {transaction.phone}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-0.5 md:gap-1">
                                        <span className="text-base font-bold text-[#1053D5] md:text-[17px] lg:text-lg">
                                            {transaction.amount}
                                        </span>
                                        <span className="text-sm font-semibold text-sec-color md:text-[15px] lg:text-base">
                                            Grand Total
                                        </span>
                                    </div>
                                </div>

                                <div className="h-px w-full bg-[#E8E8E8]" />

                                <div className="flex items-center justify-between gap-5">
                                    <div className="flex items-center gap-2.5 md:gap-3 lg:gap-4">
                                        <div className="flex items-center justify-center rounded-[47px] bg-[#F3F3F3] p-3 md:p-3.5 lg:p-4">
                                            <img
                                                src={cartIcon}
                                                alt="products"
                                                className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-0.5 md:gap-1">
                                            <span className="text-base font-bold text-black-color md:text-[17px] lg:text-lg">
                                                {transaction.products}
                                            </span>
                                            <span className="text-sm font-semibold text-sec-color md:text-[15px] lg:text-base">
                                                Total Products
                                            </span>
                                        </div>
                                    </div>
                                    <Button
                                        variant="lightBlue"
                                        className="px-4 py-2 text-sm font-semibold md:px-5 md:py-2.5 md:text-[15px] lg:px-6 lg:py-3 lg:text-base"
                                    >
                                        Details
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </StatCard>

                <StatCard
                    iconSrc={receiptIcon}
                    value="3.200"
                    label="Total Transaction"
                >
                    <h3 className="text-base font-bold text-black-color md:text-xl">
                        Latest Reviews
                    </h3>

                    <div className="flex flex-col gap-4">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="flex flex-col gap-4 rounded-2xl border border-stroke-color p-4 md:gap-5 md:rounded-[20px] md:p-5 lg:gap-6"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2.5 md:gap-3 lg:gap-4">
                                        <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 md:h-14 md:w-14 lg:h-16 lg:w-16">
                                            <img
                                                src={userIcon}
                                                alt={review.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1 md:gap-1.5">
                                            <h4 className="text-base font-bold text-black-color md:text-[17px] lg:text-lg">
                                                {review.name}
                                            </h4>
                                            <div className="flex items-center gap-1 md:gap-1.5">
                                                <img
                                                    src={callIcon}
                                                    alt="phone"
                                                    className="h-4 w-4 md:h-[18px] md:w-[18px] lg:h-5 lg:w-5"
                                                />
                                                <span className="text-sm font-semibold text-sec-color md:text-[15px] lg:text-base">
                                                    {review.phone}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px w-full bg-[#E8E8E8]" />
                                    
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-medium text-sec-color leading-relaxed md:text-[15px] lg:text-base">
                                            {review.content}
                                        </p>
                                        <div className="flex items-center gap-1">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <img
                                                    key={i}
                                                    src={starIcon}
                                                    alt="star"
                                                    className="h-4 w-4 md:h-5 md:w-5"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </StatCard>
            </div>
        </TemplateLayoutBackoffice>
    );
}