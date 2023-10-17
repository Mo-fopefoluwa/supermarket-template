import React, { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import { BiLock, BiMinus, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ListProducts } from "../action/productAction";
import { addToCart } from "../reduxx/cartSlice";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { addProductToCart } from "../action/cartActions";

const PopularProducts = () => {
  const context = useContext(myContext);
  const { mode, product, loading } = context;

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
    <div className="px-[1.5rem] md:px-[2rem] lg:px-[4rem] xl:px-[6rem] py-[6rem]">
      <div className="flex flex-row justify-between items-center">
        <h2
          style={{ color: mode === "dark" ? "#fbedbf" : "" }}
          className="font-bold text-[#1e1700] text-[1.2rem] md:text-[1.6rem]"
        >
          Popular Products
        </h2>
        <Link
          style={{ backgroundColor: mode === "dark" ? "#f0b900" : "" }}
          to={"/category"}
          className="bg-[#0037f0] text-[#e8ecf2] flex justify-center text-[.8rem] md:text-base font-bold rounded-full w-[25%] md:w-[10%] py-1 md:py-2"
        >
          See all
        </Link>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="py-16 px-2 md:px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 md:gap-10">
          {product.map((products, index) => {
            const { title, price, weight, imageUrl } = products;
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
                    (window.location.href = `/productinfo/${products.id}`)
                  }
                  className=" w-full h-[200px]"
                >
                  <img
                    className="w-full relative h-[200px] rounded-md object-fit hover:scale-105 transition-all ease-in-out duration-100"
                    src={imageUrl}
                    alt=""
                  />
                </motion.span>
                <div className="absolute translate-y-100 hover:translate-y-50 transition-all ease-in-out duration-200 bg-[#e8ecf2] bg-opacity-75 top-2 left-4">
                  <span className=" pt-4 flex flex-col gap-4">
                    <p className="font-semibold text-base md:text-[1.2rem]">
                      {title}
                    </p>
                    <p
                      style={{ color: mode === "dark" ? "" : "" }}
                      className="text-[#505050] mt-[-.4rem] text-[.8rem] md:text-[1rem]"
                    >
                      {weight}
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
  );
};

export default PopularProducts;
