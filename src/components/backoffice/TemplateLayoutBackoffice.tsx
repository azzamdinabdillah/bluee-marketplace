import type { ReactNode } from "react";
import HeaderBackoffice from "./HeaderBackoffice";
import Sidebar from "./Sidebar";

export default function TemplateLayoutBackoffice({ children, title, subtitle }: { children: ReactNode, title: string, subtitle: string }) {
    return (
        <div className="flex min-h-screen bg-[#F3F5F9] font-sans">
            <Sidebar />

            <div className="w-full overflow-hidden margin-top-sidebar max-w-[1500px] mx-auto">
                <HeaderBackoffice
                    title={title}
                    subtitle={subtitle}
                />

                <div className="flex w-full flex-1 flex-col gap-3 overflow-x-hidden p-4 md:gap-5 lg:mt-0 lg:px-5 lg:py-7.5 lg:pt-5">
                    {children}
                </div>
            </div>
        </div>
    );
}