import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import { Suggest } from "./Suggest/Suggest";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/suggest",
      element: <Suggest />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
