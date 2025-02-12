import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.221.7:8080",  // 개발/운영 환경 모두 동일한 주소 사용
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;