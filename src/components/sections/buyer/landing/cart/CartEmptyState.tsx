import Button from "@src/components/Button";
import bagCross from "/icons/bag-cross.svg";
import arrowRight from "/icons/arrow-right-rounded.svg";

interface CartEmptyStateProps {
  /**
   * Callback function when the "Find Product" button is clicked
   */
  onFindProduct?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export default function CartEmptyState({
  onFindProduct,
  className = "",
}: CartEmptyStateProps) {
  return (
    <div
      className={`mx-auto flex w-full flex-col items-center justify-center rounded-xl bg-white px-5 py-16 text-center md:rounded-[20px] md:py-[120px] gap-6 md:gap-9 ${className}`}
    >
      {/* Content Message */}
      <div className="flex flex-col items-center gap-4 md:gap-6">
        <div className="flex size-16 items-center justify-center">
          <img src={bagCross} alt="" />
        </div>

        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="text-black-color font-lexend text-xl font-bold leading-[1.25em] md:text-2xl">
            Oops! Your shopping cart is empty.
          </h3>
          <p className="text-sec-color font-lexend text-sm font-semibold leading-[1.25em] md:text-base">
            Time to add the things you love!
          </p>
        </div>
      </div>

      {/* Action Button */}
      <Button
        variant="blue"
        onClick={onFindProduct}
        className="font-bold"
        icon={arrowRight}
      >
        Find Product
      </Button>
    </div>
  );
}
