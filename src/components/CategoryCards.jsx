import React, { useContext } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { categories } from "../utils/data";

const CategoryCards = () => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 3, spacing: 12 },
      },
      "(min-width: 680px)": {
        slides: { perView: 5, spacing: 14 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 7, spacing: 16 },
      },
    },
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <div className="px-4 md:px-10 lg:px-16 py-8">
      <h2 className="text-[1.2rem] md:text-[1.6rem] text-[#000e3c] font-bold">
        Category
      </h2>
      <div ref={sliderRef} className="keen-slider py-[2rem] px-4 md:px-6 ">
        {categories.map((category) => {
          const { name, icon, urlParamName } = category;
          return (
            <motion.button className="keen-slider__slide number-slide group hover:shadow-lg hover:bg-[#ff7518] active:bg-[#ff7518] active:scale-75 transition-all ease-in-out duration-200 text-[#1e1700] hover:shadow-[#ff7518]/60 bg-[#e2dfd2] rounded h-auto py-2 px-3 flex flex-col items-center justify-center gap-2 md:gap-4">
              <p className="text-[1.8rem] bg-[#ff7518] py-2 px-2 rounded-full group-hover:text-[#1e1700] active:text-[#1e1700] group-hover:bg-[#e2dfd2] active:bg-[#e2dfd2] text-[#e2dfd2] md:text-[2.5rem] ">
                {" "}
                {icon}{" "}
              </p>
              <p className="capitalize font-bold group-hover:text-[#e2dfd2] text-[#1e1700] active:text-[#e2dfd2]">
                {name}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCards;
