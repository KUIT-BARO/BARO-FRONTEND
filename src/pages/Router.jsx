import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Main/Main";

import Suggest from "./Suggest/Suggest";
import SignupPage from "./Login/SignupPage";
import LoginPage from "./Login/LoginPage";
import MyPromises from "./MyPromises/MyPromises";

import FinalVote from "./FinalVote/FinalVote";

import MyPage from "./MyPage/MyPage";
import ProfileEdit from "./MyPage/ProfileEdit";
import Settings from "./MyPage/Settings";
import Contact from "./MyPage/Contact";
import SavedPlacesDetail from "./MyPage/SavedPlacesDetail";
import UserSchedulePage from "./MyPage/UserSchedulePage";

import Accept from "./Accept/Accept";

import SearchPage from "./SearchPage/SearchPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/login",
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
      path: "/finalvote/*",
      element: <FinalVote />,
    },
    {
      path: "/mypromises",
      element: <MyPromises />,
    },
    {
      path: "/mypage",
      element: <MyPage />,
    },
    {
      path: "/places/:category",
      element: <SavedPlacesDetail />,
    },
    {
      path: "/profile/edit",
      element: <ProfileEdit />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/search/*",
      element: <SearchPage />,
    },
    {
      path: "/schedule/:userId",
      element: <UserSchedulePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
