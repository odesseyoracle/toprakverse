import React, { useState } from "react";
import { useUserContext } from "../contexts/UserContext";

function SignUp() {
  const { signUp } = useUserContext();
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
    signUp(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signUp">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="fName">First Name</label>
        <input
          type="text"
          name="fName"
          id="fName"
          value={formData.fName}
          onChange={handleChange}
        />
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          name="lName"
          id="lName"
          value={formData.lName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="about">About</label>
        <input
          type="text"
          name="about"
          id="about"
          value={formData.about}
          onChange={handleChange}
        />
        <label htmlFor="profilePicture">Profile Picture</label>
        <input
          type="text"
          name="profilePicture"
          id="profilePicture"
          value={formData.profilePicture}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
