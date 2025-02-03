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
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          alert("회원가입에 실패했습니다.");
        } else {
          alert("잠시 후 다시 시도해주세요.");
        }
      }
      throw error;
    }
  },
  
  // login: async (params) => { ... }
};

export default postAuth;