import useApi from "../useApi.jsx";
import { RequestSchedule } from "../../interface/api/schedules/schedule.js";
const useSchedule = () => {
  const { scheduleApi } = useApi();

  const getSchedule = () => {
    return scheduleApi
      .get("/schedules")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addSchedule = (schedule: RequestSchedule) => {
    return scheduleApi
      .post("/schedules", schedule)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fixSchedule = (schedule: RequestSchedule, scheduleId: number) => {
    return scheduleApi
      .patch("/schedules", schedule, {
        params: { scheduleId },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteSchedule = (scheduleId: number) => {
    return scheduleApi
      .delete("/schedules", {
        params: { scheduleId },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { getSchedule, addSchedule, fixSchedule, deleteSchedule };
};

export default useSchedule;
