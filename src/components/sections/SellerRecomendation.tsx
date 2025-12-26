import TitleSection from "../TitleSection";
import Button from "../Button";
import arrowRight from "/icons/arrow-right.svg";
import SellerCard from "../SellerCard";
import logo1 from "/images/logo-1.png";
import logo2 from "/images/logo-2.png";
import logo3 from "/images/logo-3.png";

export default function SellerRecomendation() {
    return (
        <div className="flex flex-col gap-6 md:gap-9">
            <TitleSection title="Trusted Sellers, Quality Guaranteed">
                <Button icon={arrowRight}>VIEW ALL</Button>
            </TitleSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-items-center md:justify-items-start">
                <SellerCard
                    storeName="Xiaomi Store Indonesia"
                    brand="Xiaomi"
                    sellerName="Budi Hartanto"
                    city="Bandung"
                    address="Cihampelas"
                    coverImage={logo1}
                    coverBackgroundColor="#FF6600" // Light red/pink
                />
                <SellerCard
                    storeName="Samsung Official Store"
                    brand="Samsung"
                    sellerName="Siti Aminah"
                    city="Jakarta"
                    address="Grand Indonesia"
                    coverImage={logo2}
                    coverBackgroundColor="#295BA7" // Light cyan
                />
                <SellerCard
                    storeName="iBox Apple Reseller"
                    brand="Apple"
                    sellerName="Rudi Hermawan"
                    city="Surabaya"
                    address="Tunjungan Plaza"
                    coverImage={logo3}
                    coverBackgroundColor="#000000" // Light purple
                />
            </div>
        </div>
    );
}
