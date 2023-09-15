import React from "react";
import { json, redirect } from "react-router-dom";
import Sign from "../components/Sign/Sign";

const SigninPage = () => {
  return <Sign type="signin" />;
};

export default SigninPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const signinData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8000/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signinData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "로그인 실패" }, { status: 500 });
  }

  const resData = await response.json();
  const token = resData.access_token;

  localStorage.setItem("token", token);

  // const expiration = new Date();
  // expiration.setHours(expiration.getHours() + 1);
  // localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/todo");
};
