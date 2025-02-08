import { ERROR_MESSAGES } from "../../utils/constant/Error";

export function createErrorResponse(code: string) {
  const errorContent = ERROR_MESSAGES[code];
  return {
    code,
    errorContent: errorContent || {
      message: "알 수 없는 오류가 발생했습니다.",
      hint: "관리자에게 문의하세요.",
      httpCode: 500,
    },
  };
}
