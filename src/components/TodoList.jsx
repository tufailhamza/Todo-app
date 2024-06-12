import React, { useState } from "react";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/pencil.png";

const TodoList = ({ item, itemKey, date, deleteItem, editItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item);

  const handleDelete = () => {
    deleteItem
      ? deleteItem(itemKey)
      : console.error(
          "deleteItem function not provided to TodoList component."
        );
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleSave = () => {
    editItem(itemKey, editedText);
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
          <div style={{ margin: "10px" }}>{item}</div>
          <div>{formatDate(date)}</div>
        </>
      )}
      <span className="icons">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button onClick={handleEdit}>
              <img src={editIcon} alt="edit" />
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
