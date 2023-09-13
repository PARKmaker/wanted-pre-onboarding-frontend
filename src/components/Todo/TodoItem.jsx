import React, { Fragment, useRef, useState } from "react";

import classes from "./TodoItem.module.css";

// 수정 텍스트 입력시 Todo useEffect가 실행, ref로 해결
const TodoItem = ({ todo, onChangeItem, onDeleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [originalText, setOriginalText] = useState(todo.todo);
  const editTextInputRef = useRef();

  let todoContent;
  let todoButtonContent;

  const inputCancelHandler = () => {
    setIsEditing(false);
    onChangeItem({ ...todo, todo: originalText });
  };

  const buttonClickSubmitEditingHandler = () => {
    const value = editTextInputRef.current.value;
    onChangeItem({
      ...todo,
      todo: value,
    });
    setIsEditing(false);
    setOriginalText(value);
  };

  if (isEditing) {
    todoContent = (
      <Fragment>
        <input
          type="text"
          ref={editTextInputRef}
          defaultValue={originalText}
          data-testid="modify-input"
          // value={editText}
          // onChange={editingTextChangeHandler}
          // onChange={(event) => {
          //   onChangeItem({
          //     ...todo,
          //     todo: event.target.value,
          //   });
          // }}
        />
        <button
          data-testid="submit-button"
          onClick={buttonClickSubmitEditingHandler}
        >
          제출
        </button>
      </Fragment>
    );

    todoButtonContent = (
      <Fragment>
        <button data-testid="cancel-button" onClick={inputCancelHandler}>
          취소
        </button>
      </Fragment>
    );
  } else {
    todoContent = (
      <Fragment>
        <span>{todo.todo}</span>
        <button data-testid="modify-button" onClick={() => setIsEditing(true)}>
          수정
        </button>
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
