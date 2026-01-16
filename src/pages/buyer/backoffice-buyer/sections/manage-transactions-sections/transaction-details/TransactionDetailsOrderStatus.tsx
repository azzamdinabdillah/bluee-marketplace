import { useState } from "react";
import StatusBadge from "@src/components/backoffice/StatusBadge";
import Button from "@src/components/Button";
import truckIcon from "/icons/group.svg";
import locationIcon from "/icons/routing-gray.svg";
import proofImage from "/images/proof.png";
import Modal from "@src/components/Modal";
import InputInteractive from "@src/components/InputInteractive";
import MessageIcon from "@src/components/icons/MessageIcon";
import StarIcon from "@src/components/icons/StarIcon";
import boxTickIcon from "/icons/box-tick.svg";

const STEPS = [
    { id: 1, label: "Book Review" },
    { id: 2, label: "Processing" },
    { id: 3, label: "Shipping" },
    { id: 4, label: "Delivered" },
];

export default function TransactionDetailsOrderStatus() {
    const [currentStep, setCurrentStep] = useState<number>(2); // Defaulting to 2 as per original design implication
    const [rating, setRating] = useState<number>(0);
    const [review, setReview] = useState<string>("");

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
                        <Button variant="blue" className="w-full rounded-full!" popoverTarget="completion-modal">
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
        <div className="flex flex-col gap-3 md:gap-5">
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

                <Modal id="completion-modal" title="Order confirmation">
                    <div className="flex flex-col items-center justify-center gap-4 md:gap-6 text-center">
                        <div className="flex flex-col gap-3 my-3 md:my-6 lg:my-8 items-center">
                            <img
                                src={boxTickIcon}
                                alt="Confirm"
                                className="size-10 md:size-[52px]"
                            />
                            <h4 className="font-lexend text-sm md:text-base font-bold text-black-color">
                                Are you sure you want to finish this order? Please ensure you’ve received the item as ordered
                            </h4>
                        </div>

                        <div className="flex w-full flex-col gap-3">
                            <Button
                                variant="blue"
                                className="w-full justify-center"
                                onClick={() => {
                                    document.getElementById("completion-modal")?.hidePopover();
                                    document.getElementById("testimony-modal")?.showPopover();
                                }}
                            >
                                Yes, Finish the order
                            </Button>
                            <Button
                                variant="gray"
                                className="w-full justify-center text-black-color!"
                                popoverTarget="completion-modal"
                                popoverTargetAction="hide"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Modal>

                <Modal id="testimony-modal" title="Leave Testimony?" width="max-w-[500px]">
                    <div className="flex flex-col items-center gap-2 md:gap-3">
                        {/* Stars Rating */}
                        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 my-3 md:my-6 lg:my-8">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    className="transition-transform hover:scale-110 focus:outline-none"
                                >
                                    <StarIcon
                                        className="h-8 w-8 md:h-10 md:w-10 lg:text-5xl lg:h-12 lg:w-12 transition-colors duration-200"
                                        fill={rating >= star ? "#FDB022" : "none"}
                                        stroke={rating >= star ? "none" : "#FDB022"}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Review Input */}
                        <div className="flex w-full flex-col gap-3 md:gap-4">
                            <label className="font-lexend text-sm font-bold text-[#6A7686] md:text-base">
                                Share your experience
                            </label>
                            <InputInteractive
                                label="Enter your feedback here"
                                as="textarea"
                                value={review}
                                rows={4}
                                onChange={(e) => setReview(e.target.value)}
                                icon={MessageIcon}
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex w-full flex-col gap-3 md:gap-4">
                            <Button
                                variant="blue"
                                className="w-full justify-center"
                                onClick={() => {
                                    document.getElementById("testimony-modal")?.hidePopover();
                                    setCurrentStep(4);
                                }}
                            >
                                Submit & Complete
                            </Button>
                            <Button
                                variant="gray"
                                className="w-full justify-center bg-transparent border-stroke-color text-black-color!"
                                onClick={() => {
                                    document.getElementById("testimony-modal")?.hidePopover();
                                    setCurrentStep(4);
                                }}
                            >
                                No, Thanks
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>

            {currentStep === 4 && (
                <div className="flex w-full flex-col items-start justify-center gap-4 rounded-[20px] bg-white p-4 md:gap-5 md:p-5 lg:gap-[20px] lg:p-[20px]">
                    <p className="w-full font-lexend text-base font-bold text-[#292D32] md:text-lg lg:text-[20px]">
                        Customer Reviews
                    </p>
                    <div className="flex w-full flex-col gap-4 rounded-[16px] border border-[#E8E8E8] p-4">
                        <div className="flex w-full flex-row justify-between items-center gap-4 lg:gap-[20px]">
                            <p className="flex items-baseline font-lexend font-bold text-[#292D32]">
                                <span className="text-2xl md:text-3xl lg:text-[32px]">4.0</span>
                                <span className="text-base md:text-lg lg:text-[20px]">/5.0</span>
                            </p>
                            <div className="flex h-6 w-[140px] items-center gap-1 md:h-7 lg:h-8">
                                {[1, 2, 3, 4].map((star) => (
                                    <StarIcon
                                        key={star}
                                        className="size-6 text-[#FDB022] md:size-7 lg:size-8"
                                        fill="#FDB022"
                                        stroke="none"
                                    />
                                ))}
                                <StarIcon
                                    className="size-6 text-[#FDB022] md:size-7 lg:size-8"
                                    fill="none"
                                    stroke="#FDB022"
                                />
                            </div>
                        </div>
                        <div className="h-0 w-full border-t border-[#E8E8E8]"></div>
                        <p className="w-full font-lexend text-sm font-medium leading-[1.8] text-[#6A7686] md:text-base lg:text-[18px]">
                            “The iPhone is super fast, the MacBook is perfect for work, and the AirPods sound crystal clear. Plus, the store's service was amazing—fast delivery and great support!”
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
