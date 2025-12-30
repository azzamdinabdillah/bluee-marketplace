import { Link } from "react-router-dom";
import Button from "../../../../Button";
import ProductCard from "../../../../ProductCard";
import TitleSection from "../../../../TitleSection";
import arrowRight from "/icons/arrow-right.svg";
import type { ProductType } from "@src/types/ProductType";

interface ProductRecomendationProps {
  products: ProductType[];
  title: string;
}

export default function ProductRecomendation({
  products,
  title,
}: ProductRecomendationProps) {
  return (
    <div className="flex flex-col gap-6 md:gap-9">
      <TitleSection title={title}>
        <Button icon={arrowRight}>VIEW ALL</Button>
      </TitleSection>

      <div className="scrollbar-hide w-full overflow-x-auto pb-4">
        <div className="product-container grid min-w-[880px] grid-cols-4 gap-4 md:min-w-[1160px] md:gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product-details/${product.id}`}>
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                sold={product.sold}
                tag={product.tag}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
