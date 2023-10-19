import React, { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import AuthDetails from "./AuthDetails";
import myContext from "../context/myContext";
import { useStateValue } from "../context/StateProvider";

const UserNav = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="fixed top-20 right-4 w-56 text-right  bg-[faf9f6]  z-10">
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-45"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-45"
      >
        <Menu.Items className=" right-4 w-56 ring-2 ring-gray-400 origin-top-right  rounded-md bg-white ">
          <div className="px-1 py-1 ">
            {user ? (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={"/order"}
                    className={`${
                      active ? "bg-[#22305f] text-white" : "text-gray-900"
                    } active:scale:75 group flex w-full items-center rounded-md font-bold px-2 py-2 `}
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
                  className={`${
                    active ? "bg-[#22305f] text-white" : "text-gray-900"
                  } group flex w-full items-center active:scale-75 rounded-md font-bold px-2 py-2 `}
                >
                  <AuthDetails />
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1  ">
            <Menu.Item>
              <button className=" group  w-full active:scale-75 rounded-md px-2 py-2 hover:ring-2 ring-gray-400">
                <Link to={"/wishlist"}>
                  {" "}
                  <BsSuitHeart style={{ color: "red" }} size={22} />
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
