import type { SchedulesDTO } from 'api/data-contracts';

interface GroupedSchedules {
  schedules: SchedulesDTO[];
}

export const SCHEDULES: GroupedSchedules = {
  schedules: [
    {
      scheduleId: 1,
      scheduleName: '수업',
      dayOfWeek: '0',
      startTime: { hour: 9, minute: 0, second: 0, nano: 0 },
      endTime: { hour: 10, minute: 30, second: 0, nano: 0 },
    },
    {
      scheduleId: 2,
      scheduleName: '영어회화',
      dayOfWeek: '1',
      startTime: { hour: 10, minute: 0, second: 0, nano: 0 },
      endTime: { hour: 12, minute: 0, second: 0, nano: 0 },
    },
    {
      scheduleId: 3,
      scheduleName: '수학 튜터링',
      dayOfWeek: '2',
      startTime: { hour: 13, minute: 0, second: 0, nano: 0 },
      endTime: { hour: 14, minute: 30, second: 0, nano: 0 },
    },
    {
      scheduleId: 4,
      scheduleName: '운동',
      dayOfWeek: '3',
      startTime: { hour: 17, minute: 0, second: 0, nano: 0 },
      endTime: { hour: 18, minute: 0, second: 0, nano: 0 },
    },
    {
      scheduleId: 5,
      scheduleName: '독서',
      dayOfWeek: '4',
      startTime: { hour: 8, minute: 30, second: 0, nano: 0 },
      endTime: { hour: 9, minute: 30, second: 0, nano: 0 },
    },
    {
      scheduleId: 6,
      scheduleName: '개인 프로젝트랑 회의',
      dayOfWeek: '5',
      startTime: { hour: 15, minute: 0, second: 0, nano: 0 },
      endTime: { hour: 17, minute: 0, second: 0, nano: 0 },
    },
    {
      scheduleId: 7,
      scheduleName: '휴식',
      dayOfWeek: '6',
      startTime: { hour: 11, minute: 0, second: 0, nano: 0 },
      endTime: { hour: 12, minute: 30, second: 0, nano: 0 },
    },
  ],
};
