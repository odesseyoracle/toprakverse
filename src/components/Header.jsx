import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/images/logo.jpg";

const Header = () => {
  return (
    <header className="sticky flex flex-col items-center">
      <img src={logo} alt="alt-text" className="w-1/5 h-1/5 z-1" />
      <h1
        id="toprakverse-h1"
        className="font-sans font-extrabold text-2xl text-yellow-600 text-opacity-50 tracking-wider absolute bottom-0"
      >
        TOPRAKVERSE
      </h1>
    </header>
  );
};

export default Header;
