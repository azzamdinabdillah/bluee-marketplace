import arrowRight from "/icons/arrow-right.svg"
import Button from "../../../Button"
import TitleSection from "../../../TitleSection"
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="flex flex-col gap-9">
      <TitleSection title="Explore High Quality Products by Categories">
        <Button icon={arrowRight}>
          VIEW ALL
        </Button>
      </TitleSection>

      <div className="categories">
        {(() => {
          const items = [
            { icon: "/icons/mobile.svg", name: "Gadget", count: 1294, href: "/browse-category-product/gadget" },
            { icon: "/icons/weight.svg", name: "Fitness", count: 987, href: "/browse-category-product/fitness" },
            { icon: "/icons/devices.svg", name: "Hardware", count: 752, href: "/browse-category-product/hardware" },
            { icon: "/icons/tree.svg", name: "Furniture", count: 1831, href: "/browse-category-product/furniture" },
            { icon: "/icons/lamp.svg", name: "Electronic", count: 436, href: "/browse-category-product/electronic" },
            { icon: "/icons/coffee.svg", name: "Kitchen", count: 128, href: "/browse-category-product/kitchen" },
          ];

          return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {items.map((item, idx) => (
                <Link 
                  to={item.href}
                  key={idx}
                  className="flex flex-col items-center justify-center gap-6 px-6 py-8 ring-1 ring-stroke-color rounded-[20px] hover:ring-2 hover:ring-primary-color transition-all duration-200 hover:bg-[#1053d508] cursor-pointer"
                >
                  <div className="relative shrink-0 size-9 md:size-10">
                    <img src={item.icon} alt="" className="block size-full max-w-none" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-black-color text-[18px] md:text-[20px] font-extrabold leading-[125%]">{item.name}</p>
                    <p className="text-sec-color text-[14px] md:text-[16px] font-medium leading-[125%]">{item.count.toLocaleString()} items</p>
                  </div>
                </Link>
              ))}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
