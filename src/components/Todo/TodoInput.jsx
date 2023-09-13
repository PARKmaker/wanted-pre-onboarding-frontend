import React, { Fragment } from "react";
import useInput from "../../hooks/use-input";
import { isNotEmpty } from "../../util/validate";

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
    <div>
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
  );
};

export default TodoInput;
