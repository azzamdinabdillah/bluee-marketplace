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
import infoCircleIcon from "/icons/info-circle.svg";
import Divider from "@src/components/Divider";
import GalleryIcon from "@src/components/icons/GalleryIcon";
import BarcodeIcon from "@src/components/icons/BarcodeIcon";

const STEPS = [
  { id: 1, label: "Book Review" },
  { id: 2, label: "Processing" },
  { id: 3, label: "Shipping" },
  { id: 4, label: "Delivered" },
];

interface TransactionDetailsOrderStatusProps {
  role?: "buyer" | "seller";
}

export default function TransactionDetailsOrderStatus({
  role = "buyer",
}: TransactionDetailsOrderStatusProps) {
  const [currentStep, setCurrentStep] = useState<number>(1); // Defaulting to 1
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [trackingNo, setTrackingNo] = useState<string>("");

  // Helper to calculate progress width for the background line
  const progressWidth = `${((Math.min(currentStep, 3) - 1) / 2) * 100}%`;

  const renderBuyerStepContent = () => {
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
          /* Step 3: Shipping */
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
            <Button
              variant="blue"
              className="w-full rounded-full!"
              popoverTarget="completion-modal"
            >
              Mark This Transaction Completed
            </Button>
          </div>
        );
      case 4:
        return (
          /* Step 4: Completed */
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

  const renderSellerStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col gap-3 md:gap-5">
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

            <Divider />

            <div className="flex flex-col gap-3 md:gap-4">
              <Button variant="blue" className="w-full rounded-full!">
                Accept Order
              </Button>
              <p className="text-responsive-16 text-sec-color flex items-center justify-center gap-1.5 font-semibold">
                Why can't I decline the order?{" "}
                <span>
                  <img src={infoCircleIcon} alt="" />
                </span>
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-3 md:gap-5">
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
              <StatusBadge status="processing" variant="processing" />
            </div>

            <Divider />

            {/* Photo Section */}
            <div className="flex items-center justify-between">
              <div className="flex h-20 w-20 items-center justify-center rounded-[16px] bg-[#F6F7F9] md:h-24 md:w-24 lg:h-[100px] lg:w-[100px]">
                <GalleryIcon className="h-8 w-8 text-[#6A7686] md:h-10 md:w-10" />
              </div>
              <Button
                variant="black"
                className="rounded-[16px] px-6 py-4 md:px-8"
              >
                Add Photo
              </Button>
            </div>

            {/* Tracking Number Input */}
            <div className="flex flex-col gap-2">
              <label className="font-lexend text-sm font-bold text-[#6A7686] md:text-base">
                Tracking Number
              </label>
              <InputInteractive
                label="Enter Tracking Number"
                value={trackingNo}
                onChange={(e) => setTrackingNo(e.target.value)}
                icon={BarcodeIcon}
              />
            </div>

            {/* Update Status Button */}
            <Button
              variant="gray"
              className={`w-full rounded-full py-4 text-base font-bold md:text-lg ${trackingNo ? "bg-primary-color! text-white!" : "bg-[#E8E8E8]! text-white!"}`}
              disabled={!trackingNo}
            >
              Update Status
            </Button>
          </div>
        );
      case 3:
        return (
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
          </div>
        );
      case 4:
        return (
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

  const renderStepContent = () => {
    return role === "buyer"
      ? renderBuyerStepContent()
      : renderSellerStepContent();
  };

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <div className="flex w-full flex-col gap-4 rounded-[20px] bg-white p-4 md:gap-5 md:p-5 lg:gap-[20px] lg:p-[20px]">
        <h3 className="font-lexend text-black-color text-responsive-20 font-bold">
          Order Status
        </h3>

        {/* Timeline Section */}
        <div className="relative grid w-full grid-cols-3 md:py-3">
          {/* Background Line */}
          <div className="bg-stroke-color absolute top-1/2 left-0 h-2 w-full translate-y-[-150%] rounded-[50px] md:h-3" />

          {/* Progress Line */}
          <div
            className="absolute top-1/2 left-0 h-2 translate-y-[-150%] rounded-[50px] bg-[#CBEE5A] transition-all duration-300 ease-in-out md:h-3"
            style={{ width: currentStep === 1 ? "15%" : progressWidth }}
          />

          {/* Step 1: Book Review */}
          <div
            className="relative z-10 flex flex-col items-center gap-1 hover:cursor-pointer md:gap-1.5"
            onClick={() => setCurrentStep(1)}
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-colors md:h-8 md:w-8 ${currentStep >= 1 ? "bg-[#CBEE5A]" : "bg-stroke-color"}`}
            >
              <span className="font-lexend text-xs font-bold text-[#292D32] md:text-base">
                1
              </span>
            </div>
            <span className="font-lexend text-center text-xs font-bold text-[#292D32] md:text-sm lg:text-base">
              Book Review
            </span>
          </div>

          {/* Step 2: Processing */}
          <div
            className="relative z-10 flex flex-col items-center gap-1 hover:cursor-pointer md:gap-1.5"
            onClick={() => setCurrentStep(2)}
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-colors md:h-8 md:w-8 ${currentStep >= 2 ? "bg-[#CBEE5A]" : "bg-stroke-color"}`}
            >
              <span className="font-lexend text-xs font-bold text-[#292D32] md:text-base">
                2
              </span>
            </div>
            <span className="font-lexend text-center text-xs font-bold text-[#292D32] md:text-sm lg:text-base">
              Processing
            </span>
          </div>

          {/* Step 3: 2+ More / Others */}
          <div
            className="relative z-10 flex flex-col items-center gap-1 hover:cursor-pointer md:gap-1.5"
            onClick={() => setCurrentStep(3)}
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-colors md:h-8 md:w-8 ${currentStep >= 3 ? "bg-[#CBEE5A]" : "bg-stroke-color"}`}
            >
              <span className="font-lexend text-xs font-bold text-[#292D32] md:text-base">
                {currentStep > 3 ? currentStep : "2+"}
              </span>
            </div>
            <span className="font-lexend text-center text-xs font-bold text-[#292D32] md:text-sm lg:text-base">
              {currentStep > 3 ? STEPS[currentStep - 1]?.label : "2+ More"}
            </span>
          </div>
        </div>

        <div className="content-by-progress flex flex-col gap-4">
          {renderStepContent()}

          {/* Navigation Controls (For Layout purpose) */}
          <div className="mt-2 flex justify-center gap-2 border-t border-dashed border-gray-200 pt-4">
            <Button
              variant="gray"
              onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
              className={
                currentStep === 1 ? "cursor-not-allowed opacity-50" : ""
              }
            >
              Previous Step
            </Button>
            <Button
              variant="black"
              onClick={() =>
                setCurrentStep((prev) => Math.min(STEPS.length, prev + 1))
              }
              className={
                currentStep === STEPS.length
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }
            >
              Next Step
            </Button>
          </div>
        </div>

        <Modal id="completion-modal" title="Order confirmation">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-6">
            <div className="my-3 flex flex-col items-center gap-3 md:my-6 lg:my-8">
              <img
                src={boxTickIcon}
                alt="Confirm"
                className="size-10 md:size-[52px]"
              />
              <h4 className="font-lexend text-black-color text-sm font-bold md:text-base">
                Are you sure you want to finish this order? Please ensure you’ve
                received the item as ordered
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
                className="text-black-color! w-full justify-center"
                popoverTarget="completion-modal"
                popoverTargetAction="hide"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>

        <Modal
          id="testimony-modal"
          title="Leave Testimony?"
          width="max-w-[500px]"
        >
          <div className="flex flex-col items-center gap-2 md:gap-3">
            {/* Stars Rating */}
            <div className="my-3 flex items-center gap-2 md:my-6 md:gap-3 lg:my-8 lg:gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110 focus:outline-none"
                >
                  <StarIcon
                    className="h-8 w-8 transition-colors duration-200 md:h-10 md:w-10 lg:h-12 lg:w-12 lg:text-5xl"
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
                className="border-stroke-color text-black-color! w-full justify-center bg-transparent"
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
          <p className="font-lexend w-full text-base font-bold text-[#292D32] md:text-lg lg:text-[20px]">
            Customer Reviews
          </p>
          <div className="flex w-full flex-col gap-4 rounded-[16px] border border-[#E8E8E8] p-4">
            <div className="flex w-full flex-row items-center justify-between gap-4 lg:gap-[20px]">
              <p className="font-lexend flex items-baseline font-bold text-[#292D32]">
                <span className="text-2xl md:text-3xl lg:text-[32px]">4.0</span>
                <span className="text-base md:text-lg lg:text-[20px]">
                  /5.0
                </span>
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
            <p className="font-lexend w-full text-sm leading-[1.8] font-medium text-[#6A7686] md:text-base lg:text-[18px]">
              “The iPhone is super fast, the MacBook is perfect for work, and
              the AirPods sound crystal clear. Plus, the store's service was
              amazing—fast delivery and great support!”
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
