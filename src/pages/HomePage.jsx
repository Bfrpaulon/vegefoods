import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Differentials from "../components/DifferentialsSection";
import GalleryImage from "../components/GalleryImage";
import FeaturedProducts from "../components/FeaturedProducts";
const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Differentials />
      <GalleryImage />
      <FeaturedProducts />
    </Layout>
  );
};

export default HomePage;
