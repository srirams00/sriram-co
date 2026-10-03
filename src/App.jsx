import React from "react";
import { Routes, Route } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Toast from "./components/Toast";

import "./App.css";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CategoriesPage from "./pages/CategoriesPage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-shell">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Header and Navigation */}
      <Header />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {/* 12. Footer */}
      <Footer />

      {/* Global Interactive Slide-out Cart Drawer */}
      <CartDrawer />

      {/* Global Toast Notifications */}
      <Toast />
    </div>
  );
}

export default App;
