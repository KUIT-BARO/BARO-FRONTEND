import instance from "../instance";
import { createErrorResponse } from "../../interface/api/Message";
const PostPromise = async (
  name: string,
  dateStart: string,
  dateEnd: string,
  peopleNum: number | string,
  purpose: string,
  address: string
) => {
  let validPeopleNum =
    typeof peopleNum === "string" ? parseInt(peopleNum, 10) : peopleNum;

  // ✅ 변환 후 숫자가 아닐 경우 예외 처리
  if (isNaN(validPeopleNum)) {
    throw new Error("peopleNum 값이 올바르지 않습니다. 숫자로 입력해주세요.");
  }

  const requestData = {
    name,
    dateStart,
    dateEnd,
    peopleNum: validPeopleNum,
    purpose,
    address,
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

export default PostPromise;
