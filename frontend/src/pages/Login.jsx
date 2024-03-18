import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const { userData, dispatch, setLoggedUserId } = useUserContext();
  console.log("userData:", userData);
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState("");

  function handleSubmit() {
    console.log("username:", currentUser.username);
    console.log("password:", currentUser.password);
    const user = userData.find(
      (user) =>
        user.userName === currentUser.username &&
        user.password === currentUser.password
    );
    console.log("found user:", user);
    if (user) {
      setLoggedUserId(user.id);
      localStorage.setItem("loggedUserId", JSON.stringify(user.id));
      dispatch({ type: "logUser", id: user.id });
      navigate("/home");
    } else {
      alert("Username or password not correct");
    }
  }

  return (
    <div>
      <img src={logo} alt="Logo" />
      <h1
        id="toprakverse-h1"
        className="font-sans font-extrabold text-6xl text-yellow-600 text-opacity-50 tracking-wider"
      >
        TOPRAKVERSE
      </h1>
      <div className="signUp bg-secondary p-8 rounded-md shadow-md max-w-md mx-auto mt-10">
        <Input name="username" type="text" setMethod={setCurrentUser}>
          Username
        </Input>
        <Input name="password" type="password" setMethod={setCurrentUser}>
          Password
        </Input>
        <Button event={handleSubmit}>Log In</Button>
        <br />
        <Link
          to="/signUp"
          className="underline text-md text-gray-900 hover:text-gray-600"
        >
          No Profile yet? Sign up here ...
        </Link>
      </div>
    </div>
  );
};

export default Login;
