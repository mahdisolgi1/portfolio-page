import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./page/App.jsx";
import "./App.css";
import Form from "./page/Form.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
