import { App } from "App";
import { ErrorPage, HomePage } from "pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export const Root = () => {
  return <RouterProvider router={router} />;
};
