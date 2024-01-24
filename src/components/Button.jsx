import React from "react";

const Button = ({ children, event }) => {
  return (
    <button
      onClick={event}
      className="bg-primary hover:bg-tertiary m-4 p-3 px-6 rounded-md shadow-md"
    >
      {children}
    </button>
  );
};

export default Button;
