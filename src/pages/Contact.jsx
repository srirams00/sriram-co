import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import StoreLocations from "../components/StoreLocations";
import ContactCTA from "../components/ContactCTA";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Product Enquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Product Enquiry",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      <div className="container-wide">
        <div className="contact-breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Contact & Store Locations</span>
        </div>

        <section className="contact-intro">
          <span className="section-eyebrow">Always here to help</span>
          <h1 className="contact-main-title">Get in touch with Sriram & Co.</h1>
          <p className="contact-lead">
            Whether you need product advice before buying, want to check stock availability in
            our Trichy or Chennai stores, or need service support for an existing appliance,
            our staff is at your disposal.
          </p>
        </section>

        {/* Contact Split: Form & Info */}
        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-card">
            <h2>Send us a message</h2>
            <p className="form-sub">We usually respond within 2 to 4 business hours.</p>

            {submitted ? (
              <div className="contact-success-msg">
                <CheckCircle2 size={36} className="success-check-ic" />
                <h3>Thank you for reaching out!</h3>
                <p>
                  Your message has been received by our store team. We will contact you shortly.
                </p>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <select name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="Product Enquiry">Product Enquiry / Availability</option>
                    <option value="Store Pickup">Store Pickup Query</option>
                    <option value="Warranty / Repair">Appliance Service & Warranty</option>
                    <option value="Bulk Order">Wholesale / Bulk Order Enquiry</option>
                    <option value="General">Other Query</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="How can we help you today?"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary submit-msg-btn">
                  <span>Send Message</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>

          {/* Quick Info Box */}
          <div className="contact-info-panel">
            <div className="quick-help-card">
              <h3>Direct Contacts</h3>
              <p className="quick-lead">Talk directly with our branch managers:</p>

              <div className="direct-item">
                <div className="direct-icon">
                  <Phone size={16} />
                </div>
                <div>
                  <strong>Trichy Cantonment Branch:</strong>
                  <a href="tel:+919443128145">+91 94431 28145</a>
                </div>
              </div>

              <div className="direct-item">
                <div className="direct-icon">
                  <Phone size={16} />
                </div>
                <div>
                  <strong>Chennai T. Nagar Branch:</strong>
                  <a href="tel:+919840267120">+91 98402 67120</a>
                </div>
              </div>

              <div className="direct-item">
                <div className="direct-icon">
                  <Mail size={16} />
                </div>
                <div>
                  <strong>Customer Support Email:</strong>
                  <a href="mailto:care@sriramandco.in">care@sriramandco.in</a>
                </div>
              </div>

              <div className="direct-item">
                <div className="direct-icon">
                  <Clock size={16} />
                </div>
                <div>
                  <strong>Store Hours:</strong>
                  <span>Mon - Sat: 9:30 AM to 9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="whatsapp-fast-card">
              <h3>Fastest response on WhatsApp</h3>
              <p>
                Need immediate confirmation before coming to our store? Send a photo or text
                on WhatsApp.
              </p>
              <a
                href="https://wa.me/919443128145?text=Hello%20Sriram%20%26%20Co.%20I%20have%20an%20enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary wa-btn"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Store Locations */}
        <StoreLocations />
        <ContactCTA />
      </div>
    </div>
  );
};

export default Contact;
