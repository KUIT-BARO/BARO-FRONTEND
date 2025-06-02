import instance from "../instance";
import { createErrorResponse } from "../../interface/api/Message";
const PostPromise = async (
  name: string,
  dateStart: string,
  dateEnd: string,
  placeName: string
) => {
  const requestData = {
    promiseName: name,
    suggestedStartDate:
      typeof dateStart === "string"
        ? dateStart.split("T")[0]
        : new Date(dateStart).toISOString().split("T")[0],
    suggestedEndDate:
      typeof dateEnd === "string"
        ? dateEnd.split("T")[0]
        : new Date(dateEnd).toISOString().split("T")[0],
    suggestedRegion: placeName,
  };

  try {
    return await instance.post("/promises", requestData, {
      withCredentials: true,
    });
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

export default PostPromise;
