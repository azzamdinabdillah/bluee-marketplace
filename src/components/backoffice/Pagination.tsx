import arrowRightBlue from '/icons/arrow-right-blue.svg';

interface PaginationProps {
    className?: string;
    pages?: number[];
    activePage?: number;
}

export default function Pagination({
    className = "",
    pages = [1, 2, 3, 5],
    activePage = 1
}: PaginationProps) {
    return (
        <div className={`flex flex-row items-center gap-1.5 md:gap-2 lg:gap-3 ${className}`}>
            {/* Previous Button */}
            <button className="flex justify-center items-center w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-full bg-light-blue-color transition-colors hover:bg-primary-color/20 cursor-pointer">
                <img src={arrowRightBlue} alt="Previous" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rotate-180" />
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    className={`flex justify-center items-center w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-full font-lexend font-semibold text-xs md:text-sm lg:text-base transition-all cursor-pointer ${page === activePage
                            ? 'bg-primary-color text-white'
                            : 'bg-light-blue-color text-primary-color hover:bg-primary-color hover:text-white'
                        }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button className="flex justify-center items-center w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 rounded-full bg-light-blue-color transition-colors hover:bg-primary-color/20 cursor-pointer">
                <img src={arrowRightBlue} alt="Next" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </button>
        </div>
    );
}
