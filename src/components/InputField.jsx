import React from "react";

const InputField = ({ type, value, placeholder, onChange }) => {
  return (
    <>
     <input
      type={type}
      className="input-box-todo"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    </>
   
  );
};

export default InputField;
