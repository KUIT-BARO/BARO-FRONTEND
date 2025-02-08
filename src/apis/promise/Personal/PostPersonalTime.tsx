import instance from "../../instance";
import { createErrorResponse } from "../../../interface/api/Message";
import TimeTable from "../../../interface/TimeTable";
const PostPersonalTime = async (promiseId: number, time: Array<TimeTable>) => {
  const requestData = {
    time,
  };
  try {
    return await instance.post(
      `/promise/personal/${promiseId}/time`,
      requestData
    );
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

export default PostPersonalTime;
