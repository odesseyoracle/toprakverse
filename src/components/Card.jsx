import React from "react";
import { Link } from "react-router-dom";

const Card = ({ userId, userName, profilePicture }) => {
  return (
    <div className="card m-10">
      <img
        className="mx-auto border-2 border-black rounded-full w-60 h-60"
        src={profilePicture}
        alt="Profile Picture"
      />
      <h2>{userName}</h2>
      <Link to={`/friend/${userId}`}>show more</Link>
    </div>
  );
};

export default Card;
