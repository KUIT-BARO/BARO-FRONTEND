import instance from '../instance';

export const deleteSchedule = {
  removeSchedule: (scheduleId: number | string) => {
    return instance.delete(`/users/schedule/${scheduleId}`);
  },
};