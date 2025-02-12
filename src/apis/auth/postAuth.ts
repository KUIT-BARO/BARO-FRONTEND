import instance from "../instance";

interface SignupParams {
  id: string;
  password: string;
  nickname: string;
}

export const postAuth = {
  signup: async (params: SignupParams) => {
    try {
      const response = await instance.post("/auth/signup", params);
      console.log('서버 응답:', response); // 디버깅용
      return response.data;
    } catch (error) {
      console.error('상세 에러:', error.response || error); // 더 자세한 에러 정보 출력
      if (error.response) {
        if (error.response.status === 400) {
          alert("회원가입에 실패했습니다.");
        } else if (error.response.status === 500) {
          alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } else {
          alert("잠시 후 다시 시도해주세요.");
        }
      }
      throw error;
    }
  },
  
  login: async (params: { id: string; password: string }) => {
    try {
      const response = await instance.post("/auth/login", params);
      return response.data;
    } catch (error) {
      if (error.response?.status === 400) {
        alert("로그인에 실패했습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await instance.post("/auth/logout");
      return response.data;
    } catch (error) {
      if (error.response?.status === 400) {
        alert("로그아웃에 실패했습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
      throw error;
    }
  },
};

export default postAuth;