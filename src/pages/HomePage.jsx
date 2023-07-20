import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Differentials from "../components/DifferentialsSection";
import GalleryImage from "../components/GalleryImage";
import FeaturedProducts from "../components/FeaturedProducts";
import DealOfTheDay from "../components/DealOfTheDay";
import TestimonialSection from "../components/TestimonialSection";
import NewsletterSection from "../components/NewsletterSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Differentials />
      <GalleryImage />
      <FeaturedProducts />
      <DealOfTheDay />
      <TestimonialSection  />
      <NewsletterSection />
    </Layout>
  );
};

export default HomePage;
