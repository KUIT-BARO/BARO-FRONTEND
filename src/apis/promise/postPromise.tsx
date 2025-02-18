import instance from "../instance";
import { createErrorResponse } from "../../interface/api/Message";
const PostPromise = async (
  name: string,
  dateStart: string,
  dateEnd: string,
  peopleNum: number | string,
  purpose: string,
  placeName: string
) => {
  let validPeopleNum =
    typeof peopleNum === "string" ? parseInt(peopleNum, 10) : peopleNum;

  // ✅ 변환 후 숫자가 아닐 경우 예외 처리
  if (isNaN(validPeopleNum)) {
    throw new Error("peopleNum 값이 올바르지 않습니다. 숫자로 입력해주세요.");
  }

  const requestData = {
    name,
    dateStart:
      typeof dateStart === "string"
        ? dateStart.split("T")[0]
        : new Date(dateStart).toISOString().split("T")[0],
    dateEnd:
      typeof dateEnd === "string"
        ? dateEnd.split("T")[0]
        : new Date(dateEnd).toISOString().split("T")[0],
    peopleNum: validPeopleNum,
    purpose,
    placeName: "스타벅스 강남점",
  };

  try {
    return await instance.post("/promise/suggest", requestData, {
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
