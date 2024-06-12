import React, { useState } from "react";
import AddTodoButton from "./AddButton";
import InputField from "./InputField";

const AddTodo = ({ addList }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (text.trim() !== "") {
      addList(text);
      setText("");
    } else {
      window.alert("Please enter a task before adding!");
    }
  };

  return (
    <div className="input-container">
      <InputField
        type="text"
        placeholder="Enter Your task"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress} 
      />
      <AddTodoButton text="+" onClick={handleAdd} />
    </div>
  );
};

export default AddTodo;
