import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    console.log("인증되지 않음, 로그인 페이지로 이동");
    // return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
