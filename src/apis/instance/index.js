import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? "http://3.38.47.233" 
    : "http://localhost:8080",
  timeout: 10000,
});

export default instance;