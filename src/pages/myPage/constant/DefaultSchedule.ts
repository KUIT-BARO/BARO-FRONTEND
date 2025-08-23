import type { SchedulesDTO } from 'api/data-contracts';

export const DEFAULT_SCHEDULE: SchedulesDTO = {
  scheduleId: 0,
  dayOfWeek: '1',
  startTime: { hour: 7, minute: 0 },
  endTime: { hour: 23, minute: 0 },
  scheduleName: '',
};
