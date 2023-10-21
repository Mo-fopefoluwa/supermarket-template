import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Modal from "../component/modal/Modal";
import { HiArrowLeft, HiArrowNarrowLeft } from "react-icons/hi";
import { useContext } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { BiMinus, BiPlus, BiRightArrow, BiTrash } from "react-icons/bi";
import CheckoutModal from "../components/CheckoutModal";
import { useStateValue } from "../context/StateProvider";
import { BsFillBackspaceFill } from "react-icons/bs";
import { VscRefresh } from "react-icons/vsc";
import { actionType } from "../context/reducer";
import { fadeIn } from "../utils/motion";
import CartItems from "../components/CartItems";

const Cart = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [tot, setTot] = useState("");
  const [flag, setFlag] = useState(false);
  const [{ cartShow, cartItems }, dispatch] = useStateValue();
  // const showCart = () => {
  //   dispatch({
  //     type: actionType.SET_CART_SHOW,
  //     cartShow: !cartShow,
  //   });
  // };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
  }, [tot, flag]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });
    localStorage.setItem("cartItems", JSON.stringify([]));
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
    >
      <div className="flex justify-between items-center flex-row pt-[4rem] px-4 md:px-8 lg:px-12">
        <Link to={"/"} className="  ">
          <motion.div whileTap={{ scale: 0.75 }} className="">
            <HiArrowNarrowLeft size={28} />
          </motion.div>
        </Link>
        <h2 className="font-bold text-[1.4rem] text-center ">Cart</h2>

        <motion.div
          onClick={clearCart}
          whileTap={{ scale: 0.75 }}
          className="flex items-center text-base font-semibold text-red-500"
        >
          Clear <VscRefresh size={22} />
        </motion.div>
      </div>

      {cartItems && cartItems.length > 0 ? (
        <>
          <div className=" flex justify-center pt-[4rem] items-center">
            <div className="w-[90vw] md:w-[70vw] lg:w-[50vw]">
              {cartItems &&
                cartItems.map((item) => {
                  return <CartItems key={item?.id} item={item} />;
                })}
            </div>
          </div>
          <div className="mt-8  flex justify-center items-center  py-8">
            <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] px-4">
              <dl className="space-y-0.5 ">
                <div className="flex justify-between pb-4">
                  <dt className="font-bold text-gray-600">Subtotal</dt>
                  <dd className="font-bold">N {tot}</dd>
                </div>

                <div className="flex justify-between pb-4">
                  <dt className="font-bold text-gray-600">Shipping</dt>
                  <dd className="font-bold">N2500</dd>
                </div>

                <div className="flex border-t-2 border-dashed border-t-gray-600 pt-2 pb-4 justify-between !text-base font-medium">
                  <dt className="font-bold text-gray-600">Total</dt>
                  <dd className="font-bold">{tot + 2500}</dd>
                </div>
              </dl>

              {user ? (
                <div className="flex justify-center md:justify-end  pt-4">
                  <CheckoutModal />
                </div>
              ) : (
                <Link
                  to={"/login"}
                  className="flex justify-center md:justify-end  pt-4"
                >
                  Login to checkout
                </Link>
              )}
            </div>
          </div>
        </>
      ) : (
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-center w-screen h-screen flex justify-center items-center text-lg sm:text-xl font-semibold text-[#22305f] drop-shadow-lg"
        >
          {" "}
          You have no item in your cart{" "}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Cart;
