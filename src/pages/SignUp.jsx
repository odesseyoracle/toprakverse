import React, { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import genericProfilePicture from "../assets/images/generic-profile-pic.png";

function SignUp() {
  const navigate = useNavigate();
  const { dispatch } = useUserContext();
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    about: "",
    profilePicture: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch({
      type: "registerUser",
      payload: {
        ...formData,
        loggedIn: false,
        id: crypto.randomUUID(),
        profilePicture: genericProfilePicture,
      },
    });
    navigate("/");
  };

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
        <h1>Sign Up</h1>

        <img
          className="mx-auto my-10 border-2 border-black rounded-full w-60 h-60"
          src={genericProfilePicture}
          alt="Generic Profile Picture"
        />

        <Input name="fName" type="text" setMethod={setFormData}>
          First Name
        </Input>
        <Input name="lName" type="lName" setMethod={setFormData}>
          Last Name
        </Input>
        <Input name="userName" type="text" setMethod={setFormData}>
          Username{" "}
        </Input>
        <Input name="email" type="email" setMethod={setFormData}>
          Email
        </Input>
        <Input name="password" type="password" setMethod={setFormData}>
          Password
        </Input>
        <Input name="about" type="textarea" setMethod={setFormData}>
          About
        </Input>
        {/*bild*/}
        <Button event={handleSignUp}>Sign Up</Button>
      </div>
    </div>
  );
}

export default SignUp;
