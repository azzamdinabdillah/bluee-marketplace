import Breadcrumb from "@src/components/Breadcrumb";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/sections/buyer/landing/home/Navbar";
import StoreHeader from "@src/components/sections/buyer/landing/store-details/StoreHeader";

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
          <StoreHeader
            storeName="Bimore Gadget Universe"
            isVerified={true}
            totalProducts={1294}
            sellerName="Shadam Bimo"
            location="Buitenzorg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
