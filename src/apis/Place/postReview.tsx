import instance from "../instance";

interface ReviewParams {
  score: number;
  note: string;
  keywordIds: number[];
};

export const postReview = async (placeId: number) => {
  updateReview: async (params: ReviewParams) => {
    try {
      const response = await instance.post(`/places/${placeId}/reviews`, params);
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          alert("요청 데이터가 유효하지 않습니다.");
        } else {
          alert("잠시 후 다시 시도해주세요.");
        }
      }
      throw error;
    }
  };
};