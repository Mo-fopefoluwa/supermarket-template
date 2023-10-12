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

  return (
    <div>
      <div className="relative flex flex-row justify-between items-center px-12 py-4 md:px-20 md:py-6">
        <p className="flex flex-row items-center">
          <FaOpencart color="#40aa54" size={38} />{" "}
          <span className="text-[#fa8b0b] font-semibold text-[1.2rem]">
            Market
          </span>
        </p>

        <div
          style={{ color: mode === "dark" ? "white" : "" }}
          className="md:flex flex-row gap-16 hidden"
        >
          <nav className="flex flex-row gap-8 capitalize">
            {navs.map((nav) => {
              return <Link to={nav.link}>{nav.name}</Link>;
            })}
          </nav>
        </div>
        <div className="flex flex-row gap-6 justify-center items-center">
          <LightSwitch />
          <Link to={"/cart"}>
            <BiCart color={mode === "dark" ? "white" : ""} size={25} />
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
                    className=""
                  />
                </Menu.Button>
                {open && <UserNav />}
              </>
            )}
          </Menu>
          <Menu
            as="div"
            className="relative md:hidden inline-block text-center"
          >
            {({ open }) => (
              <>
                <Menu.Button
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="w-full"
                >
                  {open ? <IoCloseSharp size={25} /> : <HiMenuAlt1 size={25} />}
                </Menu.Button>
                {open && <Nav />}
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
