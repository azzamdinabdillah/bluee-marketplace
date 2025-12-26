import Button from "../Button";
import ProductCard from "../ProductCard";
import TitleSection from "../TitleSection";
import arrowRight from "/icons/arrow-right.svg";

const PRODUCTS = [
    {
        id: 1,
        image: "/images/product-1.png",
        title: "SonicWhirl Wireless Headphone",
        price: "Rp 3.500.500",
        sold: "120 Sold",
        tag: "Gadget",
    },
    {
        id: 2,
        image: "/images/product-2.png",
        title: "LuminaSmart Home Hub",
        price: "Rp 1.250.000",
        sold: "85 Sold",
        tag: "Home",
    },
    {
        id: 3,
        image: "/images/product-3.png",
        title: "X-Pro Mechanical Keyboard",
        price: "Rp 850.000",
        sold: "340 Sold",
        tag: "Gaming",
    },
    {
        id: 4,
        image: "/images/product-4.png",
        title: "UltraView 4K Monitor",
        price: "Rp 4.500.000",
        sold: "65 Sold",
        tag: "Electronics",
    },
    {
        id: 5,
        image: "/images/product-5.png",
        title: "ErgoLift Office Chair",
        price: "Rp 2.800.000",
        sold: "210 Sold",
        tag: "Furniture",
    },
    {
        id: 6,
        image: "/images/product-6.png",
        title: "PixelClear Webcam 1080p",
        price: "Rp 650.000",
        sold: "500+ Sold",
        tag: "Accessories",
    },
    {
        id: 7,
        image: "/images/product-7.png",
        title: "SoundBlast Bluetooth Speaker",
        price: "Rp 450.000",
        sold: "1.2k Sold",
        tag: "Audio",
    },
    {
        id: 8,
        image: "/images/product-8.png",
        title: "PowerMax Power Bank 20000mAh",
        price: "Rp 350.000",
        sold: "2k+ Sold",
        tag: "Gadget",
    },
];

export default function ProductRecomendation() {
    return (
        <div className="flex flex-col gap-6 md:gap-9">
            <TitleSection title="Shop Quality Picks from Top Sellers">
                <Button icon={arrowRight}>VIEW ALL</Button>
            </TitleSection>

            <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
                <div className="product-container grid grid-cols-4 gap-4 md:gap-6 min-w-[880px] md:min-w-[1160px]">
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
            </div>
        </div>
    );
}
