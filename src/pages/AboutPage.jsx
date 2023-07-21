import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import DealOfTheDay from "../components/DealOfTheDay";
import TestimonialSection from "../components/TestimonialSection";
import NewsletterSection from "../components/NewsletterSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <NewsletterSection />
      <AboutSection />
      <DealOfTheDay />
      <TestimonialSection  />
    </Layout>
  );
};

export default HomePage;
