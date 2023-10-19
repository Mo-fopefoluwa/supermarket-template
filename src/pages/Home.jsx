import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import CategoryCards from "../components/CategoryCards";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <CategoryCards />
      {/*<PopularProducts />
      <PopularBundle /> */}
    </Layout>
  );
};

export default Home;
