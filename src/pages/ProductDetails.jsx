import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Heart, Check, Plus, Minus, ShieldCheck, Truck, RotateCcw, ArrowRight } from "lucide-react";
import { getProductById, products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import CheckoutModal from "../components/CheckoutModal";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("features");
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const product = getProductById(id) || products[0];
  const isWishlisted = isInWishlist(product._id);

  // Related products from same or other categories
  const relatedProducts = products
    .filter((p) => p._id !== product._id)
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setCheckoutOpen(true);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-details-page">
      <div className="container-wide">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.categorySlug}`}>{product.category}</Link>
          <span>/</span>
          <span className="current-crumb">{product.name}</span>
        </nav>

        {/* Product Main Overview Section */}
        <div className="product-overview-grid">
          {/* Left: Product Image Stage */}
          <div className="product-image-stage">
            <div className="main-image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="main-detail-image"
              />
              {product.badge && (
                <span className="detail-badge">{product.badge}</span>
              )}
            </div>
          </div>

          {/* Right: Product Purchase Info */}
          <div className="product-purchase-info">
            <div className="product-meta-header">
              <span className="detail-category">{product.category}</span>
              <div className="detail-rating-row">
                <div className="stars-mini">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < Math.floor(product.rating) ? "#176B45" : "#E2E8F0"}
                      color={i < Math.floor(product.rating) ? "#176B45" : "#CBD5E0"}
                    />
                  ))}
                </div>
                <span className="rating-num">{product.rating}</span>
                <span className="review-count">({product.reviewCount} verified reviews)</span>
              </div>
            </div>

            <h1 className="detail-title">{product.name}</h1>

            {/* Price Row */}
            <div className="detail-price-box">
              <div className="price-wrapper">
                <span className="detail-current-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="detail-original-price">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="detail-discount-tag">Save {discountPercent}%</span>
                  </>
                )}
              </div>
              <span className="taxes-note">Inclusive of all GST and taxes</span>
            </div>

            <p className="detail-short-desc">{product.description}</p>

            {/* Quantity and Actions */}
            <div className="purchase-controls">
              <div className="quantity-control-wrap">
                <span className="control-label">Quantity:</span>
                <div className="qty-picker">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-value">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="detail-cta-row">
                <button
                  type="button"
                  className="btn-primary detail-add-cart-btn"
                  onClick={handleAddToCart}
                >
                  <span>Add to cart</span>
                </button>

                <button
                  type="button"
                  className="btn-secondary detail-buy-now-btn"
                  onClick={handleBuyNow}
                >
                  <span>Buy now</span>
                </button>

                <button
                  type="button"
                  className={`detail-wishlist-btn ${isWishlisted ? "active" : ""}`}
                  onClick={() => toggleWishlist(product)}
                  aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart
                    size={18}
                    fill={isWishlisted ? "#E53E3E" : "none"}
                    color={isWishlisted ? "#E53E3E" : "#4A5568"}
                  />
                </button>
              </div>
            </div>

            {/* Assurance Strip */}
            <div className="detail-assurance-strip">
              <div className="assurance-item">
                <Truck size={17} className="assurance-icon" />
                <div>
                  <strong>Free Express Delivery</strong>
                  <p>On orders above ₹999. Dispatched in 24 hours.</p>
                </div>
              </div>
              <div className="assurance-item">
                <ShieldCheck size={17} className="assurance-icon" />
                <div>
                  <strong>Genuine Warranty</strong>
                  <p>100% original product backed by store service.</p>
                </div>
              </div>
              <div className="assurance-item">
                <RotateCcw size={17} className="assurance-icon" />
                <div>
                  <strong>Hassle-Free Returns</strong>
                  <p>7-day replacement for any verified defect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs (Features, Specifications) */}
        <div className="product-tabs-section">
          <div className="tabs-header">
            <button
              type="button"
              className={`tab-btn ${activeTab === "features" ? "active" : ""}`}
              onClick={() => setActiveTab("features")}
            >
              Key Features
            </button>
            <button
              type="button"
              className={`tab-btn ${activeTab === "specs" ? "active" : ""}`}
              onClick={() => setActiveTab("specs")}
            >
              Technical Specifications
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "features" && (
              <div className="features-list">
                {product.features?.map((feat, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-bullet">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "specs" && (
              <div className="specs-table-wrap">
                <table className="specs-table">
                  <tbody>
                    {product.specifications &&
                      Object.entries(product.specifications).map(([key, val]) => (
                        <tr key={key}>
                          <th className="spec-label">{key}</th>
                          <td className="spec-val">{val}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Grid */}
        <div className="related-products-section">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Complete your home setup</span>
              <h2 className="section-title">You may also like</h2>
            </div>
            <Link to="/shop" className="section-link">
              <span>View catalog</span>
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="related-grid">
            {relatedProducts.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
};

export default ProductDetails;
