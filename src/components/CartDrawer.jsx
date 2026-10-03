import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";
import "./CartDrawer.css";

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    deliveryFee,
    orderTotal,
    freeDeliveryThreshold,
    freeDeliveryRemaining
  } = useCart();

  const [checkoutOpen, setCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  const percentToFreeDelivery = Math.min(
    100,
    Math.round((subtotal / freeDeliveryThreshold) * 100)
  );

  const handleCheckoutClick = () => {
    closeCart();
    setCheckoutOpen(true);
  };

  return (
    <>
      <div className="drawer-overlay" onClick={closeCart}>
        <aside className="drawer-panel" onClick={(e) => e.stopPropagation()} aria-label="Cart Drawer">
          {/* Drawer Header */}
          <div className="drawer-header">
            <div className="drawer-title-wrap">
              <ShoppingBag size={20} className="drawer-title-icon" />
              <h2 className="drawer-title">Your Cart</h2>
              <span className="drawer-item-count">
                ({cart.reduce((s, i) => s + i.quantity, 0)} items)
              </span>
            </div>
            <button className="drawer-close-btn" onClick={closeCart} aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Free Delivery Bar */}
          <div className="free-shipping-bar">
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${percentToFreeDelivery}%` }}
              />
            </div>
            <p className="free-shipping-text">
              {freeDeliveryRemaining === 0 ? (
                <span className="unlocked-text">
                  🎉 You have qualified for <strong>FREE Delivery</strong>!
                </span>
              ) : (
                <span>
                  Add <strong>₹{freeDeliveryRemaining.toLocaleString("en-IN")}</strong> more for{" "}
                  <strong>FREE Delivery</strong>
                </span>
              )}
            </p>
          </div>

          {/* Cart Items List */}
          {cart.length > 0 ? (
            <div className="drawer-items-list">
              {cart.map((item) => (
                <div key={item.product._id} className="drawer-item">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="drawer-item-img"
                  />
                  <div className="drawer-item-details">
                    <span className="drawer-item-cat">{item.product.category}</span>
                    <h3 className="drawer-item-title">{item.product.name}</h3>
                    <div className="drawer-item-price">
                      ₹{item.product.price.toLocaleString("en-IN")}
                    </div>

                    <div className="drawer-item-controls">
                      <div className="qty-selector">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => updateQuantity(item.product._id, -1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="qty-count">{item.quantity}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => updateQuantity(item.product._id, 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="item-delete-btn"
                        onClick={() => removeFromCart(item.product._id)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="drawer-empty-state">
              <div className="empty-cart-icon-wrap">
                <ShoppingBag size={42} strokeWidth={1.5} />
              </div>
              <h3 className="empty-title">Your shopping cart is empty</h3>
              <p className="empty-desc">
                Looks like you haven't added any home appliances or power tools yet.
              </p>
              <Link to="/shop" className="btn-primary empty-shop-btn" onClick={closeCart}>
                <span>Browse Products</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          )}

          {/* Drawer Footer */}
          {cart.length > 0 && (
            <div className="drawer-footer">
              <div className="drawer-summary">
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="summary-line">
                  <span>Estimated Delivery</span>
                  <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                </div>
                <div className="summary-line total-line">
                  <span>Total</span>
                  <span>₹{orderTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="drawer-actions">
                <button
                  type="button"
                  className="btn-primary checkout-btn"
                  onClick={handleCheckoutClick}
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={16} />
                </button>
                <Link
                  to="/cart"
                  className="btn-secondary view-cart-page-btn"
                  onClick={closeCart}
                >
                  View Full Cart Page
                </Link>
              </div>

              <div className="drawer-trust-note">
                <ShieldCheck size={14} />
                <span>100% genuine products with manufacturer warranty</span>
              </div>
            </div>
          )}
        </aside>
      </div>

      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </>
  );
};

export default CartDrawer;
