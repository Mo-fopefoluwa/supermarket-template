import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import PopularProducts from "../components/PopularProducts";
import PopularBundle from "../components/PopularBundle";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <CategoryCards />
      <PopularProducts />
      <PopularBundle />
      <Banner />
    </Layout>
  );
};

export default Home;
