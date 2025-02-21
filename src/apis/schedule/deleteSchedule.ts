import instance from '../instance';

export const deleteSchedule = {
  removeSchedule: (scheduleId: number | string) => {
    // DELETE 요청시에도 scheduleId를 query parameter로 전송
    return instance.delete('/users/schedule', {
      params: { scheduleId }
    });
  },
};