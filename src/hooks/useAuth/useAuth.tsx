import useApi from "../useApi";
import { LoginInfo, authCode } from "../../interface/api/auth/auth";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const { authApi } = useApi();
  const navigate = useNavigate();
  const loginUser = (loginInfo: LoginInfo) => {
    return authApi
      .post("/login", loginInfo)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("로그인 실패", err);
        navigate("/login");
      });
  };
  const reissueToken = () => {
    return authApi
      .post("/reissue", {})
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("reissue 실패", err);
      });
  };
  const logoutUser = () => {
    return authApi
      .patch("/logout")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("로그아웃 실패", err);
      });
  };
  const sendAuthCode = (email: string) => {
    return authApi
      .post("/mail/send", { email })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("이메일 코드 보내기 실패", err);
      });
  };
  const verifyAuthCode = (codeInfo: authCode) => {
    return authApi
      .post("/mail/check")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("코드 인증 실패", err);
      });
  };

  return { loginUser, reissueToken, sendAuthCode, logoutUser, verifyAuthCode };
};
export default useAuth;
