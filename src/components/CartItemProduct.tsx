import type { ProductDetailType } from "@src/types/ProductTypes";
import { useState } from "react";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import TrashIcon from "/icons/trash-red.svg";
import ShoppingCartIcon from "/icons/shopping-cart-gray.svg";

export interface CartItemType extends Partial<ProductDetailType> {
    quantity: number;
}

export default function ChartItemProduct({ item }: { item: CartItemType }) {
    const [quantity, setQuantity] = useState(item.quantity || 1);

    return (
        <div className="border-stroke-color flex w-full flex-col gap-5 rounded-[20px] border p-5">
            {/* Top Section */}
            <div className="flex flex-col items-start gap-[14px] md:flex-row md:items-center">
                {/* Image & Info */}
                <div className="flex w-full flex-1 flex-row items-center gap-[14px]">
                    <img
                        src={item.image || "/images/lp-1.png"}
                        alt="Product"
                        className="h-[92px] w-[92px] rounded object-cover"
                    />
                    <div className="flex flex-col gap-[6px]">
                        <h4 className="text-black-color font-lexend text-lg leading-[1.25em] font-bold">
                            {item.title}
                        </h4>
                        <div className="flex flex-row items-center gap-[6px]">
                            <span className="text-primary-color font-lexend text-base leading-[1.25em] font-bold">
                                {item.category}
                            </span>
                            <span className="text-sec-color text-[22px] leading-[1.21em]">
                                •
                            </span>
                            <span className="text-sec-color font-lexend text-base leading-[1.25em] font-semibold">
                                {item.weight}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Quantity Control */}
                <div className="border-stroke-color flex items-center gap-4 rounded-2xl border p-4">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-black-color flex h-5 w-5 cursor-pointer items-center justify-center hover:opacity-70"
                    >
                        <MinusIcon />
                    </button>
                    <div className="bg-stroke-color h-[18px] w-px"></div>
                    <span className="text-black-color font-lexend w-[46px] text-center text-lg leading-[1.25em] font-bold">
                        {quantity}
                    </span>
                    <div className="bg-stroke-color h-[18px] w-px"></div>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-black-color flex h-5 w-5 cursor-pointer items-center justify-center hover:opacity-70"
                    >
                        <PlusIcon />
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="bg-stroke-color h-px w-full"></div>

            {/* Bottom Section */}
            <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                <div className="flex w-full flex-col gap-[6px] md:w-auto">
                    <div className="flex items-center gap-1">
                        <img src={ShoppingCartIcon} alt="" />
                        <span className="text-sec-color font-lexend text-base leading-[1.25em] font-semibold">
                            Subtotal
                        </span>
                    </div>
                    <span className="text-primary-color font-lexend text-lg leading-[1.25em] font-bold">
                        {item.price}
                    </span>
                </div>

                <button className="flex w-full cursor-pointer items-center justify-center gap-[6px] rounded-[13px] bg-[rgba(255,19,61,0.09)] px-4 py-[14px] transition-colors hover:bg-[rgba(255,19,61,0.15)] md:w-auto">
                    <img src={TrashIcon} alt="" />
                    <span className="font-lexend text-red-color text-base leading-[1.25em] font-semibold">
                        Remove
                    </span>
                </button>
            </div>
        </div>
    );
};