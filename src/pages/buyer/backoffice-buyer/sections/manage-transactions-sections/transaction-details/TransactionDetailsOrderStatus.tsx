import React, { useState } from "react";
import StatusBadge from "@src/components/backoffice/StatusBadge";
import Button from "@src/components/Button";
import truckIcon from "/icons/group.svg";
import barcodeIcon from "/icons/barcode.svg";
import proofImage from "/images/proof.png";

const STEPS = [
    { id: 1, label: "Book Review" },
    { id: 2, label: "Processing" },
    { id: 3, label: "Shipping" },
    { id: 4, label: "Delivered" },
];

export default function TransactionDetailsOrderStatus() {
    const [currentStep, setCurrentStep] = useState<number>(2); // Defaulting to 2 as per original design implication

    // Helper to calculate progress width for the background line
    const progressWidth = `${((Math.min(currentStep, 3) - 1) / 2) * 100}%`;

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    /* Step 1: Book Review - Only shows Status Row as per Figma Node 2829:6816 */
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
                );
            case 2:
                return (
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
                        <StatusBadge status="Processing" variant="processing" />
                    </div>
                );

            // case 2:
            //     // Existing Content for "Processing" (assumed)
            //     return (
            //         <>
            //             {/* Delivery Status Row */}
            //             <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-1.5">
            //                 <div className="flex flex-row items-center gap-1.5 md:gap-2">
            //                     <img
            //                         src={truckIcon}
            //                         alt="Delivery Status"
            //                         className="h-5 w-5 object-contain md:h-6 md:w-6"
            //                     />
            //                     <span className="font-lexend text-sm font-medium text-[#6A7686] md:text-base">
            //                         Delivery Status
            //                     </span>
            //                 </div>
            //                 <StatusBadge status="Pending" variant="pending" />
            //             </div>

            //             <hr className="border-stroke-color" />

            //             {/* Photo Section */}
            //             <div className="flex w-full items-center justify-between gap-4">
            //                 <div className="relative h-[80px] w-[80px] shrink-0 overflow-hidden rounded-[16px] bg-[#F6F7F9] md:h-[90px] md:w-[90px] lg:h-[100px] lg:w-[100px]">
            //                     <img
            //                         src={proofImage}
            //                         alt="Proof of Delivery"
            //                         className="h-full w-full object-cover"
            //                     />
            //                 </div>
            //                 <Button variant="black" className="w-fit">
            //                     Change Photo
            //                 </Button>
            //             </div>

            //             {/* Tracking Number Section */}
            //             <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
            //                 <h4 className="font-lexend text-xs font-semibold text-[#6A7686] md:text-sm lg:text-base">
            //                     Tracking Number
            //                 </h4>
            //                 <div className="flex w-full items-center gap-3 rounded-[14px] ring-[1.5px] ring-stroke-color p-3 md:gap-4 md:rounded-[16px] md:p-4 lg:rounded-[18px] lg:px-5 lg:py-[18px]">
            //                     <img
            //                         src={barcodeIcon}
            //                         alt="Tracking Icon"
            //                         className="h-5 w-5 object-contain md:h-6 md:w-6"
            //                     />

            //                     {/* Vertical Divider */}
            //                     <div className="h-8 w-[1.5px] bg-[#E8E8E8] md:h-10" />

            //                     <div className="flex flex-col">
            //                         <span className="font-lexend text-xs font-semibold text-[#6A7686] md:text-sm">
            //                             Enter Tracking Number
            //                         </span>
            //                         <span className="font-lexend text-sm font-bold text-[#292D32] md:text-base lg:text-lg">
            //                             2500050102015
            //                         </span>
            //                     </div>
            //                 </div>
            //             </div>

            //             {/* Update Button */}
            //             <Button variant="blue" className="mt-2 w-full rounded-full!">
            //                 Update Status
            //             </Button>
            //         </>
            //     );
            case 3:
                return (
                    <div className="flex flex-col gap-4">
                        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                            <h4 className="font-lexend font-bold text-lg text-blue-700">Shipping in Progress</h4>
                            <p className="text-blue-500 text-sm">Your order is on the way!</p>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="flex flex-col gap-4">
                        <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                            <h4 className="font-lexend font-bold text-lg text-green-700">Order Delivered</h4>
                            <p className="text-green-500 text-sm">Package has been received successfully.</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white p-4 md:gap-5 md:p-5 lg:gap-[20px] lg:p-[20px]">
            <h3 className="font-lexend text-base font-bold text-[#292D32] md:text-lg lg:text-xl">
                Order Status
            </h3>

            {/* Timeline Section */}
            <div className="relative grid w-full grid-cols-3 md:py-3">
                {/* Background Line */}
                <div className="absolute left-0 top-1/2 translate-y-[-150%] h-2 w-full rounded-[50px] bg-stroke-color md:h-3" />

                {/* Progress Line */}
                <div
                    className="absolute left-0 top-1/2 translate-y-[-150%] h-2 rounded-[50px] bg-[#CBEE5A] md:h-3 transition-all duration-300 ease-in-out"
                    style={{ width: progressWidth }}
                />

                {/* Step 1: Book Review */}
                <div className="relative z-10 flex flex-col items-center gap-1 md:gap-1.5 hover:cursor-pointer" onClick={() => setCurrentStep(1)}>
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm md:h-8 md:w-8 transition-colors ${currentStep >= 1 ? "bg-[#CBEE5A]" : "bg-stroke-color"}`}>
                        <span className="font-lexend text-xs font-bold text-[#292D32] md:text-base">1</span>
                    </div>
                    <span className="text-center font-lexend text-xs font-bold text-[#292D32] md:text-sm lg:text-base">
                        Book Review
                    </span>
                </div>

                {/* Step 2: Processing */}
                <div className="relative z-10 flex flex-col items-center gap-1 md:gap-1.5 hover:cursor-pointer" onClick={() => setCurrentStep(2)}>
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm md:h-8 md:w-8 transition-colors ${currentStep >= 2 ? "bg-[#CBEE5A]" : "bg-stroke-color"}`}>
                        <span className="font-lexend text-xs font-bold text-[#292D32] md:text-base">2</span>
                    </div>
                    <span className="text-center font-lexend text-xs font-bold text-[#292D32] md:text-sm lg:text-base">
                        Processing
                    </span>
                </div>

                {/* Step 3: 2+ More / Others */}
                <div className="relative z-10 flex flex-col items-center gap-1 md:gap-1.5 hover:cursor-pointer" onClick={() => setCurrentStep(3)}>
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm md:h-8 md:w-8 transition-colors ${currentStep >= 3 ? "bg-[#CBEE5A]" : "bg-stroke-color"}`}>
                        <span className="font-lexend text-xs font-bold text-[#292D32] md:text-base">{currentStep > 3 ? currentStep : "2+"}</span>
                    </div>
                    <span className="text-center font-lexend text-xs font-bold text-[#292D32] md:text-sm lg:text-base">
                        {currentStep > 3 ? STEPS[currentStep - 1]?.label : "2+ More"}
                    </span>
                </div>
            </div>

            <div className="content-by-progress flex flex-col gap-4">
                {renderStepContent()}

                {/* Navigation Controls (For Layout purpose) */}
                <div className="flex gap-2 justify-center mt-2 border-t pt-4 border-dashed border-gray-200">
                    <Button
                        variant="gray"
                        onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                        className={currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}
                    >
                        Previous Step
                    </Button>
                    <Button
                        variant="black"
                        onClick={() => setCurrentStep(prev => Math.min(STEPS.length, prev + 1))}
                        className={currentStep === STEPS.length ? "opacity-50 cursor-not-allowed" : ""}
                    >
                        Next Step
                    </Button>
                </div>
            </div>
        </div>
    );
}
