import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div
      ref={rowContainer}
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
              className="w-[180px] min-w-[180px] md:w-[275px] md:min-w-[275px] lg:w-[320px] lg:min-w-[320px] h-[220px] bg-[#e2dfd2]
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
        <div className="flex items-center justify-center w-screen">
          Products not available
        </div>
      )}
    </div>
  );
};

export default RowContainer;
