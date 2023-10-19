import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import CategoryCards from "../components/CategoryCards";
import RowContainer from "../components/RowContainer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import ProductContainer from "../components/ProductContainer";

const Home = () => {
  const [{ products }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue]);
  return (
    <Layout>
      <Hero />
      <section className="w-full my-6 px-4 md:px-8">
        <div className="w-full flex items-center justify-between">
          <p className="text-base md:text-2xl font-semibold capitalize text-[#22305f] relative before:absolute before:rounded-lg before:content before:w-24 before:md:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-[#ff7518] to-[#c44e00] transition-all ease-in-out duration-100">
            Fresh & healthy fruits selected just for you
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValue(-200)}
              className="w-8 h-8 rounded-lg bg-[#abbbf1] hover:bg-[#22305f] cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValue(200)}
              className="w-8 h-8 rounded-lg bg-[#abbbf1] hover:bg-[#22305f] cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
      </section>
      <RowContainer
        scrollValue={scrollValue}
        flag={true}
        data={products?.filter((n) => n.category === "fruits")}
      />
      <ProductContainer />
      {/* <CategoryCards /> */}
      {/*<PopularProducts />
      <PopularBundle /> */}
    </Layout>
  );
};

export default Home;
