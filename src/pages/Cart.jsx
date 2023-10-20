import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Modal from "../component/modal/Modal";
import { HiArrowLeft } from "react-icons/hi";
import { useContext } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { BiMinus, BiPlus, BiRightArrow, BiTrash } from "react-icons/bi";
import CheckoutModal from "../components/CheckoutModal";
import { useStateValue } from "../context/StateProvider";
import { BsFillBackspaceFill } from "react-icons/bs";
import { VscRefresh } from "react-icons/vsc";
import { actionType } from "../context/reducer";

const Cart = () => {
  const [{ cartShow, cartItems }, dispatch] = useStateValue();
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
    >
      <div className="flex justify-between items-center flex-row pt-[4rem] px-4 md:px-8 lg:px-12">
        <Link onClick={showCart} className="  ">
          <motion.div whileTap={{ scale: 0.75 }} className="">
            <BsFillBackspaceFill size={25} />
          </motion.div>
        </Link>
        <h2 className="font-bold text-[1.4rem] text-center ">Cart</h2>

        <motion.div
          whileTap={{ scale: 0.75 }}
          className="flex items-center text-base font-semibold"
        >
          Clear <VscRefresh size={28} />
        </motion.div>
      </div>

      {cartItems && cartItems.length > 0 ? (
        <>
          <div className=" flex justify-center pt-[4rem] items-center">
            <div className="w-[90vw] md:w-[70vw] lg:w-[50vw]">
              {cartItems &&
                cartItems.map((item) => {
                  return (
                    <div
                      key={item?.id}
                      className="h-[150px] border-b-2 border-t-2 border-t-gray-300 border-b-gray-300 flex flex-row justify-center items-center gap-8"
                    >
                      <div className="w-[28%] sm:w-[24%] md:w-[20%] px-4 py-4">
                        <img
                          className="h-full w-full"
                          src={item?.imageURL}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-4 w-[60%]">
                        <span>
                          <p className="font-bold text-[1.1rem]">
                            {" "}
                            {item?.title}
                          </p>
                          <p className="text-sm font-semibold text-gray-600">
                            N {item?.price}
                          </p>
                        </span>
                        <span className="flex flex-row justify-between">
                          <span className="flex flex-row">
                            <motion.button
                              whileTap={{ scale: 0.75 }}
                              className="ring-2 ring-[#22305f]  px-3 rounded-sm hover:bg-[#3b68fd] hover:text-white font-semibold  hover:ring-[#22305f]/80"
                            >
                              <BiMinus size={20} />
                            </motion.button>
                            <p className="px-3 font-bold"> {item?.qty} </p>
                            <motion.button
                              whileTap={{ scale: 0.75 }}
                              className="ring-2 ring-[#22305f]  px-3 rounded-sm hover:bg-[#3b68fd] hover:text-white font-semibold  hover:ring-[#22305f]/80"
                            >
                              <BiPlus size={20} />
                            </motion.button>
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-col gap-8 items-end">
                        <motion.button whileTap={{ scale: 0.75 }}>
                          {" "}
                          <BiTrash className="text-red-600" size={22} />
                        </motion.button>
                        <p className="font-bold ">N2000</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="mt-8  flex justify-center items-center  py-8">
            <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] px-4">
              <dl className="space-y-0.5 ">
                <div className="flex justify-between pb-4">
                  <dt className="font-bold text-gray-600">Subtotal</dt>
                  <dd className="font-bold">N 200</dd>
                </div>

                <div className="flex justify-between pb-4">
                  <dt className="font-bold text-gray-600">Shipping</dt>
                  <dd className="font-bold">N200</dd>
                </div>

                <div className="flex border-t-2 border-dashed border-t-gray-600 pt-2 pb-4 justify-between !text-base font-medium">
                  <dt className="font-bold text-gray-600">Total</dt>
                  <dd className="font-bold">N200</dd>
                </div>
              </dl>

              <div className="flex justify-center md:justify-end  pt-4">
                <CheckoutModal />
              </div>
            </div>
          </div>
        </>
      ) : (
        <> You have no item in your cart </>
      )}
    </motion.div>
  );
};

export default Cart;
