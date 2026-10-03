import React from "react";
import { Link } from "react-router-dom";
import "./CategorySection.css";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/shop?category=${category.slug}`} className="category-card">
      <div className="category-image-wrap">
        <img
          src={category.image}
          alt={category.name}
          className="category-image"
          loading="lazy"
        />
        <span className="category-number-badge">{category.number}</span>
      </div>
      <div className="category-info">
        <h3 className="category-name">{category.name}</h3>
        <span className="category-count">{category.count} products</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
