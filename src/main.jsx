import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SignUpPage from "./pages/SignUpPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import Admin from "./pages/Admin";
import CreateMember from "./component/CreateMember";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "register",
    element: <SignUpPage />
  },
  {
    path: "create-member",
    element: <CreateMember />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);