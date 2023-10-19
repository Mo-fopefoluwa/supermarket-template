import React, { useContext } from "react";
import myContext from "../context/myContext";
import { StateContext, useStateValue } from "../context/StateProvider";

const Hero = () => {
  const { mode } = useStateValue();

  return (
    <div className="px-[1rem] md:px-[4rem]  py-[2rem] md:py-[4rem]">
      <div className="bg-[#bfcdfb] flex flex-row overflow-hidden justify-between items-center px-4 md:px-[4rem] rounded-md h-[300px] md:h-[450px]">
        <div className="flex flex-col justify-center w-[60%] md:w-[50%]">
          <h1 className="text-[1.2rem] text-[#000e3c] md:text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem] leading-[1.4rem] sm:leading-[2rem] md:leading-[2.4rem] lg:leading-[3rem] font-extrabold">
            Order your <br /> Daily Groceries with speed and <br />
            <span className="text-[#ff6600]"> ease</span>
          </h1>
          <p className="text-[#1c5870]  py-4 md:py-8 font-bold text-[1.3rem] md:text-[1.6rem] lg:text-[1.8rem]">
            #Stress Free
          </p>
          {/* <div className="md:flex hidden flex-row items-center">
            <input
              className="px-8 w-[100%] text-[.8rem] md:text-[1rem] focus:outline-none py-[.3rem] md:py-[.6rem] rounded-full"
              type="text"
              placeholder="Find your daily groceries"
            />
            <button
              style={{ backgroundColor: mode === "dark" ? "#d2a200" : "" }}
              className="text-white ml-[-2.5rem] text-[.8rem] md:text-[1rem] py-[.3rem] md:py-[.6rem] rounded-full px-4 md:px-8 font-semibold bg-[#f0b900]"
            >
              Search
            </button>
          </div> */}
        </div>
        <img className="w-[40%]" src="heroimg.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
