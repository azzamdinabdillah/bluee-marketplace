import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import store3 from "/images/store-3.png";
import cardTick from "/icons/card-tick-black.svg";
import cardTickColor from "/icons/card-tick-color.svg";
import cardSentColor from "/icons/card-send-color.svg";
import cardSent from "/icons/card-send.svg";
import addCircle from "/icons/add-circle.svg";
import DetailsBoxList from "@src/components/backoffice/DetailsBoxList";
import walletBg from "/images/wallet-bg.png";
import eyeSlash from "/icons/eye-slash.svg";
import shieldTick from "/icons/shield-tick.svg";
import SectionFilter from "@src/components/backoffice/SectionFilter";
import Button from "@src/components/Button";
import Pagination from "@src/components/backoffice/Pagination";
import noteIcon from "/icons/note.svg";
import StatusBadge from "@src/components/backoffice/StatusBadge";
import type { StatusBadgeVariant } from "@src/components/backoffice/StatusBadge";

const withdrawals = [
  {
    id: 1,
    amount: "Rp 320.000",
    status: "Completed",
  },
  {
    id: 2,
    amount: "Rp 1.200.000",
    status: "Waiting",
  },
  {
    id: 3,
    amount: "Rp 2.050.000",
    status: "Completed",
  },
  {
    id: 4,
    amount: "Rp 50.000.000",
    status: "Waiting",
  },
];

const WithdrawalRow = ({ amount, status }: (typeof withdrawals)[0]) => {
  const getStatusVariant = (status: string): StatusBadgeVariant => {
    switch (status.toLowerCase()) {
      case "completed":
        return "completed";
      case "waiting":
        return "waiting";
      default:
        return "default";
    }
  };

  const getIconConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return {
          icon: cardTickColor,
          bg: "bg-[rgba(0,164,138,0.09)]",
          textColor: "text-[#00a48a]",
        };
      case "waiting":
        return {
          icon: cardSentColor,
          bg: "bg-[rgba(255,112,32,0.09)]",
          textColor: "text-[#FF7020]",
        };
      default:
        return {
          icon: cardTick,
          bg: "bg-[#F2F2F2]",
          textColor: "text-sec-color",
        };
    }
  };

  const iconConfig = getIconConfig(status);

  return (
    <div className="border-stroke-color flex flex-col gap-3 rounded-2xl border bg-white p-3 md:flex-row md:items-center md:justify-between md:gap-4 md:rounded-[18px] md:p-4 lg:gap-5 lg:rounded-[20px] lg:p-4">
      {/* Icon & Amount Section */}
      <div className="flex flex-1 items-center gap-2.5 md:gap-3 lg:gap-3.5 shrink-0">
        <div
          className={`relative flex size-12 shrink-0 items-center justify-center rounded-lg md:rounded-2xl md:size-14 lg:size-[72px] ${iconConfig.bg}`}
        >
          <img
            src={iconConfig.icon}
            alt={status}
            className="size-5 object-contain md:size-6 lg:size-8"
          />
        </div>
        <div className="flex flex-col gap-0.5 md:gap-1 lg:gap-1.5">
          <p
            className={`font-lexend text-base font-bold md:text-lg lg:text-[22px] ${iconConfig.textColor}`}
          >
            {amount}
          </p>
          <p className="text-sec-color font-lexend text-xs font-semibold md:text-sm lg:text-base">
            Withdrawal
          </p>
        </div>
      </div>

      {/* Status Badge Section */}
      <div className="flex flex-1 items-center justify-start md:justify-center">
        <StatusBadge status={status} variant={getStatusVariant(status)} />
      </div>

      {/* Details Button Section */}
      <div className="flex flex-1 justify-stretch md:justify-end">
        <Button
          variant="blue"
          icon="/icons/eye.svg"
          iconPosition="left"
          className="w-full md:w-fit"
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default function MyWallet() {
  return (
    <TemplateLayoutBackoffice
      role="seller"
      title="Manage My Wallet"
      subtitle="View & Update Withdrawals"
    >
      <div className="grid items-start gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-1 xl:grid-cols-2">
        {/* Store Details Card */}
        <div className="flex flex-col gap-5 rounded-[20px] bg-white p-5">
          <h2 className="text-responsive-20 text-black-color font-bold">
            Store Details
          </h2>

          <div className="flex items-center gap-3.5">
            <div className="flex size-[75px] items-center justify-center overflow-hidden rounded-full bg-[#FF0A0A] md:size-[92px]">
              <img
                src={store3}
                alt="Store Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-black-color text-lg font-bold md:text-[22px]">
                Shayna Sport
              </h3>
              <div className="flex items-center gap-1.5">
                <img
                  src="/icons/user.svg"
                  alt="User"
                  className="size-4 md:size-5"
                />
                <span className="text-responsive-16 text-sec-color font-semibold">
                  Shayna Oek
                </span>
              </div>
            </div>
          </div>

          <DetailsBoxList
            items={[
              {
                icon: cardTick,
                value: 19,
                label: "Completed Withdrawals",
              },
              {
                icon: cardSent,
                value: 1,
                label: "Waiting Withdrawals",
              },
            ]}
          />
        </div>

        <div className="flex max-w-[470px] flex-col gap-5">
          <div className="flex items-center gap-1.5 rounded-2xl bg-[url(/images/safe-wallet-bg.png)] bg-cover bg-center bg-no-repeat px-4 py-3 md:gap-[10px] md:rounded-[20px] md:px-6 md:py-4">
            <img src={shieldTick} alt="" className="size-7 md:size-9" />
            <p className="text-responsive-18 font-bold text-white">
              Your funds are safe and well protected
            </p>
          </div>

          <div className="relative flex h-full max-h-[304px] w-fit justify-start md:h-fit lg:h-full">
            <img
              src={walletBg}
              alt=""
              className="h-full w-full object-contain"
            />

            <div className="absolute top-[13%] left-1/2 flex w-full -translate-x-1/2 flex-col items-center justify-center gap-2">
              <p className="text-responsive-16 font-medium text-[#BFC6E9]">
                Total Balance :{" "}
              </p>
              <p className="text-[min(8vw,41px)] font-extrabold text-white md:text-[min(4vw,41px)] xl:text-[40px]">
                Rp 22.230.500.000
              </p>
            </div>

            <button className="text-responsive-16 absolute bottom-[13%] left-1/2 flex w-fit -translate-x-1/2 cursor-pointer items-center gap-2 rounded-full border border-[#ffffff08] bg-[#ffffff0f] px-4 py-3 font-medium whitespace-nowrap text-white transition-all hover:bg-[#ffffff1a]">
              <img src={eyeSlash} alt="" />
              Hide Balance
            </button>
          </div>
        </div>
      </div>

      <SectionFilter
        title="All Withdrawals"
        badgeIcon={noteIcon}
        badgeValue={20}
        badgeLabel="Withdrawals"
        showSearch={false}
        showEntries={false}
        rightElement={
          <Button to="/backoffice-seller/my-wallet/request-withdraw" variant="blue" className="rounded-full!" icon={addCircle}>
            Request Withdraw
          </Button>
        }
      >
        <div className="flex flex-col gap-4">
          {withdrawals.map((withdrawal) => (
            <WithdrawalRow key={withdrawal.id} {...withdrawal} />
          ))}
        </div>

        <div className="flex justify-end md:justify-start">
          <Pagination />
        </div>

        {/* <EmptyState/> */}
      </SectionFilter>
    </TemplateLayoutBackoffice>
  );
}
