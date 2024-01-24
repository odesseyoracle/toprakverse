import React from "react";

import { useUserContext } from "../contexts/UserContext";

const UserProfile = () => {
  const { userData } = useUserContext();

  const loggedUser = userData.find((user) => user.loggedIn);

  return (
    <main className="m-20 flex-col justify-center items-center">
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
    </main>
  );
};

export default UserProfile;
