import React, { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import { BiLock, BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reduxx/cartSlice";
import { toast } from "react-toastify";
import { addProductToCart } from "../action/cartActions";

const PopularBundle = () => {
  const context = useContext(myContext);
  const { mode, packagee } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addToCartHandler = () => {
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
        <div className="py-16 px-12 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 md:gap-16">
          {packagee.map((item, index) => {
            const { title, price, category, imageUrl } = item;
            return (
              <motion.div
                whileTap={{ scale: 0.75 }}
                onClick={() =>
                  (window.location.href = `/productinfo/${packagee.id}`)
                }
                key={index}
                style={{ backgroundColor: mode === "dark" ? "#575757" : "" }}
                className="bg-white w-full h-full flex flex-col gap-2 ring-2 ring-gray-300 rounded-md shadow-sm px-4 md:px-6 py-6 md:py-8"
              >
                {" "}
                <span className=" w-full h-[190px] lg:h-[150px] ">
                  <img
                    className="w-full h-[190px] lg:h-[150px] hover:scale-105 transition-all ease-in-out duration-100 object-fit"
                    src={imageUrl}
                    alt=""
                  />
                </span>
                <span className="">
                  <p className="font-semibold">{title}</p>
                  <p className="text-gray-400 mt-[-.6rem] text-[.8rem] lg:text-[1rem]">
                    {category}
                  </p>
                  <p className="font-bold pt-[.4rem] text-[1.1rem]">N{price}</p>
                </span>
                <span className="flex flex-row justify-between">
                  <span className="flex flex-row">
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300"
                    >
                      <BiMinus />
                    </motion.button>
                    <p className="px-3 font-bold">2</p>
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300"
                    >
                      <BiPlus />
                    </motion.button>
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    onClick={addToCartHandler(packagee.id)}
                    className="bg-[#287436] h-[30px] flex justify-center items-center rounded-full w-[30px]"
                  >
                    <BiLock color="white" size={20} />{" "}
                  </motion.button>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularBundle;
