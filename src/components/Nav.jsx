import React from "react";
import { Link } from "react-router-dom";

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
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <div>
        {navs.map((nav) => {
          return (
            <Link className="" to={nav.link}>
              {nav.name}
            </Link>
          );
        })}
        {user?.user?.email === "fopefaokunla@gmail.com" ? (
          <Link
            // className="text-[.8rem] lg:text-[1.2rem] font-semibold text-[#0037f0] hover:text-[#0037f0]/80 hover:scale-110 transition-all ease-in-out duration-100 cursor-pointer "
            to={"/dashboard"}
          >
            Admin
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Nav;
