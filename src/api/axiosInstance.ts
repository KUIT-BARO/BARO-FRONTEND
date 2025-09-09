import { ROUTES } from '@router/constant/Routes';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    //후에 이 조건문에 리이슈 로직 추가
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      window.location.href = ROUTES.HOME;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
