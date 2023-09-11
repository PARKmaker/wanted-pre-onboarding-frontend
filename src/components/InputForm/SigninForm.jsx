import React from "react";

import classes from "./SigninForm.module.css";
import useInput from "../../hooks/use-input";
import Input from "../../UI/Input";

import { isIncludeAt, isEightChars } from "../../util/validate";
import { Form } from "react-router-dom";

const SigninForm = (props) => {
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
    <Form method="POST">
      <Input
        label="이메일"
        hasError={emailHasError}
        input={{
          id: "email",
          type: "text",
          name: "email",
          value: emailValue,
          onChange: emailChangeHandler,
          onBlur: emailBlurHandler,
        }}
        data-testid="email-input"
      />

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

      <div className={classes["form-action"]}>
        <button disabled={!formIsValid} data-testid="signin-button">
          로그인
        </button>
      </div>
    </Form>
  );
};

export default SigninForm;
