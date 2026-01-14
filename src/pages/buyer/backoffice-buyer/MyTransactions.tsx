import Sidebar from '@src/components/backoffice/Sidebar';
import HeaderBackoffice from '@src/components/backoffice/HeaderBackoffice';

export default function MyTransactions() {
    return (
        <div className="flex min-h-screen bg-[#F3F5F9] font-sans">
            <Sidebar />

            <div className="flex-1 p-4 mt-16 lg:mt-0 lg:py-7.5 lg:px-5 w-full overflow-x-hidden">
                <HeaderBackoffice
                    title="Manage Transactions"
                    subtitle="View & Update Your Transactions"
                />
            </div>
        </div>
    );
}
