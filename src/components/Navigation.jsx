import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/SignUp">Sign Up</Link>
        </li>
        <li>
          <Link to="/UserProfile">Profil</Link>
        </li>
        <li>
          <Link to="/Friends">Friends</Link>
        </li>
        <li>
          <Link to="/Login">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
