import React, { useContext } from "react";
import myContext from "../context/myContext";

const Banner = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <main className="px-0 md:px-10 lg:px-20">
      <div
        style={{ backgroundColor: mode === "dark" ? "" : "" }}
        className="flex flex-row justify-center gap-8 items-center bg-[#bfcdfb] rounded-[24px] px-8 py-16"
      >
        <article className="w-50%">
          <p className="text-[1.2rem] text-[#000e3c] md:text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem] leading-[1.4rem] sm:leading-[2rem] md:leading-[2.4rem] lg:leading-[3rem] font-extrabold">
            Fresh and Healthy <br /> Veggies Organic Market
          </p>
          <p
            style={{ color: mode === "dark" ? "#6082f6" : "" }}
            className="text-[#809bf7]  py-4 md:py-8  text-sm md:text-base lg:text-[1.2rem]"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit atque
            iusto sunt quam magni saepe expedita unde, incidunt optio nisi!
          </p>
          <button className="bg-[#0037f0] text-[#e8ecf2] text-sm md:text-base rounded-lg px-8 py-1 md:py-2">
            Shop Now
          </button>
        </article>
        <span className="w-40%">
          <img className="w-full" src="heroimg.png" alt="" />
        </span>
      </div>
    </main>
  );
};

export default Banner;
