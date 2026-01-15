import React from "react";
import StatusBadge from "@src/components/backoffice/StatusBadge";
import truckIcon from "/icons/group.svg";

export default function TransactionDetailsOrderStatus() {
    return (
        <div className="flex w-full flex-col gap-5 rounded-[20px] bg-white p-4 md:p-5 lg:gap-[20px] lg:p-[20px]">
            <h3 className="font-lexend text-lg font-bold text-[#292D32] lg:text-xl">
                Order Status
            </h3>

            {/* Timeline Section */}
            <div className="relative grid grid-cols-3 w-full py-4">
                {/* Background Line */}
                <div className="absolute top-[26px] left-0 h-3 w-full rounded-[50px] bg-stroke-color" />

                {/* Progress Line - Active part (approx 1/3 for step 1) */}
                <div className="absolute top-[26px] left-0 h-3 w-[33%] rounded-[50px] bg-[#CBEE5A]" />

                {/* Step 1: Book Review */}
                <div className="flex flex-col items-center gap-1.5 z-2 relative">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CBEE5A] p-2.5 shadow-sm">
                        <span className="font-lexend text-base font-bold text-[#292D32]">1</span>
                    </div>
                    <span className="text-center font-lexend text-base font-bold text-[#292D32]">
                        Book Review
                    </span>
                </div>

                {/* Step 2: Processing */}
                <div className="flex flex-col items-center gap-1.5 z-2 relative">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stroke-color p-2.5">
                        <span className="font-lexend text-base font-bold text-[#292D32]">2</span>
                    </div>
                    <span className="text-center font-lexend text-base font-bold text-[#292D32]">
                        Processing
                    </span>
                </div>

                {/* Step 3: 2+ More */}
                <div className="flex flex-col items-center gap-1.5 z-2 relative">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stroke-color p-2.5">
                        <span className="font-lexend text-base font-bold text-[#292D32]">?</span>
                    </div>
                    <span className="text-center font-lexend text-base font-bold text-[#292D32]">
                        2+ More
                    </span>
                </div>
            </div>

            {/* Delivery Status Row */}
            <div className="flex w-full flex-row items-center justify-between gap-1.5">
                <div className="flex flex-row items-center gap-2">
                    <img
                        src={truckIcon}
                        alt="Delivery Status"
                        className="h-6 w-6 object-contain"
                    />
                    <span className="font-lexend text-base font-medium text-[#6A7686]">
                        Delivery Status
                    </span>
                </div>
                <StatusBadge status="Pending" variant="pending" />
            </div>
        </div>
    );
}
