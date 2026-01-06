import CartItemProduct, { type CartItemType } from "@src/components/CartItemProduct";
import StoreIcon from "@src/components/icons/StoreIcon";

interface StoreGroup {
    storeName: string;
    items: CartItemType[];
}

interface CartItemListProps {
    stores: StoreGroup[];
}

export default function CheckoutCartItemList({ stores }: CartItemListProps) {
    return (
        <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white p-5">
            <h2 className="font-lexend text-black-color text-xl font-bold leading-[1.25em]">
                Your Cart
            </h2>

            <div className="flex flex-col gap-4">
                {stores.map((store, storeIndex) => (
                    <div key={storeIndex} className="flex flex-col gap-4">
                        {/* Header Toko */}
                        <div className="flex items-center gap-1">
                            <StoreIcon className="text-sec-color h-4 w-4" />
                            <span className="text-sec-color font-lexend text-base font-semibold leading-[1.25em]">
                                {store.storeName}
                            </span>
                        </div>

                        {/* Daftar Item */}
                        <div className="flex flex-col gap-5">
                            {store.items.map((item, itemIndex) => (
                                <CartItemProduct key={itemIndex} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
