import React, { Fragment, useState } from "react";

import classes from "./Todo.module.css";
import { isNotEmpty } from "../../util/validate";
import useInput from "../../hooks/use-input";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const {
    value: todoValue,
    isValid: todoIsValid,
    valueChangeHadler: todoChangeHandler,
    inputBlurHander: todoBlurHandler,
    reset: resetTodoInput,
  } = useInput(isNotEmpty);

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

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

  const addTodoHandler = (event) => {
    event.preventDefault();

    if (!todoIsValid) {
      return;
    }

    const timestamp = new Date().getTime();

    setTodos([
      ...todos,
      {
        id: timestamp + 1,
        todo: todoValue,
        isCompleted: false,
      },
    ]);

    resetTodoInput();
  };

  return (
    <Fragment>
      <div className={classes["action"]}>
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
          </label>
        </form>
      </div>
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
//
