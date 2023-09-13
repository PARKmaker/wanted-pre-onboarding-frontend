import React, { Fragment, useState } from "react";

import classes from "./Todo.module.css";
import { isNotEmpty } from "../../util/validate";
import { getAuthToken } from "../../util/auth";
import useInput from "../../hooks/use-input";
import TodoList from "./TodoList";
import useHttp from "../../hooks/use-http";
import TodoInput from "./TodoInput";

const Todo = (props) => {
  // console.log(props.todos);
  console.log("Todo");

  const [todos, setTodos] = useState([]);
  const { isLoading, error, sendRequest: sendTodoRequest } = useHttp();

  // const {
  //   value: todoValue,
  //   isValid: todoIsValid,
  //   valueChangeHadler: todoChangeHandler,
  //   inputBlurHander: todoBlurHandler,
  //   reset: resetTodoInput,
  // } = useInput(isNotEmpty);

  const changeTodoHandler = (nextItem) => {
    setTodos(
      todos.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  };

  const deleteTodoHandler = (itemId) => {
    setTodos(todos.filter((item) => item.id !== itemId));
  };

  const addTodo = (todoData) => {
    setTodos([...todos, todoData]);
  };

  const addTodoHandler = async (textValue) => {
    // console.log(textValue);

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
  // const addTodo = (todoData) => {
  //   setTodos([...todos, todoData]);
  // };

  // const addTodoHandler = async (event) => {
  //   event.preventDefault();

  //   if (!todoIsValid) {
  //     return;
  //   }

  //   sendTodoRequest(
  //     {
  //       url: "http://localhost:8000/todos",
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${getAuthToken()}`,
  //       },
  //       body: { todo: todoValue },
  //     },
  //     addTodo
  //   );

  //   resetTodoInput();
  // };

  // console.log(todos);

  return (
    <Fragment>
      <TodoInput onAddTodo={addTodoHandler} />
      {/* <div className={classes["action"]}>
        <form onSubmit={addTodoHandler}>
          <label>
            <input
              data-testid="new-todo-input"
              type="text"
              id="todoInput"
              name="todoInput"
              value={todoValue}
              onChange={todoChangeHandler}
              onBlur={todoBlurHandler}
            />
            <button
              disabled={!todoIsValid}
              type="submit"
              data-testid="new-todo-add-button"
            >
              추가
            </button>
            {error ? <span>제출에 오류가 있습니다.</span> : null}
          </label>
        </form>
      </div> */}
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
