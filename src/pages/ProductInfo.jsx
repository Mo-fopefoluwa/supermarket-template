import React, { useContext } from "react";
import myContext from "../context/myContext";

const ProductInfo = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return <div>ProductInfo</div>;
};

export default ProductInfo;
