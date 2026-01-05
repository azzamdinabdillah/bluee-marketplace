import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  width?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  footer,
  children,
  className = "",
  width = "max-w-[460px]",
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 font-lexend">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative z-10 w-full ${width} flex flex-col rounded-[20px] bg-white shadow-xl overflow-hidden ${className}`}
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
            onClick={onClose}
            className="text-white hover:opacity-70 transition-opacity"
            aria-label="Close modal"
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
        <div className="flex flex-col gap-6 p-5">
          {/* Body */}
          <div className="flex-1 overflow-y-auto max-h-[80vh] scrollbar-hide">
            {children}
          </div>

          {/* Footer */}
          {footer && <div className="mt-auto">{footer}</div>}
        </div>
      </div>
    </div>,
    document.body
  );
}
