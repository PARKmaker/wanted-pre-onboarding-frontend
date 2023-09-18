import React from "react";
import { useRouteError } from "react-router-dom";

const RootErrorBoundary = () => {
  let error = useRouteError();

  return (
    <div>
      <h1>문제가 생겼습니다</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button onClick={() => (window.location.href = "/")}>
        클릭하여 페이지를 새로고침 하세요
      </button>
    </div>
  );
};

export default RootErrorBoundary;
