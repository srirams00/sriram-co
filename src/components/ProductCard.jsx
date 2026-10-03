import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  const isFavorited = isInWishlist(product._id);
  const isInCart = cart.some((item) => item.product._id === product._id);

  const handleCardClick = () => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="product-card" onClick={handleCardClick} role="article">
      {/* Product Image Wrap */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />

        {/* Badge on Top-Left */}
        {product.badge && (
          <span className={`product-badge badge-${product.badgeType || "primary"}`}>
            {product.badge}
          </span>
        )}

        {/* Wishlist Button on Top-Right */}
        <button
          type="button"
          className={`wishlist-btn ${isFavorited ? "active" : ""}`}
          onClick={handleToggleWishlist}
          aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={16}
            className={isFavorited ? "heart-filled" : "heart-outline"}
            fill={isFavorited ? "#E53E3E" : "none"}
            color={isFavorited ? "#E53E3E" : "#4A5568"}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <span className="product-category-label">{product.category}</span>
        <h3 className="product-title" title={product.name}>
          {product.name}
        </h3>

        {/* Price & Action Row */}
        <div className="product-bottom-row">
          <div className="product-pricing">
            <span className="current-price">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="original-price">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <button
            type="button"
            className={`add-to-cart-btn ${isInCart ? "added" : ""}`}
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            {isInCart ? (
              <>
                <Check size={13} strokeWidth={2.5} />
                <span>Added</span>
              </>
            ) : (
              <>
                <span>Add to cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
