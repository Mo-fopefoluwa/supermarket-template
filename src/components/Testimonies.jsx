import React, { useContext } from "react";
import myContext from "../context/myContext";

const Testimonies = () => {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div className="bg-gray-300">
      <div>
        <h2
          style={{ color: mode === "dark" ? "white" : "" }}
          className="capitalize text-center font-bold text-[1.2rem]"
        >
          what our clients say
        </h2>
        <div></div>
      </div>
    </div>
  );
};

export default Testimonies;
