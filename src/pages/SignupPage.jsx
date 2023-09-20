import React from "react";

import { json, redirect } from "react-router-dom";
import Sign from "../components/Sign/Sign";
import { baseUrl } from "../api/instance";

const SignupPage = () => {
  return <Sign type="signup" />;
};

export default SignupPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const signupData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`${baseUrl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });

  if (response.status === 400) {
    return "signup";
  }

  if (!response.ok) {
    throw json({ message: "회원가입 오류" }, { status: 404 });
  }

  return redirect("/signin");
};
