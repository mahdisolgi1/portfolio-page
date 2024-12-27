import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./page/HomePage.jsx";
import Root from "./page/Root.jsx";
import Form from "./page/Form.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./page/NotFound.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,

    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      },

      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
