import { App } from "./App";
import {
  ContactPage,
  ErrorPage,
  HomePage,
  ResumePage,
  ProjectPage,
} from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
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
          path: "projects",
          element: <ProjectPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ],
  { basename: "/portfolio/" }
);

export const Root = () => {
  return <RouterProvider router={router} />;
};
