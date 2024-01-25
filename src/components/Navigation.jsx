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
    setLoggedUserId(0);
    navigate("/login");
  }

  return (
    <nav>
      {/* Burger Menu Icon */}
      <div
        onClick={toggleNav}
        className={`burger-menu-icon ${isClicked ? "active" : ""}`}
        style={{
          transform: isClicked ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <i className="fa-solid fa-burger"></i>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-list ${isNavOpen ? "block" : "hidden"}`}>
        <li>
          <Link to="/toprakverse" className="block">
            Home
          </Link>
        </li>
        <li>
          <Link to="/signUp" className="block">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/userProfile" className="block">
            Profil
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
