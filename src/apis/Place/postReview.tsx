import instance from "../instance";

interface ReviewParams {
  placeId: number;
  score: number;
  note: string;
  keywordIds: number[];
};

export const postReview = async (params: ReviewParams) => {
  try {
    const response = await instance.post(`/places/${params.placeId}/reviews`, {
      score: params.score,
      note: params.note,
      keywordIds: params.keywordIds
    });
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