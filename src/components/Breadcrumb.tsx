import React from 'react';

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

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, title, children, className = '' }) => {
  return (
    <div className={`bg-[#F3F5F9] px-4 py-6 md:px-[52px] md:py-[52px] flex flex-col gap-2 md:gap-[12px] w-full box-border ${className}`}>
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-row flex-wrap items-center gap-2 md:gap-[12px] list-none p-0 m-0">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            // Item aktif jika diset true atau merupakan item terakhir
            const isActive = item.active !== undefined ? item.active : isLast;

            return (
              <React.Fragment key={index}>
                <li
                  className={`flex items-center text-sm md:text-[18px] leading-[1.25em] ${isActive
                      ? 'text-primary-color font-semibold'
                      : 'text-sec-color font-medium'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.href && !isActive ? (
                    <a
                      href={item.href}
                      className="hover:text-primary-color transition-colors focus:outline-none focus:underline"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
                {!isLast && (
                  <li aria-hidden="true" className="text-sec-color font-medium text-sm md:text-[20px] leading-[1.25em]">
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
        <h1 className="font-extrabold text-2xl md:text-[32px] leading-[1.25em] capitalize text-black m-0">
          {title}
        </h1>
      )}

      {/* Children Elements (Stats/Info) */}
      {children && (
        <div className="w-full">
          {children}
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
