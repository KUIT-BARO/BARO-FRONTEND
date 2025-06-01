import instance from "../instance";

interface Params {
  placeId: number;
  placeName: string;
  placeAddress: string;
  latitude: number;
  longitude: number;
  review: string;
  score: number;
  categoryIds: number[];
};

export const postPin = async (params: Params) => {
  try {
    const response = await instance.post("/pin", {
      placeName: params.placeName,
      placeAddress: params.placeAddress,
      latitude: params.latitude,
      longitude: params.longitude,
      review: params.review,
      score: params.score,
      categoryIds: params.categoryIds,
    });
    return response.data;
  } catch (error) {
    if (error.response.success) {
      const code = error.response.data.code;
      if (code === 400) {
        alert("잘못된 요청값입니다.");
      } else if (code === 401) {
        alert("인증 자격이 없습니다.");
      } else if (code === 403) {
        alert("권한이 없습니다.");
      } else if (code === 404) {
        alert("존재하지 않는 유저입니다.");
      } else if (code === 405) {
        alert("유효하지 않은 Http 메서드입니다.");
      } else if (code === 500) {
        alert("서버에 오류가 발생했습니다.");
      }
    } else {
      alert("핀 등록에 실패했습니다. 다시 시도해주세요.");
    }

    throw error;
  }
};