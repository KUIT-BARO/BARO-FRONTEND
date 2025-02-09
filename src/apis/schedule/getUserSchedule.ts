import instance from '../instance';

export const getUserSchedule = {
  getScheduleById: (userId: number) => {
    return instance.get(`/schedule/${userId}`);
  },
};