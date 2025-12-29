import type { ProductCardProps } from "../../../../../types/ProductType";
import Button from "../../../../Button";
import ProductCard from "../../../../ProductCard";
import lp1 from "/images/lp-1.png";
import lp2 from "/images/lp-2.png";
import hp3 from "/images/hp-3.png";
import hp4 from "/images/hp-4.png";
import arrowDownWhite from "/icons/arrow-down-white.svg";

const PRODUCTS: ProductCardProps[] = [
  {
    id: 1,
    image: lp1,
    title: "Airpods Gen Z 2025",
    price: "Rp 6.399.000",
    sold: "150 Sold",
    tag: "Gadget",
  },
  {
    id: 2,
    image: lp2,
    title: "Macbook Pro M2",
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
];

export default function JustRelease() {
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
