import React from "react";

import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onChangeItem, onDeleteItem }) => {
  const todosList = todos.map((todo) => (
    <li key={todo.id}>
      <TodoItem
        todo={todo}
        onChangeItem={onChangeItem}
        onDeleteItem={onDeleteItem}
      />
    </li>
  ));

  return (
    <div className={classes["todo-list"]}>
      <ul>{todosList}</ul>
    </div>
  );
};

export default TodoList;
