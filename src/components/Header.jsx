import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Heart, User, Menu, X, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/products";
import "./Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();
  const searchContainerRef = useRef(null);

  // Live matching products for dropdown
  const matchingProducts = searchQuery.trim()
    ? products
        .filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 4)
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleProductSelect = (id) => {
    setIsSearchFocused(false);
    setSearchQuery("");
    navigate(`/product/${id}`);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="site-header">
      <div className="container-wide header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="#176B45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12L12 17L21 12" stroke="#176B45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 17L12 22L21 17" stroke="#176B45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="brand-text-wrap">
            <span className="brand-name">Sriram & Co.</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink to="/shop" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Shop
          </NavLink>
          <NavLink to="/categories" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Categories
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            About us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Contact
          </NavLink>
        </nav>

        {/* Center / Right Search Bar */}
        <div className="search-wrapper" ref={searchContainerRef}>
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <Search className="search-icon" size={17} strokeWidth={2} />
            <input
              type="text"
              className="search-input"
              placeholder="Search for appliances, tools & more"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              aria-label="Search products"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </form>

          {/* Instant Search Suggestions Dropdown */}
          {isSearchFocused && searchQuery.trim().length > 0 && (
            <div className="search-suggestions-card">
              <div className="suggestions-header">
                <span>Matching Products</span>
                <span className="suggestions-count">{matchingProducts.length} results</span>
              </div>
              {matchingProducts.length > 0 ? (
                <div className="suggestions-list">
                  {matchingProducts.map((p) => (
                    <div
                      key={p._id}
                      className="suggestion-item"
                      onClick={() => handleProductSelect(p._id)}
                    >
                      <img src={p.image} alt={p.name} className="suggestion-thumb" />
                      <div className="suggestion-info">
                        <span className="suggestion-name">{p.name}</span>
                        <span className="suggestion-category">{p.category}</span>
                      </div>
                      <span className="suggestion-price">₹{p.price.toLocaleString("en-IN")}</span>
                    </div>
                  ))}
                  <button
                    className="view-all-results-btn"
                    onClick={handleSearchSubmit}
                  >
                    View all results for "{searchQuery}" <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <div className="no-suggestions">
                  <p>No products found for "{searchQuery}"</p>
                  <span>Try searching for 'mixer', 'vacuum', or 'drill'</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Icons */}
        <div className="header-actions">
          {/* Wishlist Link */}
          <Link to="/wishlist" className="action-btn" aria-label="View Wishlist">
            <Heart size={20} strokeWidth={1.8} />
            {wishlistCount > 0 && <span className="action-badge wishlist-badge">{wishlistCount}</span>}
          </Link>

          {/* Account / Stores Link */}
          <Link to="/contact" className="action-btn desktop-only" aria-label="Store Account">
            <User size={20} strokeWidth={1.8} />
          </Link>

          {/* Cart Button */}
          <button
            type="button"
            className="action-btn cart-action-btn"
            onClick={openCart}
            aria-label={`Shopping bag with ${totalItems} items`}
          >
            <ShoppingBag size={20} strokeWidth={1.8} />
            {totalItems > 0 && (
              <span className="action-badge cart-badge">{totalItems}</span>
            )}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <NavLink
              to="/shop"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop All Products
            </NavLink>
            <NavLink
              to="/categories"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </NavLink>
            <NavLink
              to="/about"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Store Locations & Contact
            </NavLink>
            <NavLink
              to="/wishlist"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wishlist ({wishlistCount})
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
