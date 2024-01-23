import React from "react";
import logo from "../assets/images/logo.jpg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="alt-text" />
      <h1>TOPRAKVERSE</h1>
      <i class="fa-solid fa-burger"></i>
    </header>
  );
};

export default Header;
