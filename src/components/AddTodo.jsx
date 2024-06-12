import React, { useState } from "react";
import AddTodoButton from "./AddButton";
import InputField from "./InputField";

const AddTodo = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text.trim() !== "") {
      props.addList(text);
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
      />
      <AddTodoButton text="+" onClick={handleAdd} />
    </div>
  );
};

export default AddTodo;
