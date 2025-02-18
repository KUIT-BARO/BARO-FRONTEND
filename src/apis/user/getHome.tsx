import instance from "../instance";

export const getHome = {
  getHome: async () => {
    try {
      console.log('[getHome] 요청 시작');
      const response = await instance.get("/users/home");
      return response;
    } catch (error) {
      console.error('[getHome] 에러 상세 정보:', {
        status: error.response?.status,
        message: error.response?.data?.message,
        error: error.message,
        stack: error.stack
      });

      if (error.response?.status === 500) {
        console.error('서버 응답 전문:', error.response);
        alert("서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      } else if (error.response?.status === 401) {
        alert("로그인이 필요합니다.");
      } else if (error.response?.status === 404) {
        alert("일정을 찾을 수 없습니다.");
      } else {
        alert("요청 처리 중 오류가 발생했습니다.");
      }
      throw error;
    }
  }
};