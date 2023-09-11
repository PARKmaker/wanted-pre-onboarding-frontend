import React from "react";

import classes from "./SignupForm.module.css";
import useInput from "../../hooks/use-input";
import Input from "../../UI/Input";

import { isIncludeAt, isEightChars } from "../../util/validate";
import { Form, useNavigate, useNavigation } from "react-router-dom";

const SignupForm = (props) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHadler: emailChangeHandler,
    inputBlurHander: emailBlurHandler,
    // reset: resetEmail,
  } = useInput(isIncludeAt);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHadler: passwordChangeHandler,
    inputBlurHander: passwordBlurHandler,
    // reset: resetPassword,
  } = useInput(isEightChars);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  return (
    <Form method="post">
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
        <button disabled={!formIsValid} data-testid="signup-button">
          회원가입
        </button>
      </div>
    </Form>
  );
};

export default SignupForm;
