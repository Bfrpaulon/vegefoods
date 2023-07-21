import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;
