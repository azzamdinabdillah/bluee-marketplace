import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import proofImage from "/images/proof-image.png";
import maximizeIcon from "/icons/maximize-3.svg";
import Modal from "@src/components/Modal";
import walletIcon from "/icons/card-send-gray.svg";
import calendarIcon from "/icons/calendar-2-black.svg";
import profileIcon from "/icons/profile-black.svg";
import bankIcon from "/icons/bank-black.svg";
import cardTickIcon from "/icons/card-tick-black.svg";
import noteIcon from "/icons/note-colorful.svg";
import DetailsBoxList from "@src/components/backoffice/DetailsBoxList";

type WithdrawalStatusType = "completed" | "pending";

interface WithdrawalStatusProps {
  status: WithdrawalStatusType;
}

const statusConfig = {
  pending: {
    bg: "bg-[url(/images/status-delivering.png)]",
    text: "text-white",
    icon: "/icons/timer-white.svg",
    label: "The withdrawal status is pending",
  },
  completed: {
    bg: "bg-[url(/images/status-completed.png)]",
    text: "text-white",
    icon: "/icons/tick-circle-white.svg",
    label: "The withdrawal status is complete",
  },
};

function WithdrawalStatus({ status }: WithdrawalStatusProps) {
  const config = statusConfig[status];

  return (
    <div
      className={`flex w-full items-center gap-1.5 rounded-2xl bg-cover bg-center bg-no-repeat p-3 md:gap-2.5 md:rounded-[20px] md:p-4 ${config.text} ${config.bg}`}
    >
      <img
        src={config.icon}
        alt={status}
        className="size-7 shrink-0 md:size-9"
      />
      <span className="text-sm leading-[1.4] font-bold md:text-lg">
        {config.label}
      </span>
    </div>
  );
}

export default function DetailsWithdrawal() {
  return (
    <TemplateLayoutBackoffice
      role="seller"
      showBackButton
      title="Withdrawal Details"
      subtitle="Manage My Wallet"
    >
      <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div className="flex flex-col gap-3 md:gap-5">
          <WithdrawalStatus status="completed" />
          {/* <WithdrawalStatus status="pending" /> */}

          <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 md:gap-5 md:p-5 lg:rounded-[20px]">
            <h2 className="text-black-color text-responsive-20 font-bold">
              Proof of Withdrawal
            </h2>

            <button
              popoverTarget="preview-modal"
              className="group relative w-full cursor-pointer overflow-hidden rounded-xl bg-slate-100 md:rounded-2xl"
            >
              <img
                src={proofImage}
                alt="Proof"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60 opacity-60" />

              {/* Preview Button Overlay */}
              <button className="absolute bottom-4 left-1/2 flex -translate-x-1/2 cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 shadow-lg transition-all duration-300 hover:scale-110 md:bottom-5 md:px-5 md:py-2.5 lg:gap-[6px]">
                <img src={maximizeIcon} alt="Preview" />
                <span className="text-black-color text-xs font-extrabold md:text-sm">
                  PREVIEW
                </span>
              </button>
            </button>

            {/* If Empty Proof */}
            {/* <div className="border-dashed-custom border-stroke-color flex h-[280px] flex-col items-center justify-center gap-3 rounded-xl px-6 md:h-[381px] md:gap-4 md:rounded-2xl md:px-[30px]">
              <img
                src={noteIcon}
                alt=""
                className="size-[40px] md:size-[52px]"
              />
              <p className="text-sec-color text-responsive-16 text-center leading-[160%] font-bold">
                The transfer proof will appear once the withdrawals have been
                processed.
              </p>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 md:gap-5 md:rounded-[20px] md:p-5">
          <div className="flex flex-col items-center gap-0.5 justify-self-center p-4 md:w-full md:gap-1 md:p-6 lg:gap-1 lg:p-9">
            <p className="font-lexend text-primary-color text-2xl font-bold lg:text-[32px]">
              Rp 3.200.506
            </p>
            <div className="flex items-center justify-center gap-0.5 md:gap-1 lg:gap-1">
              <img
                src={walletIcon}
                alt="Wallet"
                className="size-3.5 md:size-4 lg:size-5"
              />
              <p className="font-lexend text-sec-color text-responsive-16 font-semibold">
                Total Withdrawal
              </p>
            </div>
          </div>

          <DetailsBoxList
            items={[
              {
                label: "Request Date",
                value: "25 Mei 2025",
                icon: calendarIcon,
              },
              {
                label: "Your Bank Account Name",
                value: "PT Angga Capital",
                icon: profileIcon,
              },
              {
                label: "Your Bank Name",
                value: "Blue Inc",
                icon: bankIcon,
              },
              {
                label: "Your Bank Account Number",
                value: "2005 0005 3555",
                icon: cardTickIcon,
              },
            ]}
          />
        </div>
      </div>

      <Modal id="preview-modal" title="Preview Proof">
        <img src={proofImage} alt="Proof" />
      </Modal>
    </TemplateLayoutBackoffice>
  );
}
