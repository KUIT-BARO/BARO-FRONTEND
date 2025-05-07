import useApi from "../useApi";
import {
  RequestProfile,
  RequestPassword,
  SignupInfo,
} from "../../interface/api/mypage/mypage";
const useUsers = () => {
  const { usersApi } = useApi();
  const getMypageSetting = () => {
    return usersApi
      .get("/profile-setting")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getuserProfile = () => {
    return usersApi
      .get("/profile")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fixuserProfile = (profile: RequestProfile) => {
    return usersApi
      .post("/profile", profile)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fixPassword = (passwordInfo: RequestPassword) => {
    return usersApi
      .post("/password", passwordInfo)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const withdrawUser = () => {
    return usersApi
      .delete("/")
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signupUser = (signupInfo: SignupInfo) => {
    return usersApi
      .post("/signup", signupInfo)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getHomeInfo = () => {
    return usersApi
      .get("/")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    getMypageSetting,
    getuserProfile,
    fixuserProfile,
    fixPassword,
    withdrawUser,
  };
};
export default useUsers;
