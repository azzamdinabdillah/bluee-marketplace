import arrowRight from "/icons/arrow-right.svg"
import Button from "./Button"

export default function Categories() {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        <div className="relative text-[24px] md:text-[28px] lg:text-[32px] text-black font-extrabold leading-[140%] md:leading-[160%]">
          <p className="mb-0 md:w-[70%] md:max-w-[500px] lg:max-w-[600px]">Explore High Quality Products by Categories</p>
        </div>

        <Button icon={arrowRight}>
          VIEW ALL
        </Button>
      </div>

      <div className="categories">
        {(() => {
          const items = [
            { icon: "/icons/mobile.svg", name: "Gadget", count: 1294 },
            { icon: "/icons/weight.svg", name: "Fitness", count: 987 },
            { icon: "/icons/devices.svg", name: "Hardware", count: 752 },
            { icon: "/icons/tree.svg", name: "Furniture", count: 1831 },
            { icon: "/icons/lamp.svg", name: "Electronic", count: 436 },
            { icon: "/icons/coffee.svg", name: "Kitchen", count: 128 },
          ];

          return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center gap-6 px-6 py-8 border border-stroke-color rounded-[20px] hover:border-primary-color  transition-colors duration-200 hover:bg-[#1053d508] cursor-pointer"
                >
                  <div className="relative shrink-0 size-9 md:size-10">
                    <img src={item.icon} alt="" className="block size-full max-w-none" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-black-color text-[18px] md:text-[20px] font-extrabold leading-[125%]">{item.name}</p>
                    <p className="text-sec-color text-[14px] md:text-[16px] font-medium leading-[125%]">{item.count.toLocaleString()} items</p>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
