import React from "react";

const AddTodoButton = ({ text, onClick }) => {
  return (
    <button className="add-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default AddTodoButton;
