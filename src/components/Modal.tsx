import React from "react";

interface ModalProps {
  id: string;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  width?: string;
}

export default function Modal({
  id,
  title,
  footer,
  children,
  className = "",
  width = "max-w-[460px]",
}: ModalProps) {
  return (
    <>
      <div
        id={id}
        popover="auto"
        className={`modal-container fixed z-999 w-[90%] open:flex flex-col backdrop:backdrop-blur-[2px] backdrop:bg-black/50 backdrop:opacity-0 open:backdrop:opacity-100 transition-all transition-discrete opacity-0 starting:opacity-0 starting:backdrop:opacity-0 starting:open:opacity-0 backdrop:transition-all backdrop:duration-200 starting:open:backdrop:opacity-0 open:opacity-100 duration-200 rounded-[20px] bg-white shadow-xl overflow-hidden max-h-[95dvh] ${width} ${className} p-0 scale-75 open:scale-100 starting:open:scale-75`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-[#292D32] p-5">
          {typeof title === "string" ? (
            <h3 className="text-lg font-semibold leading-tight text-white">
              {title}
            </h3>
          ) : (
            title
          )}
          <button
            popoverTarget={id}
            popoverTargetAction="hide"
            className="text-white hover:opacity-70 transition-opacity"
            aria-label="Close modal"
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.16998 14.83L14.83 9.17004"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.83 14.83L9.16998 9.17004"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Body & Footer Wrapper */}
        <div className="flex flex-col gap-6 p-5 flex-1 min-h-0">
          {/* Body */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {children}
          </div>

          {/* Footer */}
          {footer && <div className="mt-auto">{footer}</div>}
        </div>
      </div>
    </>
  );
}
