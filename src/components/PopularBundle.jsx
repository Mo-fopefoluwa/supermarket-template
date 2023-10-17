import React, { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import { BiLock, BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reduxx/cartSlice";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { addProductToCart } from "../action/cartActions";

const PopularBundle = () => {
  const context = useContext(myContext);
  const { mode, packagee, loading } = context;
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
        style={{ backgroundColor: mode === "dark" ? "#f6d360" : "" }}
        className="bg-[#f9e59f] py-8 px-2 md:px-6 md:rounded-[2rem]"
      >
        <h2
          style={{ color: mode === "dark" ? "" : "" }}
          className="font-bold text-[#1e1700] text-[1.2rem] md:text-[1.6rem]"
        >
          Popular Bundle Pack
        </h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="py-16 px-8 md:px-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 md:gap-16">
            {packagee.map((item, index) => {
              const { title, price, category, imageUrl } = item;
              return (
                <div
                  key={index}
                  style={{ backgroundColor: mode === "dark" ? "#1d1d1e" : "" }}
                  className="bg-[#e8ecf2] overflow-hidden relative w-full h-full flex flex-col gap-2 rounded-md shadow-sm px-2 md:px-4 py-4 md:py-6"
                >
                  {" "}
                  <motion.span
                    whileTap={{ scale: 0.75 }}
                    onClick={() =>
                      (window.location.href = `/productinfo/${packagee.id}`)
                    }
                    className=" w-full h-[200px]"
                  >
                    <img
                      className="w-full overflow-hidden relative h-[200px] rounded-md object-fit hover:scale-105 transition-all ease-in-out duration-100"
                      src={imageUrl}
                      alt=""
                    />
                  </motion.span>
                  <div className="absolute translate-y-[400px]  w-[100%] h=[100%] hover:translate-y-0 transition-all ease-in-out duration-200 bg-[#e8ecf2] pl-4 md:pl-8 bg-opacity-75 top-2 left-0">
                    <span className=" pt-4 flex flex-col gap-4">
                      <p className="font-semibold text-base md:text-[1.2rem]">
                        {title}
                      </p>
                      <p
                        style={{ color: mode === "dark" ? "" : "" }}
                        className="text-[#505050] mt-[-.4rem] text-[.8rem] md:text-[1rem]"
                      >
                        {category}
                      </p>
                    </span>
                    <span className="flex flex-col md:flex-row gap-6 md:justify-between py-4">
                      <p
                        style={{ color: mode === "dark" ? "" : "" }}
                        className="font-bold pb-2 text-[#0037f0] text-[1rem] md:text-[1.2rem]"
                      >
                        N {price}
                      </p>
                      <motion.button
                        whileTap={{ scale: 0.75 }}
                        //onClick={addCart(products.id)}
                        className="bg-[#0037f0] h-[45px] flex justify-center items-center rounded-full w-[45px]"
                      >
                        <BiLock color="#e8ecf2" size={26} />{" "}
                      </motion.button>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularBundle;
