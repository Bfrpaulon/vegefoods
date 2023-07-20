import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Differentials from "../components/DifferentialsSection";
import GalleryImage from "../components/GalleryImage";
const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Differentials />
      <GalleryImage />
    </Layout>
  );
};

export default HomePage;
