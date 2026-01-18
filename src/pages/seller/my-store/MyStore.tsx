import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import Button from "@src/components/Button";
import calendarIcon from "/icons/calendar-2.svg";
import ProfileCircleIcon from "/icons/user.svg";
import VerifyIcon from "/icons/verify-blue.svg";
import storeIcon from "/images/store-3.png";
import editIcon from "/icons/edit.svg";
import buildingIcon from "/icons/buildings-black.svg";
import shopIcon from "/icons/shop-remove.svg";
import keyboardIcon from "/icons/keyboard-black.svg";
import DetailsBoxList from "@src/components/backoffice/DetailsBoxList";

export default function MyStore() {
  return (
    <TemplateLayoutBackoffice
      role="seller"
      title="Manage My Store"
      subtitle="View and Update Your Store"
    >
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 items-start">
        {/* Store Info Card */}
        <div className="border-stroke-color flex w-full flex-col gap-5 rounded-[20px] bg-white p-5">
          {/* Header */}
          <div className="text-black-color font-lexend text-responsive-18 leading-[1.25] font-bold">
            Store Name
          </div>

          {/* Store Profile */}
          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Left Side: Image + Info */}
            <div className="flex items-center gap-3 md:gap-[14px]">
              {/* Image */}
              <div className="size-[72px] shrink-0 overflow-hidden rounded-full bg-[#D9D9D9] md:size-[92px]">
                <img
                  src={storeIcon}
                  alt="Store"
                  className="size-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 md:gap-[6px]">
                <div className="text-black-color font-lexend text-responsive-20 leading-[1.25] font-bold">
                  Shayna Sport
                </div>

                <div className="flex items-center gap-1">
                  <img
                    src={ProfileCircleIcon}
                    alt=""
                    className="size-5 md:size-6"
                  />
                  <div className="text-sec-color font-lexend text-responsive-18 leading-[1.25] font-semibold">
                    Shayna Oek
                  </div>
                </div>

                {/* Mobile Badge */}
                <div className="flex items-center gap-1 md:hidden">
                  <img src={VerifyIcon} alt="" className="size-4" />
                  <span className="text-primary-color font-lexend text-responsive-16 leading-[1.25] font-bold">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Badge */}
            <div className="hidden shrink-0 items-center gap-1 md:flex">
              <img src={VerifyIcon} alt="" />
              <span className="text-primary-color font-lexend text-responsive-16 leading-[1.25] font-bold">
                VERIFIED
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-stroke-color h-px w-full"></div>

          {/* About */}
          <div className="flex w-full flex-col gap-2">
            <div className="text-black-color font-lexend text-responsive-18 leading-[1.25] font-bold">
              Store About
            </div>
            <div className="text-sec-color font-lexend text-responsive-16 leading-[1.6] font-semibold">
              Welcome to Bimore – your ultimate destination for discovering the
              latest and greatest gadgets. We offer a wide selection of
              cutting-edge tech products at affordable prices
            </div>
          </div>

          {/* Actions */}
          <div className="mt-auto flex flex-col gap-3">
            <Button variant="black" iconPosition="left" icon={editIcon}>
              Edit Store
            </Button>

            <div className="flex items-center justify-start gap-2">
              <img src={calendarIcon} alt="" />
              <span className="text-sec-color font-lexend text-responsive-16 leading-[1.25] font-semibold">
                Created on 19/02/2020
              </span>
            </div>
          </div>
        </div>

        <div className="border-stroke-color flex w-full flex-col gap-4 rounded-[20px] bg-white p-4 md:gap-5 md:p-5">
          {/* Header */}
          <div className="text-black-color font-lexend text-lg leading-[1.25] font-bold lg:text-xl">
            Store Address
          </div>

          <DetailsBoxList
            items={[
              {
                icon: buildingIcon,
                value: "Malang",
                label: "City Location",
              },
              {
                icon: keyboardIcon,
                value: "32250",
                label: "Post Code",
              },
            ]}
          />

          {/* Map Section */}
          <div className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-[24px]">
              <iframe
                width="100%"
                height="100%"
                className="h-[200px] w-full md:h-[250px] lg:h-[290px]"
                title="map"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=Jl.+Industri+Raya+No.+123+Kawasan+Reyn+Gadget+Malang+Kota,+Jawa+Timur,+17530&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
            <div className="text-black-color text-responsive-18 leading-[1.6] font-semibold">
              Jl. Industri Raya No. 123 Kawasan Reyn Gadget Malang Kota, Jawa
              Timur, 17530
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[400px] w-full flex-col gap-5 rounded-[20px] bg-white p-4 md:h-[500px] md:p-5 lg:h-[660px]">
        <div className="border-stroke-color flex h-full w-full flex-col items-center justify-center gap-4 rounded-[16px] border-2 border-dashed md:gap-6">
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <img src={shopIcon} alt="" className="size-10 md:size-12 lg:size-[52px]"/>
            <div className="text-sec-color font-lexend text-responsive-18 text-center leading-tight font-semibold">
              Oops, you don't have store profile
            </div>
          </div>
          <Button variant="blue">Create Now +</Button>
        </div>
      </div>
    </TemplateLayoutBackoffice>
  );
}
