import React, { useState } from "react";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/pencil.png";
const TodoList = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.item);

  const handleDelete = () => {
    props.deleteItem
      ? props.deleteItem(props.itemKey)
      : console.error(
          "deleteItem function not provided to Todolist component."
        );
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    props.editItem(props.itemKey, editedText);
    setIsEditing(false);
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <li className="list-item">
      {isEditing ? (
        <input type="text" value={editedText} onChange={handleChange} />
      ) : (
        <>
          <div style={{ margin: "10px" }}>{props.item}</div>
          <div>{formatDate(props.date)}</div>
        </>
      )}
      <span className="icons">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button onClick={handleEdit}>
              <img src={editIcon} alt="delete" />
            </button>
            <button onClick={handleDelete}>
              <img src={deleteIcon} alt="delete" />
            </button>
          </>
        )}
      </span>
    </li>
  );
};

export default TodoList;
