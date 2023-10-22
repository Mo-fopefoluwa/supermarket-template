import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const PopularProducts = ({ flag, data, scrollValuer }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);
  const popularContainer = useRef();
  useEffect(() => {
    popularContainer.current.scrollLeft += scrollValuer;
  }, [scrollValuer]);
  const addtoCart = (item) => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  useEffect(() => {
    addtoCart();
  }, [items]);
  return (
    <div
      ref={popularContainer}
      className={`w-full scroll-smooth flex items-center gap-4 my-12  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[180px] min-w-[180px] md:w-[255px] md:min-w-[255px] lg:w-[320px] lg:min-w-[320px] h-[220px] bg-[#e2dfd2]
               rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col item-center justify-between"
            >
              <div className="w-full flex  items-center justify-between">
                <motion.div
                  className="w-24  h-24 md:w-32 md:h-32 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    className="w-full h-full object-fit"
                    src={item?.imageURL}
                    alt=""
                  />
                </motion.div>
                <motion.div
                  onClick={() => setItems([...cartItems, item])}
                  whileTap={{ scale: 0.75 }}
                  className="w-10 h-10 rounded-full bg-[#22305f] flex items-center justify-center cursor-pointer hover:shadow-md"
                >
                  <MdShoppingBasket className="text-white text-xl" />
                </motion.div>
              </div>
              <div className="w-full flex flex-col items-end justify-end">
                <p className="text-[#22305f] font-semibold text-lg ">
                  {" "}
                  {item?.title}
                </p>
                <p className="mt-1 font-medium text-base text-gray-600">
                  {item?.weight}kg
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-[#22305f] font-semibold">
                    <span className="text-sm text-emerald-600">N</span>{" "}
                    {item?.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <motion.div
          initial={{ x: -200, opacity: 0.5, scale: 0.75 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -200, opacity: 0.5, scale: 0.75 }}
          className="flex items-center my-12 justify-center w-screen  font-bold text-lg md:text-xl text-[#22305f] drop-shadow-sm"
        >
          Products not available
        </motion.div>
      )}
    </div>
  );
};

export default PopularProducts;
