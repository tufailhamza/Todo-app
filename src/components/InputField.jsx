import React from "react";

const InputField = ({ type, value, placeholder, onChange,onKeyPress }) => {
  return (
    <>
     <input
      type={type}
      className="input-box-todo"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress ={onKeyPress}
    />
    </>
   
  );
};

export default InputField;
