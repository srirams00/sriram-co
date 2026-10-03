import React from "react";
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar" role="region" aria-label="Announcement">
      <div className="container">
        <p className="announcement-text">
          <span className="announcement-highlight">Free delivery on orders above ₹999</span>
          <span className="announcement-dot">•</span>
          <span>Same-day store dispatch across Tamil Nadu</span>
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
