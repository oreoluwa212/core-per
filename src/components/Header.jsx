import React from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import SimpleBtn from "./buttons/SimpleBtn";
import { logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId) => {
    navigate(path, { state: { sectionId } });
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-6 px-[5%] bg-black text-white z-50">
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      <nav className="hidden lgss:flex font-medium gap-[4rem]">
        <button
          onClick={() => handleNavigation("/", "home")}
          className="hover:underline"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("/", "artworks")}
          className="hover:underline"
        >
          Artworks
        </button>
        <button
          onClick={() => handleNavigation("/", "about")}
          className="hover:underline"
        >
          About
        </button>
      </nav>
      <div className="hidden lgss:flex space-x-7 items-center">
        <Link to={"/cart"}>
          <PiShoppingCartSimpleFill className="text-2xl" />
        </Link>
        <SimpleBtn className={"px-[32px]"}>Log In</SimpleBtn>
        <SimpleBtn className={"px-[32px] hover:bg-white hover:text-black hover:font-semibold border-white border"}>
          Sign Up
        </SimpleBtn>
      </div>
      <div className="flex lgss:hidden text-white text-2xl gap-7">
        <Link to={"/cart"}>
          <PiShoppingCartSimpleFill />
        </Link>
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
