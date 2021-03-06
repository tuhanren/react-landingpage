import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
// import navigation data
import { navigation } from "../data";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff]">Laniakea</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            {navigation.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="ml-4">Use Laniakea</button>
        </div>
        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            {navigation.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <button className="m-8">Use Laniakea</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
