import React, { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import { motion } from "framer-motion";
import { BiArrowToLeft, BiLock, BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
//import { addToCart } from "../reduxx/cartSlice";
//import { ListProducts } from "../action/productAction";
import { addProductToCart } from "../action/cartActions";
import { Link } from "react-router-dom";

const Category = () => {
  const context = useContext(myContext);
  const { mode, product, loading, user } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

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

  console.log(cartItems);

  // const productList = useSelector((state) => state.productList);

  // const { error, products } = productList;

  // React.useEffect(() => {
  //   dispatch(ListProducts());
  // }, [dispatch]);

  return (
    <div>
      <div>
        <motion.div
          whileTap={{ scale: 0.75 }}
          className=" bg-[#f0b900] w-[10%] lg:w-[5%] rounded-md p-2 mt-[2rem] ml-8"
        >
          <Link to={"/"}>
            <BiArrowToLeft color="white" size={35} />
          </Link>
        </motion.div>
        <h2
          style={{ color: mode === "dark" ? "#fbedbf" : "" }}
          className=" px-12 pt-[4rem] text-[1.2rem] md:text-[1.8rem] text-[#1e1700] font-bold"
        >
          What would you get today? {user.name}
        </h2>

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
                  <div className="absolute translate-y-[400px]  w-[100%] h=[100%] hover:translate-y-0 transition-all ease-in-out duration-200 bg-[#e8ecf2] pl-4 md:pl-8 bg-opacity-75 top-2 left-0">
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
    </div>
  );
};

export default Category;
