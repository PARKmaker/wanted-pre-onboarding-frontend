import React, { Fragment } from "react";
import Todo from "../components/Todo/Todo";
import { getAuthToken } from "../util/auth";
import { defer, json, redirect, useLoaderData } from "react-router-dom";

// Page와 컴포넌트관계에서 page코드에서 서버에서 데이터를 patch하고, 컴포넌트로 todos를 보내려고 했으나 Todo.jsx 컴포넌트가 만들어지고 데이터 fetch 되어 결국 빈 데이터가 보내지게됨
// loader사용해볼까
const TodoPage = () => {
  const { todos } = useLoaderData();
  // 기존 todo컴포넌트는 input과 list 둘다 같은 컴포넌트안에
  return (
    <Fragment>
      <Todo todos={todos} />
    </Fragment>
  );
};

export default TodoPage;

const loadTodos = async () => {
  const response = await fetch("http://localhost:8000/todos", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });

  if (!response.ok) {
    throw json({ message: "todo 가져오기 오류" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
};

export const loader = async () => {
  const token = getAuthToken();

  if (!token) {
    alert("로그인이 필요합니다.");

    return redirect("/signin");
  }

  return defer({
    todos: await loadTodos(),
  });
};
