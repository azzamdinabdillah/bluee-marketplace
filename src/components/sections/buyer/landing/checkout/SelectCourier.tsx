import groupIcon from "/icons/group-black.svg";
import arrowRight from "/icons/arrow-right-blue.svg";

interface SelectCourierProps {
  courierName: string;
  serviceName: string;
  price: number;
  onChangeCourier?: () => void;
}

export default function SelectCourier({
  courierName,
  serviceName,
  price,
  onChangeCourier,
}: SelectCourierProps) {
  return (
    <div className="flex flex-col gap-5 rounded-[20px] bg-white p-5">
      <h3 className="text-xl leading-tight font-bold text-[#292D32]">
        Select Courier
      </h3>

      <div className="flex flex-col items-start justify-between gap-4 rounded-[20px] border border-[#E8E8E8] p-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-[14px]">
          {/* Icon Placeholder */}
          <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#F3F3F3]">
            <img src={groupIcon} alt="" className="h-6 w-6" />
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="text-lg leading-tight font-bold text-[#292D32]">
              {courierName}
            </h4>
            <p className="text-base leading-tight font-semibold text-[#6A7686]">
              {serviceName} (Rp {price.toLocaleString("id-ID")})
            </p>
          </div>
        </div>

        <button
          onClick={onChangeCourier}
          className="flex items-center gap-0.5 transition-opacity hover:opacity-80 cursor-pointer"
        >
          <span className="text-base leading-tight font-bold text-[#1053D5]">
            Change Courier
          </span>
          {/* Arrow Right Placeholder */}
          <img src={arrowRight} alt="" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
