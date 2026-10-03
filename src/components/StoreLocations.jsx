import React from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import "./StoreLocations.css";

const stores = [
  {
    tag: "Main Store",
    city: "Trichy",
    address: "12 Rockins Road, Cantonment (near Central Bus Stand), Tiruchirappalli 620001",
    hours: "Mon - Sat: 9:30 AM - 9:00 PM | Sun: 10:00 AM - 2:00 PM",
    phone: "+91 94431 28145",
    mapUrl: "https://maps.google.com/?q=Tiruchirappalli"
  },
  {
    tag: "Branch Store",
    city: "Chennai",
    address: "45 Usman Road, T. Nagar (opposite Ranganathan St), Chennai 600017",
    hours: "Mon - Sat: 10:00 AM - 9:30 PM | Sun: 10:00 AM - 4:00 PM",
    phone: "+91 98402 67120",
    mapUrl: "https://maps.google.com/?q=T+Nagar+Chennai"
  }
];

const StoreLocations = () => {
  return (
    <section className="stores-section section-wrapper" aria-label="Store Locations">
      <div className="container-wide">
        <div className="stores-header">
          <h2 className="section-title">Visit our stores</h2>
          <p className="section-subtitle">
            Come see the products in person, or pick up your online order from either shop.
          </p>
        </div>

        <div className="stores-grid">
          {stores.map((store) => (
            <div key={store.city} className="store-card">
              <span className="store-tag">{store.tag}</span>
              <h3 className="store-city">{store.city}</h3>

              <div className="store-details">
                <div className="store-detail-row">
                  <MapPin size={16} className="store-detail-icon" />
                  <span className="store-address">{store.address}</span>
                </div>

                <div className="store-detail-row">
                  <Clock size={16} className="store-detail-icon" />
                  <span className="store-hours">{store.hours}</span>
                </div>

                <div className="store-detail-row">
                  <Phone size={16} className="store-detail-icon" />
                  <a href={`tel:${store.phone.replace(/\s+/g, '')}`} className="store-phone">
                    {store.phone}
                  </a>
                </div>
              </div>

              <div className="store-card-footer">
                <a
                  href={store.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="get-directions-btn"
                >
                  <span>Get directions</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreLocations;
