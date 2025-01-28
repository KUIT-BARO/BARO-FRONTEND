import instance from "../index.js";

const PostPormise = async (
  name,
  dateStart,
  dateEnd,
  peopleNum,
  purpose,
  location
) => {
  const requestData = {
    name,
    dateStart,
    dateEnd,
    peopleNum,
    purpose,
    location,
  };

  try {
    const response = await instance.post("/promise/suggest", requestData);
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        alert("잘못된 요청입니다.");
      } else if (error.response.status === 500) {
        alert("Promise를 생성할 수 없습니다.");
      } else {
        alert("잠시 후 다시 시도해주세요.");
      }
    }
    throw error;
  }
};

export default PostPormise;
