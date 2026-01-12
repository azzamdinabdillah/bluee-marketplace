import { useState } from 'react';
import SidebarOverview from '../icons/SidebarOverview';
import SidebarTransaction from '../icons/SidebarTransaction';
import SidebarAddress from '../icons/SidebarAddress';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('transactions');

    return (
        <>
            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100 h-16 flex items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                    <img src="/icons/sidebar-logo.svg" alt="Bluee" className="w-[30px] h-[24px]" />
                    <span className="text-[20px] font-black leading-[1.2] tracking-wider uppercase font-montserrat text-[#292D32]">Bluee</span>
                </div>
                <button
                    className="p-2 -mr-2 text-[#292D32] hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(true)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                </button>
            </div>

            {/* Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className={`sidebar fixed md:sticky top-0 left-0 z-50 h-screen w-[280px] bg-white border-r border-gray-100 shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
                <div className="flex flex-col h-full py-[30px] px-4 gap-[30px] overflow-y-auto">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/icons/sidebar-logo.svg" alt="Bluee" className="w-[41px] h-[32px]" />
                        <span className="text-[25px] font-black leading-[1.2] tracking-wider uppercase font-montserrat text-[#292D32]">Bluee</span>
                    </div>

                    {/* Main Menu */}
                    <div className="flex flex-col gap-4">
                        <div className="text-[#6A7686] font-['Lexend_Deca'] font-medium text-base">Main Menu</div>
                        <div className="flex flex-col gap-2">
                            {[
                                { id: 'overview', label: 'Overview', icon: SidebarOverview },
                                { id: 'transactions', label: 'My Transactions', icon: SidebarTransaction },
                                { id: 'address', label: 'My Address', icon: SidebarAddress }
                            ].map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        setActiveMenu(item.id);
                                        setIsOpen(false);
                                    }}
                                    className={`relative lg:h-14 flex items-center gap-2 p-[10px_0_10px_16px] rounded-[16px] overflow-hidden cursor-pointer group transition-colors ${activeMenu === item.id
                                        ? 'bg-[#1053D5]/10 text-[#1053D5]'
                                        : 'text-[#292D32] hover:bg-gray-50 hover:text-[#1053D5]'
                                        }`}
                                >
                                    <item.icon
                                        className={`${activeMenu === item.id ? 'text-[#1053D5]' : 'text-[#292D32] group-hover:text-[#1053D5]'}`}
                                        stroke="currentColor"
                                    />
                                    <span className={`font-['Lexend_Deca'] text-base flex-1 ${activeMenu === item.id ? 'font-bold' : 'font-medium'}`}>
                                        {item.label}
                                    </span>
                                    {activeMenu === item.id && (
                                        <div className="w-2 h-7.5 md:h-9 bg-[#1053D5] rounded-l-[6px] md:rounded-l-[12px] absolute right-0 top-1/2 -translate-y-1/2"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
