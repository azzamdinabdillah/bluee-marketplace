import React from "react";
import Sidebar from "@src/components/backoffice/Sidebar";
import HeaderBackoffice from "@src/components/backoffice/HeaderBackoffice";
import WalletIcon from "@src/components/icons/WalletIcon";
import CartIcon from "@src/components/icons/CartIcon";

interface StatCardProps {
    icon: React.ElementType;
    value: string;
    label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => {
    return (
        <div className="group flex flex-col gap-4 md:gap-6 p-4 md:p-5 bg-white rounded-[20px] shadow-sm hover:shadow-md w-full transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-100">
            <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-[50px] bg-[#1053D5]/[0.09] p-3 lg:p-4 transition-transform group-hover:scale-105">
                <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#1053D5]" />
            </div>
            <div className="flex flex-col gap-[6px]">
                <h3 className="text-[#292D32] font-bold text-3xl lg:text-4xl leading-[1.25]">
                    {value}
                </h3>
                <p className="text-[#6A7686] font-medium text-base lg:text-lg leading-[1.25]">
                    {label}
                </p>
            </div>
        </div>
    );
};

export default function Overview() {
    return (
        <div className="flex min-h-screen bg-[#F3F5F9] font-sans">
            <Sidebar />

            <div className="flex-1 p-4 mt-16 lg:mt-0 lg:py-7.5 lg:px-5 w-full overflow-x-hidden">
                <HeaderBackoffice
                    title="Dashboard Overviews"
                    subtitle="View Your Dashboard"
                />

                <div className="mt-6 lg:mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5 w-full max-w-[960px]">
                        <StatCard
                            icon={WalletIcon}
                            value="Rp 920.650.320"
                            label="Total Expense"
                        />
                        <StatCard
                            icon={CartIcon}
                            value="16.200"
                            label="Total Products"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
