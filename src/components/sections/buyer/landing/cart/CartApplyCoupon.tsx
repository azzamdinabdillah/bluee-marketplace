import { useState } from "react";
import ticketDiscount from "/icons/ticket-discount.svg";
import arrowRightPlainWhite from "/icons/arrow-right-plain-white.svg";
import Modal from "@src/components/Modal";

interface Coupon {
  id: string;
  title: string;
  description: string;
  code: string;
  discount: string;
  expiry: string;
}

const MOCK_COUPONS: Coupon[] = [
  {
    id: "1",
    title: "Diskon Pengguna Baru",
    description: "Potongan harga spesial untuk transaksi pertama Anda",
    code: "NEWUSER50",
    discount: "50%",
    expiry: "Berakhir dlm 3 hari",
  },
  {
    id: "2",
    title: "Gratis Ongkir",
    description: "Gratis ongkir hingga Rp20.000 tanpa minimum pembelian",
    code: "FREESHIP",
    discount: "Free Shipping",
    expiry: "Berakhir dlm 5 jam",
  },
  {
    id: "3",
    title: "Cashback Mingguan",
    description: "Dapatkan cashback 10% untuk pembelian elektronik",
    code: "ELECTRO10",
    discount: "10%",
    expiry: "Berlaku hingga 30 Jan",
  },
];

export default function CartApplyCoupon() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<string | null>(null);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="flex w-full cursor-pointer flex-row items-center justify-between gap-3 rounded-xl bg-[url('/images/bg-coupon.png')] bg-cover bg-center p-4 md:gap-[14px] md:rounded-[20px] md:p-5 hover:opacity-95 transition-opacity"
      >
        <div className="flex flex-1 flex-row items-center gap-3 md:gap-[14px]">
          <div className="border-2 border-[#ffffff17] bg-[#ffffff17] rounded-2xl md:rounded-[20px] p-2 md:p-4">
            <img
              src={ticketDiscount}
              alt="coupon"
              className=""
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-[4px]">
            <h5 className="font-lexend text-base font-bold text-white md:text-lg">
              Apply Discount Coupon
            </h5>
            <p className="font-lexend text-sm font-medium text-[#98E1E1] md:text-base">
              You Have {MOCK_COUPONS.length} Available Coupons
            </p>
          </div>
        </div>
        <img
          src={arrowRightPlainWhite}
          alt="arrow"
          className="size-3 md:size-5"
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Pilih Kupon"
        width="w-full max-w-[500px]"
        footer={
          <button
            onClick={() => setIsModalOpen(false)}
            className="w-full rounded-xl bg-primary-color py-3 text-sm md:text-base font-bold text-white transition-colors hover:bg-primary-color/90"
          >
            Terapkan
          </button>
        }
      >
        <div className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Masukkan kode promo"
              className="w-full rounded-xl border border-stroke-color bg-gray-50 py-3 pl-4 pr-20 md:pr-24 font-lexend text-sm text-black-color outline-none placeholder:text-sec-color focus:border-transparent focus:ring-2 focus:ring-inset focus:ring-primary-color"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-light-blue-color px-3 py-1.5 md:px-4 text-xs md:text-sm font-semibold text-primary-color hover:bg-primary-color/20 transition-colors">
              Pakai
            </button>
          </div>

          <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto scrollbar-hide">
            {MOCK_COUPONS.map((coupon) => (
              <div
                key={coupon.id}
                onClick={() => setSelectedCoupon(coupon.id === selectedCoupon ? null : coupon.id)}
                className={`cursor-pointer rounded-xl border-2 p-3 md:p-4 transition-all ${selectedCoupon === coupon.id
                  ? "border-primary-color bg-light-blue-color"
                  : "border-stroke-color hover:border-gray-300"
                  }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h6 className="font-lexend text-sm md:text-base font-bold text-black-color truncate">
                      {coupon.title}
                    </h6>
                    <p className="mt-1 font-lexend text-xs md:text-sm text-sec-color line-clamp-2">
                      {coupon.description}
                    </p>
                    <div className="mt-2 md:mt-3 flex flex-wrap items-center gap-1.5 md:gap-2">
                      <span className="rounded bg-white/50 border border-primary-color/10 px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs font-semibold text-primary-color">
                        {coupon.code}
                      </span>
                      <span className="text-[10px] md:text-xs text-sec-color hidden sm:inline">•</span>
                      <span className="text-[10px] md:text-xs text-sec-color">{coupon.expiry}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 md:gap-2 shrink-0">
                    <div className={`flex size-4 md:size-5 items-center justify-center rounded-full border ${selectedCoupon === coupon.id
                      ? "border-primary-color bg-primary-color"
                      : "border-gray-300"
                      }`}>
                      {selectedCoupon === coupon.id && (
                        <div className="size-1.5 md:size-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="font-lexend text-base md:text-lg font-bold text-primary-color text-right">
                      {coupon.discount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
