import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"; // 보호된 라우트 추가
import Main from "./Main/Main";
import Suggest from "./Suggest/Suggest";
import SignupPage from "./Login/SignupPage/SignupPage";
import LoginPage from "./Login/LoginPage/LoginPage";
import MyPromises from "./MyPromises/MyPromises";
import FinalVote from "./FinalVote/FinalVote";
import MyPage from "./MyPage/mypage-main/MyPage";
import ProfileEdit from "./MyPage/mypage-profile-edit/ProfileEdit";
import Settings from "./MyPage/mypage-setting/Settings";
import Contact from "./MyPage/Contact";
import SavedPlacesDetail from "./MyPage/SavedPlacesDetail";
import UserSchedulePage from "./MyPage/UserSchedulePage";
import Accept from "./Accept/Accept";
import SearchPage from "./SearchPage/SearchPage";
import Landing from "./Landing/Landing";
import PromiseConfirm from "../components/forMyPromises/PromiseConfirm/PromiseConfirm";
import Test from "./test";
import PromiseStatus from "./PromiseStatus/PromiseStatus";

// 로그인 여부 확인
const getAuthStatus = () => {
  return sessionStorage.getItem("login") === "true";
};

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(getAuthStatus());

  // 로그인 상태 변경 감지
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(getAuthStatus());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const router = createBrowserRouter([
    { path: "/test", element: <Test /> },
    { path: "/", element: <Landing /> },
    { path: "/main", element: <Main /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },

    // 보호된 라우트 적용
    {
      path: "/suggest/*",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suggest />
        </ProtectedRoute>
      ),
    },
    {
      path: "/accept/:promiseId/*",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Accept />
        </ProtectedRoute>
      ),
    },
    {
      path: "/finalvote/*",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <FinalVote />
        </ProtectedRoute>
      ),
    },
    {
      path: "/mypromises",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <MyPromises />
        </ProtectedRoute>
      ),
    },
    {
      path: "/mypromises/confirm",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <PromiseConfirm />
        </ProtectedRoute>
      ),
    },
    {
      path: "/mypage",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <MyPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/places/:category",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <SavedPlacesDetail />
        </ProtectedRoute>
      ),
    },
    {
      path: "/profile/edit",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <ProfileEdit />
        </ProtectedRoute>
      ),
    },
    {
      path: "/settings",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Settings />
        </ProtectedRoute>
      ),
    },
    {
      path: "/contact",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Contact />
        </ProtectedRoute>
      ),
    },
    {
      path: "/search/*",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <SearchPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/status",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <PromiseStatus />
        </ProtectedRoute>
      ),
    },
    {
      path: "/schedule/:userId",
      element: <UserSchedulePage />,
    },
    {
      path: "/users/schedule/:userId",
      element: <UserSchedulePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
