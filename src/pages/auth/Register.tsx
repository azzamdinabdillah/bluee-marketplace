import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import InputInteractive from "@src/components/InputInteractive";
import Button from "@src/components/Button";
import SmsIcon from "@src/components/icons/SmsIcon";
import KeyIcon from '@src/components/icons/KeyIcon';
import sidebarLogo from "/icons/sidebar-logo.svg";
import CarouselAuth from "./CarouselAuth";
import SendSquareIcon from "/icons/send-square.svg";
import StoreIcon from "@src/components/icons/StoreIcon";
import ShoppingCart from "@src/components/icons/ShoppingCart";
import ProfileCircleIcon from "@src/components/icons/ProfileCircleIcon";
import CallIcon from "@src/components/icons/CallIcon";

export default function Register() {
    const [accountType, setAccountType] = useState<string>("buyer");
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="h-dvh w-full relative bg-[#F3F5F9] overflow-hidden">
            {/* Left Side - Carousel (Desktop Only) */}
            <div className="hidden lg:block absolute left-0 top-0 w-1/2 h-full z-10">
                <CarouselAuth />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 h-full absolute right-0 top-0 overflow-y-auto p-3 md:p-[30px] z-20">
                <div className="min-h-full w-full rounded-[20px] flex items-center justify-center bg-white p-4 md:p-8 lg:p-6">
                    <form className="w-full flex flex-col gap-8 lg:gap-[40px] max-w-[512px] mx-auto">
                        {/* Header/Logo */}
                        <div className="flex justify-center items-center gap-3">
                            <img src={sidebarLogo} alt="Bluee" className="w-[41px] h-[32px]" />
                            <span className="text-[25px] md:text-[30px] font-black leading-[1.2] tracking-wider uppercase font-montserrat text-[#292D32]">BLUEE</span>
                        </div>

                        <div className="flex flex-col gap-6 md:gap-[30px] justify-center">
                            <div className="flex flex-col gap-3 justify-center mx-auto">
                                <h1 className="text-xl md:text-2xl lg:text-[24px] font-bold text-[#292D32] font-lexend">Hey 🙌🏻, Welcome Aboard!</h1>
                                <p className="text-sm md:text-base lg:text-[16px] font-medium text-sec-color font-lexend">Create Account to continue!</p>
                            </div>

                            <div className="flex flex-col gap-3 md:gap-4">
                                {/* Profile Picture */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-semibold text-sec-color font-lexend">Profile Picture</label>
                                    <div className="flex items-center justify-between gap-6 w-full">
                                        <div className="size-[100px] bg-[#D9D9D9] rounded-full shrink-0 overflow-hidden relative">
                                            {profileImage ? (
                                                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-[#D9D9D9]" />
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            className="hidden"
                                            accept="image/*"
                                        />
                                        <Button iconPosition="left" variant="black" icon={SendSquareIcon} type="button" onClick={handleButtonClick}>
                                            <span className="text-base font-medium font-lexend text-white">Add Photo</span>
                                        </Button>
                                    </div>
                                </div>

                                {/* Account Type */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-semibold text-sec-color font-lexend">Account Type</label>
                                    <div className="grid grid-cols-2 gap-6 w-full items-center">
                                        <button
                                            type="button"
                                            onClick={() => setAccountType('seller')}
                                            className={`flex items-center gap-3 md:gap-[18px] p-4 md:py-6 md:px-5 md:h-[76px] rounded-[18px] border-[1.5px] transition-colors group w-full justify-between
                                                ${accountType === 'seller' ? 'border-primary-color bg-white' : 'border-stroke-color bg-white hover:border-primary-color'}`}
                                        >
                                            <div className="flex items-center gap-3 md:gap-[18px]">
                                                <StoreIcon className={`size-5 md:size-6 transition-colors shrink-0 ${accountType === 'seller' ? 'text-primary-color' : 'text-sec-color group-hover:text-primary-color'}`} />
                                                <div className={`w-[1.5px] h-6 md:h-8 transition-colors ${accountType === 'seller' ? 'bg-primary-color' : 'bg-stroke-color group-hover:bg-primary-color'}`}></div>
                                                <span className="text-sm md:text-base font-bold text-black-color font-lexend">Seller</span>
                                            </div>
                                            {/* Radio Indicator */}
                                            <div className={`size-[18px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-colors
                                                ${accountType === 'seller' ? 'border-primary-color' : 'border-sec-color'}`}>
                                                {accountType === 'seller' && <div className="size-2.5 bg-primary-color rounded-full" />}
                                            </div>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setAccountType('buyer')}
                                            className={`flex items-center gap-3 md:gap-[18px] p-4 md:py-6 md:px-5 md:h-[76px] rounded-[18px] border-[1.5px] transition-colors group w-full justify-between
                                                ${accountType === 'buyer' ? 'border-primary-color bg-white' : 'border-stroke-color bg-white hover:border-primary-color'}`}
                                        >
                                            <div className="flex items-center gap-3 md:gap-[18px]">
                                                <ShoppingCart className={`size-5 md:size-6 transition-colors shrink-0 ${accountType === 'buyer' ? 'text-primary-color' : 'text-sec-color group-hover:text-primary-color'}`} />
                                                <div className={`w-[1.5px] h-6 md:h-8 transition-colors ${accountType === 'buyer' ? 'bg-primary-color' : 'bg-stroke-color group-hover:bg-primary-color'}`}></div>
                                                <span className="text-sm md:text-base font-bold text-black-color font-lexend">Buyer</span>
                                            </div>
                                            {/* Radio Indicator */}
                                            <div className={`size-[18px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-colors
                                                ${accountType === 'buyer' ? 'border-primary-color' : 'border-sec-color'}`}>
                                                {accountType === 'buyer' && <div className="size-2.5 bg-primary-color rounded-full" />}
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* Form Inputs */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-semibold text-sec-color font-lexend">Complete Name</label>
                                    <InputInteractive label="Enter Your Fullname" icon={ProfileCircleIcon} />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-semibold text-sec-color font-lexend">Email Address</label>
                                    <InputInteractive label="Enter Your Email Address" icon={SmsIcon} />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-semibold text-sec-color font-lexend">Phone Number</label>
                                    <InputInteractive label="Enter Your Phone Number" icon={CallIcon} />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-semibold text-sec-color font-lexend">Password</label>
                                    <InputInteractive label="Enter Your Password" icon={KeyIcon} type="password" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-base font-semibold text-sec-color font-lexend">Password Confirmation</label>
                                    <InputInteractive label="Enter Your Password Confirmation" icon={KeyIcon} type="password" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link to={'/'}>
                                <Button variant="blue" className="w-full rounded-full! text-base font-semibold" type="submit">
                                    Create Account
                                </Button>
                            </Link>

                            <div className="text-center">
                                <span className="text-sec-color font-medium text-sm md:text-base font-lexend">Already have account? </span>
                                <Link to="/login" className="text-primary-color font-semibold     text-sm md:text-base underline font-lexend">Sign In</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
