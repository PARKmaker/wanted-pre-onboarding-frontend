import React from "react";
import useInput from "../../hooks/use-input";
import { isNotEmpty } from "../../util/validate";

import classes from "./TodoInput.module.css";
import Button from "../../UI/Button";

const TodoInput = (props) => {
  const {
    value: todoValue,
    isValid: todoIsValid,
    valueChangeHadler: todoChangeHandler,
    inputBlurHander: todoBlurHandler,
    reset: resetTodoInput,
  } = useInput(isNotEmpty);

  const addTodoHandler = (event) => {
    event.preventDefault();

    if (!todoIsValid) {
      return;
    }

    props.onAddTodo(todoValue);
    resetTodoInput();
  };

  return (
    <div className={classes["input-box"]}>
      <form className={classes.form} onSubmit={addTodoHandler}>
        <label>
          <input
            className={classes.input}
            data-testid="new-todo-input"
            type="text"
            id="todoInput"
            name="todoInput"
            value={todoValue}
            onChange={todoChangeHandler}
            onBlur={todoBlurHandler}
            placeholder="Todo 입력해주세요"
          />
          <Button
            data-testid="new-todo-add-button"
            button={{
              type: "submit",
              disabled: !todoIsValid,
            }}
          >
            추가
          </Button>

          {/* <button
            disabled={!todoIsValid}
            type="submit"
            data-testid="new-todo-add-button"
          >
            추가
          </button> */}
        </label>
      </form>
    </div>
  );
};

export default TodoInput;
