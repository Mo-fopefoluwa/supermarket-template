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
    <div className="px-[2rem] md:px-[3rem] lg:px-[6rem] xl:px-[8rem] py-[6rem]">
      <div className="flex flex-row justify-between items-center">
        <h2
          style={{ color: mode === "dark" ? "#fbedbf" : "" }}
          className="font-bold text-[#1e1700] text-[1.6rem]"
        >
          Popular Products
        </h2>
        <Link
          style={{ backgroundColor: mode === "dark" ? "#f0b900" : "" }}
          to={"/category"}
          className="bg-[#d2a200] text-[#1e1700] flex justify-center font-semibold rounded-full w-[25%] md:w-[10%] py-1"
        >
          See all
        </Link>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="py-16 px-12 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 md:gap-16">
          {product.map((products, index) => {
            const { title, price, weight, imageUrl } = products;
            return (
              <div
                key={index}
                style={{ backgroundColor: mode === "dark" ? "#1d1d1e" : "" }}
                className="bg-[#e8ecf2] w-full h-full flex flex-col gap-2 ring-2 ring-[#505050] rounded-md shadow-sm px-4 md:px-6 py-6 md:py-8"
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
                    className="w-full h-[200px] rounded-md object-fit hover:scale-105 transition-all ease-in-out duration-100"
                    src={imageUrl}
                    alt=""
                  />
                </motion.span>
                <span className=" pt-4 flex flex-col gap-4">
                  <p className="font-semibold text-[1.2rem]">{title}</p>
                  <p
                    style={{ color: mode === "dark" ? "" : "" }}
                    className="text-[#505050] mt-[-.6rem] text-[1rem]"
                  >
                    {weight}
                  </p>
                  <p
                    style={{ color: mode === "dark" ? "" : "" }}
                    className="font-bold pt-[.4rem] text-[#00f041] text-[1.2rem]"
                  >
                    N {price}
                  </p>
                </span>
                <span className="flex flex-row justify-between py-4">
                  <span className="flex flex-row">
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      className="ring-2 ring-[#f0b900]  px-3 rounded-sm hover:bg-[#f4cb40] hover:text-[#1e1700] font-semibold transition-all hover:ring-[#f0b900]/80"
                    >
                      <BiMinus size={20} />
                    </motion.button>
                    <p className="px-3 font-bold">2</p>
                    <motion.button
                      whileTap={{ scale: 0.75 }}
                      className="ring-2 ring-[#f0b900]  px-3 rounded-sm hover:bg-[#f4cb40] hover:text-[#1e1700] font-semibold transition-all hover:ring-[#f0b900]/80"
                    >
                      <BiPlus size={20} />
                    </motion.button>
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    //onClick={addCart(products.id)}
                    className="bg-[#f0b900] h-[30px] flex justify-center items-center rounded-full w-[30px]"
                  >
                    <BiLock color="#1e1700" size={20} />{" "}
                  </motion.button>
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PopularProducts;
