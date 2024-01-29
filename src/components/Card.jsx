import React from "react";
import { Link } from "react-router-dom";

const Card = ({ userId, userName, profilePicture }) => {
  return (
    <div className="card my-5 p-3 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-80">
      <img
        className="mx-auto  rounded-full w-60 h-60"
        src={profilePicture}
        alt="Profile Picture"
      />
      <h2>{userName}</h2>
      <Link to={`/friend/${userId}`}>show more</Link>
    </div>
  );
};

export default Card;
