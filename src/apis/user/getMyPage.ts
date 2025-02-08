import instance from "../instance";

export const getMyPage = {
    getMyPage: async () => {
      try {
        const response = await instance.get("/users/my");
        return response;
      } catch (error) {
        if (error.response?.status === 400) {
          alert("마이페이지 조회에 실패했습니다.");
        }
        throw error;
      }
    },
  
    updateProfileImage: async (profileImage: string) => {
      try {
        const response = await instance.patch("/users/profile-image", {
          profileImage
        });
        return response.data;
      } catch (error) {
        if (error.response?.status === 400) {
          alert("프로필 이미지 변경에 실패했습니다.");
        }
        throw error;
      }
    }
  };