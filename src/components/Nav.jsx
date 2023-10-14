import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../context/myContext";

const navs = [
  { name: "home", link: "/" },
  {
    name: "category",
    link: "/category",
  },
  {
    name: "our packages",
    link: "/packages",
  },
  {
    name: "our app",
    link: "/ourapp",
  },
];

const Nav = () => {
  const context = useContext(myContext);
  const { mode } = context;
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{ backgroundColor: mode === "dark" ? "black" : "" }}
      className="fixed bg-white top-20 z-10 left-0 w-[100%] h-[100vh] text-center"
    >
      <Transition
        as={Fragment}
        enter="transition ease-in duration-800 scale-0"
        enterFrom="translate-x opacity-0 scale-40"
        enterTo="translate-x opacity-100 scale-100"
        leave="transition ease-out duration-800 scale-60"
        leaveFrom="translate-x opacity-60 scale-30"
        leaveTo="translate-x opacity-0 scale-0"
      >
        <Menu.Items className="flex flex-col gap-8 items-center justify-center">
          {navs.map((link) => (
            <div
              style={{ color: mode === "dark" ? "white" : "" }}
              className="px-1 py-4 w-[100%] capitalize "
            >
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={link.link}
                    className={`${
                      active ? "bg-[#40aa54] text-white" : ""
                    } group w-full items-center font-bold  rounded-md px-16 py-2`}
                  >
                    {link.name}
                  </Link>
                )}
              </Menu.Item>
            </div>
          ))}

          {user?.user?.email === "fopefaokunla@gmail.com" ? (
            <div
              style={{ color: mode === "dark" ? "white" : "" }}
              className="px-1 py-4 w-[100%] capitalize "
            >
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={"/dashboard"}
                    className={`${
                      active ? "bg-[#40aa54] text-white" : ""
                    } group w-full items-center font-bold  rounded-md px-16 py-2`}
                  >
                    Admin
                  </Link>
                )}
              </Menu.Item>
            </div>
          ) : (
            ""
          )}
        </Menu.Items>
      </Transition>
    </div>
  );
};

export default Nav;
