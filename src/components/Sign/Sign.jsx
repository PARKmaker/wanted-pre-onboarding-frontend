import React from "react";

import classes from "./Sign.module.css";
import useInput from "../../hooks/use-input";
import Input from "../../UI/Input";

import { isIncludeAt, isEightChars } from "../../util/validate";
import { Form } from "react-router-dom";

const Sign = ({ type }) => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHadler: emailChangeHandler,
    inputBlurHander: emailBlurHandler,
  } = useInput(isIncludeAt);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHadler: passwordChangeHandler,
    inputBlurHander: passwordBlurHandler,
  } = useInput(isEightChars);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  return (
    <Form method="POST" className={classes["sign-box"]}>
      <h2 className={classes["sign-header"]}>
        {type === "signin" ? <p>로그인</p> : <p>회원가입</p>}
      </h2>
      <div className={classes["sign-container"]}>
        <div>
          <Input
            label="이메일"
            hasError={emailHasError}
            input={{
              id: "email",
              type: "email",
              name: "email",
              value: emailValue,
              onChange: emailChangeHandler,
              onBlur: emailBlurHandler,
            }}
            data-testid="email-input"
          />
        </div>
        <div>
          <Input
            label="비밀번호"
            hasError={passwordHasError}
            input={{
              id: "password",
              type: "password",
              name: "password",
              value: passwordValue,
              onChange: passwordChangeHandler,
              onBlur: passwordBlurHandler,
            }}
            data-testid="password-input"
          />
        </div>

        <div className={classes["form-action"]}>
          {type === "signin" ? (
            <button disabled={!formIsValid} data-testid="signin-button">
              로그인
            </button>
          ) : (
            <button disabled={!formIsValid} data-testid="signup-button">
              회원가입
            </button>
          )}
        </div>
      </div>
    </Form>
  );
};

export default Sign;
