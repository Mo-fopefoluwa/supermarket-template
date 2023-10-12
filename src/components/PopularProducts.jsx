import React, { useContext } from "react";
import myContext from "../context/myContext";
import { BiLock } from "react-icons/bi";

const PopularProducts = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div className="px-[1rem] md:px-[2rem] lg:px-[6rem] xl:px-[8rem] py-[6rem]">
      <div className="flex flex-row justify-between items-center">
        <h2
          style={{ color: mode === "dark" ? "white" : "" }}
          className="font-semibold text-[1.6rem]"
        >
          Popular Products
        </h2>
        <button className="bg-[#40aa54] text-white rounded-full w-[25%] md:w-[10%] py-1">
          See all
        </button>
      </div>
      <div
        style={{ color: mode === "dark" ? "white" : "" }}
        className="py-8 px-4 md:px-8 grid grid-cols-2 lg:grid-cols-3 place-items-center gap-4 md:gap-16"
      >
        <div
          style={{ backgroundColor: mode === "dark" ? "#575757" : "" }}
          className="bg-white w-full h-full flex flex-col gap-2 ring-2 ring-gray-300 rounded-md shadow-sm px-4 md:px-6 py-6 md:py-8"
        >
          {" "}
          <span className=" w-full h-[150px]">
            <img
              className="w-full h-[150px] object-fit"
              src="image11.jpeg"
              alt=""
            />
          </span>
          <span className="">
            <p className="font-semibold">Cabbage</p>
            <p className="text-gray-400 mt-[-.4rem] text-[.8rem]">1kg</p>
            <p className="font-bold pt-[.4rem] text-[1.1rem]">$13</p>
          </span>
          <span className="flex flex-row justify-between">
            <span className="flex flex-row">
              <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                -
              </button>
              <p className="px-3 font-bold">2</p>
              <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                +
              </button>
            </span>
            <span className="bg-[#287436] h-[30px] flex justify-center items-center rounded-full w-[30px]">
              <BiLock color="white" size={20} />{" "}
            </span>
          </span>
        </div>
        <div
          style={{ backgroundColor: mode === "dark" ? "#575757" : "" }}
          className="bg-white w-full h-full flex flex-col gap-2 ring-2 ring-gray-300 rounded-md shadow-sm px-4 md:px-6 py-6 md:py-8"
        >
          <span className=" w-full h-[150px]">
            <img
              className="w-full h-[150px] object-fit"
              src="image10.jpeg"
              alt=""
            />
          </span>
          <span className="">
            <p className="font-semibold">Cabbage</p>
            <p className="text-gray-400 mt-[-.4rem] text-[.8rem]">1kg</p>
            <p className="font-bold pt-[.4rem] text-[1.1rem]">$13</p>
          </span>
          <span className="flex flex-row justify-between">
            <span className="flex flex-row">
              <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                -
              </button>
              <p className="px-3 font-bold">2</p>
              <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                +
              </button>
            </span>
            <span className="bg-[#287436] h-[30px] flex justify-center items-center rounded-full w-[30px]">
              <BiLock color="white" size={20} />{" "}
            </span>
          </span>
        </div>
        <div
          style={{ backgroundColor: mode === "dark" ? "#575757" : "" }}
          className="bg-white w-full h-full flex flex-col gap-2 ring-2 ring-gray-300 rounded-md shadow-sm px-4 md:px-6 py-6 md:py-8"
        >
          <span className=" w-full h-[150px]">
            <img
              className="w-full h-[150px] object-fit"
              src="image9.jpeg"
              alt=""
            />
          </span>
          <span className="">
            <p className="font-semibold">Cabbage</p>
            <p className="text-gray-400 mt-[-.4rem] text-[.8rem]">1kg</p>
            <p className="font-bold pt-[.4rem] text-[1.1rem]">$13</p>
          </span>
          <span className="flex flex-row justify-between">
            <span className="flex flex-row">
              <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                -
              </button>
              <p className="px-3 font-bold">2</p>
              <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                +
              </button>
            </span>
            <span className="bg-[#287436] h-[30px] flex justify-center items-center rounded-full w-[30px]">
              <BiLock color="white" size={20} />{" "}
            </span>
          </span>
        </div>
        <div
          style={{ backgroundColor: mode === "dark" ? "#575757" : "" }}
          className="bg-white w-full h-full flex flex-col gap-2 ring-2 ring-gray-300 rounded-md shadow-sm px-4 md:px-6 py-6 md:py-8"
        >
          <span className=" w-full h-[150px]">
            <img
              className="w-full h-[150px] object-fit"
              src="image8.jpeg"
              alt=""
            />
          </span>
          <span className="">
            <p className="font-semibold">Cabbage</p>
            <p className="text-gray-400 mt-[-.4rem] text-[.8rem]">1kg</p>
            <p className="font-bold pt-[.4rem] text-[1.1rem]">$13</p>
          </span>
          <span className="flex flex-row justify-between">
            <span className="flex flex-row">
              <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                -
              </button>
              <p className="px-3 font-bold">2</p>
              <button className="ring-2 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                +
              </button>
            </span>
            <span className="bg-[#287436] h-[30px] flex justify-center items-center rounded-full w-[30px]">
              <BiLock color="white" size={20} />{" "}
            </span>
          </span>
        </div>
        <div
          style={{ backgroundColor: mode === "dark" ? "#575757" : "" }}
          className="bg-white w-full h-full flex flex-col gap-2 ring-2 ring-gray-300 rounded-md shadow-sm px-4 md:px-6 py-6 md:py-8"
        >
          <span className=" w-full h-[150px]">
            <img
              className="w-full h-[150px] object-fit"
              src="image7.jpeg"
              alt=""
            />
          </span>
          <span className="">
            <p className="font-semibold">Cabbage</p>
            <p className="text-gray-400 mt-[-.4rem] text-[.8rem]">1kg</p>
            <p className="font-bold pt-[.4rem] text-[1.1rem]">$13</p>
          </span>
          <span className="flex flex-row justify-between">
            <span className="flex flex-row">
              <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                -
              </button>
              <p className="px-3 font-bold">2</p>
              <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                +
              </button>
            </span>
            <span className="bg-[#287436] h-[30px] flex justify-center items-center rounded-full w-[30px]">
              <BiLock color="white" size={20} />{" "}
            </span>
          </span>
        </div>
        <div
          style={{ backgroundColor: mode === "dark" ? "#575757" : "" }}
          className="bg-white w-full h-full flex flex-col gap-2 ring-2 ring-gray-300 rounded-md shadow-sm px-4 md:px-6 py-6 md:py-8"
        >
          <span className=" w-full h-[150px]">
            <img
              className="w-full h-[150px] object-fit"
              src="image6.jpeg"
              alt=""
            />
          </span>
          <span className="">
            <p className="font-semibold">Cabbage</p>
            <p className="text-gray-400 mt-[-.4rem] text-[.8rem]">1kg</p>
            <p className="font-bold pt-[.4rem] text-[1.1rem]">$13</p>
          </span>
          <span className="flex flex-row justify-between">
            <span className="flex flex-row">
              <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                -
              </button>
              <p className="px-3 font-bold">2</p>
              <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                +
              </button>
            </span>
            <span className="bg-[#287436] h-[30px] flex justify-center items-center rounded-full w-[30px]">
              <BiLock color="white" size={20} />{" "}
            </span>
          </span>
        </div>
        {/* <div className="w-full h-full flex flex-col gap-2 ring-1 ring-gray-300 rounded-md shadow-sm px-6 py-8">
          <span className=" w-full h-[150px]">
            <img
              className="w-full h-[150px] object-fit"
              src="image0.jpeg"
              alt=""
            />
          </span>
          <span className="">
            <p className="font-semibold">Cabbage</p>
            <p className="text-gray-400 mt-[-.4rem] text-[.8rem]">1kg</p>
            <p className="font-bold pt-[.4rem] text-[1.1rem]">$13</p>
          </span>
          <span className="flex flex-row justify-between">
            <span className="flex flex-row">
              <button className="ring-1 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                -
              </button>
              <p className="px-3 font-bold">2</p>
              <button className="ring-1 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                +
              </button>
            </span>
            <span className="bg-[#287436] h-[30px] flex justify-center items-center rounded-full w-[30px]">
              <BiLock color="white" size={20} />{" "}
            </span>
          </span>
        </div>
        <div className="w-full h-full flex flex-col gap-2 ring-1 ring-gray-300 rounded-md shadow-sm px-6 py-8">
          <span className=" w-full h-[150px]">
            <img
              className="w-full h-[150px] object-fit"
              src="image0.jpeg"
              alt=""
            />
          </span>
          <span className="">
            <p className="font-semibold">Cabbage</p>
            <p className="text-gray-400 mt-[-.4rem] text-[.8rem]">1kg</p>
            <p className="font-bold pt-[.4rem] text-[1.1rem]">$13</p>
          </span>
          <span className="flex flex-row justify-between">
            <span className="flex flex-row">
              <button className="ring-1 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                -
              </button>
              <p className="px-3 font-bold">2</p>
              <button className="ring-1 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                +
              </button>
            </span>
            <span className="bg-[#287436] h-[30px] flex justify-center items-center rounded-full w-[30px]">
              <BiLock color="white" size={20} />{" "}
            </span>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default PopularProducts;
