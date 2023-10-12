import React, { useContext } from "react";
import myContext from "../context/myContext";

const Packages = () => {
  const context = useContext(myContext);

  return <div>Packages</div>;
};

export default Packages;
