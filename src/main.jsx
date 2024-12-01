import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./page/HomePage.jsx";
import Form from "./page/Form.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
