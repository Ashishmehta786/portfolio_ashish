import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalendlyWidget from "./components/Calendly";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "consult",
    element: <CalendlyWidget />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
