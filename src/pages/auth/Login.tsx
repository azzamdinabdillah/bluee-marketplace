import { Link } from "react-router-dom";
import InputInteractive from "@src/components/InputInteractive";
import Button from "@src/components/Button";
import Checkbox from "@src/components/Checkbox";
import SmsIcon from "@src/components/icons/SmsIcon";
import KeyIcon from '@src/components/icons/KeyIcon';
import sidebarLogo from "/icons/sidebar-logo.svg";
import CarouselAuth from "./CarouselAuth";

export default function Login() {
    return (
        <div className="h-dvh w-full grid grid-cols-1 lg:grid-cols-2 bg-[#F3F5F9]">
            {/* Left Side - Carousel (Desktop Only) */}
            <CarouselAuth />

            {/* Right Side - Login Form */}
            <div className="p-3 md:p-[30px]">
                <div className="h-full w-full rounded-[20px] flex items-center justify-center bg-white p-4 md:p-8 lg:p-6">
                    <form className="w-full flex flex-col gap-8 lg:gap-[40px] max-w-[512px] mx-auto">
                        {/* Header/Logo */}
                        <div className="flex justify-center items-center gap-3">
                            <img src={sidebarLogo} alt="Bluee" className="w-[41px] h-[32px]" />
                            <span className="text-[25px] md:text-[30px] font-black leading-[1.2] tracking-wider uppercase font-montserrat text-[#292D32]">BLUEE</span>
                        </div>

                        <div className="flex flex-col gap-6 md:gap-[30px] justify-center">
                            <div className="flex flex-col gap-3 justify-center mx-auto">
                                <h1 className="text-xl md:text-2xl lg:text-[24px] font-bold text-[#292D32] font-lexend">Hey🙌🏻, Welcome Back!</h1>
                                <p className="text-sm md:text-base lg:text-[16px] font-medium text-sec-color font-lexend">Login to your account to continue!</p>
                            </div>

                            <div className="flex flex-col gap-3 justify-center">
                                <div className="flex flex-col gap-3 md:gap-4">
                                    <div className='flex flex-col gap-3'>
                                        <p className="text-base leading-tight font-semibold text-sec-color">
                                            Email Address
                                        </p>
                                        <InputInteractive
                                            label="Enter Your Email"
                                            icon={SmsIcon}
                                            type="email"
                                            className="font-lexend font-bold"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <p className="text-base leading-tight font-semibold text-sec-color">
                                            Password
                                        </p>
                                        <InputInteractive
                                            label="Enter Your Password"
                                            icon={KeyIcon}
                                            type="password"
                                            className="font-lexend font-bold"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="remember" />
                                        <label htmlFor="remember" className="text-sm md:text-base font-semibold text-sec-color cursor-pointer font-lexend">Remember me</label>
                                    </div>
                                    <Link to="/forgot-password" className="text-sm md:text-base font-semibold text-sec-color font-lexend hover:underline">Reset Password</Link>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link to={'/'}>
                                <Button variant="blue" className="w-full rounded-full! text-base font-semibold" type="submit">
                                    Sign In
                                </Button>
                            </Link>

                            <div className="text-center">
                                <span className="text-sec-color font-medium text-sm md:text-base font-lexend">Don’t have account? </span>
                                <Link to="/register" className="text-primary-color font-semibold     text-sm md:text-base underline font-lexend">Create Account</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
