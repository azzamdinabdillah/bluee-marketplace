import Button from '../Button';
import calendarIcon from '/icons/calendar-2.svg';
import boxIcon from '/icons/box.svg';
import shoppingCartIcon from '/icons/shopping-cart.svg';
import moneyIcon from '/icons/money.svg';
import exportIcon from '/icons/receive-square.svg';
import detailsIcon from '/icons/eye.svg';

interface TransactionCardProps {
    storeName: string;
    date: string;
    totalProducts: number | string;
    totalQuantity: number | string;
    grandTotal: string;
    imageUrl?: string;
    onExport?: () => void;
    onDetails?: () => void;
}

export default function TransactionCard({
    storeName,
    date,
    totalProducts,
    totalQuantity,
    grandTotal,
    imageUrl,
    onExport,
    onDetails
}: TransactionCardProps) {
    return (
        <div className="flex flex-col gap-4 md:gap-5 p-4 md:p-[18px_20px] bg-white rounded-2xl md:rounded-[20px] border border-stroke-color w-full">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-5 w-full">
                {/* Image & Info */}
                <div className="flex flex-row items-center gap-[14px] w-full lg:w-[300px] shrink-0">
                    <img
                        src={imageUrl}
                        alt={storeName}
                        className="w-[70px] h-[70px] md:w-[84px] md:h-[84px] rounded-2xl md:rounded-[20px] object-cover bg-gray-100 shrink-0"
                    />
                    <div className="flex flex-col gap-1 md:gap-[6px]">
                        <h3 className="font-lexend font-bold text-base md:text-lg text-black-color line-clamp-1">{storeName}</h3>
                        <div className="flex flex-row items-center gap-1">
                            <img src={calendarIcon} alt="Date" className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="font-lexend font-semibold text-sm md:text-base text-sec-color">{date}</span>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex flex-col md:flex-row w-full gap-4 md:gap-5">
                    {/* Total Products */}
                    <div className="flex flex-row items-center gap-[10px] flex-1 p-3 md:p-0 bg-gray-50 md:bg-transparent rounded-xl md:rounded-none">
                        <div className="p-3 md:p-4 bg-gray-100 rounded-full md:rounded-[47px] shrink-0">
                            <img src={boxIcon} alt="Products" className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="flex flex-col gap-0.5 md:gap-1">
                            <span className="font-lexend font-bold text-base md:text-lg text-black-color">{totalProducts}</span>
                            <span className="font-lexend font-semibold text-sm md:text-base text-sec-color">Total Products</span>
                        </div>
                    </div>

                    {/* Total Quantity */}
                    <div className="flex flex-row items-center gap-[10px] flex-1 p-3 md:p-0 bg-gray-50 md:bg-transparent rounded-xl md:rounded-none">
                        <div className="p-3 md:p-4 bg-gray-100 rounded-full md:rounded-[47px] shrink-0">
                            <img src={shoppingCartIcon} alt="Quantity" className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="flex flex-col gap-0.5 md:gap-1">
                            <span className="font-lexend font-bold text-base md:text-lg text-black-color">{totalQuantity}</span>
                            <span className="font-lexend font-semibold text-sm md:text-base text-sec-color">Total Quantity</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-stroke-color w-full"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-5 w-full">
                {/* Price */}
                <div className="flex flex-col gap-1 md:gap-[6px] w-full md:w-auto">
                    <span className="font-lexend font-bold text-lg md:text-xl text-primary-color">{grandTotal}</span>
                    <div className="flex flex-row items-center gap-[6px]">
                        <img src={moneyIcon} alt="Total" className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="font-lexend font-semibold text-sm md:text-base text-sec-color">Grand Total</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-row items-center gap-3 md:gap-[14px] w-full md:w-auto">
                    <Button
                        onClick={onExport}
                        variant="black"
                        icon={exportIcon}
                        iconPosition="right"
                        className="flex-1 md:flex-none"
                    >
                        Export
                    </Button>
                    <Button
                        onClick={onDetails}
                        variant="blue"
                        icon={detailsIcon}
                        iconPosition="left"
                        className="w-auto md:w-[126px] flex-1 md:flex-none"
                    >
                        Details
                    </Button>
                </div>
            </div>
        </div>
    );
}
