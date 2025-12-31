import Breadcrumb from "@src/components/Breadcrumb";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/sections/buyer/landing/home/Navbar";
import StoreHeader from "@src/components/sections/buyer/landing/store-details/StoreHeader";
import avatar from "/images/store.png";
import promo1 from "/images/promo-1.png";
import promo2 from "/images/promo-2.png";

export default function StoreDetails() {
  return (
    <div>
      <Navbar />

      <div className="mt-[130px] md:mt-[105px] lg:mt-[121px]">
        <Breadcrumb
          items={[
            { label: "Homepage", href: "/" },
            { label: "Gadged", href: "/browse-category-product/gadged" },
            { label: "Product Details" },
            { label: "Store Details" },
          ]}
        />

        <div className="mx-4 my-4 flex max-w-1176 flex-col gap-6 md:mx-8 md:my-8 md:gap-10 lg:mx-[52px] lg:gap-[100px]">
          <div className="grid xl:grid-cols-2 gap-5">
            <StoreHeader
              storeName="Bimore Gadget Universe"
              isVerified={true}
              totalProducts={1294}
              sellerName="Shadam Bimo"
              location="Buitenzorg"
              avatarUrl={avatar}
            />

            <div className="grid grid-cols-2 gap-1.5 md:gap-[20px] h-[300px]">
              <img
                src={promo1}
                alt="Promo image 1"
                className="rounded-xl md:rounded-3xl w-full object-cover h-[300px]"
              />
              <img
                src={promo2}
                alt="Promo image 2"
                className="rounded-xl md:rounded-3xl w-full object-cover h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
