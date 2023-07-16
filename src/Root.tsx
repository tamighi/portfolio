import { App } from "App";
import { ErrorPage, HomePage, ResumePage, WorkPage } from "pages";
import { PopupProvider } from "providers";
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
  return (
    <PopupProvider>
      <RouterProvider router={router} />
    </PopupProvider>
  );
};
