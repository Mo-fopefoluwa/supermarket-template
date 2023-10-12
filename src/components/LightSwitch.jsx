import React, { useContext, Fragment, useState } from "react";
import { Switch } from "@headlessui/react";
import myContext from "../context/myContext";
import { BsSunFill, BsMoon } from "react-icons/bs";

const LightSwitch = () => {
  const [enabled, setEnabled] = useState(false);
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  return (
    <div>
      <div>
        <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
          <button
            onClick={toggleMode}
            className={`${
              mode === "dark" ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-12 items-center rounded-full`}
          >
            <span
              className={`${
                mode === "dark" ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full z-10 bg-white transition`}
            />
            <span className="flex flex-row w-full absolute px-2 justify-between items-center">
              <span className=" ">
                <BsSunFill
                  size={12}
                  style={{ display: mode === "dark" ? "block" : "none" }}
                />
              </span>
              <span>
                <BsMoon
                  size={12}
                  style={{ display: mode === "dark" ? "none" : "block" }}
                />
              </span>
            </span>
            {/* {mode === "dark" ? <BsSunFill size={20} /> : <BsMoon />} */}
          </button>
        </Switch>
      </div>
    </div>
  );
};

export default LightSwitch;
