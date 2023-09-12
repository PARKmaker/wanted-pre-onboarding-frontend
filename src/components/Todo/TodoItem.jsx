import React, { Fragment, useState } from "react";

import classes from "./TodoItem.module.css";

const TodoItem = ({ todo, onChangeItem, onDeleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(todo.todo);

  let todoContent;
  let todoButtonContent;

  const inputCancelHandler = () => {
    setIsEditing(false);
    onChangeItem({ ...todo, todo: tempText });
  };

  const buttonClickSubmitEditingHandler = () => {
    setIsEditing(false);
    setTempText(todo.todo);
  };

  if (isEditing) {
    todoContent = (
      <Fragment>
        <input
          type="text"
          value={todo.todo}
          onChange={(event) => {
            onChangeItem({
              ...todo,
              todo: event.target.value,
            });
          }}
        />
        <button onClick={buttonClickSubmitEditingHandler}>제출</button>
      </Fragment>
    );
    todoButtonContent = (
      <Fragment>
        <button data-testid="delete-button" onClick={inputCancelHandler}>
          취소
        </button>
      </Fragment>
    );
  } else {
    todoContent = (
      <Fragment>
        <span>{todo.todo}</span>
        <button onClick={() => setIsEditing(true)}>수정</button>
      </Fragment>
    );
    todoButtonContent = (
      <Fragment>
        <button
          data-testid="delete-button"
          onClick={() => onDeleteItem(todo.id)}
        >
          삭제
        </button>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(event) => {
            onChangeItem({
              ...todo,
              isCompleted: event.target.checked,
            });
          }}
        />
        {todoContent}
      </label>
      {todoButtonContent}
    </Fragment>
  );
};

export default TodoItem;
