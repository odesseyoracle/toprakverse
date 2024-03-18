import React from "react";

const Input = ({ name, type, setMethod, children }) => {
  function handleChange(e) {
    const { name, value } = e.target;
    setMethod((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <br />
      <input type={type} name={name} id={name} onChange={handleChange} />
    </div>
  );
};

export default Input;
