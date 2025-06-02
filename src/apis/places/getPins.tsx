import instance from '../instance';

interface Params {
  placeId: number;
};

export const getPins = async (params: Params) => {
  try {
    const response = await instance.get(`places/${params.placeId}/pins`);
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
        alert("존재하지 않는 장소입니다.");
      } else if (code === 405) {
        alert("유효하지 않은 Http 메서드입니다.");
      } else if (code === 500) {
        alert("서버에 오류가 발생했습니다.");
      }
    }
  }
}