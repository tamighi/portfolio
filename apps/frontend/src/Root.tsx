import { App } from "App";
import { ErrorPage, HomePage, ResumePage, WorkPage } from "pages";
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
        path: "resume",
        element: <ResumePage />,
      },
      {
        path: "work",
        element: <WorkPage />,
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
