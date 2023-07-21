import React from "react";
import Layout from "../components/Layout";
import BlogSection from "../components/BlogSection";
import NewsletterSection from "../components/NewsletterSection";

const BlogPage = () => {
  return (
    <Layout>
      <BlogSection />
      <NewsletterSection />
    </Layout>
  );
};

export default BlogPage;
