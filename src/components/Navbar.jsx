import React, { useContext } from "react";
import myContext from "../context/myContext";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa"; //logo
import { VscAccount } from "react-icons/vsc";
import { Menu } from "@headlessui/react";
import LightSwitch from "./LightSwitch";
import Nav from "./Nav";
import UserNav from "./UserNav";
import { BiCart } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { listCartItems } from "../action/cartActions";
import { motion } from "framer-motion";

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

const Navbar = () => {
  const context = useContext(myContext);
  const { mode } = context;
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  // const cartItemsList = useSelector((state) => state.cartItemsList);
  //const { cartItems } = cartItemsList;

  React.useEffect(() => {
    dispatch(listCartItems());
  }, [dispatch]);

  return (
    <header className="relative flex flex-row justify-between items-center px-8 py-4 md:px-16 lg:px-20 md:py-6">
      <span className="flex flex-row items-center gap-2 md:hidden">
        <Menu as="div" className="relative  inline-block text-center">
          {({ open }) => (
            <>
              <Menu.Button
                color={mode === "dark" ? "#bfcdfb" : "#000e3c"}
                className="w-full"
              >
                {open ? <IoCloseSharp size={30} /> : <HiMenuAlt1 size={30} />}
              </Menu.Button>
              {open && <Nav />}
            </>
          )}
        </Menu>
        <LightSwitch />
      </span>
      <p className="flex flex-row items-center pointer-events-none">
        <FaOpencart
          style={{ color: mode === "dark" ? "#4069f4" : "#0037f0" }}
          size={35}
        />{" "}
        <span
          style={{ color: mode === "dark" ? "#f25920" : "" }}
          className="text-[#f04100] font-semibold text-[1.2rem]"
        >
          market
        </span>
      </p>

      {/*desktop & larger screens  */}
      <div
        style={{ color: mode === "dark" ? "#4069f4" : "" }}
        className="md:flex flex-row gap-16 hidden"
      >
        <nav className="flex flex-row gap-4 md:gap-8 capitalize">
          {navs.map((nav) => {
            return (
              <Link
                style={{ color: mode === "dark" ? "#4069f4" : "" }}
                className="text-[.8rem] lg:text-[1.2rem] font-semibold text-[#0037f0] hover:text-[#0037f0]/80 hover:scale-110 transition-all ease-in-out duration-100 cursor-pointer "
                to={nav.link}
              >
                {nav.name}
              </Link>
            );
          })}

          {user?.user?.email === "fopefaokunla@gmail.com" ? (
            <Link
              style={{ color: mode === "dark" ? "#4069f4" : "" }}
              className="text-[.8rem] lg:text-[1.2rem] font-semibold text-[#0037f0] hover:text-[#0037f0]/80 hover:scale-110 transition-all ease-in-out duration-100 cursor-pointer "
              to={"/dashboard"}
            >
              Admin
            </Link>
          ) : (
            ""
          )}
        </nav>
      </div>
      {/* mobile screens */}
      <div className="flex flex-row gap-4 md:gap-6 justify-center items-center">
        <span className="hidden md:block">
          {" "}
          <LightSwitch />{" "}
        </span>
        <Link className="relative" to={"/cart"}>
          <span className="absolute right-0 top-[-1rem] flex h-[1.4rem] w-[1.4rem]">
            <span className="relative  font-semibold  inline-flex h-full w-full rounded-full px-[.6rem] py-[.6rem] bg-red-500"></span>
            <span className="absolute text-white text-center font-semibold top-[-.1rem] right-[.4rem]">
              {listCartItems.length}
            </span>
          </span>
          <BiCart
            className="hover:scale-110 cursor-pointer"
            color={mode === "dark" ? "#bfcdfb" : "#000e3c"}
            size={28}
          />
        </Link>
        <Menu as="div" className="relative  inline-block text-center">
          {({ open }) => (
            <>
              <Menu.Button
                color={mode === "dark" ? "#bfcdfb" : "#000e3c"}
                className=" w-full"
              >
                <VscAccount
                  color={mode === "dark" ? "#bfcdfb" : "#000e3c"}
                  size={25}
                  className="hover:scale-110 cursor-pointer"
                />
              </Menu.Button>
              {open && <UserNav />}
            </>
          )}
        </Menu>
      </div>
    </header>
  );
};

export default Navbar;
