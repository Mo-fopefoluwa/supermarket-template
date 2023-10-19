import React, { useState } from "react";
import { motion } from "framer-motion";
import { categories } from "../utils/data";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import Layout from "./Layout";

const ProductContainer = () => {
  const [filter, setFilter] = useState("fruits");
  const [{ products }, dispatch] = useStateValue();
  return (
    <Layout>
      <section className="w-full my-6  " id="product">
        <div className="w-full flex flex-col items-center justify-center">
          <p
            className="text-base px-4  md:px-8 md:text-2xl font-semibold capitalize text-[#22305f] relative before:absolute 
        before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-6 mr-auto before:bg-gradient-to-tr from-[#ff7518] to-[#c44e00] transition-all ease-in-out duration-100"
          >
            Our Popular Products
          </p>
          <div className="w-full flex px-4 md:px-8 items-center justify-center lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none ">
            <div className=" py-[2rem] flex flex-row gap-4 justify-center items-center flex-wrap px-4 md:px-6 ">
              {categories &&
                categories.map((category) => {
                  const { name, icon, urlParamName } = category;
                  return (
                    <motion.button
                      key={category.id}
                      whileTap={{ scale: 0.75 }}
                      onClick={() => setFilter(category.urlParamName)}
                      className={`group  ${
                        filter === category.urlParamName
                          ? "bg-[#ff7518]"
                          : "bg-[#e2dfd2]"
                      } w-24 min-w-[94px] h-28 hover:shadow-lg hover:bg-[#ff7518]  text-[#1e1700] hover:shadow-[#ff7518]/60 bg-[#e2dfd2] rounded-lg drop-shadow-lg flex flex-col items-center justify-center gap-2 md:gap-4`}
                    >
                      <p
                        className={` text-[1.8rem]  py-2 px-2 rounded-full group-hover:text-[#1e1700] ${
                          filter === category.urlParamName
                            ? "text-gray-800 bg-gray-200"
                            : "text-[#e2dfd2] "
                        } group-hover:bg-[#e2dfd2] bg-[#ff7518] text-[#e2dfd2] md:text-[2.5rem] `}
                      >
                        {" "}
                        {icon}{" "}
                      </p>
                      <p
                        className={`capitalize text-sm font-bold group-hover:text-[#e2dfd2] text-[#1e1700] ${
                          filter === category.urlParamName
                            ? "text-[#1e1700]"
                            : "text-gray-800"
                        }`}
                      >
                        {name}
                      </p>
                    </motion.button>
                  );
                })}
            </div>
          </div>
          <div className="w-full md:px-8">
            <RowContainer
              flag={false}
              data={products?.filter((n) => n.category === filter)}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductContainer;
