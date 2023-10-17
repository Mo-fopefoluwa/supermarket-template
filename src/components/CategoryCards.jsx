import React, { useContext } from "react";
import myContext from "../context/myContext";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

const CategoryCards = () => {
  const context = useContext(myContext);
  const { mode, categories } = context;
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 12 },
      },
      "(min-width: 680px)": {
        slides: { perView: 3, spacing: 14 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 16 },
      },
    },
    // slides: {
    // perView: 1,
    // spacing: 15,
    // },
  });

  return (
    <div className="px-16 py-8">
      <h2
        style={{ color: mode === "dark" ? "#fbedbf" : "" }}
        className=" text-[1.6rem] text-[#1e1700] font-bold"
      >
        Category
      </h2>
      <div ref={sliderRef} className="keen-slider py-[2rem] px-4 md:px-6 ">
        {categories.map((category) => {
          const { name, icon, urlParamName } = category;
          return (
            <motion.button
              style={{ backgroundColor: mode === "dark" ? "#cfcfcf" : "" }}
              className="keen-slider__slide number-slide hover:ring-4 text-[1e1700] ring-[#f9e59f] transition-all bg-[#d4d4d4] rounded h-[100px] flex flex-col items-center justify-center gap-4"
            >
              <p className="text-[2.5rem] "> {icon} </p>
              <p className="capitalize font-bold ">{name}</p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCards;
