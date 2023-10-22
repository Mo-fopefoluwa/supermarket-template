import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa"; //logo
import { VscAccount } from "react-icons/vsc";
import { Menu } from "@headlessui/react";
import Nav from "./Nav";
import UserNav from "./UserNav";
import { BiCart } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import Cart from "../pages/Cart";

const navs = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/ourproducts",
  },
];

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpened] = useState(false);
  const [{ cartShow, cartItems }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="relative flex flex-row justify-between items-center px-8 py-8 md:px-16 lg:px-20 md:py-10">
      {/* mobile screens */}
      <span className="flex flex-row items-center gap-2 md:hidden">
        <motion.button
          whileTap={{ scale: 0.75 }}
          onClick={() => setOpened(!open)}
        >
          {open ? <IoCloseSharp size={40} /> : <HiMenuAlt1 size={40} />}
        </motion.button>
        {open && (
          <motion.div
            initial={{ x: -200, opacity: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200 }}
            className={` bg-[#faf9f6] z-30 px-10 py-4 absolute items-center flex flex-col gap-[6rem] h-screen top-[6.5rem] left-0 w-[85%] after:absolute after:w-[24%] after:sm:w-[15%] after:md:w-[12%] after:-right-[5.2rem] after:h-screen after:content after:z-10 after:backdrop-blur-sm`}
          >
            {navs.map((nav) => {
              return (
                <Link
                  onClick={() => setOpened(false)}
                  className=" w-[100%] hover:bg-[#22305f] active:scale-75 px-10 py-2 rounded-md font-medium  capitalize hover:text-white text-center text-lg"
                  to={nav.link}
                >
                  {nav.name}
                </Link>
              );
            })}
            {user?.user?.email === "fopefaokunla@gmail.com" ? (
              <Link
                onClick={() => setOpened(false)}
                className=" w-[100%] hover:bg-[#22305f] active:scale-75 px-10 py-2 rounded-md font-medium capitalize hover:text-white text-center text-lg"
                to={"/addproduct"}
              >
                Admin
              </Link>
            ) : (
              ""
            )}
          </motion.div>
        )}
      </span>

      {/* logo */}
      <p className="flex flex-row items-center pointer-events-none">
        <FaOpencart color="#ff5f15" size={35} />{" "}
        <span className="text-[#22305f] font-semibold text-[1.2rem]">
          market
        </span>
      </p>

      {/*desktop & larger screens  */}
      <div className="md:flex flex-row gap-16 hidden">
        <nav className="flex flex-row gap-4 md:gap-8 capitalize">
          {navs.map((nav) => {
            return (
              <Link
                className="text-[.8rem] lg:text-[1.2rem] font-semibold text-[#0037f0] hover:text-[#0037f0]/80 hover:scale-110 transition-all ease-in-out duration-100 cursor-pointer "
                to={nav.link}
              >
                {nav.name}
              </Link>
            );
          })}

          {user?.user?.email === "fopefaokunla@gmail.com" ? (
            <Link
              className="text-[.8rem] lg:text-[1.2rem] font-semibold text-[#0037f0] hover:text-[#0037f0]/80 hover:scale-110 transition-all ease-in-out duration-100 cursor-pointer "
              to={"/addproduct"}
            >
              Admin
            </Link>
          ) : (
            ""
          )}
        </nav>
      </div>
      {/* cart and user */}
      <div className="flex flex-row gap-4 md:gap-6 justify-center items-center">
        <motion.span onClick={showCart} whileTap={{ scale: 0.75 }}>
          <div className="relative">
            {cartItems && cartItems.length > 0 && (
              <span className="absolute right-0 top-[-1rem] flex h-[1.4rem] w-[1.4rem]">
                <span className="relative  font-semibold  inline-flex h-full w-full rounded-full px-[.6rem] py-[.6rem] bg-red-500"></span>
                <span className="absolute text-white text-center font-semibold top-[-.1rem] right-[.4rem]">
                  {cartItems.length}
                </span>
              </span>
            )}
            <BiCart className="hover:scale-110 cursor-pointer" size={35} />
          </div>
        </motion.span>

        <Menu as="div" className="relative  inline-block text-center">
          {({ open }) => (
            <>
              <Menu.Button className=" w-full">
                <VscAccount
                  size={30}
                  className="active:scale-75 transition-all duration-200 ease-in-out hover:scale-110 cursor-pointer"
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
