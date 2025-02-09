import instance from "../instance/index";

export const getPromises ={
  checkPromises: async () => {
    try {
      const response = await instance.get("/users/promises", {
        headers: { "Accept": "application/json" }
      });
      return response;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert("사용자의 약속 정보를 찾을 수 없습니다.");
        } else {
          alert("잠시 후 다시 시도해주세요.");
        }
      }
      throw error;
    }
  }
};