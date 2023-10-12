import React, { useContext } from "react";
import myContext from "../context/myContext";

const Cart = () => {
  const context = useContext(myContext);
  return <div>Cart</div>;
};

export default Cart;
