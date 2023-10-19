import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

import RowContainer from "../components/RowContainer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";

import BestSellers from "../components/BestSellers";
import PopularProducts from "../components/PopularProducts";

const Home = () => {
  const [{ products }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  const [scrollValuee, setScrollValuee] = useState(0);
  const [scrollValuer, setScrollValuer] = useState(0);

  useEffect(() => {}, [scrollValue]);
  useEffect(() => {}, [scrollValuee]);
  useEffect(() => {}, [scrollValuer]);

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
      <section className="w-full my-6 px-4 md:px-8">
        <div className="w-full flex items-center justify-between">
          <p className="text-base md:text-2xl font-semibold capitalize text-[#22305f] relative before:absolute before:rounded-lg before:content before:w-24 before:md:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-[#ff7518] to-[#c44e00] transition-all ease-in-out duration-100">
            Our BestSellers
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValuee(-200)}
              className="w-8 h-8 rounded-lg bg-[#abbbf1] hover:bg-[#22305f] cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValuee(200)}
              className="w-8 h-8 rounded-lg bg-[#abbbf1] hover:bg-[#22305f] cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
      </section>
      <BestSellers
        scrollValuee={scrollValuee}
        flag={true}
        data={products?.filter((n) => n.tag === "bestseller")}
      />
      <section className="w-full my-6 px-4 md:px-8">
        <div className="w-full flex items-center justify-between">
          <p className="text-base md:text-2xl font-semibold capitalize text-[#22305f] relative before:absolute before:rounded-lg before:content before:w-24 before:md:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-[#ff7518] to-[#c44e00] transition-all ease-in-out duration-100">
            Our Popular Products
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValuer(-200)}
              className="w-8 h-8 rounded-lg bg-[#abbbf1] hover:bg-[#22305f] cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValuer(200)}
              className="w-8 h-8 rounded-lg bg-[#abbbf1] hover:bg-[#22305f] cursor-pointer hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
      </section>
      <PopularProducts
        scrollValuer={scrollValuer}
        flag={true}
        data={products?.filter((n) => n.tag === "popular-product")}
      />
    </Layout>
  );
};

export default Home;
