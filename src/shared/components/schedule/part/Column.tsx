import Text from '@shared/components/text/Text';
import { ORIGINAL_DAYS } from '@shared/constant/Days';
import type { SchedulesDTO } from 'api/data-contracts';
import isScheduled from '@shared/components/schedule/util/IsScheduled';
import Slot from '@shared/components/schedule/part/Slot';
import * as styles from '@shared/components/schedule/Schedule.css';
import ScheduleSlots from '../constant/ScheduleSlots';

interface ColumnProps {
  schedules: SchedulesDTO[];
  dayOfWeek: '0' | '1' | '2' | '3' | '4' | '5' | '6';
}
export default function Column({ schedules, dayOfWeek }: ColumnProps) {
  const DAYTITLE = ORIGINAL_DAYS[Number(dayOfWeek)];
  const SCHEDULESLOTS = ScheduleSlots();
  return (
    <div className={styles.column}>
      <Text tag="body_12" color="gray3">{DAYTITLE}</Text>
      <div className={styles.scheduleSlotWrapper}>
        {SCHEDULESLOTS.map((scheduleSlot, index) => {
          const { isInSlot, slotIndex } = isScheduled({ schedules: schedules ?? [], slotStart: scheduleSlot.startTime, slotEnd: scheduleSlot.endTime });
          return (
            <Slot
              key={index}
              startTime={scheduleSlot.startTime}
              slotIndex={isInSlot ? slotIndex : undefined}
              schedule={isInSlot ? schedules[slotIndex] : undefined}
            />
          );
        })}
      </div>
    </div>
  )
}
