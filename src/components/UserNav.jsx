import React, { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import AuthDetails from "./AuthDetails";
import myContext from "../context/myContext";

const UserNav = () => {
  const context = useContext(myContext);
  const { mode } = context;
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{ backgroundColor: mode === "dark" ? "black" : "" }}
      className="fixed top-14 right-4 w-56 text-right bg-white  z-10"
    >
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          style={{ backgroundColor: mode === "dark" ? "black" : "" }}
          className=" right-4 w-56 ring-2 ring-gray-400 origin-top-right  rounded-md bg-white "
        >
          <div className="px-1 py-1 ">
            {user ? (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={"/order"}
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className={`${
                      active ? "bg-[#40aa54] text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md font-bold px-2 py-2 `}
                  >
                    Order
                  </Link>
                )}
              </Menu.Item>
            ) : (
              ""
            )}
            <Menu.Item>
              {({ active }) => (
                <button
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className={`${
                    active ? "bg-[#40aa54] text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md font-bold px-2 py-2 `}
                >
                  <AuthDetails />
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1  ">
            <Menu.Item>
              <button className=" group  w-full rounded-md px-2 py-2 hover:ring-2 ring-gray-400">
                <Link
                  style={{ color: "dark" ? "white" : "black" }}
                  to={"wishlist/"}
                >
                  {" "}
                  <BsSuitHeart
                    color={mode === "dark" ? "white" : "black"}
                    size={22}
                  />
                </Link>
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </div>
  );
};

export default UserNav;
