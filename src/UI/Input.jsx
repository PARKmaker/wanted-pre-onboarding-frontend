import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const inputHasError = props.hasError;
  const inputLabel = props.label;

  const inputClasses = `${classes["input-box"]} ${
    inputHasError ? classes.invalid : ""
  }`;

  return (
    <div className={inputClasses}>
      {/* <label htmlFor={props.input.id}>{inputLabel}</label> */}
      <input
        data-testid={props["data-testid"]}
        {...props.input}
        placeholder={inputLabel}
      />
      {inputHasError && (
        <p className={classes["error-text"]}>
          {inputLabel} 양식의 맞게 입력해주세요.
        </p>
      )}
    </div>
  );
};

export default Input;
