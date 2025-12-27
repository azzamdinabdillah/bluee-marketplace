import Button from './Button';
import HeartIcon from './icons/HeartIcon';

interface SellerCardProps {
    storeName?: string;
    brand?: string;
    sellerName?: string;
    city?: string;
    address?: string;
    isVerified?: boolean;
    coverImage?: string;
    profileImage?: string;
    coverBackgroundColor?: string;
}

const VerifyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="#1053D5" />
        <path d="M4.5 8.5L6.5 10.5L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const LocationIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function SellerCard({
    storeName = "Xiaomi Store Indonesia",
    brand = "Xiaomi",
    sellerName = "Budi Hartanto",
    city = "Bandung",
    address = "Cihampelas",
    isVerified = true,
    coverImage,
    coverBackgroundColor = "#F3F5F9"
}: SellerCardProps) {
    return (
        <div className="flex flex-col w-full md:max-w-[376px] rounded-[20px] border border-stroke-color bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Cover Image Area */}
            <div
                className="h-[150px] md:h-[220px] w-full relative flex justify-center items-center"
                style={{ backgroundColor: coverBackgroundColor }}
            >
                {coverImage ? (
                    <img src={coverImage} alt={storeName} className="size-[50%] object-contain" />
                ) : (
                    <div className="w-full h-full" />
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 md:gap-6 p-4 md:p-5">
                {/* Header Store Name */}
                <div className="flex flex-col gap-1 md:gap-2">
                    {isVerified && (
                        <div className="flex items-center gap-1.5">
                            <VerifyIcon />
                            <span className="text-xs md:text-[16px] font-bold text-primary-color uppercase leading-tight tracking-wide">Verified Store</span>
                        </div>
                    )}
                    <h3 className="text-lg md:text-[20px] font-bold text-black-color leading-tight md:leading-[25px] truncate">{storeName}</h3>
                </div>

                <div className="h-px w-full bg-stroke-color"></div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="flex flex-col gap-1 md:gap-[6px]">
                        <span className="text-sm md:text-[18px] font-bold text-black-color leading-tight md:leading-[22.5px] truncate">{brand}</span>
                        <div className="flex items-center gap-1.5 md:gap-[6px]">
                            <div className="w-4 h-4 md:w-5 md:h-5 shrink-0 flex items-center justify-center">
                                <UserIcon />
                            </div>
                            <span className="text-xs md:text-[16px] font-semibold text-sec-color leading-tight md:leading-5 truncate">{sellerName}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 md:gap-[6px]">
                        <span className="text-sm md:text-[18px] font-bold text-black-color leading-tight md:leading-[22.5px] truncate">{city}</span>
                        <div className="flex items-center gap-1.5 md:gap-[6px]">
                            <div className="w-4 h-4 md:w-5 md:h-5 shrink-0 flex items-center justify-center">
                                <LocationIcon />
                            </div>
                            <span className="text-xs md:text-[16px] font-semibold text-sec-color leading-tight md:leading-5 truncate">{address}</span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-stretch gap-2 md:gap-3 mt-1 md:mt-2">
                    <button
                        className="flex cursor-pointer h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#FF3056]/9 transition-colors hover:bg-[#FF3056] group md:h-14 md:w-14 md:rounded-2xl"
                        aria-label="Add to wishlist"
                    >
                        <HeartIcon
                            className="h-5 w-5 fill-transparent stroke-current text-[#FF3056] transition-colors duration-200 group-hover:fill-white group-hover:stroke-white md:h-6 md:w-6"
                        />
                    </button>
                    <Button
                        variant="lightBlue"
                        className='w-full'
                    >
                        Visit Store
                    </Button>
                </div>
            </div>
        </div>
    );
}
