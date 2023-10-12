import React, { useContext } from "react";
import myContext from "../context/myContext";

const Nopage = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return <div>Nopage</div>;
};

export default Nopage;
