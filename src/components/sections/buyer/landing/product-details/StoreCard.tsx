import verify from "/icons/verify-blue.svg";
import box from "/icons/box.svg";
import { Link } from "react-router-dom";

interface StoreCardProps {
    name: string;
    logo: string;
    productCount: string;
    href: string;
}

export default function StoreCard({ name, logo, productCount, href }: StoreCardProps) {
    return (
        <div className="border-stroke-color flex w-full flex-col gap-4 rounded-3xl border bg-white p-4 md:flex-row md:p-5 justify-center md:justify-start items-center">
            <div className="bg-[#4e35b30d] flex items-center justify-center rounded-full p-6 size-[72px] md:size-[86px]">
                <img src={logo} alt="Store Logo" />
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
                <Link to={href} className="flex items-center gap-1.5">
                    <h3 className="text-lg text-center md:text-left font-bold leading-[1.6] text-black">{name}</h3>
                    <img src={verify} alt="" className="size-6" />
                </Link>
                <div className="flex items-center justify-center md:justify-start gap-1.5">
                    <img src={box} alt="" className="size-6" />
                    <span className="text-sec-color text-base font-semibold leading-tight">{productCount} Total Products</span>
                </div>
            </div>
            <Link to={href} className="text-primary-color text-lg font-semibold leading-tight hover:underline lg:hidden xl:block">Visit Store</Link>
        </div>
    );
}
