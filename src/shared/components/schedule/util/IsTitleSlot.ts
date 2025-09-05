import type { SchedulesDTO } from 'api/data-contracts';
import type { Time } from '@shared/components/schedule/type/Schedule';

interface isTitleTimeProps {
  schedule?: SchedulesDTO;
  startTime: Time;
}

export default function IsTitleSlot({ schedule, startTime }: isTitleTimeProps) {
  const isTitleTime =
    schedule &&
    schedule.startTime &&
    schedule.startTime.hour === startTime.hour &&
    schedule.startTime.minute === startTime.minute;
  return isTitleTime;
}
