import React from "react";

export const Todo = ({ todo, dispatch }) => {
  const { id, name, complete } = todo;
  const deleteTodo = id => dispatch({ type: "DELETE_TODO", id });

  return (
    <div className="todo-container">
      <div className="todo-name">{name}</div>
      <div className="todo-delete" onClick={() => deleteTodo(id)}>
        &times;
      </div>
    </div>
  );
};
