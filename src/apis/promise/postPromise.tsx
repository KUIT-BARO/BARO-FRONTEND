import instance from "../instance";
import { createErrorResponse } from "../../interface/api/Message";
const PostPormise = async (
  name: string,
  dateStart: string,
  dateEnd: string,
  peopleNum: number,
  purpose: string,
  location: string
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
    return await instance.post("/promise/suggest", requestData);
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
