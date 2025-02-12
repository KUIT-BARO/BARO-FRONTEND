// import axios from "axios";

// const instance = axios.create({
//   // baseURL: process.env.NODE_ENV === 'production'
//   baseURL: import.meta.env.NODE_ENV === 'production'
//     ? "http://3.38.47.233"
//     : "http://localhost:8080",
//   timeout: 10000,
//   withCredentials: true,  // 쿠키 포함 설정
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   }
// });

// export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.NODE_ENV === "production"
      ? "http://3.38.47.233" // 배포 서버 URL
      : "/api", // Vite 프록시 사용
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
