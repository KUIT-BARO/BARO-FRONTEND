import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"; // 보호된 라우트 추가
import Main from "./Main/Main";
import Suggest from "./Suggest/Suggest";
import SignupPage from "./Login/SignupPage/SignupPage";
import LoginPage from "./Login/LoginPage/LoginPage";
import MyPromises from "./MyPromises/MyPromises";
import MyPage from "./MyPage/Mypage-main/MyPage";
import ProfileEdit from "../pages/MyPage/Mypage-profile-edit/ProfileEdit.tsx";
import Settings from "./MyPage/Mypage-setting/Settings";




import Search from "./Search/Search";

import Landing from "./Landing/Landing";
import PromisePending from "./PromisePending/PromisePending";

// 로그인 여부 확인
const getAuthStatus = () => {
  // return sessionStorage.getItem("login") === "true";
  return true;
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
    { path: "/", element: <Landing /> },
    { path: "/main", element: <Main /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },

    // 보호된 라우트 적용
    {
      path: "/suggest/*",
      element: <Suggest />,
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
      path: "/mypage",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <MyPage />
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
        // <ProtectedRoute isAuthenticated={isAuthenticated}>
        <Settings />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/search/*",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Search />
        </ProtectedRoute>
      ),
    },
    {
      path: "/pending",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <PromisePending />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
