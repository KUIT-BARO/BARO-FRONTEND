import type { SchedulesDTO } from 'api/data-contracts';
import { blueColors } from '@shared/components/schedule/constant/RandomColor';

export default function GetRandomColor(schedule?: SchedulesDTO, slotIndex?: number) {
  if (slotIndex === undefined || schedule?.scheduleId === undefined) return 'default';
  const colorIndex = (slotIndex + schedule.scheduleId) % blueColors.length;
  return blueColors[colorIndex];
}
