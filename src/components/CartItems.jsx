import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartItems = ({ item, setFlag, flag }) => {
  const [qty, setQty] = useState(item.qty);
  const [{ cartItems }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };
  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      if (qty == 1) {
        setItems(cartItems.filter((item) => item.id !== id));
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    setItems(cartItems);
  }, [qty]);

  const deleteCartItem = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: cartItems,
    });
    localStorage.setItem("cartItems", JSON.stringify([]));
  };
  return (
    <div>
      <div className="h-[150px] border-b-2 border-b-gray-300 flex flex-row justify-center items-center gap-8">
        <div className="w-[19%] sm:w-[15%] md:w-[15%] lg:w-[20%] px-4 py-4">
          <img className="h-full w-full" src={item?.imageURL} alt="" />
        </div>
        <div className="flex flex-col gap-4 w-[60%]">
          <span>
            <p className="font-bold text-[1.1rem]"> {item?.title}</p>
            <p className="text-sm font-semibold text-gray-600">
              N {item?.price}
            </p>
          </span>
          <span className="flex flex-row justify-between">
            <span className="flex flex-row">
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="ring-2 ring-[#22305f]  px-3 rounded-sm hover:bg-[#3b68fd] hover:text-white font-semibold  hover:ring-[#22305f]/80"
              >
                <BiMinus
                  size={20}
                  onClick={() => updateQty("remove", item?.id)}
                />
              </motion.button>
              <p className="px-3 font-bold"> {qty} </p>
              <motion.button
                whileTap={{ scale: 0.75 }}
                className="ring-2 ring-[#22305f]  px-3 rounded-sm hover:bg-[#3b68fd] hover:text-white font-semibold  hover:ring-[#22305f]/80"
              >
                <BiPlus size={20} onClick={() => updateQty("add", item?.id)} />
              </motion.button>
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-8 items-end">
          <motion.button whileTap={{ scale: 0.75 }}>
            {" "}
            <BiTrash
              onClick={deleteCartItem(item)}
              className="text-red-600"
              size={22}
            />
          </motion.button>
          <p className="font-bold ">N{parseFloat(item?.price) * qty}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
