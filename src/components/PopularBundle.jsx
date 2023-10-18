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
        style={{ backgroundColor: mode === "dark" ? "" : "" }}
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
          <div className="py-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 md:gap-16">
            {packagee.map((item, index) => {
              const { title, price, category, imageUrl } = item;
              return (
                <div
                  key={index}
                  style={{ backgroundColor: mode === "dark" ? "#1d1d1e" : "" }}
                  className="group bg-[#e8ecf2] overflow-hidden relative w-full h-[320px] flex flex-col gap-2 rounded-md shadow-sm px-2 md:px-4 py-4 md:py-6"
                >
                  {" "}
                  <motion.span
                    whileTap={{ scale: 0.75 }}
                    onClick={() =>
                      (window.location.href = `/productinfo/${packagee.id}`)
                    }
                    className=" w-full h-[250px]"
                  >
                    <img
                      className="w-full overflow-hidden relative h-[200px] rounded-md object-fit hover:scale-105 transition-all ease-in-out duration-100"
                      src={imageUrl}
                      alt=""
                    />
                    <div
                      whileTap={{ scale: 0.75 }}
                      onClick={() =>
                        (window.location.href = `/productinfo/${packagee.id}`)
                      }
                      className="absolute translate-y-[225px]  w-[100%] h=[100%] group-hover:translate-y-[100px] transition-all ease-in-out duration-400 bg-[#e8ecf2] pl-4 md:pl-8 py-4 bg-opacity-80 top-2 left-0"
                    >
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
                      </span>
                      <motion.button
                        whileTap={{ scale: 0.75 }}
                        //onClick={addCart(products.id)}
                        className="bg-[#0037f0] h-[45px] flex justify-center items-center rounded-full w-[45px] mt-4"
                      >
                        <BiLock color="#e8ecf2" size={26} />{" "}
                      </motion.button>
                    </div>
                  </motion.span>
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
