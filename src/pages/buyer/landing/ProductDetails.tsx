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
import ProductRecomendation from "@src/components/sections/buyer/landing/home/ProductRecomendation";
import type { ProductType } from "@src/types/ProductType";
import lp1 from "/images/lp-2.png";
import lp2 from "/images/lp-1-2.png";
import lp3 from "/images/lp-1-3.png";
import lp4 from "/images/lp-1-4.png";

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
      review:
        "The M2 chip is blazing fast! I can edit 4K videos without any lag. Battery easily lasts me through a full workday plus Netflix at night.",
      avatar: user,
      rating: 5,
      images: [
        "https://picsum.photos/seed/501/200/200",
        "https://picsum.photos/seed/502/200/200",
      ],
    },
    {
      name: "Kintan Saff",
      time: "3 Days Ago",
      review:
        "Upgraded from an Intel MacBook and the difference is night and day. It stays cool, silent, and handles everything I throw at it. Worth every rupiah!",
      avatar: user2,
      rating: 5,
      images: ["https://picsum.photos/seed/601/200/200"],
    },
    {
      name: "Rudi Hermawan",
      time: "5 Days Ago",
      review:
        "Great build quality and the Retina display is gorgeous. Only wish it had more ports, but the performance makes up for it. macOS runs like a dream.",
      avatar: user3,
      rating: 4,
    },
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
    soldCount: 120,
  };

  const PRODUCTS: ProductType[] = [
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
    }
  ];

  return (
    <div>
      <Navbar />

      <div className="mt-[130px] md:mt-[105px] lg:mt-[121px]">
        <Breadcrumb
          items={[
            { label: "Homepage", href: "/" },
            { label: "Gadged", href: "/browse-category-product/gadged" },
            { label: "Product Details" },
          ]}
        />

        <div className="mx-4 my-4 flex max-w-1176 flex-col gap-6 md:mx-8 md:my-8 md:gap-10 lg:mx-[52px] lg:gap-[100px]">
          <div className="relative grid items-start gap-[20px] md:gap-14 lg:grid-cols-2 lg:gap-8 xl:gap-[72px]">
            <div className="flex min-w-0 flex-col gap-8 md:gap-11 lg:gap-[52px]">
              <ProductGallery images={[lp1, lp2, lp3, lp4]} />

              <div className="lg:hidden">
                <ProductActionCard {...productDetails} />
              </div>

              <StoreCard
                name="Bimore Gadget Universe"
                logo={store1}
                productCount="1,294"
                href="/store-details/1"
              />

              <ProductAbout content={productDescription} />

              <div className="grid grid-cols-2 gap-1.5 md:gap-[20px]">
                <img
                  src={promo1}
                  alt="Promo image 1"
                  className="rounded-xl md:rounded-3xl"
                />
                <img
                  src={promo2}
                  alt="Promo image 2"
                  className="rounded-xl md:rounded-3xl"
                />
              </div>

              <ProductTestimony testimonials={testimonials} />
            </div>

            <div className="sticky top-5 left-0 hidden lg:block">
              <ProductActionCard {...productDetails} />
            </div>
          </div>

          <ProductRecomendation
            products={PRODUCTS}
            title="Shop Quality Picks from Top Sellers"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
