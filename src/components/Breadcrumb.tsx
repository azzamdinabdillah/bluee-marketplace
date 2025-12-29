import React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  title,
  children,
  className = "",
}) => {
  return (
    <div className="bg-[#F3F5F9]">
      <div
        className={`box-border flex w-full max-w-1176 flex-col gap-2 px-4 py-3 md:py-6 md:gap-[12px] md:px-8 md:py-[${title && children ? '52px' : '24px'}] lg:px-[52px] xl:px-0 ${className}`}
      >
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb">
          <ol className="m-0 flex list-none flex-row flex-wrap items-center gap-2 p-0 md:gap-[12px]">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              // Item aktif jika diset true atau merupakan item terakhir
              const isActive = item.active !== undefined ? item.active : isLast;

              return (
                <React.Fragment key={index}>
                  <li
                    className={`flex items-center text-xs md:text-sm leading-[1.25em] md:text-[18px] ${
                      isActive
                        ? "text-primary-color font-semibold"
                        : "text-sec-color font-medium"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.href && !isActive ? (
                      <a
                        href={item.href}
                        className="hover:text-primary-color transition-colors focus:underline focus:outline-none"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                  {!isLast && (
                    <li
                      aria-hidden="true"
                      className="text-sec-color text-sm leading-[1.25em] font-medium md:text-[20px]"
                    >
                      /
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ol>
        </nav>

        {/* Title */}
        {title && (
          <h1 className="m-0 text-2xl leading-[1.25em] font-extrabold text-black capitalize md:text-[32px]">
            {title}
          </h1>
        )}

        {/* Children Elements (Stats/Info) */}
        {children && <div className="w-full">{children}</div>}
      </div>
    </div>
  );
};

export default Breadcrumb;
