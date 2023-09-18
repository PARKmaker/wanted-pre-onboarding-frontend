import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RootPage from "./pages/RootPage";
import SignupPage, { action as signupAction } from "./pages/SignupPage";
import SigninPage, { action as SigninAction } from "./pages/SigninPage";
import TodoPage, { loader as TodoPageLoader } from "./pages/TodoPage";
import { checkNotAuthLoader } from "./util/auth";
import RootErrorBoundary from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
        loader: checkNotAuthLoader,
        action: signupAction,
      },
      {
        path: "signin",
        element: <SigninPage />,
        loader: checkNotAuthLoader,
        action: SigninAction,
      },
      {
        path: "todo",
        element: <TodoPage />,
        loader: TodoPageLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
