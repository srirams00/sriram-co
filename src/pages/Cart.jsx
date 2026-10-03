import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Tag } from "lucide-react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "../components/CheckoutModal";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    deliveryFee,
    orderTotal,
    freeDeliveryThreshold,
    freeDeliveryRemaining
  } = useCart();

  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === "WELCOME10") {
      const discount = Math.round(subtotal * 0.1);
      setDiscountAmount(discount);
      setCouponMessage("Coupon applied: 10% off your order!");
    } else if (code === "SRIRAM100") {
      setDiscountAmount(100);
      setCouponMessage("Coupon applied: ₹100 instant discount!");
    } else {
      setCouponMessage("Invalid coupon code. Try WELCOME10 or SRIRAM100");
    }
  };

  const finalOrderTotal = Math.max(0, orderTotal - discountAmount);

  return (
    <div className="cart-page">
      <div className="container-wide">
        {/* Breadcrumb Navigation */}
        <div className="cart-breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span>Shopping Cart</span>
        </div>

        <h1 className="cart-page-title">Shopping Cart</h1>

        {cart.length > 0 ? (
          <div className="cart-layout-grid">
            {/* Left: Cart Items Table */}
            <div className="cart-items-section">
              {/* Free Delivery Bar */}
              <div className="cart-delivery-banner">
                {freeDeliveryRemaining === 0 ? (
                  <p>
                    🎉 Congratulations! Your order qualifies for <strong>FREE Delivery</strong> across Tamil Nadu.
                  </p>
                ) : (
                  <p>
                    Add <strong>₹{freeDeliveryRemaining.toLocaleString("en-IN")}</strong> more to enjoy{" "}
                    <strong>FREE Delivery</strong>!
                  </p>
                )}
              </div>

              <div className="cart-table-card">
                <div className="cart-table-header">
                  <span>Product</span>
                  <span>Quantity</span>
                  <span>Total</span>
                  <span></span>
                </div>

                <div className="cart-items-body">
                  {cart.map((item) => (
                    <div key={item.product._id} className="cart-row">
                      <div className="product-col">
                        <Link to={`/product/${item.product._id}`}>
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="cart-thumb"
                          />
                        </Link>
                        <div className="cart-item-info">
                          <span className="cart-item-cat">{item.product.category}</span>
                          <Link to={`/product/${item.product._id}`} className="cart-item-name">
                            {item.product.name}
                          </Link>
                          <span className="cart-item-unit-price">
                            ₹{item.product.price.toLocaleString("en-IN")} each
                          </span>
                        </div>
                      </div>

                      <div className="qty-col">
                        <div className="table-qty-picker">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product._id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.product._id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>

                      <div className="price-col">
                        <span className="item-subtotal">
                          ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>

                      <div className="action-col">
                        <button
                          type="button"
                          className="cart-del-btn"
                          onClick={() => removeFromCart(item.product._id)}
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-actions-bar">
                  <Link to="/shop" className="btn-secondary continue-shopping-btn">
                    ← Continue Shopping
                  </Link>
                  <button
                    type="button"
                    className="clear-all-btn"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="cart-summary-section">
              <div className="order-summary-card">
                <h2 className="summary-title">Order Summary</h2>

                {/* Coupon Input */}
                <form onSubmit={handleApplyCoupon} className="coupon-box">
                  <div className="coupon-input-wrap">
                    <Tag size={15} className="coupon-icon" />
                    <input
                      type="text"
                      placeholder="Coupon (e.g. WELCOME10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button type="submit" className="apply-coupon-btn">
                      Apply
                    </button>
                  </div>
                  {couponMessage && (
                    <span className="coupon-hint">{couponMessage}</span>
                  )}
                </form>

                {/* Summary Lines */}
                <div className="summary-breakdown">
                  <div className="breakdown-row">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="breakdown-row discount-row">
                      <span>Discount</span>
                      <span>- ₹{discountAmount.toLocaleString("en-IN")}</span>
                    </div>
                  )}
                  <div className="breakdown-row">
                    <span>Delivery</span>
                    <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                  </div>
                  <div className="breakdown-row total-row">
                    <span>Estimated Total</span>
                    <span>₹{finalOrderTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-primary checkout-main-btn"
                  onClick={() => setCheckoutOpen(true)}
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={17} />
                </button>

                <div className="checkout-trust-box">
                  <div className="trust-item">
                    <ShieldCheck size={16} className="trust-icon" />
                    <span>Secure Checkout with Cash on Delivery or UPI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-empty-container">
            <div className="empty-cart-circle">
              <ShoppingBag size={48} strokeWidth={1.5} />
            </div>
            <h2>Your cart is currently empty</h2>
            <p>
              Before proceed to checkout you must add some products to your shopping cart.
              You will find a lot of interesting home appliances and power tools on our "Shop" page.
            </p>
            <Link to="/shop" className="btn-primary start-shopping-btn">
              <span>Start Shopping</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>

      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
};

export default Cart;
