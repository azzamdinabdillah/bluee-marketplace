import { type CartItemType } from "@src/components/CartItemProduct";
import StoreIcon from "@src/components/icons/StoreIcon";
import ProductDetailsCard from "@src/components/ProductDetailsCard";

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
      <h2 className="text-black-color font-lexend text-xl leading-[1.25em] font-bold">
        Your Cart
      </h2>

      <div className="flex flex-col gap-4">
        {stores.map((store, storeIndex) => (
          <div key={storeIndex} className="flex flex-col gap-4">
            {/* Header Toko */}
            <div className="flex items-center gap-1">
              <StoreIcon className="text-sec-color h-4 w-4" />
              <span className="text-sec-color font-lexend text-base leading-[1.25em] font-semibold">
                {store.storeName}
              </span>
            </div>

            {/* Daftar Item */}
            <div className="flex flex-col gap-5">
              {store.items.map((item, itemIndex) => (
                <ProductDetailsCard
                  key={itemIndex}
                  image={
                    typeof item.image === "string"
                      ? item.image
                      : item.image?.[0] || ""
                  }
                  title={item.title || ""}
                  category={item.category || ""}
                  weight={item.weight || ""}
                  price={parseInt(item.price?.replace(/[^0-9]/g, "") || "0")}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
