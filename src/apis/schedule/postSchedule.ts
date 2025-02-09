import instance from '../instance';

interface ScheduleRequest {
  name: string;
  dayOfWeek: string;
  timeStart: string;
  timeEnd: string;
}

export const postSchedule = {
  createSchedule: (data: ScheduleRequest) => {
    return instance.post('/users/schedule', data);
  },
};