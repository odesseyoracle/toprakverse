import React from "react";

const Card = ({ userName, profilePicture }) => {
  return (
    <div className="card m-10">
      <img
        className="mx-auto border-2 border-black rounded-full w-60 h-60"
        src={profilePicture}
        alt="Profile Picture"
      />
      <h2>{userName}</h2>
    </div>
  );
};

export default Card;
