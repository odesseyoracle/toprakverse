import React from "react";

import logo from "../assets/images/logo.jpg";

const Header = () => {
  return (
    <header className="border-solid border-black border-2 sticky flex flex-row items-center justify-between  p-5">
      <img src={logo} alt="alt-text" className="w-1/5 h-1/5 z-1" />
      <h1
        id="toprakverse-h1"
        className="font-sans font-extrabold text-2xl text-yellow-600 text-opacity-50 tracking-wider absolute bottom-3 "
      >
        TOPRAKVERSE
      </h1>
    </header>
  );
};

export default Header;
