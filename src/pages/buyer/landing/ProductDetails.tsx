import Breadcrumb from "@src/components/Breadcrumb";
import store1 from "/images/store.png";
import Navbar from "@src/components/sections/buyer/landing/home/Navbar";
import Footer from "@src/components/Footer";
import promo1 from "/images/promo-1.png";
import promo2 from "/images/promo-2.png";
import ProductGallery from "@src/components/sections/buyer/landing/product-details/ProductGallery";
import StoreCard from "@src/components/sections/buyer/landing/product-details/StoreCard";
import ProductAbout from "@src/components/sections/buyer/landing/product-details/ProductAbout";
import ProductTestimony from "@src/components/sections/buyer/landing/product-details/ProductTestimony";

export default function ProductDetails() {
    const productDescription = `The MacBook Pro 13-inch with the M2 chip delivers incredible speed, long battery life, and a brilliant Retina display—all in a sleek, compact design.

Key Specs:
Chip: Apple M2 (8-core CPU, 10-core GPU)
RAM: 8GB (upgradable)
Storage: 256GB SSD (up to 2TB)
Display: 13.3” Retina, 2560 x 1600 resolution
Battery Life: Up to 20 hours
Ports: 2x Thunderbolt / USB 4, 3.5mm headphone jack
Camera: 720p FaceTime HD
Keyboard: Backlit with Touch ID
OS: macOS`;

    const testimonials = [
        {
            name: "Bryan Utami",
            time: "3 Days Ago",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.",
            avatar: "https://placehold.co/64x64",
            rating: 5
        },
        {
            name: "Kintan Saff",
            time: "3 Days Ago",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.",
            avatar: "https://placehold.co/64x64",
            rating: 5
        },
        {
            name: "Rudi Hermawan",
            time: "5 Days Ago",
            review: "Great product, really love the quality!",
            avatar: "https://placehold.co/64x64",
            rating: 4
        }
    ];

    return (
        <div>
            <Navbar />

            <div className="mt-[130px] md:mt-[105px] lg:mt-[121px]">
                <Breadcrumb items={[{ label: "Homepage", href: "/" }, { label: "Gadged", href: "/browse-category-product/gadged" }, { label: "Product Details" }]} />

                <div className="mx-4 my-4 flex max-w-1176 flex-col gap-6 md:mx-8 md:my-8 md:gap-10 lg:mx-[52px] lg:gap-[100px]">
                    <div className="grid lg:grid-cols-2 gap-[20px]">
                        <div className="flex flex-col gap-8 md:gap-11 lg:gap-[52px] min-w-0">
                            <ProductGallery />

                            <StoreCard
                                name="Bimore Gadget Universe"
                                logo={store1}
                                productCount="1,294"
                                href="#"
                            />

                            <ProductAbout content={productDescription} />

                            <div className="grid grid-cols-2 gap-1.5 md:gap-[20px]">
                                <img src={promo1} alt="Promo image 1" className="rounded-xl md:rounded-3xl" />
                                <img src={promo2} alt="Promo image 2" className="rounded-xl md:rounded-3xl" />
                            </div>

                            <ProductTestimony testimonials={testimonials} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
}
