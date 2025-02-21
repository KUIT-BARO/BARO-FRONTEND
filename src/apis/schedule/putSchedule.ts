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
    // scheduleId를 query parameter나 request body에 포함시키는 방식으로 변경
    return instance.put('/users/schedule', {
      ...data,
      scheduleId: scheduleId
    });
  },
};