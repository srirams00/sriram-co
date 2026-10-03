import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./PromotionalGrid.css";

const PromotionalGrid = () => {
  return (
    <section className="promo-section section-wrapper" aria-label="Featured Collections">
      <div className="container-wide">
        <div className="promo-grid-container">
          {/* Top-Left: Text Panel */}
          <div className="promo-panel promo-text-panel promo-top-left">
            <span className="promo-tag">KITCHEN ESSENTIALS</span>
            <h2 className="promo-title">Everyday appliances, chosen well.</h2>
            <p className="promo-description">
              Practical products tested to make routine tasks swift, effortless and
              pleasant for your household.
            </p>
            <Link to="/shop?category=kitchen" className="btn-primary promo-btn">
              <span>Shop now</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Top-Right: Mixer Grinder Image Panel */}
          <div className="promo-panel promo-image-panel promo-top-right">
            <img
              src="/images/promo_mixer.jpg"
              alt="Heavy duty multi-jar mixer grinder"
              className="promo-image"
              loading="lazy"
            />
          </div>

          {/* Bottom-Left: Vacuum Cleaner Image Panel */}
          <div className="promo-panel promo-image-panel promo-bottom-left">
            <img
              src="/images/promo_vacuum.jpg"
              alt="Industrial drum wet and dry vacuum cleaner"
              className="promo-image"
              loading="lazy"
            />
          </div>

          {/* Bottom-Right: Text Panel */}
          <div className="promo-panel promo-text-panel promo-bottom-right">
            <span className="promo-tag">HOME APPLIANCES</span>
            <h2 className="promo-title">Useful upgrades for a more comfortable home.</h2>
            <p className="promo-description">
              Powerful, durable new solutions for cleaning, air quality, and all-around daily living comfort.
            </p>
            <Link to="/shop?category=cleaning" className="btn-primary promo-btn">
              <span>Explore now</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalGrid;
