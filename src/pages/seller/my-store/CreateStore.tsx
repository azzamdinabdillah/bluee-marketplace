import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import InputInteractive from "@src/components/InputInteractive";
import Button from "@src/components/Button";
import StoreIcon from "@src/components/icons/StoreIcon";
import StickyNote from "@src/components/icons/StickyNote";
import Location from "@src/components/icons/Location";
import GlobalSearch from "@src/components/icons/GlobalSearch";
import { Buildings } from "@src/components/icons/Buildings";
import Keyboard from "@src/components/icons/Keyboard";
import imagePlaceholder from "/icons/image-placeholder.svg";

export default function CreateStore() {
  const rowClass =
    "flex w-full flex-col justify-between gap-2 lg:grid lg:grid-cols-[45fr_55fr] lg:items-center lg:gap-6";
  const labelClass =
    "text-sec-color text-sm font-semibold md:text-base lg:shrink-0";

  return (
    <TemplateLayoutBackoffice
      title="Create My Store"
      subtitle="Manage My Store"
      role="seller"
      showBackButton
    >
      <div className="flex w-full flex-col gap-5 rounded-xl bg-white p-3 md:p-5 lg:rounded-[20px]">
        <h2 className="text-responsive-20 text-black-color font-bold">
          Complete the Form
        </h2>

        {/* Store Image */}
        <div className={rowClass}>
          <span className={labelClass}>Store Image</span>
          <div className="flex items-center justify-between gap-6">
            <img
              src={imagePlaceholder}
              alt=""
              className="size-[80px] object-cover md:size-[100px]"
            />
            <Button variant="black" className="rounded-2xl">
              Add Photo
            </Button>
          </div>
        </div>

        {/* Store Name */}
        <div className={rowClass}>
          <span className={labelClass}>Store Name</span>
          <div className="w-full">
            <InputInteractive
              label="Enter Store Name"
              icon={StoreIcon}
              placeholder="Enter Store Name"
            />
          </div>
        </div>

        {/* Store Description */}
        <div className={rowClass}>
          <span className={labelClass}>Store Description</span>
          <div className="w-full">
            <InputInteractive
              as="textarea"
              label="Enter Store Description"
              icon={StickyNote}
              placeholder="Enter Store Description"
            />
          </div>
        </div>

        {/* Address Searching */}
        <div className={rowClass}>
          <span className={labelClass}>Address Searching</span>
          <div className="w-full">
            <InputInteractive
              label="Enter District"
              icon={GlobalSearch}
              placeholder="Enter District"
            />
          </div>
        </div>

        {/* Store Address */}
        <div className={rowClass}>
          <span className={labelClass}>Store Address</span>
          <div className="w-full">
            <InputInteractive
              as="textarea"
              label="Enter Store Address"
              icon={Location}
              placeholder="Enter Store Address"
            />
          </div>
        </div>

        {/* Store City */}
        <div className={rowClass}>
          <span className={labelClass}>Store City</span>
          <div className="w-full">
            <InputInteractive
              label="Select City"
              icon={Buildings}
              placeholder="Select City"
            />
          </div>
        </div>

        {/* Post Code */}
        <div className={rowClass}>
          <span className={labelClass}>Post Code</span>
          <div className="w-full">
            <InputInteractive
              label="Enter Post Code"
              icon={Keyboard}
              placeholder="Enter Post Code"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-end lg:flex-row lg:items-center">
          <Button variant="red" className="w-full rounded-full! md:w-fit">
            Cancel
          </Button>
          <Button variant="blue" className="w-full rounded-full! md:w-fit">
            Create Now
          </Button>
        </div>
      </div>
    </TemplateLayoutBackoffice>
  );
}
