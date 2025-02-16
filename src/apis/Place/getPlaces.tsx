import instance from '../instance';

interface PlaceParams {
  latitude: number;
  longitude: number;
  keywordIds: number[];
};

export const getPlaces = async (params: PlaceParams) => {
  try {
    const response = await instance.get('/places/search', { params });
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        alert('장소 정보를 찾을 수 없습니다.');
      } else {
        alert('잠시 후 다시 시도해주세요.');
      }
    }
    throw error;
  }
}