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
    <header className="relative flex flex-row justify-between items-center px-12 py-4 md:px-16 lg:px-20 md:py-6">
      <Menu as="div" className="relative md:hidden inline-block text-center">
        {({ open }) => (
          <>
            <Menu.Button
              style={{ color: mode === "dark" ? "white" : "" }}
              className="w-full"
            >
              {open ? <IoCloseSharp size={28} /> : <HiMenuAlt1 size={28} />}
            </Menu.Button>
            {open && <Nav />}
          </>
        )}
      </Menu>
      <p className="flex flex-row items-center pointer-events-none">
        <FaOpencart color="#40aa54" size={50} />{" "}
        <span className="text-[#fa8b0b] font-semibold text-[1.2rem]">
          Market
        </span>
      </p>

      {/*desktop & larger screens  */}
      <div
        style={{ color: mode === "dark" ? "white" : "" }}
        className="md:flex flex-row gap-16 hidden"
      >
        <nav className="flex flex-row gap-4 md:gap-8 capitalize">
          {navs.map((nav) => {
            return (
              <Link
                style={{ color: mode === "dark" ? "#76c750" : "" }}
                className="text-[.8rem] lg:text-base font-semibold text-[#40aa54] hover:text-[#40aa54]/60 hover:scale-110 transition-all ease-in-out duration-100 cursor-pointer "
                to={nav.link}
              >
                {nav.name}
              </Link>
            );
          })}

          {user?.user?.email === "fopefaokunla@gmail.com" ? (
            <Link
              style={{ color: mode === "dark" ? "#76c750" : "" }}
              className="text-[.8rem] md:text-base font-semibold text-[#40aa54] hover:text-[#40aa54]/60 hover:scale-110 transition-all ease-in-out duration-100 cursor-pointer "
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
        <LightSwitch />
        <Link className="relative" to={"/cart"}>
          <span className="absolute right-0 top-[-1rem] flex h-[1.4rem] w-[1.4rem]">
            <span className="relative  font-semibold  inline-flex h-full w-full rounded-full px-[.6rem] py-[.6rem] bg-red-500"></span>
            <span className="absolute text-white text-center font-semibold top-[-.1rem] right-[.4rem]">
              {listCartItems.length}
            </span>
          </span>
          <BiCart
            className="hover:scale-110 cursor-pointer"
            color={mode === "dark" ? "white" : ""}
            size={28}
          />
        </Link>
        <Menu as="div" className="relative  inline-block text-center">
          {({ open }) => (
            <>
              <Menu.Button
                style={{ color: mode === "dark" ? "white" : "" }}
                className=" w-full"
              >
                <VscAccount
                  style={{ color: mode === "dark" ? "white" : "" }}
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
