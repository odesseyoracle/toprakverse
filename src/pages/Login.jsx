import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userData, dispatch } = useUserContext();
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
      dispatch({ type: "logUser", id: user.id });
      navigate("/toprakverse");
    } else {
      alert("Username or password not correct");
    }
  }

  return (
    <div className="signUp bg-secondary p-8 rounded-md shadow-md max-w-md mx-auto mt-10">
      <Input name="username" type="text" setMethod={setCurrentUser}>
        Username
      </Input>
      <Input name="password" type="password" setMethod={setCurrentUser}>
        Password
      </Input>
      <Button event={handleSubmit}>Log In</Button>
    </div>
  );
};

export default Login;
