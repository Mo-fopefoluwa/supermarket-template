import React, { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import { BiArrowToLeft, BiLock, BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../reduxx/cartSlice";
import { motion } from "framer-motion";
import { ListProducts } from "../action/productAction";
import Loader from "../components/Loader";
import { addProductToCart } from "../action/cartActions";
import { Link } from "react-router-dom";

const Packages = () => {
  const context = useContext(myContext);
  const { mode, packagee, loading } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // const addtoCartHandler = () => {
  //   dispatch(addProductToCart(product));
  // };
  // const addCart = (product) => {
  //   dispatch(addToCart(packagee));
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
          className=" bg-[#4069f4] w-[10%] lg:w-[5%] rounded-md p-2 mt-[2rem] ml-8"
        >
          <Link to={"/"}>
            <BiArrowToLeft color="white" size={35} />
          </Link>
        </motion.div>
        <h2
          style={{ color: mode === "dark" ? "#dfe6fd" : "" }}
          className=" px-12 pt-[4rem] text-[1.2rem] md:text-[1.8rem] text-[#000e3c] font-bold"
        >
          Packages specially curated for you
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

export default Packages;
