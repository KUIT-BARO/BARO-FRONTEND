import type { SchedulesDTO } from 'api/data-contracts';
import type { Time } from '@shared/components/schedule/type/Schedule';

interface isScheduleInSlotProps {
  schedules: SchedulesDTO[];
  slotStart: Time;
  slotEnd: Time;
}

export default function IsScheduled({ schedules, slotStart, slotEnd }: isScheduleInSlotProps) {
  for (let i = 0; i < schedules.length; i++) {
    const { startTime, endTime } = schedules[i];
    if (!startTime || !endTime) continue;

    const startTotal = (startTime.hour ?? 0) * 60 + (startTime.minute ?? 0);
    const endTotal = (endTime.hour ?? 0) * 60 + (endTime.minute ?? 0);
    const slotStartTotal = slotStart.hour * 60 + slotStart.minute;
    const slotEndTotal = slotEnd.hour * 60 + slotEnd.minute;
    const isInSlot = startTotal < slotEndTotal && endTotal > slotStartTotal;
    if (isInSlot) {
      return { isInSlot: true, slotIndex: i };
    }
  }
  return { isInSlot: false, slotIndex: -1 };
}
