import { ORIGINAL_DAYS } from "@shared/constant/Days";
import ScheduleSlots from "@shared/components/schedule/constant/ScheduleSlots";
import * as styles from "@shared/components/scheduleModal/ScheduleModal.css";

interface SelectFieldContentProps {
  type: 'day' | 'time';
}

export default function SelectFieldContent({ type }: SelectFieldContentProps) {
  if(type==='day'){
    return(
      <>
        {ORIGINAL_DAYS.map((day, index) => (
          <option key={index} value={index} className={styles.optionText}>
            {`${day}요일`}
          </option>
        ))}
      </>
    )
  }
  else if(type==='time'){
    return(
      <>
        {ScheduleSlots().map((slot, index) => {
          const { startTime } = slot;
          const hour = String(startTime.hour).padStart(2, '0');
          const minute = String(startTime.minute).padStart(2, '0');
          const label = `${hour}:${minute}`;
          return (
            <option key={index} value={label} className={styles.optionText}>
              {label}
            </option>
          )
        })}
      </>
    )
  }
}
