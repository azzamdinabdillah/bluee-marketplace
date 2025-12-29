import type { ProductCardProps } from "../../../../../types/ProductType";
import Button from "../../../../Button";
import ProductCard from "../../../../ProductCard";
import hp1 from "/images/hp-1.png";
import hp2 from "/images/hp-2.png";
import hp3 from "/images/hp-3.png";
import hp4 from "/images/hp-4.png";
import hp5 from "/images/hp-5.png";
import hp6 from "/images/hp-6.png";
import hp7 from "/images/hp-7.png";
import hp8 from "/images/hp-8.png";
import arrowDownWhite from "/icons/arrow-down-white.svg";

const PRODUCTS: ProductCardProps[] = [
  {
    id: 1,
    image: hp1,
    title: "Smartphone Galaxy A54 5G",
    price: "Rp 6.399.000",
    sold: "150 Sold",
    tag: "Gadget",
  },
  {
    id: 2,
    image: hp2,
    title: "iPhone 13 Pro Max",
    price: "Rp 18.999.000",
    sold: "80 Sold",
    tag: "Gadget",
  },
  {
    id: 3,
    image: hp3,
    title: "Xiaomi Redmi Note 12",
    price: "Rp 2.599.000",
    sold: "300 Sold",
    tag: "Gadget",
  },
  {
    id: 4,
    image: hp4,
    title: "Oppo Reno 8T 5G",
    price: "Rp 5.999.000",
    sold: "120 Sold",
    tag: "Gadget",
  },
  {
    id: 5,
    image: hp5,
    title: "Samsung Galaxy S23 Ultra",
    price: "Rp 19.999.000",
    sold: "50 Sold",
    tag: "Gadget",
  },
  {
    id: 6,
    image: hp6,
    title: "Vivo V27 5G",
    price: "Rp 5.999.000",
    sold: "90 Sold",
    tag: "Gadget",
  },
  {
    id: 7,
    image: hp7,
    title: "Realme 10 Pro+ 5G",
    price: "Rp 5.999.000",
    sold: "110 Sold",
    tag: "Gadget",
  },
  {
    id: 8,
    image: hp8,
    title: "Infinix Zero 5G 2023",
    price: "Rp 3.699.000",
    sold: "200 Sold",
    tag: "Gadget",
  },
];

export default function Popular() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-9">
      <h3 className="text-black-color w-full text-xl font-bold md:text-2xl lg:text-[32px]">
        Sedang Popular 🔥{" "}
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            sold={product.sold}
            tag={product.tag}
          />
        ))}
      </div>

      <Button className="mx-auto w-fit" variant="black" icon={arrowDownWhite}>
        Load More
      </Button>
    </div>
  );
}
