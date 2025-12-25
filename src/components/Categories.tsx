const img =
  "http://localhost:3845/assets/88171e7850d26e27ed5b9091d276773352644a3f.svg";

export default function Categories() {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex items-center justify-between">
        <div className="relative text-[32px] text-black font-extrabold leading-[160%]">
          <p className="mb-0">Explore High Quality</p>
          <p>Products by Categories</p>
        </div>

        <div className="flex items-center justify-center gap-2.5 px-6 py-4 bg-black-color rounded-[18px] relative">
          <p className="text-[16px] text-white text-nowrap font-medium">
            VIEW ALL
          </p>

          <div className="relative shrink-0 size-6">
            <img src={img} alt="" className="block size-full max-w-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
