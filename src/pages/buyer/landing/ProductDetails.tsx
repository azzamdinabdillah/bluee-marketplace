import Breadcrumb from "@src/components/Breadcrumb";
import store1 from "/images/store.png";
import Navbar from "@src/components/sections/buyer/landing/home/Navbar";
import Footer from "@src/components/Footer";
import promo1 from "/images/promo-1.png";
import promo2 from "/images/promo-2.png";
import user from "/images/user.png";
import user2 from "/images/user-2.png";
import user3 from "/images/user-3.png";
import ProductGallery from "@src/components/sections/buyer/landing/product-details/ProductGallery";
import StoreCard from "@src/components/sections/buyer/landing/product-details/StoreCard";
import ProductAbout from "@src/components/sections/buyer/landing/product-details/ProductAbout";
import ProductTestimony from "@src/components/sections/buyer/landing/product-details/ProductTestimony";
import ProductActionCard from "@src/components/sections/buyer/landing/product-details/ProductActionCard";

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
            review: "The M2 chip is blazing fast! I can edit 4K videos without any lag. Battery easily lasts me through a full workday plus Netflix at night.",
            avatar: user,
            rating: 5
        },
        {
            name: "Kintan Saff",
            time: "3 Days Ago",
            review: "Upgraded from an Intel MacBook and the difference is night and day. It stays cool, silent, and handles everything I throw at it. Worth every rupiah!",
            avatar: user2,
            rating: 5
        },
        {
            name: "Rudi Hermawan",
            time: "5 Days Ago",
            review: "Great build quality and the Retina display is gorgeous. Only wish it had more ports, but the performance makes up for it. macOS runs like a dream.",
            avatar: user3,
            rating: 4
        }
    ];

    const productDetails = {
        title: "Macbook Pro M2",
        category: "Laptop",
        rating: 4.5,
        reviewCount: 249,
        price: "Rp 90.602.500",
        condition: "New Item",
        weight: "3 KG",
        warranty: "24 Month",
        orderStatus: "Ready to Ship",
        soldCount: 120
    };

    return (
        <div>
            <Navbar />

            <div className="mt-[130px] md:mt-[105px] lg:mt-[121px]">
                <Breadcrumb items={[{ label: "Homepage", href: "/" }, { label: "Gadged", href: "/browse-category-product/gadged" }, { label: "Product Details" }]} />

                <div className="mx-4 my-4 flex max-w-1176 flex-col gap-6 md:mx-8 md:my-8 md:gap-10 lg:mx-[52px] lg:gap-[100px]">
                    <div className="grid lg:grid-cols-2 gap-[20px] md:gap-14 lg:gap-[72px] relative items-start">
                        <div className="flex flex-col gap-8 md:gap-11 lg:gap-[52px] min-w-0">
                            <ProductGallery />

                            <div className="lg:hidden">
                                <ProductActionCard {...productDetails} />
                            </div>

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

                        <div className="hidden lg:block sticky top-5 left-0">
                            <ProductActionCard {...productDetails} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
