import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.221.7:8080",
  timeout: 3000,
  withCredentials: true,
});

export default instance;
