import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"; // 보호된 라우트 추가
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
import Landing from "./Landing/Landing";

// 로그인 여부 확인 (예: localStorage 사용)
const isAuthenticated = () => {
  // return localStorage.getItem("token") !== null;
  return true;
};

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> }, // 랜딩 페이지 추가
    { path: "/main", element: <Main /> }, // 기존 "/" -> "/main"으로 변경
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },

    // 보호된 라우트
    {
      path: "/suggest/*",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated()}>
          <Suggest />
        </ProtectedRoute>
      ),
    },
    {
      path: "/accept/*",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated()}>
          <Accept />
        </ProtectedRoute>
      ),
    },
    {
      path: "/finalvote/*",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated()}>
          <FinalVote />
        </ProtectedRoute>
      ),
    },
    {
      path: "/mypromises",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated()}>
          <MyPromises />
        </ProtectedRoute>
      ),
    },
    {
      path: "/mypage",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated()}>
          <MyPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/places/:category",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated()}>
          <SavedPlacesDetail />
        </ProtectedRoute>
      ),
    },
    {
      path: "/profile/edit",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated()}>
          <ProfileEdit />
        </ProtectedRoute>
      ),
    },
    {
      path: "/settings",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated()}>
          <Settings />
        </ProtectedRoute>
      ),
    },
    {
      path: "/contact",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated()}>
          <Contact />
        </ProtectedRoute>
      ),
    },
    {
      path: "/search/*",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated()}>
          <SearchPage />
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
