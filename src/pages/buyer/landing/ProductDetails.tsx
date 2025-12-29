import Breadcrumb from "@src/components/Breadcrumb";
import store1 from "/images/store.png";
import Navbar from "@src/components/sections/buyer/landing/home/Navbar";
import Footer from "@src/components/Footer";
import ProductGallery from "@src/components/sections/buyer/landing/product-details/ProductGallery";
import StoreCard from "@src/components/sections/buyer/landing/product-details/StoreCard";
import ProductAbout from "@src/components/sections/buyer/landing/product-details/ProductAbout";

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

    return (
        <div>
            <Navbar />

            <div className="mt-[130px] md:mt-[105px] lg:mt-[121px]">
                <Breadcrumb items={[{ label: "Homepage", href: "/" }, { label: "Gadged", href: "/browse-category-product/gadged" }, { label: "Product Details" }]} />

                <div className="mx-4 my-4 flex max-w-1176 flex-col gap-6 md:mx-8 md:my-8 md:gap-10 lg:mx-[52px] lg:gap-[100px]">
                    <div className="flex flex-col gap-8 md:gap-11 lg:gap-[52px]">
                        <ProductGallery />

                        <StoreCard
                            name="Bimore Gadget Universe"
                            logo={store1}
                            productCount="1,294"
                            href="#"
                        />

                        <ProductAbout content={productDescription} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
}
