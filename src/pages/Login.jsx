import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userData, dispatch } = useUserContext();
  console.log("userData:", userData);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    const user = userData.find(
      (user) => user.userName === username && user.password === password
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
    <div>
      <Input name="username" type="text" setMethod={setUsername} />
      <Input name="password" type="password" setMethod={setPassword} />
      <Button event={handleSubmit}>Log In</Button>
    </div>
  );
};

export default Login;
