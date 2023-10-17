import React, { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import { BiLock, BiMinus, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ListProducts } from "../action/productAction";
import { addToCart } from "../reduxx/cartSlice";
import { toast } from "react-toastify";
import { addProductToCart } from "../action/cartActions";

const PopularProducts = () => {
  const context = useContext(myContext);
  const { mode, product } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addtoCartHandler = () => {
    dispatch(addProductToCart(product));
  };

  // const addCart = (product) => {
  //   dispatch(addToCart(product));
  //   toast.success("add to cart");
  // };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  // const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems)

  // const productList = useSelector((state) => state.productList);

  // const { error, products } = productList;

  // React.useEffect(() => {
  //   dispatch(ListProducts());
  // }, [dispatch]);

  return (
    <div className="px-[2rem] md:px-[3rem] lg:px-[6rem] xl:px-[8rem] py-[6rem]">
      <div className="flex flex-row justify-between items-center">
        <h2
          style={{ color: mode === "dark" ? "white" : "" }}
          className="font-semibold text-[1.6rem]"
        >
          Popular Products
        </h2>
        <Link
          to={"/products"}
          className="bg-[#40aa54] text-white flex justify-center font-semibold rounded-full w-[25%] md:w-[10%] py-1"
        >
          See all
        </Link>
      </div>
      <div className="py-16 px-12 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 md:gap-16">
        {product.map((products, index) => {
          const { title, price, weight, imageUrl } = products;
          return (
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() =>
                (window.location.href = `/productinfo/${products.id}`)
              }
              key={index}
              style={{ backgroundColor: mode === "dark" ? "#575757" : "" }}
              className="bg-white w-full h-full flex flex-col gap-2 ring-2 ring-gray-300 rounded-md shadow-sm px-4 md:px-6 py-6 md:py-8"
            >
              {" "}
              <span className=" w-full h-[190px] lg:h-[150px]">
                <img
                  className="w-full h-[190px] lg:h-[150px] object-fit hover:scale-105 transition-all ease-in-out duration-100"
                  src={imageUrl}
                  alt=""
                />
              </span>
              <span className="">
                <p className="font-semibold">{title}</p>
                <p className="text-gray-400 mt-[-.6rem] text-[.8rem] md:text-[1rem]">
                  {weight}
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
                  onClick={addtoCartHandler(products.id)}
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
  );
};

export default PopularProducts;
