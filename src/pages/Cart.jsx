import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import Modal from "../component/modal/Modal";
import { HiArrowLeft } from "react-icons/hi";
import { useContext } from "react";
import myContext from "../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../reduxx/cartSlice";
import { toast } from "react-toastify";
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import CheckoutModal from "../components/CheckoutModal";
import {
  deleteItemFromCart,
  listCartItems,
  updateCartQty,
} from "../action/cartActions";
import { Link } from "react-router-dom";

const Cart = () => {
  const context = useContext(myContext);
  const { mode, product } = context;
  const dispatch = useDispatch();
  const cartItemsList = useSelector((state) => state.cartItemsList);
  const { error, cartItems } = cartItemsList;

  const [qty, setQty] = React.useState(Number(product.qtyInCart));
  const handleCartQty = (product) => {
    dispatch(updateCartQty(product, Number(qty)));
  };

  const handleCartDel = (cartItemId) => {
    dispatch(deleteItemFromCart(cartItemId));
  };
  // React.useEffect(() => {
  //   dispatch(listCartItems());
  // }, [dispatch]);
  // console.log(cartItems);
  // const [totalAmount, setTotalAmount] = useState(0);
  // useEffect(() => {
  //   let temp = 0;
  //   cartItems.forEach((cartItem) => {
  //     temp = temp + parseInt(cartItem.price);
  //   });
  //   setTotalAmount(temp);
  //   // console.log(temp)
  // }, [cartItems]);

  // const shipping = parseInt(100);
  // const grandTotal = shipping + totalAmount;

  // // add to cart
  // const deleteCart = (item) => {
  //   dispatch(deleteFromCart(item));
  //   toast.success("delete cart");
  // };

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cartItems));
  // }, [cartItems]);

  return (
    <div>
      <Link to={"/"} className=" relative pt-[4rem] w-[100%]">
        <HiArrowLeft className="absolute left-8 top-[4.2rem]" size={25} />
        <h2 className="font-bold text-[1.4rem] text-center ">Cart</h2>
      </Link>
      <div className=" flex justify-center pt-[4rem] items-center">
        <div className="w-[90vw] md:w-[70vw] lg:w-[50vw]">
          {cartItems.map((item) => {
            return (
              <>
                <div className="h-[150px] border-b-2 border-t-2 border-t-gray-300 border-b-gray-300 flex flex-row justify-center items-center gap-8">
                  <div className="w-[28%] sm:w-[24%] md:w-[20%] px-4 py-4">
                    <img className="h-full w-full" src={item.imageURL} alt="" />
                  </div>
                  <div className="flex flex-col gap-4 w-[60%]">
                    <span>
                      <p className="font-bold text-[1.1rem]"> {item.title}</p>
                      <p className="text-sm font-semibold text-gray-600">
                        N {item.price}
                      </p>
                    </span>
                    <span className="flex flex-row justify-between">
                      <span className="flex flex-row">
                        <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                          <BiMinus />
                        </button>
                        <p className="px-3 font-bold">{qty}</p>
                        <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                          <BiPlus />
                        </button>
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-8 items-end">
                    <button onClick={() => handleCartDel(item.id)}>
                      {" "}
                      <BiTrash size={22} />
                    </button>
                    <p className="font-bold">N{item.price}</p>
                  </div>
                </div>
              </>
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
    </div>
  );
};

export default Cart;
