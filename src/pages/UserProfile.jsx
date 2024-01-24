import React from "react";

import { useUserContext } from "../contexts/UserContext";

const UserProfile = () => {
  const { userData } = useUserContext();

  const loggedUser = userData.find((user) => user.loggedIn);

  return (
    <>
      <h1>{loggedUser.userName}</h1>
      <img src={loggedUser.profilePicture} alt="ProfilePicture" />
      <h2>First Name</h2>
      <h3>{loggedUser.fName}</h3>
      <h2>Last Name</h2>
      <h3>{loggedUser.lName}</h3>
      <h2>Email</h2>
      <h3>{loggedUser.email}</h3>
      <h2>About</h2>
      <h3>{loggedUser.about}</h3>
    </>
  );
};

export default UserProfile;
