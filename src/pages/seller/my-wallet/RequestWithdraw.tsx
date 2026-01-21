import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import InputInteractive from "@src/components/InputInteractive";
import Button from "@src/components/Button";
import MoneyIcon from "@src/components/icons/MoneyIcon";
import ProfileCircleIcon from "@src/components/icons/ProfileCircleIcon";
import BankIcon from "@src/components/icons/BankIcon";
import CardReceiveIcon from "@src/components/icons/CardReceiveIcon";
import storeLogoIcon from "/images/store-3.png";
import walletIcon from "/icons/wallet.svg";
import userIcon from "/icons/user.svg";

export default function RequestWithdraw() {
  const rowClass =
    "flex flex-col gap-2 lg:grid lg:grid-cols-[45fr_55fr] lg:flex-row lg:items-start lg:gap-10";
  const labelClass =
    "font-lexend text-sec-color shrink-0 text-sm font-semibold md:text-base";

  return (
    <TemplateLayoutBackoffice
      role="seller"
      showBackButton
      title="Create Withdrawals"
      subtitle="Manage My Wallet"
    >
      {/* Wallet Balance Card */}
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-white p-3 md:grid md:grid-cols-2 md:gap-4 md:rounded-[18px] md:p-4 lg:gap-5 lg:rounded-[20px] lg:p-5">
        {/* Left Section: Store Info */}
        <div className="flex w-full flex-1 shrink-0 grow items-center justify-center gap-2 md:gap-2.5 lg:gap-3.5">
          {/* Store Logo */}
          <div className="relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FF0A0A] md:size-20 lg:size-[92px]">
            <img
              src={storeLogoIcon}
              alt="Store Logo"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Store Details */}
          <div className="flex flex-1 flex-col gap-0.5 overflow-hidden md:gap-1 lg:gap-1.5">
            <h3 className="font-lexend text-black-color truncate text-base font-bold md:text-lg lg:text-[22px]">
              Shayna Sport
            </h3>
            <div className="flex items-center gap-0.5 md:gap-1 lg:gap-1">
              <img
                src={userIcon}
                alt="User"
                className="size-3.5 md:size-4 lg:size-5"
              />
              <span className="font-lexend text-sec-color text-xs font-semibold md:text-sm lg:text-base">
                Shayna Oek
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Balance */}
        <div className="border-stroke-color flex flex-col items-center gap-0.5 justify-self-center md:w-full md:gap-1 md:border-l lg:gap-1">
          <p className="font-lexend text-primary-color text-lg font-bold md:text-2xl lg:text-[32px]">
            Rp 3.200.506
          </p>
          <div className="flex items-center justify-center gap-0.5 md:gap-1 lg:gap-1">
            <img
              src={walletIcon}
              alt="Wallet"
              className="size-3.5 md:size-4 lg:size-5"
            />
            <p className="font-lexend text-sec-color text-xs font-semibold md:text-sm lg:text-base">
              My Balance
            </p>
          </div>
        </div>
      </div>

      {/* Request Withdrawal Form */}
      <div className="flex w-full flex-col gap-3 rounded-[20px] bg-white p-3 md:gap-5 md:p-5">
        <h2 className="text-responsive-18 text-black-color font-bold">
          Request to Withdraw Money
        </h2>

        <div className="flex flex-col gap-3 md:gap-5">
          {/* Amount Total */}
          <div className={rowClass}>
            <label className={labelClass}>Amount Total</label>
            <div className="w-full">
              <InputInteractive label="Enter Total Amount" icon={MoneyIcon} />
            </div>
          </div>

          {/* Your Bank Name */}
          <div className={rowClass}>
            <label className={labelClass}>Your Bank Name</label>
            <div className="w-full">
              <InputInteractive
                label="Enter Bank Name"
                icon={ProfileCircleIcon}
              />
            </div>
          </div>

          {/* Your Bank Account Name */}
          <div className={rowClass}>
            <label className={labelClass}>Your Bank Account Name</label>
            <div className="w-full">
              <InputInteractive
                label="Enter Bank Account Name"
                icon={BankIcon}
              />
            </div>
          </div>

          {/* Your Bank Account Number */}
          <div className={rowClass}>
            <label className={labelClass}>Your Bank Account Number</label>
            <div className="w-full">
              <InputInteractive
                label="Enter Bank Account Number"
                icon={CardReceiveIcon}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-3 flex gap-3 md:mt-0 md:justify-end">
            <Button variant="red" className="w-full rounded-full! md:w-fit">
              Cancel
            </Button>
            <Button variant="blue" className="w-full rounded-full! md:w-fit">
              Request Now
            </Button>
          </div>
        </div>
      </div>
    </TemplateLayoutBackoffice>
  );
}
