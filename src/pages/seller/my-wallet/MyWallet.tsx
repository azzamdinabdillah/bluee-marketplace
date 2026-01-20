import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import store3 from "/images/store-3.png"
import cardSent from "/icons/card-send.svg"
import cardTick from "/icons/card-tick-black.svg"
import DetailsBoxList from "@src/components/backoffice/DetailsBoxList";
import walletBg from "/images/wallet-bg.png"
import eyeSlash from "/icons/eye-slash.svg"
import shieldTick from "/icons/shield-tick.svg"

export default function MyWallet() {
  return (
    <TemplateLayoutBackoffice
      role="seller"
      title="Manage My Wallet"
      subtitle="View & Update Withdrawals"
    >
      <div className="grid items-start gap-3 md:gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {/* Store Details Card */}
        <div className="flex flex-col gap-5 rounded-[20px] bg-white p-5">
          <h2 className="text-responsive-20 font-bold text-black-color">Store Details</h2>

          <div className="flex items-center gap-3.5">
            <div className="size-[75px] md:size-[92px] overflow-hidden rounded-full bg-[#FF0A0A] flex items-center justify-center">
              <img
                src={store3}
                alt="Store Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg md:text-[22px] font-bold text-black-color">Shayna Sport</h3>
              <div className="flex items-center gap-1.5">
                <img src="/icons/user.svg" alt="User" className="size-4 md:size-5" />
                <span className="text-responsive-16 font-semibold text-sec-color">Shayna Oek</span>
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

        <div className="flex gap-5 flex-col max-w-[470px]">

          <div className="bg-[url(/images/safe-wallet-bg.png)] bg-cover bg-center bg-no-repeat rounded-2xl md:rounded-[20px] px-4 py-3 md:px-6 md:py-4 flex items-center gap-1.5 md:gap-[10px]">
            <img src={shieldTick} alt="" className="size-7 md:size-9" />
            <p className="text-responsive-18 font-bold text-white">Your funds are safe and well protected</p>
          </div>

          <div className="relative max-h-[304px] h-full flex justify-start w-fit md:h-fit lg:h-full">
            <img src={walletBg} alt="" className="w-full h-full object-contain" />

            <div className="flex flex-col gap-2 items-center justify-center absolute top-[13%] left-1/2 -translate-x-1/2 w-full">
              <p className="text-responsive-16 font-medium text-[#BFC6E9]">Total Balance : </p>
              <p className="text-[min(8vw,41px)] md:text-[min(4vw,41px)] xl:text-[40px] font-extrabold text-white">Rp 22.230.500.000</p>
            </div>

            <button className="py-3 px-4 rounded-full border border-[#ffffff08] flex items-center gap-2 bg-[#ffffff0f] text-responsive-16 font-medium text-white absolute bottom-[13%] left-1/2 -translate-x-1/2 w-fit whitespace-nowrap">
              <img src={eyeSlash} alt="" />
              Hide Balance
            </button>
          </div>
        </div>

      </div>

    </TemplateLayoutBackoffice>
  );
}