import React, { useState, useMemo } from "react";
import Navbar from "@src/components/Navbar";
import Footer from "@src/components/Footer";
import ProductCard from "@src/components/ProductCard";
import { PRODUCTS } from "@src/datas/Products";
import Button from "@src/components/Button";
import SearchIcon from "@src/components/icons/SearchIcon";
import Checkbox from "@src/components/Checkbox";
import Breadcrumb from "@src/components/Breadcrumb";
import { Link } from "react-router-dom";
import Modal from "@src/components/Modal";
import InputBasic from "@src/components/InputBasic";

interface FilterContentProps {
  categories: string[];
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  maxPrice: string;
  setMaxPrice: (value: string) => void;
  clearFilters: () => void;
}

const FilterContent: React.FC<FilterContentProps> = ({
  categories,
  selectedCategories,
  toggleCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  clearFilters,
}) => (
  <div className="flex flex-col gap-8">
    {/* Categories */}
    <div>
      <h3 className="font-montserrat mb-4 text-lg font-bold text-black-color">Categories</h3>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <div key={category} className="flex items-center gap-3">
            <Checkbox
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            <span
              className="text-sec-color font-medium hover:text-primary-color cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              {category}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Price Range */}
    <div>
      <h3 className="font-montserrat mb-4 text-lg font-bold text-black-color">Price Range</h3>
      <div className="flex flex-col gap-4">
        <InputBasic
          label="Min Price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="0"
        />
        <InputBasic
          label="Max Price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max"
        />
      </div>
    </div>

    <button
      onClick={clearFilters}
      className="text-primary-color hover:underline font-semibold text-sm self-start"
    >
      Clear All Filters
    </button>
  </div>
);

const ProductsPage: React.FC = () => {
  // State for filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("default");

  // Derive unique categories from products
  const categories = useMemo(() => {
    const tags = PRODUCTS.map((p) => p.tag).filter((tag): tag is string => !!tag);
    return Array.from(new Set(tags));
  }, []);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category Filter
      if (selectedCategories.length > 0 && product.tag && !selectedCategories.includes(product.tag)) {
        return false;
      }

      // Price Filter (Parsing "Rp 3.500.500" to number)
      const priceNum = parseInt(product.price.replace(/[^0-9]/g, ""));
      if (minPrice && priceNum < parseInt(minPrice)) return false;
      if (maxPrice && priceNum > parseInt(maxPrice)) return false;

      // Search Filter
      if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, ""));
      const priceB = parseInt(b.price.replace(/[^0-9]/g, ""));

      if (sortBy === "price-asc") return priceA - priceB;
      if (sortBy === "price-desc") return priceB - priceA;
      return 0;
    });
  }, [selectedCategories, minPrice, maxPrice, searchQuery, sortBy]);

  // Handlers
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setMinPrice("");
    setMaxPrice("");
    setSearchQuery("");
    setSortBy("default");
  };

  // Filter UI Component (Reusable for Sidebar and Mobile)
  // Moved outside component to prevent re-renders losing focus


  return (
    <div className="min-h-screen bg-white font-lexend">
      <Navbar />

      <div className="margin-top-navbar">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", active: true },
          ]}
          title="All Products"
        >
          <p className="text-sec-color font-medium">
            Showing {filteredProducts.length} results
          </p>
        </Breadcrumb>

        <main className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-8 lg:px-[52px] lg:py-12">
          {/* Page Header */}
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4 flex-wrap">
              {/* Mobile Filter Trigger */}
              <button
                popoverTarget="filter-modal"
                popoverTargetAction="show"
                type="button"
                className="flex items-center gap-2 rounded-xl border border-stroke-color bg-white px-4 py-3 font-semibold text-black-color transition-colors hover:border-primary-color hover:text-primary-color lg:hidden"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14"></line>
                  <line x1="4" y1="10" x2="4" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="3"></line>
                  <line x1="20" y1="21" x2="20" y2="16"></line>
                  <line x1="20" y1="12" x2="20" y2="3"></line>
                  <line x1="1" y1="14" x2="7" y2="14"></line>
                  <line x1="9" y1="8" x2="15" y2="8"></line>
                  <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
                Filters
              </button>

              {/* Sort Dropdown */}
              <button
                popoverTarget="sort-modal"
                popoverTargetAction="show"
                type="button"
                className="flex items-center gap-2 rounded-xl border border-stroke-color bg-white px-4 py-3 font-semibold text-black-color transition-colors hover:border-primary-color hover:text-primary-color"
              >
                <span>
                  {sortBy === "default" && "Sort by: Recommended"}
                  {sortBy === "price-asc" && "Price: Low to High"}
                  {sortBy === "price-desc" && "Price: High to Low"}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sec-color">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex gap-8 lg:gap-12">
            {/* Desktop Sidebar */}
            <aside className="hidden w-[280px] shrink-0 lg:block">
              <div className="sticky top-5 rounded-[20px] border border-stroke-color bg-white p-6">
                <FilterContent
                  categories={categories}
                  selectedCategories={selectedCategories}
                  toggleCategory={toggleCategory}
                  minPrice={minPrice}
                  setMinPrice={setMinPrice}
                  maxPrice={maxPrice}
                  setMaxPrice={setMaxPrice}
                  clearFilters={clearFilters}
                />
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 md:gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product-details/${product.id}`}
                    >
                      <ProductCard
                        key={product.id}
                        {...product}
                        className="h-full !w-full md:!w-full"
                      />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <SearchIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-black-color">No products found</h3>
                  <p className="mt-2 text-sec-color">Try adjusting your filters or search query</p>
                  <button
                    onClick={clearFilters}
                    className="mt-6 font-semibold text-primary-color hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Filter Modal */}
      <Modal
        id="filter-modal"
        title="Filters"
        className="lg:hidden w-[90%]"
        footer={
          <Button
            variant="blue"
            className="w-full justify-center"
            popoverTarget="filter-modal"
            popoverTargetAction="hide"
          >
            Show Results
          </Button>
        }
      >
        <FilterContent
          categories={categories}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          clearFilters={clearFilters}
        />
      </Modal>

      {/* Sort Modal */}
      <Modal
        id="sort-modal"
        title="Sort Products"
        className="w-[90%] max-w-[400px]"
      >
        <div className="flex flex-col gap-2">
          {[
            { value: "default", label: "Recommended" },
            { value: "price-asc", label: "Price: Low to High" },
            { value: "price-desc", label: "Price: High to Low" },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              popoverTarget="sort-modal"
              popoverTargetAction="hide"
              onClick={() => setSortBy(option.value)}
              className={`flex items-center justify-between rounded-lg p-3 text-left font-semibold transition-colors ${sortBy === option.value
                ? "bg-primary-color/10 text-primary-color"
                : "text-black-color hover:bg-gray-50"
                }`}
            >
              {option.label}
              {sortBy === option.value && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default ProductsPage;
