import StatCard from "@src/components/backoffice/StatCard";
import TemplateLayoutBackoffice from "@src/components/backoffice/TemplateLayoutBackoffice";
import walletIcon from "/icons/wallet-2.svg";
import shoppingCartIcon from "/icons/shopping-cart-blue.svg";
import shopIcon from "/icons/shop-blue.svg";
import userIcon from "/icons/user.svg";
import calendarIcon from "/icons/calendar-2.svg";
import profileIcon from "/icons/profile-2user.svg";
import profileTickIcon from "/icons/profile-tick-blue.svg";
import noteTextIcon from "/icons/note-text-blue.svg";
import boxIcon from "/icons/shopping-cart.svg";
import store1 from "/images/store-2.png";
import store2 from "/images/store-3.png";
import store3 from "/images/store-4.png";
import type { StoreType } from "@src/types/StoreTypes";
import Button from "@src/components/Button";
import Divider from "@src/components/Divider";

import UpgradeProCard from "@src/components/backoffice/UpgradeProCard";

export default function Overview() {
  const latestStores: StoreType[] = [
    {
      id: 1,
      storeName: "Shayna Sports",
      sellerName: "Princess Elsa",
      avatarUrl: store1,
      createdAt: "19/02/2020",
    },
    {
      id: 2,
      storeName: "Raffly Bookstore",
      sellerName: "Rizky Ichsan",
      avatarUrl: store2,
      createdAt: "19/02/2020",
    },
    {
      id: 3,
      storeName: "Marcy Beauty",
      sellerName: "Chessta B",
      avatarUrl: store3,
      createdAt: "19/02/2020",
    },
  ];

  const latestTransactions = [
    {
      id: 1,
      storeName: "Rierru Fashion",
      sellerName: "Rierru",
      avatarUrl: store1,
      totalProducts: 12,
      grandTotal: "Rp 384.000",
    },
    {
      id: 2,
      storeName: "Marcy Beauty",
      sellerName: "Chessta B",
      avatarUrl: store2,
      totalProducts: 45,
      grandTotal: "Rp 1.250.000",
    },
    {
      id: 3,
      storeName: "Raffly Bookstore",
      sellerName: "Rizky Ichsan",
      avatarUrl: store3,
      totalProducts: 8,
      grandTotal: "Rp 156.000",
    },
  ];

  return (
    <TemplateLayoutBackoffice
      role="manager"
      title="Dashboard Overviews"
      subtitle="View Your Dashboard"
    >
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-1 xl:grid-cols-2">
        <div className="flex-col-20">
          <StatCard
            iconSrc={walletIcon}
            value="Rp 920.650.320"
            label="Total Revenue"
          />
          <StatCard
            iconSrc={shoppingCartIcon}
            value="320.500"
            label="Total Products"
          />
          <StatCard iconSrc={shopIcon} value="320" label="Total Stores">
            <div className="flex-col-20">
              <h3 className="text-responsive-20 text-black-color font-bold">
                Latest Stores
              </h3>

              <div className="latest-stores space-y-4">
                {latestStores.map((store) => (
                  <div
                    key={store.id}
                    className="border-stroke-color flex flex-col rounded-2xl border bg-white p-3 md:p-4 lg:p-5"
                  >
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-3.5">
                      <img
                        src={store.avatarUrl}
                        alt={store.storeName}
                        className="h-12 w-12 rounded-2xl md:h-14 md:w-14 lg:h-16 lg:w-16"
                      />
                      <div className="flex-1">
                        <h4 className="text-responsive-18 text-black-color font-bold">
                          {store.storeName}
                        </h4>
                        <div className="mt-1 flex items-center gap-1">
                          <img
                            src={userIcon}
                            alt="Owner"
                            className="h-4 w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5"
                          />
                          <span className="text-responsive-16 text-sec-color font-semibold">
                            {store.sellerName}
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr className="border-stroke-color my-2 md:my-3 lg:my-5" />
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2">
                        <img
                          src={calendarIcon}
                          alt="Calendar"
                          className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
                        />
                        <span className="text-responsive-16 text-sec-color font-semibold">
                          Created on{" "}
                          {typeof store.createdAt === "string"
                            ? store.createdAt
                            : store.createdAt?.toString()}
                        </span>
                      </div>
                      <span className="text-responsive-16 cursor-pointer font-semibold text-primary-color hover:text-black-color transition">
                        View Details
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StatCard>
        </div>

        <div className="flex-col-20">
          <div className="grid md:grid-cols-2 gap-3 md:gap-5">
            <StatCard
              iconSrc={profileIcon}
              value="6.400"
              label="Total Seller"
            />
            <StatCard
              iconSrc={profileTickIcon}
              value="16.560"
              label="Total Buyers"
            />
          </div>

          <StatCard
            iconSrc={noteTextIcon}
            value="163.200"
            label="Total Transaction"
          >
            <div className="flex-col-20">
              <h3 className="text-responsive-20 text-black-color font-bold">
                Latest Transaction
              </h3>

              <div className="latest-transactions space-y-4">
                {latestTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="border-stroke-color flex flex-col rounded-2xl border bg-white p-3 md:p-4 lg:p-5"
                  >
                    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
                      <div className="flex items-center justify-between gap-3">
                        {/* Store Info */}
                        <div className="flex overflow-hidden shrink-0 items-center gap-2 md:gap-3 lg:gap-3.5">
                          <img
                            src={transaction.avatarUrl}
                            alt={transaction.storeName}
                            className="h-12 w-12 rounded-2xl md:rounded-[20px] md:h-14 md:w-14 lg:h-16 lg:w-16"
                          />
                          <div className="flex-1 max-w-[95px] md:max-w-full w-full">
                            <h4 className="truncate text-responsive-18 text-black-color font-bold">
                              {transaction.storeName}
                            </h4>
                            <div className="mt-1 flex items-center gap-1">
                              <img
                                src={userIcon}
                                alt="Owner"
                                className="h-4 w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5"
                              />
                              <span className="truncate text-responsive-16 text-sec-color font-semibold">
                                {transaction.sellerName}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex shrink-0 flex-col gap-1 md:gap-2 items-end">
                          <span className="text-responsive-18 font-bold text-primary-color">
                            {transaction.grandTotal}
                          </span>
                          <p className="text-responsive-16 font-semibold text-sec-color">
                            Grand Total
                          </p>
                        </div>
                      </div>

                      <Divider />

                      <div className="flex items-center justify-between">
                        {/* Total Products */}
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="flex size-8 items-center justify-center rounded-full bg-gray-100 md:size-10 lg:size-[56px]">
                            <img
                              src={boxIcon}
                              alt="Box"
                              className="size-4 md:size-5 lg:size-6"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-responsive-18 font-bold text-black-color">
                              {transaction.totalProducts}
                            </span>
                            <span className="text-responsive-16 font-semibold text-sec-color">
                              Total Products
                            </span>
                          </div>
                        </div>

                        <Button variant="lightBlue" className="font-semibold!">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StatCard>

          <UpgradeProCard />
        </div>
      </div>
    </TemplateLayoutBackoffice>
  );
}
