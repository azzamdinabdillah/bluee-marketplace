import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import store from "/images/store.png";
import userIcon from "/icons/user.svg";
import userImage from "/images/user.png";
import TransactionStatusSection from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsStatus";
import ProductDetailsSection from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsProduct";
import TransactionDetailsOrderReviews from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsOrderReviews";
import TransactionDetailsCustomer from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsCustomer";
import TransactionDetailsOrderStatus from "@src/components/sections/buyer/backoffice/transaction-details/TransactionDetailsOrderStatus";
import BoxList from "@src/components/backoffice/BoxList";
import {
  customerDetails,
  paymentSummary,
  products,
  transactionDetails,
} from "@src/pages/buyer/backoffice-buyer/manage-transactions/DetailsTransaction";

export default function DetailsTransaction() {
  return (
    <TemplateLayoutBackoffice
      showBackButton
      role="seller"
      title="Manage Transactions"
      subtitle="View & Update Your Transactions"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div className="flex flex-col gap-3 md:gap-5">
          <div className="flex flex-col gap-3 md:gap-5">
            <TransactionStatusSection status="pending" role="seller" />
            <TransactionStatusSection status="processing" role="seller" />
            <TransactionStatusSection status="delivering" role="seller" />
            <TransactionStatusSection status="completed" role="seller" />
          </div>

          <TransactionDetailsOrderReviews
            details={transactionDetails}
            brandImage={store}
            storeName="Bimore Gadget Universe"
            userImage={userIcon}
            userName="Mamat Gadger"
          />

          <ProductDetailsSection products={products} />
        </div>

        <div className="flex flex-col gap-3 md:gap-5">
          <TransactionDetailsCustomer
            phoneNumber={"081255553005"}
            name="Mamat Gadger"
            image={userImage}
            details={customerDetails}
          />

          <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-3 md:gap-4 md:rounded-2xl md:p-4 lg:gap-5 lg:rounded-[20px] lg:p-5">
            <h3 className="font-lexend text-black-color text-responsive-20 font-bold">
              Transaction Details
            </h3>

            <BoxList items={paymentSummary} />
          </div>

          <TransactionDetailsOrderStatus />
        </div>
      </div>
    </TemplateLayoutBackoffice>
  );
}
