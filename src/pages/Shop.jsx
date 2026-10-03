import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Filter, SlidersHorizontal, Search, ArrowRight, RotateCcw } from "lucide-react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";
  const currentQuery = searchParams.get("q") || "";

  const [selectedCategory, setSelectedCategory] = useState(currentCategory);
  const [searchVal, setSearchVal] = useState(currentQuery);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "all");
    setSearchVal(searchParams.get("q") || "");
    window.scrollTo(0, 0);
  }, [searchParams]);

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
    const newParams = new URLSearchParams(searchParams);
    if (slug === "all") {
      newParams.delete("category");
    } else {
      newParams.set("category", slug);
    }
    setSearchParams(newParams);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (searchVal.trim()) {
      newParams.set("q", searchVal.trim());
    } else {
      newParams.delete("q");
    }
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSearchVal("");
    setSortBy("featured");
    setSearchParams({});
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== "all" && p.categorySlug !== selectedCategory) {
          return false;
        }
        // Search query filter
        if (searchVal.trim()) {
          const q = searchVal.toLowerCase();
          return (
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
          );
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0; // default featured
      });
  }, [selectedCategory, searchVal, sortBy]);

  return (
    <div className="shop-page">
      {/* Shop Header Banner */}
      <section className="shop-banner">
        <div className="container-wide">
          <div className="shop-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Shop Catalog</span>
          </div>
          <h1 className="shop-page-title">
            {selectedCategory !== "all"
              ? categories.find((c) => c.slug === selectedCategory)?.name || "Appliances & Tools"
              : "All Appliances & Tools"}
          </h1>
          <p className="shop-page-desc">
            Explore our curated inventory of reliable household appliances, kitchen essentials,
            and professional power equipment with genuine manufacturer warranties.
          </p>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <div className="container-wide shop-container">
        {/* Category Pills */}
        <div className="category-pills-bar">
          <button
            type="button"
            className={`cat-pill ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => handleCategoryChange("all")}
          >
            All Products ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`cat-pill ${selectedCategory === cat.slug ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Toolbar: Search inside shop + Sort dropdown */}
        <div className="shop-toolbar">
          <div className="toolbar-left">
            <span className="results-count">
              Showing <strong>{filteredProducts.length}</strong> items
              {searchVal && ` for "${searchVal}"`}
            </span>
            {(selectedCategory !== "all" || searchVal) && (
              <button
                type="button"
                className="reset-filters-btn"
                onClick={handleResetFilters}
              >
                <RotateCcw size={13} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div className="toolbar-right">
            <div className="sort-box">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-dropdown"
              >
                <option value="featured">Featured Picks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="shop-product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="shop-empty-state">
            <div className="empty-icon-wrap">
              <Search size={36} />
            </div>
            <h3>No products found</h3>
            <p>
              We couldn't find any products matching your selected criteria. Try adjusting
              your search query or category filter.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={handleResetFilters}
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
