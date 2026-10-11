
import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { router } from "./components/common/router";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <ToastContainer />
  </React.StrictMode>
);