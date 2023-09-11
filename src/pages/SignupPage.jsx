import React from "react";

import SignupForm from "../components/InputForm/SignupForm";
import { API_URL } from "../util/API_URL";
import { json, redirect, useLoaderData } from "react-router-dom";
const SignupPage = () => {
  // const token = useLoaderData();

  // if

  return <SignupForm />;
};

export default SignupPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const signupData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });

  if (response.status === 400) {
    throw json({ message: "회원가입 오류" }, { status: 400 });
  }

  return redirect("/signin");
};
