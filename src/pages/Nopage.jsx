import React, { useContext } from "react";
import myContext from "../context/myContext";
import { StateContext } from "../context/StateProvider";

const Nopage = () => {
  const context = useContext(StateContext);
  const { mode } = context;

  return <div>Nopage</div>;
};

export default Nopage;
