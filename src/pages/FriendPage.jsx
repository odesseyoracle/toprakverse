import React from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export const FriendPage = () => {
  const { id } = useParams();
  const { userData } = useUserContext();

  const friend = userData.find((user) => user.id == id);

  return (
    <div>
      <img src={friend.profilePicture} alt="Profile Picture" />
      <h1>{friend.userName}</h1>
      <h2>First Name</h2>
      <h3>{friend.fName}</h3>
      <h2>Last Name</h2>
      <h3>{friend.lName}</h3>
      <h2>Email</h2>
      <h3>{friend.email}</h3>
      <h2>About</h2>
      <h3>{friend.about}</h3>
    </div>
  );
};
