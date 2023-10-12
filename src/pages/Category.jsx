import React, { useContext } from "react";
import myContext from "../context/myContext";

const Category = () => {
  const context = useContext(myContext);

  return <div>Category</div>;
};

export default Category;
