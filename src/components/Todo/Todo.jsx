import React, { Fragment, useState } from "react";

import classes from "./Todo.module.css";
import { isNotEmpty } from "../../util/validate";
import { getAuthToken } from "../../util/auth";
import useInput from "../../hooks/use-input";
import TodoList from "./TodoList";
import useHttp from "../../hooks/use-http";
import TodoInput from "./TodoInput";

const Todo = (props) => {
  const [todos, setTodos] = useState(props.todos);
  const { sendIsLoading, sendError, sendRequest: sendTodoRequest } = useHttp();
  const {
    updateIsLoading,
    updateError,
    sendRequest: updateTodoRequest,
  } = useHttp();

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
      url: `http://localhost:8000/todos/${nextItem.id}`,
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
      url: `http://localhost:8000/todos/${itemId}`,
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
        url: "http://localhost:8000/todos",
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
    <Fragment>
      <TodoInput onAddTodo={addTodoHandler} />
      <div className={classes["todo-list"]}>
        <ul>
          <TodoList
            todos={todos}
            onChangeItem={changeTodoHandler}
            onDeleteItem={deleteTodoHandler}
          />
        </ul>
      </div>
    </Fragment>
  );
};

export default Todo;

// Todo에서 todo입력시 todoList가 재평가 되는 경우가 생김
