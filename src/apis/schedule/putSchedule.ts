import instance from '../instance';

interface ScheduleUpdateRequest {
  name: string;
  dayOfWeek: string;
  timeStart: string;
  timeEnd: string;
  location?: string;
}

export const putSchedule = {
  updateSchedule: (scheduleId: number | string, data: ScheduleUpdateRequest) => {
    return instance.put(`/users/schedule/${scheduleId}`, data);
  },
};