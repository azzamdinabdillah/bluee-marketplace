import React from "react";
import StatusBadge from "@src/components/backoffice/StatusBadge";
import truckIcon from "/icons/group.svg";

export default function TransactionDetailsOrderStatus() {
    return (
        <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white p-4 md:gap-5 md:p-5 lg:gap-[20px] lg:p-[20px]">
            <h3 className="font-lexend text-base font-bold text-[#292D32] md:text-lg lg:text-xl">
                Order Status
            </h3>

            {/* Timeline Section */}
            <div className="relative grid w-full grid-cols-3 md:py-3">
                {/* Background Line */}
                <div className="absolute left-0 top-1/2 translate-y-[-150%] h-2 w-full rounded-[50px] bg-stroke-color md:h-3" />

                {/* Progress Line - Active part (approx 1/3 for step 1) */}
                <div className="absolute left-0 top-1/2 translate-y-[-150%] h-2 w-[33%] rounded-[50px] bg-[#CBEE5A] md:h-3" />

                {/* Step 1: Book Review */}
                <div className="relative z-10 flex flex-col items-center gap-1 md:gap-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CBEE5A] shadow-sm md:h-8 md:w-8">
                        <span className="font-lexend text-xs font-bold text-[#292D32] md:text-base">1</span>
                    </div>
                    <span className="text-center font-lexend text-xs font-bold text-[#292D32] md:text-sm lg:text-base">
                        Book Review
                    </span>
                </div>

                {/* Step 2: Processing */}
                <div className="relative z-10 flex flex-col items-center gap-1 md:gap-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-stroke-color md:h-8 md:w-8">
                        <span className="font-lexend text-xs font-bold text-[#292D32] md:text-base">2</span>
                    </div>
                    <span className="text-center font-lexend text-xs font-bold text-[#292D32] md:text-sm lg:text-base">
                        Processing
                    </span>
                </div>

                {/* Step 3: 2+ More */}
                <div className="relative z-10 flex flex-col items-center gap-1 md:gap-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-stroke-color md:h-8 md:w-8">
                        <span className="font-lexend text-xs font-bold text-[#292D32] md:text-base">?</span>
                    </div>
                    <span className="text-center font-lexend text-xs font-bold text-[#292D32] md:text-sm lg:text-base">
                        2+ More
                    </span>
                </div>
            </div>

            {/* Delivery Status Row */}
            <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-1.5">
                <div className="flex flex-row items-center gap-1.5 md:gap-2">
                    <img
                        src={truckIcon}
                        alt="Delivery Status"
                        className="h-5 w-5 object-contain md:h-6 md:w-6"
                    />
                    <span className="font-lexend text-sm font-medium text-[#6A7686] md:text-base">
                        Delivery Status
                    </span>
                </div>
                <StatusBadge status="Pending" variant="pending" />
            </div>
        </div>
    );
}
