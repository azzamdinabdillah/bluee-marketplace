import { useState } from "react";
import groupIcon from "/icons/group-black.svg";
import arrowRight from "/icons/arrow-right-blue.svg";
import Modal from "@src/components/Modal";
import Button from "@src/components/Button";

export interface CourierOption {
  id: string;
  name: string;
  service: string;
  price: number;
  icon: string;
}

const COURIER_OPTIONS: CourierOption[] = [
  {
    id: "jnt",
    name: "J&T Express",
    service: "Regular Service",
    price: 7000,
    icon: groupIcon,
  },
  {
    id: "ez",
    name: "EZ",
    service: "Regular Service",
    price: 7000,
    icon: groupIcon,
  },
  {
    id: "jne",
    name: "JNE",
    service: "Regular Service",
    price: 8000,
    icon: groupIcon,
  },
  {
    id: "sicepat",
    name: "SiCepat",
    service: "Regular Service",
    price: 7500,
    icon: groupIcon,
  },
];

interface SelectCourierProps {
  courierName: string;
  serviceName: string;
  price: number;
  onChangeCourier?: (courier: CourierOption) => void;
}

export default function SelectCourier({
  courierName,
  serviceName,
  price,
  onChangeCourier,
}: SelectCourierProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourierId, setSelectedCourierId] = useState<string | null>(null);

  const handleOpenModal = () => {
    // Try to find the current courier in options to set initial selection
    // This is a simple match based on name and service
    const current = COURIER_OPTIONS.find(
      (c) => c.name === courierName && c.service === serviceName
    );
    setSelectedCourierId(current?.id || COURIER_OPTIONS[0].id);
    setIsModalOpen(true);
  };

  const handleChooseCourier = () => {
    const selected = COURIER_OPTIONS.find((c) => c.id === selectedCourierId);
    if (selected && onChangeCourier) {
      onChangeCourier(selected);
    }
    setIsModalOpen(false);
  };

  return (
    <>
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
            onClick={handleOpenModal}
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Available Couriers"
        width="w-full md:w-[460px]"
        footer={
          <Button
            variant="blue"
            className="w-full rounded-[14px] md:rounded-[18px]"
            onClick={handleChooseCourier}
          >
            Choose Courier
          </Button>
        }
      >
        <div className="flex flex-col gap-[14px] max-h-[346px] overflow-y-auto pr-1">
          {COURIER_OPTIONS.map((courier) => {
            const isSelected = selectedCourierId === courier.id;
            return (
              <div
                key={courier.id}
                onClick={() => setSelectedCourierId(courier.id)}
                className={`flex cursor-pointer items-center gap-[14px] rounded-[20px] border p-5 transition-all duration-200 ${isSelected
                  ? "border-[1.5px] border-[#1053D5] bg-gradient-to-r from-transparent to-[#1053D5]/10"
                  : "border-[#E8E8E8] hover:bg-gray-50"
                  }`}
              >
                {/* Icon Box */}
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#F3F3F3]">
                  <img src={courier.icon} alt={courier.name} className="h-6 w-6" />
                </div>

                {/* Text Info */}
                <div className="flex flex-1 flex-col gap-1.5">
                  <h4 className="text-lg leading-tight font-bold text-[#292D32]">
                    {courier.name}
                  </h4>
                  <p className="text-base leading-tight font-semibold text-[#6A7686]">
                    {courier.service} (Rp {courier.price.toLocaleString("id-ID")})
                  </p>
                </div>

                {/* Indicator */}
                <div className="shrink-0">
                  {isSelected ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1053D5]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.75 12.75L10.58 15.58L16.25 9.91667"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="h-6 w-6 rounded-full border-[1.5px] border-[#E8E8E8]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
}
