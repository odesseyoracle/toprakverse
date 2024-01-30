import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useUserContext } from "../contexts/UserContext";

function Navigation() {
  const { dispatch, loggedUserId, setLoggedUserId } = useUserContext();
  const navigate = useNavigate();

  const [isNavOpen, setNavOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  function handleLogout() {
    dispatch({ type: "logUser", id: loggedUserId });
    localStorage.setItem("loggedUserId", JSON.stringify("0"));
    setLoggedUserId(0);
    navigate("/");
  }

  return (
    <nav className=" absolute top-0 right-0 m-5">
      {/* Burger Menu Icon */}
      <div
        onClick={toggleNav}
        className={`burger-menu-icon ${isClicked ? "active" : ""}`}
        style={{
          transform: isClicked ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <i className="fa-solid fa-bars fa-2xl"></i>
      </div>

      {/* Navigation Links */}
      <ul
        style={{
          position: "absolute",
          right: "0",
        }}
        className={` bg-secondary w-60 h-60 flex flex-col justify-between p-5 rounded-md nav-list ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link to="/home" className="block">
            Home
          </Link>
        </li>
        <li>
          <Link to="/userProfile" className="block">
            My Profile
          </Link>
        </li>
        <li>
          <Link to="/friends" className="block">
            Friends
          </Link>
        </li>
        <li>
          <Button event={handleLogout}>Log Out</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
