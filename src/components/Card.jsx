import React from "react";

const Card = ({ userName, profilePicture }) => {
  return (
    <div className="card">
      <img src={profilePicture} alt="Profile Picture" />
      <h2>{userName}</h2>
    </div>
  );
};

export default Card;
