import instance from "../instance";
import { createErrorResponse } from "../../interface/api/Message";
const PostFriends = async (code: string) => {
  if (!code) {
    console.error("🚨 친구 추가 요청 실패: 코드가 없습니다.");
    return;
  }

  try {
    console.log("📌 친구 추가 요청:", { code });
    return await instance.post("/users/friends/requests", { code }); // ✅ 객체 전달 확인
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

export default PostFriends;
