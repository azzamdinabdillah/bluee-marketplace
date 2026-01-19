import StatCard from "@src/components/backoffice/StatCard";
import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import walletIcon from "/icons/shopping-cart-blue.svg";
import presentationChartIcon from "/icons/presention-chart.svg";
import Pagination from "@src/components/backoffice/Pagination";
import Button from "@src/components/Button";
import InputBasic from "@src/components/InputBasic";
import searchIcon from "/icons/receipt-search.svg";
import arrowDownIcon from "/icons/arrow-down.svg";
import stickyNoteIcon from "/icons/stickynote.svg";
import boxIcon from '/icons/box-black.svg';
import statusUpIcon from '/icons/status-up.svg';
import calendarIcon from '/icons/calendar-2.svg';
import trashIcon from '/icons/trash-red.svg';
import editIcon from '/icons/edit.svg';
import eyeIcon from '/icons/eye.svg';
import addCircleIcon from '/icons/add-circle.svg';
import lp1 from '/images/lp-1.png';
import lp2 from '/images/lp-2.png';
import hp1 from '/images/hp-1.png';
import { type ProductType } from "@src/types/ProductTypes";

const products: ProductType[] = [
    {
        id: 1,
        title: "Macbook Pro M2",
        category: "Gadget",
        subCategory: "Laptop",
        sold: 500,
        quantity: 5760,
        createdAt: "19/02/2020",
        image: lp1,
        price: 18999000
    },
    {
        id: 2,
        title: "Leather Backpack",
        category: "Fashion",
        subCategory: "Backpack",
        sold: 500,
        quantity: 5760,
        createdAt: "19/02/2020",
        image: lp2,
        price: 500000
    },
    {
        id: 3,
        title: "Headphone White",
        category: "Gadget",
        subCategory: "Audio",
        sold: 500,
        quantity: 5760,
        createdAt: "19/02/2020",
        image: hp1,
        price: 1500000
    }
];

export default function MyProducts() {
    return (
        <TemplateLayoutBackoffice
            role="seller"
            title="Manage My Products"
            subtitle="View and Update Your Products"
        >
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <StatCard
                    iconSrc={walletIcon}
                    value="16.200"
                    label="Total Products"
                />
                <StatCard
                    iconSrc={presentationChartIcon}
                    value="3.200"
                    label="Total Sold"
                />
            </div>

            <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 md:gap-5 md:rounded-[20px] md:p-5 lg:gap-6 lg:p-6">
                {/* Title & Badge */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-lexend text-responsive-20 text-black-color font-bold">
                            All Transactions
                        </h2>
                        <div className="flex flex-row items-center gap-1">
                            <img
                                src={stickyNoteIcon}
                                alt="Total"
                                className="size-4 md:size-5"
                            />
                            <span className="font-lexend text-responsive-16 text-sec-color font-semibold">
                                {products.length} Total Transactions
                            </span>
                        </div>
                    </div>

                    <Button to="/backoffice-seller/my-products/create" variant="blue" className="rounded-full!" icon={addCircleIcon}>
                        Add New
                    </Button>
                </div>

                {/* Controls (Search & Filter) */}
                <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    {/* Search Bar */}
                    <InputBasic
                        containerClassName="w-full md:w-[320px] lg:w-[400px]"
                        placeholder="Search transaction"
                        Icon={searchIcon}
                        className="rounded-2xl md:py-4 md:pr-4"
                    />

                    {/* Filter Show Entries */}
                    <div className="flex w-full flex-row items-center justify-between gap-3 md:w-auto md:justify-end">
                        <span className="font-lexend text-sec-color text-responsive-16 font-medium whitespace-nowrap">
                            Show
                        </span>
                        <div className="relative min-w-[120px] md:min-w-[140px]">
                            <select className="border-stroke-color font-lexend text-black-color focus:border-primary-color text-responsive-16 w-full cursor-pointer appearance-none rounded-2xl border bg-transparent py-2.5 pr-10 pl-4 font-semibold focus:outline-none md:py-3">
                                <option value="4">4 Entries</option>
                                <option value="10">10 Entries</option>
                                <option value="25">25 Entries</option>
                            </select>
                            <img
                                src={arrowDownIcon}
                                alt="Select"
                                className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 md:right-4 md:h-5 md:w-5"
                            />
                        </div>
                    </div>
                </div>

                {products.map((product) => (
                    <div key={product.id} className="flex flex-col gap-4 md:gap-5 lg:gap-6 p-4 md:p-5 lg:p-[18px_20px] bg-white rounded-2xl md:rounded-[20px] border border-stroke-color w-full">
                        <div className="flex w-full flex-col gap-4 md:gap-5 lg:gap-6">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-5 lg:gap-6 w-full">
                                {/* Image & Info */}
                                <div className="flex flex-row items-center gap-3 md:gap-[14px] w-full lg:w-[300px] shrink-0">
                                    <img
                                        src={Array.isArray(product.image) ? product.image[0] : product.image}
                                        className="size-[60px] md:size-[70px] lg:size-[84px] rounded-2xl md:rounded-[20px] p-3 object-cover bg-gray-100 shrink-0"
                                        alt={product.title}
                                    />
                                    <div className="flex flex-col gap-1 md:gap-[6px]">
                                        <h3 className="font-lexend font-bold text-responsive-18 text-black-color line-clamp-1">{product.title}</h3>
                                        <div className="flex flex-row items-center gap-1">
                                            <div className="text-responsive-16 font-semibold text-sec-color flex gap-2 items-center">
                                                <span className="text-primary-color font-bold">{product.category}</span>

                                                <span className="size-2 rounded-full bg-sec-color"></span>

                                                {product.subCategory}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="flex flex-col md:flex-row w-full gap-3 md:gap-4 lg:gap-5">
                                    {/* Total Products */}
                                    <div className="flex flex-row items-center gap-2 md:gap-[10px] flex-1 p-3 md:p-0 bg-gray-50 md:bg-transparent rounded-xl md:rounded-none">
                                        <div className="p-2 md:p-3 lg:p-4 bg-gray-100 rounded-full md:rounded-[47px] shrink-0">
                                            <img src={statusUpIcon} alt="Products" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-lexend font-bold text-responsive-18 text-black-color">{product.sold}</span>
                                            <span className="font-lexend font-semibold text-sec-color text-responsive-16">Total Sold</span>
                                        </div>
                                    </div>

                                    {/* Total Quantity */}
                                    <div className="flex flex-row items-center gap-2 md:gap-[10px] flex-1 p-3 md:p-0 bg-gray-50 md:bg-transparent rounded-xl md:rounded-none">
                                        <div className="p-2 md:p-3 lg:p-4 bg-gray-100 rounded-full md:rounded-[47px] shrink-0">
                                            <img src={boxIcon} alt="Quantity" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-lexend font-bold text-responsive-18 text-black-color">{product.quantity?.toLocaleString('id-ID')}</span>
                                            <span className="font-lexend font-semibold text-sec-color text-responsive-16">Total Stock</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-stroke-color w-full"></div>

                            {/* Bottom Section */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-5 w-full">
                                {/* Price */}
                                <div className="flex gap-2 w-full md:w-auto">
                                    <img src={calendarIcon} alt="" className="size-5 md:size-6" />
                                    <p className="text-responsive-16 font-semibold text-sec-color">Created on {product.createdAt}</p>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-row items-center gap-3 md:gap-[14px] w-full md:w-auto flex-wrap justify-end">
                                    <Button
                                        variant="lightRed"
                                        icon={trashIcon}
                                        iconPosition="left"
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="black"
                                        icon={editIcon}
                                        iconPosition="left"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="blue"
                                        icon={eyeIcon}
                                        iconPosition="left"
                                    >
                                        Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Pagination */}
                <Pagination pages={[1, 2, 3, 5]} activePage={1} />
            </div>

        </TemplateLayoutBackoffice>
    );
}
