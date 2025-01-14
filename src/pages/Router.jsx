import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import Suggest from "./Suggest/Suggest";
import MyPromises from "./MyPromises/MyPromises";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/suggest/*",
      element: <Suggest />,
    },
    {
      path: "/mypromises",
      element: <MyPromises />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
