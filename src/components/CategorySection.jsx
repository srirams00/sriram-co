import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../data/categories";
import CategoryCard from "./CategoryCard";
import "./CategorySection.css";

const CategorySection = () => {
  return (
    <section className="category-section section-wrapper" aria-label="Product Categories">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <span className="section-eyebrow">Find what you need faster</span>
            <h2 className="section-title">Shop by category</h2>
          </div>
          <Link to="/categories" className="section-link">
            <span>View all</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 5-Column Category Grid */}
        <div className="category-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
