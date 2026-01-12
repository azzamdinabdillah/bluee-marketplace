import Sidebar from '@src/components/backoffice/Sidebar';
import SearchIcon from '@src/components/icons/SearchIcon';
import Notification from '@src/components/icons/Notification';
import crownIcon from '/icons/crown-black.svg';
import userIcon from '/icons/user.svg';
import logoutIcon from '/icons/logout.svg';
import profileIcon from '/images/user.png';

export default function MyTransaction() {
    return (
        <div className="flex min-h-screen bg-[#F3F5F9] font-sans">
            <Sidebar />

            <div className="flex-1 p-4 mt-16 lg:mt-0 lg:py-7.5 lg:px-5 w-full overflow-x-hidden">
                <div className='flex flex-col md:flex-row gap-3 md:gap-5'>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-5 lg:px-5 lg:py-[18px] bg-white rounded-2xl md:rounded-[18px] lg:rounded-[20px] w-full gap-4 md:gap-5 lg:gap-6">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black-color font-lexend">Manage Transactions</h2>
                            <p className="text-sm md:text-[15px] lg:text-base font-semibold text-sec-color font-lexend">View & Update Your Transactions</p>
                        </div>

                        <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3">
                            <button className="group w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[#F3F3F3] hover:bg-primary-color flex items-center justify-center transition-colors duration-200 cursor-pointer">
                                <SearchIcon className="w-5 h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6 text-[#292D32] group-hover:text-white transition-colors duration-200" />
                            </button>

                            <button className="group w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[#F3F3F3] hover:bg-primary-color flex items-center justify-center transition-colors duration-200 cursor-pointer">
                                <Notification className="w-5 h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6 text-[#292D32] group-hover:text-white transition-colors duration-200" />
                            </button>

                            <div className="relative">
                                <button className="group w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[#CBEE5A] hover:bg-primary-color flex items-center justify-center transition-colors duration-200 cursor-pointer">
                                    <img src={crownIcon} alt="" className="w-5 h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6 group-hover:brightness-0 group-hover:invert transition-all duration-200" />
                                </button>
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#292D32] text-white text-[8px] font-extrabold px-2 py-1 rounded-[20px]">
                                    PRO
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between bg-white rounded-2xl md:rounded-[18px] lg:rounded-[20px] shrink-0 p-3 md:p-4 lg:px-[20px] lg:py-[18px] gap-2 md:gap-2.5 lg:gap-[10px] w-full md:w-fit xl:w-[260px]">
                        <div className="flex flex-row items-center gap-2 md:gap-2.5 lg:gap-[10px]">
                            {/* Avatar */}
                            <div className="w-10 h-10 md:w-12 md:h-12 lg:w-[56px] lg:h-[56px] rounded-full overflow-hidden shrink-0 bg-gray-100">
                                <img src={profileIcon} alt="Profile" className="w-full h-full object-cover" />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-0.5 md:gap-1 lg:gap-1.5">
                                <h3 className="font-lexend font-semibold text-black-color text-sm md:text-[15px] lg:text-base leading-tight">
                                    Bimore W
                                </h3>
                                <div className="flex flex-row items-center gap-1 text-sec-color">
                                    <img src={userIcon} alt="Role" className="w-3 h-3 md:w-4 md:h-4" />
                                    <span className="font-lexend font-medium text-xs md:text-sm lg:text-base leading-tight">
                                        Buyer
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Logout */}
                        <button className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 hover:bg-gray-50 rounded-full transition-colors cursor-pointer">
                            <img src={logoutIcon} alt="Logout" className="w-5 h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
