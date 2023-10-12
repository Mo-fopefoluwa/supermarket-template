import React, { useContext } from "react";
import myContext from "../context/myContext";
import { BiLock } from "react-icons/bi";

const PopularBundle = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div className="px-0 md:px-[2rem] lg:px-[6rem] xl:px-[8rem] py-[6rem]">
      <div
        style={{ backgroundColor: mode === "dark" ? "#76c750" : "" }}
        className="bg-[#b9fd99] py-8 px-2 md:px-6 md:rounded-[2rem]"
      >
        <h2 className="font-semibold text-[1.6rem]">Popular Bundle Pack</h2>
        <div className="py-8 px-4 md:px-8 grid grid-cols-2 lg:grid-cols-3 place-items-center gap-4 lg:gap-16">
          <div className="w-full h-full flex flex-col gap-2 bg-white rounded-xl shadow-sm px-4 md:px-6 py-6 md:py-8">
            <span className=" w-full h-[150px]">
              <img
                className="w-full h-[150px] object-fit"
                src="bundle1.jpeg"
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
                <button className="ring-2 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
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
          <div className="w-full h-full flex flex-col gap-2 bg-white rounded-xl shadow-sm px-4 md:px-6 py-6 md:py-8">
            <span className=" w-full h-[150px]">
              <img
                className="w-full h-[150px] object-fit"
                src="bundle2.jpeg"
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
                <button className="ring-2 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
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
          <div className="w-full h-full flex flex-col gap-2 bg-white rounded-xl shadow-sm px-4 md:px-6 py-6 md:py-8">
            <span className=" w-full h-[150px]">
              <img
                className="w-full h-[150px] object-fit"
                src="bundle3.jpeg"
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
                <button className="ring-2 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
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
          <div className="w-full h-full flex flex-col gap-2 bg-white rounded-xl shadow-sm px-4 md:px-6 py-6 md:py-8">
            <span className=" w-full h-[150px]">
              <img
                className="w-full h-[150px] object-fit"
                src="bundle4.jpeg"
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
                <button className="ring-2 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
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
          <div className="w-full h-full flex flex-col gap-2 bg-white rounded-xl shadow-sm px-4 md:px-6 py-6 md:py-8">
            <span className=" w-full h-[150px]">
              <img
                className="w-full h-[150px] object-fit"
                src="bundle5.jpeg"
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
                <button className="ring-2 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
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
          <div className="w-full h-full flex flex-col gap-2 bg-white rounded-xl shadow-sm px-4 md:px-6 py-6 md:py-8">
            <span className=" w-full h-[150px]">
              <img
                className="w-full h-[150px] object-fit"
                src="bundle6.jpeg"
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
                <button className="ring-2 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
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
        </div>
      </div>
    </div>
  );
};

export default PopularBundle;
