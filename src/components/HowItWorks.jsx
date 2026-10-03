import React from "react";
import { MessageSquare } from "lucide-react";
import "./HowItWorks.css";

const stepsData = [
  {
    step: "1",
    title: "Pick what you need",
    desc: "Add items to your cart from any device, or send your requirements list with what you're looking for."
  },
  {
    step: "2",
    title: "We call to confirm",
    desc: "Someone from our store will call you to confirm your items and check if you need any other guidance."
  },
  {
    step: "3",
    title: "Delivered to your door",
    desc: "Local orders reach home and commercial premises in 1-2 days. Other Tamil Nadu orders in 3-4 days."
  },
  {
    step: "4",
    title: "Pay the way you like",
    desc: "Cash/UPI on spot or delivery. You can pay securely via card and UPI online with every product."
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section section-wrapper" aria-label="How Ordering Works">
      <div className="container-wide">
        <div className="how-header">
          <h2 className="section-title">How ordering works</h2>
          <p className="section-subtitle">
            Getting an old item repaired or ordering items from our shop, straightforward
            and no hidden charges.
          </p>
        </div>

        <div className="how-steps-grid">
          {stepsData.map((item) => (
            <div key={item.step} className="how-step-item">
              <div className="step-circle">{item.step}</div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="how-footer-note">
          <span>Have an urgent repair or order? </span>
          <a
            href="https://wa.me/919443128145?text=Hello%20Sriram%20%26%20Co.%20I%20have%20an%20enquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="how-whatsapp-link"
          >
            <MessageSquare size={14} />
            <span>Chat directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
