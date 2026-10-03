import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../data/categories";
import { products } from "../data/products";
import "./CategoriesPage.css";

const CategoriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="categories-page">
      <div className="container-wide">
        <div className="categories-breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>All Categories</span>
        </div>

        <section className="categories-banner">
          <span className="section-eyebrow">Organized by Purpose</span>
          <h1 className="categories-page-title">Explore by Category</h1>
          <p className="categories-page-desc">
            Browse through our specialized product divisions. Every category contains tested,
            heavy-duty equipment backed by authentic local service and guarantees.
          </p>
        </section>

        <div className="categories-list-grid">
          {categories.map((cat) => {
            const catProducts = products.filter((p) => p.categorySlug === cat.slug);
            return (
              <div key={cat.id} className="category-division-card">
                <div className="division-image-wrap">
                  <img src={cat.image} alt={cat.name} />
                  <span className="division-num">{cat.number}</span>
                </div>
                <div className="division-info">
                  <div className="division-meta">
                    <span className="division-count">{cat.count} Available Products</span>
                  </div>
                  <h2 className="division-name">{cat.name}</h2>
                  <p className="division-desc">{cat.description}</p>

                  <div className="division-samples">
                    <span className="samples-label">Popular models:</span>
                    <div className="sample-tags">
                      {catProducts.map((p) => (
                        <Link
                          key={p._id}
                          to={`/product/${p._id}`}
                          className="sample-product-tag"
                        >
                          {p.name.slice(0, 32)}...
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/shop?category=${cat.slug}`}
                    className="btn-primary division-explore-btn"
                  >
                    <span>Browse {cat.name}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
