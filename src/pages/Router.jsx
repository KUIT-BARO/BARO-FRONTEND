import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import Suggest from "./Suggest/Suggest";
import SignupPage from "./Main/SignupPage";
import LoginPage from "./Main/LoginPage";
import MyPromises from "./MyPromises/MyPromises";
import Accept from "./Accept/Accept";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/suggest/*",
      element: <Suggest />,
    },
    {
      path: "/accept/*",
      element: <Accept />,
    },
    {
      path: "/mypromises",
      element: <MyPromises />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
