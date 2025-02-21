import instance from '../instance';

export const getUserSchedule = {
  getScheduleById: (userId: string) => {
    return instance.get(`/users/schedule/${userId}`);
  },
};