export const ERROR_MESSAGES: Record<string, ErrorContent> = {
  USER_NOT_FOUND: {
    message: "사용자를 찾을 수 없습니다.",
    hint: "올바른 사용자 ID를 입력했는지 확인하세요.",
    httpCode: 404,
  },
  INVALID_REQUEST: {
    message: "잘못된 요청입니다.",
    hint: "입력 값을 다시 확인해주세요.",
    httpCode: 400,
  },
  INTERNAL_SERVER_ERROR: {
    message: "서버 내부 오류가 발생했습니다.",
    hint: "잠시 후 다시 시도해주세요.",
    httpCode: 500,
  },
} as const;
