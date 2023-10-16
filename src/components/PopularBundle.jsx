import React, { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import { BiLock, BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reduxx/cartSlice";
import { toast } from "react-toastify";
import { addProductToCart } from "../action/cartActions";

const PopularBundle = () => {
  const context = useContext(myContext);
  const { mode, packagee } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addtoCartHandler = () => {
    dispatch(addProductToCart(packagee));
  };

  // const addCart = (packagee) => {
  //   dispatch(addToCart(packagee));
  //   toast.success("add to cart");
  // };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="px-0 md:px-[3rem] lg:px-[6rem] xl:px-[8rem] py-[6rem]">
      <div
        style={{ backgroundColor: mode === "dark" ? "#76c750" : "" }}
        className="bg-[#b9fd99] py-8 px-2 md:px-6 md:rounded-[2rem]"
      >
        <h2 className="font-semibold text-[1.6rem]">Popular Bundle Pack</h2>
        <div className="py-16 px-16 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 lg:gap-16">
          {packagee.map((item, index) => {
            const { imageUrl, title, category, price } = item;
            return (
              <div
                key={index}
                className="w-full h-full flex flex-col gap-2 bg-white rounded-xl shadow-sm px-4 md:px-6 py-6 md:py-8"
              >
                <span className=" w-full h-[150px]">
                  <img
                    className="w-full h-[150px] object-fit"
                    src={imageUrl}
                    alt=""
                  />
                </span>
                <span className="">
                  <p className="font-semibold">{title}</p>
                  <p className="text-gray-400 mt-[-.4rem] text-[.8rem]">
                    {category}
                  </p>
                  <p className="font-bold pt-[.4rem] text-[1.1rem]">N{price}</p>
                </span>
                <span className="flex flex-row justify-between">
                  <span className="flex flex-row">
                    <button className="ring-2 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                      <BiMinus />
                    </button>
                    <p className="px-3 font-bold">2</p>
                    <button className="ring-2 ring-[#40aa54] px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                      <BiPlus />
                    </button>
                  </span>
                  <button
                    onClick={addtoCartHandler(item.id)}
                    className="bg-[#287436] h-[30px] flex justify-center items-center rounded-full w-[30px]"
                  >
                    <BiLock color="white" size={20} />{" "}
                  </button>
                </span>
              </div>
            );
          })}
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
