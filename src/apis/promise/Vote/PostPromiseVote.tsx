import instance from "../../instance";
import { createErrorResponse } from "../../../interface/api/Message";
const PostPormise = async (
  promiseId: number,
  promisePersonalTimeId: number,
  placeId: number
) => {
  const requestData = {
    promisePersonalTimeId,
    placeId,
  };
  try {
    return await instance.post(`/promise/vote/${promiseId}`, requestData);
  } catch (error) {
    if (error.response) {
      const errorData = createErrorResponse(error.response.status.toString());
      alert(errorData.errorContent.message);
    } else {
      alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
    throw error;
  }
};

export default PostPormise;
