import React from "react";

import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import Button from "../components/Button";
import Input from "../components/Input";

const UserProfile = () => {
  const { userData, dispatch } = useUserContext();
  const loggedUser = userData.find((user) => user.loggedIn);
  const [editOpen, setEditOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  function showUserEdit() {
    setEditOpen(!editOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedUser = { ...loggedUser, ...currentUser };
    dispatch({ type: "updateUser", id: loggedUser.id, payload: updatedUser });
  }

  return (
    <main className="m-20 flex-col justify-center items-center">
      <div>
        <img
          className="mx-auto border-2 border-black rounded-full w-60 h-60"
          src={loggedUser.profilePicture}
          alt="ProfilePicture"
        />
        <h1 className="text-4xl font-extrabold">{loggedUser.userName}</h1>
        <h2>First Name</h2>
        <h3>{loggedUser.fName}</h3>
        <h2>Last Name</h2>
        <h3>{loggedUser.lName}</h3>
        <h2>Email</h2>
        <h3>{loggedUser.email}</h3>
        <h2>About</h2>
        <h3>{loggedUser.about}</h3>
      </div>
      {!editOpen && <Button event={showUserEdit}>Update Your Profile</Button>}
      {editOpen && (
        <div className="signUp bg-secondary p-8 rounded-md shadow-md max-w-md mx-auto mt-10">
          <Input name="username" type="text" setMethod={setCurrentUser}>
            Username
          </Input>
          <Input name="password" type="password" setMethod={setCurrentUser}>
            Password
          </Input>
          <Input name="fName" type="text" setMethod={setCurrentUser}>
            First Name
          </Input>
          <Input name="lName" type="text" setMethod={setCurrentUser}>
            Last Name
          </Input>
          <Input name="email" type="text" setMethod={setCurrentUser}>
            Email
          </Input>
          <Input name="about" type="text" setMethod={setCurrentUser}>
            About
          </Input>
          <Button event={handleSubmit}>Update</Button>
        </div>
      )}
    </main>
  );
};

export default UserProfile;
