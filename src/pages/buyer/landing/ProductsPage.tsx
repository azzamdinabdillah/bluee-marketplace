import React, { useState, useEffect, useMemo } from "react";
import Navbar from "@src/components/Navbar";
import Footer from "@src/components/Footer";
import ProductCard from "@src/components/ProductCard";
import { PRODUCTS } from "@src/datas/Products";
import Button from "@src/components/Button";
import SearchIcon from "@src/components/icons/SearchIcon";
import Checkbox from "@src/components/Checkbox";
import Breadcrumb from "@src/components/Breadcrumb";
import { Link } from "react-router-dom";

const ProductsPage: React.FC = () => {
  // State for filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("default");

  // State for mobile filter sidebar
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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
  const FilterContent = () => (
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
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-sec-color">Min Price</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="0"
              className="w-full rounded-[12px] border border-stroke-color px-4 py-3 text-sm font-medium outline-none focus:border-primary-color focus:ring-1 focus:ring-primary-color"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-sec-color">Max Price</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max"
              className="w-full rounded-[12px] border border-stroke-color px-4 py-3 text-sm font-medium outline-none focus:border-primary-color focus:ring-1 focus:ring-primary-color"
            />
          </div>
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
                onClick={() => setIsMobileFilterOpen(true)}
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
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none cursor-pointer rounded-xl border border-stroke-color bg-white px-4 py-3 pr-10 font-semibold text-black-color outline-none focus:border-primary-color"
                >
                  <option value="default">Sort by: Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sec-color">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8 lg:gap-12">
            {/* Desktop Sidebar */}
            <aside className="hidden w-[280px] shrink-0 lg:block">
              <div className="sticky top-5 rounded-[20px] border border-stroke-color bg-white p-6">
                <FilterContent />
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

      {/* Mobile Filter Sidebar (Overlay) */}
      <div
        className={`fixed inset-0 z-50 flex lg:hidden ${isMobileFilterOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isMobileFilterOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsMobileFilterOpen(false)}
        />

        {/* Sidebar Content */}
        <div
          className={`relative ml-auto h-full w-[85%] max-w-[320px] transform bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out ${isMobileFilterOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-montserrat text-xl font-bold text-black-color">Filters</h2>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black-color">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="h-[calc(100vh-100px)] overflow-y-auto pb-8">
            <FilterContent />
          </div>

          <div className="absolute bottom-0 left-0 w-full border-t border-stroke-color bg-white p-4">
            <Button
              variant="blue"
              className="w-full justify-center"
              onClick={() => setIsMobileFilterOpen(false)}
            >
              Show Results
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
