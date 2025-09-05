import * as styles from '@shared/components/schedule/Schedule.css';
import SlotTitle from '@shared/components/timeTable/part/SlotTitle';
import { SCHEDULES } from './constant/ScheduleContent';
import GroupingSchedules from './util/GroupingSchedules';
import Column from '@shared/components/schedule/part/Column';
import type { SchedulesDTO } from "api/data-contracts";

interface ScheduleProps {
  handleFixSchedule: (_schedule: SchedulesDTO) => void;
}

export default function Schedule({ handleFixSchedule }: ScheduleProps) {
  const grouped = GroupingSchedules( SCHEDULES );
  return (
    <div className={styles.scheduleWrapper}>
      <SlotTitle/>
      <div className={styles.columnWrapper}>
        {Array.from({ length: 7 }, (_, index) => {
          const dayOfWeek = String(index) as '0' | '1' | '2' | '3' | '4' | '5' | '6';
          return (<Column key={index} schedules={grouped[index]} dayOfWeek={dayOfWeek} handleFixSchedule={handleFixSchedule} />
          )
        })}
      </div>
    </div>
  )
}
