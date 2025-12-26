import Button from "../Button";
import ProductCard from "../ProductCard";
import TitleSection from "../TitleSection";
import arrowRight from "/icons/arrow-right.svg";
import product1 from "/images/product-1.png";

export default function ProductRecomendation() {
  return (
    <div className="flex flex-col gap-9">
      <TitleSection title="Shop Quality Picks from Top Sellers">
        <Button icon={arrowRight}>VIEW ALL</Button>
      </TitleSection>

      <div className="product-container flex flex-wrap gap-4 md:gap-6">
        <ProductCard image={product1} />
      </div>
    </div>
  );
}