import instance from "../instance";

export const getUserPlace = async () => {
  try {
    return await instance.get('/promise/user-place');
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
    throw error;
  }
};
