import React, { useState } from "react";

import classes from "./TodoList.module.css";

const TodoList = ({ todos, onChangeItem, onDeleteItem }) => {
  const inputCheckHandler = (event, item) => {
    onChangeItem({
      ...item,
      packed: event.target.checked,
    });
  };

  return (
    <div className={classes["todo-list"]}>
      <ul>
        {todos.map((item) => (
          <li key={item.id} className={classes.item}>
            <label>
              <input
                type="checkbox"
                checked={item.packed}
                onChange={(e) => inputCheckHandler(e, item)}
              />
              <span>{item.text}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button
              data-testid="delete-button"
              onClick={() => onDeleteItem(item.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
