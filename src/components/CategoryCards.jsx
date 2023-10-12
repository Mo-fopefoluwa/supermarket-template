import React, { useContext } from "react";
import myContext from "../context/myContext";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  GiFriedFish,
  GiTomato,
  GiMedicines,
  GiOfficeChair,
  GiLipstick,
  GiPlantSeed,
  GiMilkCarton,
  GiBowlOfRice,
  GiVacuumCleaner,
  GiForkKnifeSpoon,
  GiOpenedFoodCan,
  GiKiwiFruit,
} from "react-icons/gi";
import { BiSolidBabyCarriage } from "react-icons/bi";

const CategoryCards = () => {
  const context = useContext(myContext);
  const { mode } = context;
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 8 },
      },
      "(min-width: 680px)": {
        slides: { perView: 4, spacing: 8 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 7, spacing: 15 },
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
        style={{ color: mode === "dark" ? "white" : "" }}
        className=" text-[1.6rem] font-semibold"
      >
        Category
      </h2>
      <div ref={sliderRef} className="keen-slider py-[2rem] px-4 md:px-6 ">
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide1 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiFriedFish size={35} />
          <p className="font-bold ">Meat & Fish</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide2  hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiTomato size={35} />
          <p className="font-bold ">Vegetables</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide3 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiMedicines size={35} />
          <p className="font-bold ">Medicine</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide4 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <BiSolidBabyCarriage size={35} />
          <p className="font-bold ">Baby Care</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide5 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiOfficeChair size={35} />
          <p className="font-bold ">Office</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide6 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiLipstick size={35} />
          <p className="font-bold ">Beauty</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide7 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiPlantSeed size={35} />
          <p className="font-bold ">Gardening</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide8 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiKiwiFruit size={35} />
          <p className="font-bold ">Fruits</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide9 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiBowlOfRice size={35} />
          <p className="font-bold ">Food and Oils</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide10 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiForkKnifeSpoon size={35} />
          <p className="font-bold ">Cutleries</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide11 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiMilkCarton size={35} />
          <p className="font-bold text-[##40aa54]">Milk & Dairies</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide12 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiOpenedFoodCan size={35} />
          <p className="font-bold ">Snacks & Branded Foods</p>
        </button>
        <button
          style={{ backgroundColor: mode === "dark" ? "#88888a" : "" }}
          className="keen-slider__slide number-slide13 hover:ring-4 ring-[#40aa54] transition-all bg-gray-200 rounded h-[100px] flex flex-col items-center justify-center gap-4"
        >
          <GiVacuumCleaner size={35} />
          <p className="font-bold ">Cleaning & Household</p>
        </button>
      </div>
    </div>
  );
};

export default CategoryCards;
