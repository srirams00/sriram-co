import React from "react";
import { Headphones, ShieldCheck, RefreshCw, Lock } from "lucide-react";
import "./Benefits.css";

const benefitsData = [
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're here to help"
  },
  {
    icon: ShieldCheck,
    title: "Quality Products",
    description: "Products you can trust"
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Hassle-free returns"
  },
  {
    icon: Lock,
    title: "Secure Shopping",
    description: "Safe and secure"
  }
];

const Benefits = () => {
  return (
    <section className="benefits-section" aria-label="Store Benefits">
      <div className="container-wide">
        <div className="benefits-strip">
          {benefitsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="benefit-item">
                <div className="benefit-icon-box">
                  <Icon size={18} strokeWidth={2.2} />
                </div>
                <div className="benefit-text">
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
