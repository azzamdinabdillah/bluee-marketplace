import type { CartItemType } from "@src/components/CartItemProduct";

export const cartItems: { storeName: string; items: CartItemType[] }[] = [
  {
    storeName: "Bimore Gadget Universe",
    items: [
      {
        title: "Macbook Pro M2",
        category: "Gadget",
        weight: "3 KG",
        quantity: 5,
        price: "Rp18.520.000",
        image: "/images/lp-1.png",
      },
      {
        title: "iPhone 14 Pro Blue",
        category: "Gadget",
        weight: "3 KG",
        quantity: 5,
        price: "Rp18.520.000",
        image: "/images/lp-2.png",
      },
    ],
  },
  {
    storeName: "Rafly Gadget Universe",
    items: [
      {
        title: "iPhone 16 Pro Max Gold",
        category: "Gadget",
        weight: "3 KG",
        quantity: 5,
        price: "Rp18.520.000",
        image: "/images/hp-1.png",
      },
      {
        title: "Macbook Pro M2",
        category: "Gadget",
        weight: "3 KG",
        quantity: 5,
        price: "Rp18.520.000",
        image: "/images/hp-2.png",
      },
    ],
  },
];