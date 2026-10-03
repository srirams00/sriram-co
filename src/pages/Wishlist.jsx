import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product._id);
  };

  return (
    <div className="wishlist-page">
      <div className="container-wide">
        {/* Breadcrumb Navigation */}
        <div className="wishlist-breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>My Wishlist</span>
        </div>

        <div className="wishlist-header">
          <h1 className="wishlist-title">My Wishlist</h1>
          <span className="wishlist-total-count">({wishlist.length} saved items)</span>
        </div>

        {wishlist.length > 0 ? (
          <div className="wishlist-grid">
            {wishlist.map((product) => (
              <div key={product._id} className="wishlist-card">
                <div className="wishlist-img-box">
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <button
                    type="button"
                    className="wishlist-remove-btn"
                    onClick={() => removeFromWishlist(product._id)}
                    aria-label="Remove from wishlist"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="wishlist-info">
                  <span className="wishlist-cat">{product.category}</span>
                  <Link to={`/product/${product._id}`} className="wishlist-prod-name">
                    {product.name}
                  </Link>

                  <div className="wishlist-pricing">
                    <span className="wishlist-price">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    {product.originalPrice && (
                      <span className="wishlist-orig-price">
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="btn-primary wishlist-move-btn"
                    onClick={() => handleMoveToCart(product)}
                  >
                    <ShoppingBag size={15} />
                    <span>Move to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="wishlist-empty-state">
            <div className="empty-heart-circle">
              <Heart size={44} strokeWidth={1.5} />
            </div>
            <h2>Your wishlist is empty</h2>
            <p>
              Tap the heart icon on any appliance or tool to save it here for later.
            </p>
            <Link to="/shop" className="btn-primary browse-btn">
              <span>Explore Products</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
