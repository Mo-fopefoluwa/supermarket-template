import React, { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import { BiLock, BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../reduxx/cartSlice";

const Category = () => {
  const context = useContext(myContext);
  const { mode, product } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems)

  // add to cart
  const addCart = (product) => {
    dispatch(addToCart({product}));
    toast.success("add to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <div>
        <h2>What would to get today?</h2>

        <div className="py-16 px-12 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 md:gap-16">
          {product.map((products, index) => {
            const { title, price, category, imageUrl } = products;
            return (
              <div
                onClick={() =>
                  (window.location.href = `/productinfo/${products.id}`)
                }
                key={index}
                style={{ backgroundColor: mode === "dark" ? "#575757" : "" }}
                className="bg-white w-full h-full flex flex-col gap-2 ring-2 ring-gray-300 rounded-md shadow-sm px-4 md:px-6 py-6 md:py-8"
              >
                {" "}
                <span className=" w-full h-[150px]">
                  <img
                    className="w-full h-[150px] object-fit"
                    src={imageUrl}
                    alt=""
                  />
                </span>
                <span className="">
                  <p className="font-semibold">{title}</p>
                  <p className="text-gray-400 mt-[-.4rem] text-[.8rem]">
                    {category}
                  </p>
                  <p className="font-bold pt-[.4rem] text-[1.1rem]">N{price}</p>
                </span>
                <span className="flex flex-row justify-between">
                  <span className="flex flex-row">
                    <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                      <BiMinus />
                    </button>
                    <p className="px-3 font-bold">2</p>
                    <button className="ring-2 ring-[#40aa54]  px-3 rounded-sm hover:bg-[#40aa54]/80 hover:text-white font-semibold transition-all hover:ring-green-300">
                      <BiPlus />
                    </button>
                  </span>
                  <button
                    onClick={addCart(products)}
                    className="bg-[#287436] h-[30px] flex justify-center items-center rounded-full w-[30px]"
                  >
                    <BiLock color="white" size={20} />{" "}
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
