import React, { useState } from "react";
import StatusBadge from "@src/components/backoffice/StatusBadge";
import Button from "@src/components/Button";
import truckIcon from "/icons/group.svg";
import barcodeIcon from "/icons/barcode.svg";
import locationIcon from "/icons/location.svg";
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

            case 3:
                return (
                    /* Step 3: Shipping - Figma Node 3185:19528 */
                    <div className="flex flex-col gap-4">
                        {/* Hero Image */}
                        <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[16px] md:h-[260px]">
                            <img
                                src={proofImage}
                                alt="Shipping Proof"
                                className="h-full w-full object-cover"
                            />
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
                            <StatusBadge status="Delivering" variant="delivering" />
                        </div>

                        {/* Tracking Number Row */}
                        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-1.5">
                            <div className="flex flex-row items-center gap-1.5 md:gap-2">
                                <img
                                    src={locationIcon}
                                    alt="Tracking Number"
                                    className="h-5 w-5 object-contain md:h-6 md:w-6"
                                />
                                <span className="font-lexend text-sm font-medium text-[#6A7686] md:text-base">
                                    Tracking Number
                                </span>
                            </div>
                            <span className="font-lexend text-sm font-bold text-[#292D32] md:text-base lg:text-lg">
                                2500050102015
                            </span>
                        </div>

                        <hr className="border-stroke-color" />

                        {/* Mark Completed Button */}
                        <Button variant="blue" className="w-full rounded-full!">
                            Mark This Transaction Completed
                        </Button>
                    </div>
                );
            case 4:
                return (
                    /* Step 3: Shipping - Figma Node 3185:19528 */
                    <div className="flex flex-col gap-4">
                        {/* Hero Image */}
                        <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[16px] md:h-[260px]">
                            <img
                                src={proofImage}
                                alt="Shipping Proof"
                                className="h-full w-full object-cover"
                            />
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
                            <StatusBadge status="completed" variant="completed" />
                        </div>

                        {/* Tracking Number Row */}
                        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-1.5">
                            <div className="flex flex-row items-center gap-1.5 md:gap-2">
                                <img
                                    src={locationIcon}
                                    alt="Tracking Number"
                                    className="h-5 w-5 object-contain md:h-6 md:w-6"
                                />
                                <span className="font-lexend text-sm font-medium text-[#6A7686] md:text-base">
                                    Tracking Number
                                </span>
                            </div>
                            <span className="font-lexend text-sm font-bold text-[#292D32] md:text-base lg:text-lg">
                                2500050102015
                            </span>
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
