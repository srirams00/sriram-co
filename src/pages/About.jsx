import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, HeartHandshake, Truck, ArrowRight } from "lucide-react";
import Benefits from "../components/Benefits";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="container-wide">
        <div className="about-breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Sriram & Co.</span>
        </div>

        {/* Hero Banner */}
        <section className="about-hero">
          <span className="about-eyebrow">ESTABLISHED 1988 • TAMIL NADU</span>
          <h1 className="about-title">Built on trust, powered by durability.</h1>
          <p className="about-lead">
            For more than three decades, Sriram & Co. has supplied households, commercial
            workshops, and families across Tamil Nadu with honest home appliances and dependable
            power equipment.
          </p>
        </section>

        {/* Story Section */}
        <section className="about-story-section">
          <div className="story-content">
            <h2>Our Origin Story</h2>
            <p>
              Founded in Cantonment, Tiruchirappalli in 1988, Sriram & Co. started as a small
              specialized electrical repair and appliance storefront. Our founders believed
              that home appliances shouldn't just be consumer gadgets that break after a single
              year, but sturdy tools that make daily life easier, year after year.
            </p>
            <p>
              Over 35 years later, with flagship stores in Trichy and Chennai, we remain committed
              to that identical principle: we hand-test every single model before stocking it,
              we stock original spare parts, and we provide lifelong service support to every
              customer.
            </p>
          </div>
          <div className="story-image-wrap">
            <img
              src="/images/hero_kitchen.jpg"
              alt="Sriram & Co showroom and appliance curation"
            />
          </div>
        </section>

        {/* Values Grid */}
        <section className="about-values-section">
          <div className="values-header">
            <span className="section-eyebrow">Why customers stay with us</span>
            <h2 className="section-title">The Sriram Standard</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <ShieldCheck size={24} />
              </div>
              <h3>100% Tested Appliances</h3>
              <p>
                Every motor, pump, and electrical unit passes our in-house stress tests to handle
                local voltage variations and rigorous everyday use.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Award size={24} />
              </div>
              <h3>Authorized Brand Warranty</h3>
              <p>
                Direct partnerships with verified manufacturers ensure that you receive genuine
                warranty cards and prioritized factory service.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <HeartHandshake size={24} />
              </div>
              <h3>Real Human Assistance</h3>
              <p>
                No automated bots. Call or WhatsApp our store technicians directly for authentic
                guidance, spare parts, and quick order tracking.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Truck size={24} />
              </div>
              <h3>Fast Local Delivery</h3>
              <p>
                Express door delivery within 24-48 hours in Trichy, Chennai, Coimbatore, and
                surrounding districts.
              </p>
            </div>
          </div>
        </section>

        <Benefits />

        {/* CTA */}
        <section className="about-bottom-cta">
          <h2>Ready to upgrade your home appliances?</h2>
          <p>Browse our best selling kitchen grinders, robotic vacuums, and power tools.</p>
          <Link to="/shop" className="btn-primary">
            <span>Explore All Products</span>
            <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
