import ProductDetailsCard from "@src/components/ProductDetailsCard";
import arrowDownIcon from "/icons/arrow-circle-down.svg";
import shoppingCartIcon from "/icons/shopping-cart-gray.svg";
import bagIcon from "/icons/bag-gray.svg";
import { useState } from "react";

export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    quantity: number;
    image: string;
}

interface ProductDetailsSectionProps {
    products: Product[];
}

export default function ProductDetailsSection({ products }: ProductDetailsSectionProps) {
    const [openProductDetails, setOpenProductDetails] = useState(false);

    return (
        <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white p-4 md:gap-5 md:p-5">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3 className="font-lexend text-black-color text-base font-bold md:text-lg lg:text-xl">
                        Product Details
                    </h3>
                    <img
                        src={arrowDownIcon}
                        alt="Toggle"
                        className={`h-6 w-6 cursor-pointer transition-transform duration-300 ${openProductDetails ? 'rotate-180' : 'rotate-0'}`}
                        onClick={() => setOpenProductDetails(!openProductDetails)}
                    />
                </div>
                <div className="flex items-center gap-1">
                    <img
                        src={shoppingCartIcon}
                        alt="Cart"
                        className="h-6 w-6"
                    />
                    <span className="font-lexend text-sec-color text-sm font-semibold md:text-base">
                        {products.length} Total Products
                    </span>
                </div>
            </div>

            <div style={{ interpolateSize: 'allow-keywords' }} className={`flex overflow-hidden flex-col transition-all duration-500 gap-4 ${openProductDetails ? 'h-auto' : 'h-0'}`}>
                {products.map((product) => (
                    <ProductDetailsCard
                        className="lg:p-4!"
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        category={product.category}
                        categoryIcon={bagIcon}
                        price={product.price}
                        quantity={product.quantity}
                    />
                ))}
            </div>
        </div>
    );
}
