import React from "react";
import { MessageCircle } from "lucide-react";
import "./ContactCTA.css";

const WHATSAPP_NUMBER = "+91 94431 28145";
const WHATSAPP_LINK = `https://wa.me/919443128145?text=Hi%20Sriram%20%26%20Co.,%20I%20have%20a%20question%20regarding%20products%20on%20your%20store.`;

const ContactCTA = () => {
  return (
    <section className="contact-cta-section" aria-label="Customer Assistance">
      <div className="container-wide">
        <div className="contact-cta-box">
          <div className="contact-cta-content">
            <h2 className="contact-cta-title">Have a question before you buy?</h2>
            <p className="contact-cta-desc">
              Drop us a note or WhatsApp us directly. Real humans will help you shop
              for things that best suit your household or workspace.
            </p>
          </div>

          <div className="contact-cta-action">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta-btn"
            >
              <MessageCircle size={18} strokeWidth={2.2} />
              <span>Message: {WHATSAPP_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
