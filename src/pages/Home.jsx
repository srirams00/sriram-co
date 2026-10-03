import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import CategorySection from "../components/CategorySection";
import BestSellers from "../components/BestSellers";
import PromotionalGrid from "../components/PromotionalGrid";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import StoreLocations from "../components/StoreLocations";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home-page-main">
      <Hero />
      <Benefits />
      <CategorySection />
      <BestSellers />
      <PromotionalGrid />
      <Testimonials />
      <HowItWorks />
      <StoreLocations />
      <ContactCTA />
    </main>
  );
};

export default Home;
