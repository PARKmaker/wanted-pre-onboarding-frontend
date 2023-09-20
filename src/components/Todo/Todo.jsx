import React, { useState } from "react";

import classes from "./Todo.module.css";

import { getAuthToken } from "../../util/auth";
import TodoList from "./TodoList";
import useHttp from "../../hooks/use-http";
import TodoInput from "./TodoInput";
import { baseUrl } from "../../api/instance";

const Todo = (props) => {
  const [todos, setTodos] = useState(props.todos);
  const { sendRequest: sendTodoRequest } = useHttp();
  const { sendRequest: updateTodoRequest } = useHttp();

  const changeTodoHandler = async (nextItem) => {
    setTodos(
      todos.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );

    updateTodoRequest({
      url: `${baseUrl}/todos/${nextItem.id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: { todo: nextItem.todo, isCompleted: nextItem.isCompleted },
    });
  };

  const deleteTodoHandler = (itemId) => {
    setTodos(todos.filter((item) => item.id !== itemId));

    updateTodoRequest({
      url: `${baseUrl}/todos/${itemId}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });
  };

  const addTodo = (todoData) => {
    setTodos([...todos, todoData]);
  };

  const addTodoHandler = async (textValue) => {
    sendTodoRequest(
      {
        url: `${baseUrl}/todos`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAuthToken()}`,
        },
        body: { todo: textValue },
      },
      addTodo
    );
  };
  return (
    <div className={classes["todo-container"]}>
      <TodoInput onAddTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        onChangeItem={changeTodoHandler}
        onDeleteItem={deleteTodoHandler}
      />
    </div>
  );
};

export default Todo;

// Todo에서 todo입력시 todoList가 재평가 되는 경우가 생김
