import React, { Fragment, useRef, useState } from "react";

import classes from "./TodoItem.module.css";
import Button from "../../UI/Button";

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
          className={classes.input}
          type="text"
          ref={editTextInputRef}
          defaultValue={originalText}
          data-testid="modify-input"
        />
      </Fragment>
    );

    todoButtonContent = (
      <div className={classes["button-box"]}>
        <Button
          data-testid="submit-button"
          button={{
            onClick: buttonClickSubmitEditingHandler,
          }}
        >
          제출
        </Button>
        <Button
          data-testid="cancel-button"
          button={{
            onClick: inputCancelHandler,
          }}
        >
          취소
        </Button>
      </div>
    );
  } else {
    todoContent = (
      <Fragment>
        <span>{todo.todo}</span>
      </Fragment>
    );

    todoButtonContent = (
      <div className={classes["button-box"]}>
        <Button
          data-testid="modify-button"
          button={{
            onClick: () => setIsEditing(true),
          }}
        >
          수정
        </Button>
        <Button
          data-testid="delete-button"
          button={{
            onClick: () => onDeleteItem(todo.id),
          }}
        >
          삭제
        </Button>
      </div>
    );
  }

  return (
    <Fragment>
      <div className={classes["item-box"]}>
        <label className={classes.item}>
          <input
            className={classes.checkbox}
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
      </div>
    </Fragment>
  );
};

export default TodoItem;
