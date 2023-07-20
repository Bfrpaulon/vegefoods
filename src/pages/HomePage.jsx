import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Differentials from "../components/DifferentialsSection";
const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Differentials />
    </Layout>
  );
};

export default HomePage;
