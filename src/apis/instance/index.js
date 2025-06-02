import axios from "axios";

const instance = axios.create({
  // baseURL: "http://3.34.221.7:8080",
  // baseURL: "https://3.34.221.7:443",

  baseURL: 'http://3.39.156.98:8001/',

  timeout: 3000,
  withCredentials: true, // CORS 요청에 쿠키 포함
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// OPTIONS 요청에 대한 preflight 설정
instance.interceptors.request.use(
  (config) => {
    // CORS 관련 헤더 추가
    config.headers = {
      ...config.headers,
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Access-Control-Allow-Credentials": "true",
    };
    return config;
  },
  (error) => Promise.reject(error)
);

// CORS 에러 처리를 위한 응답 인터셉터
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("인증 에러 (CORS 또는 세션 만료):", error);
      // 로그인 페이지로 리다이렉트 또는 재인증 처리
    } else if (error.message?.includes("Network Error")) {
      console.error("CORS 또는 네트워크 에러:", error);
    }
    return Promise.reject(error);
  }
);

export default instance;
