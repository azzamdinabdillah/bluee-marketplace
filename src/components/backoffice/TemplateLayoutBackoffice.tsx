import type { ReactNode } from "react";
import HeaderBackoffice from "./HeaderBackoffice";
import Sidebar, { type SidebarRole } from "./Sidebar";

interface TemplateLayoutBackofficeProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  role?: SidebarRole;
  showBackButton?: boolean;
}

export default function TemplateLayoutBackoffice({
  children,
  title,
  subtitle,
  role = "buyer",
  showBackButton = false,
}: TemplateLayoutBackofficeProps) {
  return (
    <div className="flex min-h-screen bg-[#F3F5F9] font-sans">
      <Sidebar role={role} />

      <div className="margin-top-sidebar mx-auto w-full max-w-[1500px] overflow-hidden">
        <HeaderBackoffice
          title={title}
          subtitle={subtitle}
          showBackButton={showBackButton}
        />

        <div className="flex w-full flex-1 flex-col gap-3 overflow-x-hidden p-4 md:gap-5 lg:mt-0 lg:px-5 lg:py-7.5 lg:pt-5">
          {children}
        </div>
      </div>
    </div>
  );
}
