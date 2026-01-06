import Button from "@src/components/Button";
import ProductCard from "@src/components/ProductCard";
import arrowDownWhite from "/icons/arrow-down-white.svg";
import { PRODUCTS } from "@src/datas/Products";

export default function BrowseCategoryJustRelease() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-9">
      <h3 className="text-black-color w-full text-xl font-bold md:text-2xl lg:text-[32px]">
        Sedang Popular 🔥{" "}
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {PRODUCTS.slice(8, 12).map((product) => (
          <ProductCard
            id={product.id}
            store={product.store}
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
