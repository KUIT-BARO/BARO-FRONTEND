import type { SchedulesDTO } from 'api/data-contracts';

interface GroupedSchedules {
  schedules: SchedulesDTO[];
}

export default function GroupingSchedules({ schedules }: GroupedSchedules) {
  const grouped: SchedulesDTO[][] = Array.from({ length: 7 }, () => []);

  schedules.forEach(schedule => {
    const index = Number(schedule.dayOfWeek);
    if (index >= 0 && index < 7) {
      grouped[index].push(schedule);
    }
  });

  return grouped;
}
