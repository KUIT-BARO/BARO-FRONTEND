import axios from "axios";

interface Schedule {
  name: string;
  dayOfWeek: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SUNDAY";
  timeStart: string;
  timeEnd: string;
  place: string;
}

interface SavedPlace {
  keywordId: number;
  keyword: string;
}

interface PlaceReview {
  placeId: number;
  name: string;
  note: string;
  score: number;
  latitude: number;
  longitude: number;
  Keywords: string[];
}

interface MyPageResponse {
  status: number;
  code: number;
  message: string;
  data: {
    user: {
      nickname: string;
      userId: number;
      userProfile: string;
    };
    schedules: Schedule[];
    savedPlaces: SavedPlace[];
    myReviews: PlaceReview[];
  };
}

export const getMyPage = {
  getMyPage: async (): Promise<MyPageResponse> => {
    try {
      const sessionId = document.cookie
        .split("; ")
        .find((row) => row.startsWith("JSESSIONID="))
        ?.split("=")[1];

      if (!sessionId) {
        throw new Error("JSESSIONID가 없습니다.");
      }

      const response = await axios.get<MyPageResponse>("/users/my", {
        headers: {
          "Content-Type": "application/json",
          "JSESSIONID": sessionId,
        },
        withCredentials: true,
      });

      // API 응답 데이터 반환
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        // 400 에러 처리
        throw new Error("조회에 실패했습니다.");
      }
      console.error("마이페이지 데이터 가져오기 실패:", error);
      throw error;
    }
  }
};