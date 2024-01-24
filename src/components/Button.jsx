import React from "react";

const Button = ({ children, event }) => {
  return (
    <button onClick={event} className="bg-primary hover:bg-secondary text-">
      {children}
    </button>
  );
};

export default Button;
