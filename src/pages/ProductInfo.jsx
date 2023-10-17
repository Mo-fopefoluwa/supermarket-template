import React, { useContext, useState } from "react";
import myContext from "../context/myContext";
import { BiCartAdd, BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { fireDB } from "../Firebase/Firebase";
import { useParams } from "react-router-dom";
import { addToCart } from "../reduxx/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductInfo = () => {
  const context = useContext(myContext);
  const { mode, product } = context;
  const params = useParams();
  const [products, setProducts] = useState("");

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id));
      // console.log(productTemp)
      setProducts(productTemp.data());
      console.log(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
      {products && (
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
                <p className="text-[1.4rem] md:text-[1.6rem] font-bold ">
                  {products.title}{" "}
                </p>
                <span className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  {" "}
                  <p className="text-gray-700 font-semibold ">
                    weight : {products.weight}kg
                  </p>
                  <p className="text-base text-gray-700 font-semibold ">
                    {products.category}{" "}
                  </p>
                </span>
              </span>
              <span className="flex flex-row items-center justify-between pt-4">
                <p className="text-[#40aa54] font-bold text-[1.4rem] md:text-[1.6rem]">
                  N {products.price}
                </p>
                <span className="flex flex-row">
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300"
                  >
                    <BiMinus size={20} />
                  </motion.button>
                  <p className="px-3 font-bold">2</p>
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300"
                  >
                    <BiPlus size={20} />
                  </motion.button>
                </span>
              </span>
            </div>
          </div>
          <div className="pt-8 md:pl-[4rem] lg:pl-[8rem]">
            <p className="font-bold text-lg">Product description</p>
            <p className="text-gray-500 text-base"> description </p>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center pt-8">
            <motion.button
              onClick={addCart(products)}
              whileTap={{ scale: 0.75 }}
              className="w-[15%]"
            >
              <BiCartAdd size={30} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.75 }}
              className="w-[85%] md:w-[50%] bg-[#40aa54] text-white font-semibold text-base rounded-md py-2"
            >
              Buy Now
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
