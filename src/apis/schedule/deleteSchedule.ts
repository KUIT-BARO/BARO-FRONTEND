import instance from '../instance';

export const deleteSchedule = {
  removeSchedule: (scheduleId: number) => {
    return instance.delete(`/users/schedule/${scheduleId}`);
  },
};