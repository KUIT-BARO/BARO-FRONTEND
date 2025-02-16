import instance from "../instance";

export const getSchedule = {
  getMySchedule: async () => {
    try {
      const response = await instance.get("/users/schedule/my-schedule");
      return response.data;
    } catch (error) {
      if (error.response?.status === 400) {
        alert("시간표 조회에 실패했습니다.");
      }
      throw error;
    }
  }
};