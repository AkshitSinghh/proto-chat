import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./routes/home.jsx";
import Chat from "./routes/chat.jsx";
import Auth from "./components/authentication/auth.jsx";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/chat",
    element: (
      <Auth>
        <Chat />
      </Auth>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
    <ToastContainer
      position="top-left"
      autoClose={2000}
      theme="light"
      style={{ height: "10px" }}
      draggable
      transition:Bounce
    />
  </React.StrictMode>
);
