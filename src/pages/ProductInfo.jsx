import React, { useContext, useState, useEffect } from "react";
import myContext from "../context/myContext";
import { BiCartAdd, BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { fireDB } from "../Firebase/Firebase";
import { useParams } from "react-router-dom";
import { addToCart } from "../reduxx/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const ProductInfo = () => {
  const context = useContext(myContext);
  const { mode, product } = context;
  const params = useParams();
  const [products, setProducts] = useState("");

  const getProductData = async () => {
    //setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id));
      // console.log(productTemp)
      setProducts(productTemp.data());
      console.log(productTemp.data());
      // setLoading(false);
    } catch (error) {
      console.log(error);
      //setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems)

  // add to cart
  const addCart = (products) => {
    dispatch(addToCart(products));
    toast.success("add to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="px-4 md:px-8 lg:px-12 py-10 h-screen pt-[4rem]">
      <div>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-start md:justify-center">
          <span className="w-[100%] md:w-[30%] h-[300px] rounded-md overflow-hidden">
            <img
              className="w-full h-full object-fit hover:scale-105 rounded-md"
              src={products.imageUrl}
              alt="product image"
            />
          </span>
          <div className="w-[100%] md:w-[40%]">
            <span className="flex flex-col gap-4">
              <p className="text-[1.4rem] text-[#1e1700] md:text-[1.6rem] font-bold ">
                {products.title}{" "}
              </p>
              <span className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                {" "}
                <p
                  style={{ color: mode === "dark" ? "" : "" }}
                  className="text-[#505050] mt-[-.6rem] text-[1rem]"
                >
                  weight : {products.weight}kg
                </p>
                <p
                  style={{ color: mode === "dark" ? "" : "" }}
                  className="text-[#505050] mt-[-.6rem] text-[1rem]"
                >
                  {products.category}{" "}
                </p>
              </span>
            </span>
            <span className="flex flex-row items-center justify-between pt-4">
              <p
                style={{ color: mode === "dark " ? "" : "" }}
                className="text-[#00f041] font-bold text-[1.4rem] md:text-[1.6rem]"
              >
                N {products.price}
              </p>

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
            </span>
          </div>
        </div>
        <div
          style={{ color: mode === "dark " ? "" : "" }}
          className="pt-8 md:pl-[4rem] lg:pl-[8rem]"
        >
          <p className="font-bold text-[#505050] text-lg">
            Product description
          </p>
          <p className="text-[#6a6a6a] text-base"> description </p>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center pt-8">
          <motion.button
            onClick={addCart(products)}
            whileTap={{ scale: 0.75 }}
            className="w-[15%]"
          >
            <BiCartAdd color="#785c00" size={30} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="w-[85%] md:w-[50%] bg-[#f0b900] text-[#1e1700] font-semibold text-base rounded-md py-2"
          >
            Buy Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
