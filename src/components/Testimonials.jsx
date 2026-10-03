import React from "react";
import { Star } from "lucide-react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section section-wrapper" aria-label="Customer Reviews">
      <div className="container-wide">
        <div className="testimonials-header">
          <h2 className="section-title">What our customers say</h2>
        </div>

        <div className="testimonials-layout">
          {/* Featured Large Testimonial (Left) */}
          <div className="featured-testimonial-card">
            <div className="stars-row" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#176B45" color="#176B45" />
              ))}
            </div>
            <blockquote className="featured-quote">
              "My mixer stopped working one days after the warranty ran out. I called the shop
              expecting nothing — they sent it to the factory service for me and followed up until
              it was fixed. That is why my whole family buys from Sri Ram."
            </blockquote>
            <div className="testimonial-author">
              <span className="author-name">Lakshmi Narayanan</span>
              <span className="author-detail">Coimbatore • Verified Buyer</span>
            </div>
          </div>

          {/* Right Stacked Testimonials */}
          <div className="stacked-testimonials">
            <div className="small-testimonial-card">
              <div className="stars-row" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#176B45" color="#176B45" />
                ))}
              </div>
              <p className="small-quote">
                "Ordered a cord drill at 11am and it was delivered by 3pm the same day. Saved a
                whole project day. Great delivery service and genuine quality products."
              </p>
              <div className="testimonial-author">
                <span className="author-name">Ravi Prakash</span>
                <span className="author-detail">Trichy • Contractor</span>
              </div>
            </div>

            <div className="small-testimonial-card">
              <div className="stars-row" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#176B45" color="#176B45" />
                ))}
              </div>
              <p className="small-quote">
                "Was hesitant to buy the robotic vacuum online, but the staff gave helpful advice
                on a phone call. Now a customer for all home appliances."
              </p>
              <div className="testimonial-author">
                <span className="author-name">M. Janani</span>
                <span className="author-detail">Anna Nagar, Chennai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
