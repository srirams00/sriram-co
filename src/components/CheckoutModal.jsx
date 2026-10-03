import React, { useState } from "react";
import { X, CheckCircle, Package, Truck, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import "./CheckoutModal.css";

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cart, subtotal, deliveryFee, orderTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "Tiruchirappalli",
    pincode: "",
    paymentMethod: "cod"
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrderId = "SRC-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);
    setOrderPlaced(true);
    clearCart();
  };

  const handleClose = () => {
    setOrderPlaced(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!orderPlaced ? (
          <div className="checkout-content">
            <h3 className="modal-title">Complete Your Order</h3>
            <p className="modal-subtitle">
              Sriram & Co. Express Delivery across Tamil Nadu
            </p>

            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. S. Ramanathan"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Mobile Number (for delivery WhatsApp)</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    placeholder="e.g. 620001"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Delivery Address</label>
                <textarea
                  name="address"
                  required
                  rows="2"
                  placeholder="Door No, Street name, Landmark"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>City / Town (Tamil Nadu)</label>
                <select name="city" value={formData.city} onChange={handleChange}>
                  <option value="Tiruchirappalli">Tiruchirappalli (Trichy)</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Salem">Salem</option>
                  <option value="Thanjavur">Thanjavur</option>
                  <option value="Tirunelveli">Tirunelveli</option>
                  <option value="Erode">Erode</option>
                  <option value="Other">Other Tamil Nadu Location</option>
                </select>
              </div>

              <div className="form-group">
                <label>Payment Method</label>
                <div className="payment-options">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleChange}
                    />
                    <span>Cash on Delivery / UPI at Doorstep</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === "upi"}
                      onChange={handleChange}
                    />
                    <span>Instant UPI (GPay, PhonePe, Paytm)</span>
                  </label>
                </div>
              </div>

              {/* Order Brief */}
              <div className="order-summary-box">
                <div className="summary-row">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery Charge</span>
                  <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total Amount</span>
                  <span>₹{orderTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button type="submit" className="btn-primary confirm-order-btn">
                <span>Confirm Order • ₹{orderTotal.toLocaleString("en-IN")}</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div className="order-success-view">
            <div className="success-icon-wrap">
              <CheckCircle size={48} className="success-icon" />
            </div>
            <h3 className="success-title">Order Placed Successfully!</h3>
            <p className="order-id-badge">Order ID: #{orderId}</p>
            <p className="success-desc">
              Thank you for ordering with Sriram & Co. Our store staff will call you on{" "}
              <strong>{formData.phone || "+91 94431 28145"}</strong> to confirm dispatch and timing.
            </p>

            <div className="order-next-steps">
              <div className="next-step-item">
                <Package size={18} className="step-ic" />
                <span>Quality-check & packed at nearest store</span>
              </div>
              <div className="next-step-item">
                <Truck size={18} className="step-ic" />
                <span>Doorstep delivery with 1-year store warranty</span>
              </div>
            </div>

            <button className="btn-primary done-btn" onClick={handleClose}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
