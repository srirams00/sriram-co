import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" aria-label="Hero Introduction">
      <div className="container-wide hero-container">
        {/* Left Content Area */}
        <div className="hero-content">
          <span className="hero-eyebrow">A smarter way to shop</span>
          <h1 className="hero-headline">
            Good tools.<br />
            Better living.
          </h1>
          <p className="hero-description">
            Reliable, quality-tested tools for every corner of your home.
            Chosen with care, delivered to you.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn-primary hero-btn">
              <span>Shop all products</span>
              <ArrowRight size={17} strokeWidth={2.2} />
            </Link>
          </div>
        </div>

        {/* Right Showcase Image Area */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img
              src="/images/hero_kitchen.jpg"
              alt="Modern home kitchen appliances and tools curated by Sriram & Co."
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
