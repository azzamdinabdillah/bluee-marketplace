import type { ProductType } from "@src/types/ProductTypes";

export const cartItems: { storeName: string; items: ProductType[] }[] = [
  {
    storeName: "Bimore Gadget Universe",
    items: [
      {
        id: 1,
        title: "Macbook Pro M2",
        category: "Gadget",
        weight: "3 KG",
        quantity: 5,
        price: "Rp18.520.000",
        image: "/images/lp-1.png",
      },
      {
        id: 2,
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
        id: 3,
        title: "iPhone 16 Pro Max Gold",
        category: "Gadget",
        weight: "3 KG",
        quantity: 5,
        price: "Rp18.520.000",
        image: "/images/hp-1.png",
      },
      {
        id: 4,
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