import React, { useContext } from "react";
import myContext from "../context/myContext";

const Hero = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div className="px-[2rem] md:px-[4rem]  py-[2rem] md:py-[4rem]">
      <div
        style={{ backgroundColor: mode === "dark" ? "#76c750" : "" }}
        className="bg-[#b9fd99] flex flex-row justify-between items-center px-4 md:px-[4rem] rounded-md h-[250px] md:h-[400px]"
      >
        <div className="flex flex-col justify-center w-[60%] md:w-[50%]">
          <h1 className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[2rem] md:leading-[2.4rem] lg:leading-[3rem] font-extrabold">
            Order your <br /> Daily Groceries
          </h1>
          <p
            style={{ color: mode === "dark" ? "#058f3e" : "" }}
            className="text-[#40aa54]  py-4 md:py-8 font-bold text-[1.3rem] md:text-[1.6rem] lg:text-[1.8rem]"
          >
            #Free Delivery
          </p>
          <div className="flex flex-row items-center">
            <input
              className="px-8 w-[100%] text-[.8rem] md:text-[1rem] focus:outline-none py-[.3rem] md:py-[.6rem] rounded-full"
              type="text"
              placeholder="Find your daily groceries"
            />
            <button
              style={{ backgroundColor: mode === "dark" ? "#058f3e" : "" }}
              className="text-white ml-[-2.5rem] text-[.8rem] md:text-[1rem] py-[.3rem] md:py-[.6rem] rounded-full px-4 md:px-8 font-semibold bg-[#40aa54]"
            >
              Search
            </button>
          </div>
        </div>
        <img className="w-[40%]" src="heroimg.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
