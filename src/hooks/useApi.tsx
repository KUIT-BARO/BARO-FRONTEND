import axios from "axios";

function useApi() {
  const usersApi = axios.create({
    baseURL: "http://3.39.156.98:8001/users",
    withCredentials: true,
  });

  const authApi = axios.create({
    baseURL: "http://3.39.156.98:8001/auth",
    withCredentials: true,
  });

  const promiseApi = axios.create({
    baseURL: "http://3.39.156.98:8001/promises",
    withCredentials: true,
  });

  const scheduleApi = axios.create({
    baseURL: "http://3.39.156.98:8001/schedules",
    withCredentials: true,
  });

  const placeApi = axios.create({
    baseURL: "http://3.39.156.98:8001/places",
    withCredentials: true,
  });

  return { usersApi, authApi, promiseApi, scheduleApi, placeApi };
}

export default useApi;
