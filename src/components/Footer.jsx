import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container-wide">
        <div className="footer-grid">
          {/* Column 1: Brand & Social */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-logo">
              <div className="footer-logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="#176B45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12L12 17L21 12" stroke="#176B45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 17L12 22L21 17" stroke="#176B45" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="footer-brand-title">Sriram & Co.</span>
            </Link>
            <p className="footer-brand-desc">
              Reliable appliances, power tools, and genuine spares from Tamil Nadu's
              most trusted home equipment stores since 1988.
            </p>
            <div className="footer-social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon-btn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div className="footer-col">
            <h4 className="footer-col-title">Shop</h4>
            <ul className="footer-links">
              <li><Link to="/shop?category=cleaning">Cleaning Appliances</Link></li>
              <li><Link to="/shop?category=kitchen">Kitchen Essentials</Link></li>
              <li><Link to="/shop?category=power-tools">Power Tools</Link></li>
              <li><Link to="/shop?category=garden">Garden & Outdoor</Link></li>
              <li><Link to="/shop?category=personal-care">Personal Care</Link></li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div className="footer-col">
            <h4 className="footer-col-title">Help</h4>
            <ul className="footer-links">
              <li><Link to="/shop">Track your order</Link></li>
              <li><Link to="/contact">Wholesale enquiry</Link></li>
              <li><Link to="/about">Returns & warranty</Link></li>
              <li><Link to="/about">Delivery terms</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Get in touch</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={15} className="footer-contact-icon" />
                <a href="tel:+919443128145">+91 94431 28145</a>
              </li>
              <li>
                <Mail size={15} className="footer-contact-icon" />
                <a href="mailto:care@sriramandco.in">care@sriramandco.in</a>
              </li>
              <li>
                <MapPin size={15} className="footer-contact-icon" />
                <span>12 Rockins Road, Cantonment, Tiruchirappalli 620001</span>
              </li>
              <li>
                <MapPin size={15} className="footer-contact-icon" />
                <span>45 Usman Road, T. Nagar, Chennai 600017</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © 2026 Sriram & Co. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/about">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about">Terms of Service</Link>
            <span>•</span>
            <Link to="/about">Warranty Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
