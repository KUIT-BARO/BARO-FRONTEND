import instance from '../instance';

interface ScheduleUpdateRequest {
  name: string;
  dayOfWeek: string;
  timeStart: string;
  timeEnd: string;
}

export const putSchedule = {
  updateSchedule: (scheduleId: number, data: ScheduleUpdateRequest) => {
    return instance.put(`/users/schedule/${scheduleId}`, data);
  },
};