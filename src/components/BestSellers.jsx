import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import "./BestSellers.css";

const BestSellers = () => {
  // Take first 8 products for best sellers grid
  const bestSellerProducts = products.slice(0, 8);

  return (
    <section className="bestsellers-section section-wrapper" aria-label="Best Sellers">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <span className="section-eyebrow">Popular picks from our store</span>
            <h2 className="section-title">Best sellers</h2>
          </div>
          <Link to="/shop" className="section-link">
            <span>View all products</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 4-Column Product Grid */}
        <div className="bestsellers-grid">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
