import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [ListTodo, setListTodo] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("TodoList"));
    if (storedList) {
      setListTodo(storedList);
    }
  }, []);

  useEffect(() => {
    if (ListTodo.length > 0) {
      localStorage.setItem("TodoList", JSON.stringify(ListTodo));
    }
  }, [ListTodo]);

  const addTodo = (input_text) => {
    const newItem = {
      text: input_text,
      date: new Date().toLocaleString(),
    };
    setListTodo([...ListTodo, newItem]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...ListTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  const editItem = (key, newText) => {
    setListTodo((prevList) => {
      const UpdatedList = [...prevList];
      UpdatedList[key] = { ...UpdatedList[key], text: newText };
      return UpdatedList;
    });
  };

  return (
    <div className="main-container">
      <div className="centre-div">
        <AddTodo addList={addTodo} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {ListTodo &&ListTodo.map((listItem, i) => (
          <TodoList
            key={i}
            itemKey={i}
            item={listItem.text}
            date={listItem.date} 
            deleteItem={deleteListItem}
            editItem={editItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
