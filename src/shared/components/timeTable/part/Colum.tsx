import Text from '@shared/components/text/Text';
import Slot from './Slot';
import type { TimeDTO } from 'api/data-contracts';
import * as styles from '../TimeTable.css';

interface ColumnProps {
  date: string;
  handleSelectSlot: (slot: TimeDTO) => void;
  selectedSlots?: TimeDTO[];
}
const DAY_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];
export default function Column({ date, handleSelectSlot, selectedSlots = [] }: ColumnProps) {
  const timeSlots: TimeDTO[] = Array.from({ length: 34 }, (_, index) => {
    const hour = Math.floor(index / 2);
    const minute = (index % 2) * 30;

    return {
      date: date,
      startTime: {
        hour: hour,
        minute: minute,
        second: 0,
        nano: 0,
      },
      endTime: {
        hour: hour,
        minute: minute + 30,
        second: 0,
        nano: 0,
      },
    } as TimeDTO;
  });
  const dateTitle = (): string => {
    const dateObj = new Date(date);
    return `${dateObj.getMonth() + 1}/${dateObj.getDate()} (${DAY_OF_WEEK[dateObj.getDay()]})`;
  };

  return (
    <div className={styles.column}>
      <Text tag="body_12" color="gray3">
        {dateTitle()}
      </Text>
      <div className={styles.timeSlotWrapper}>
        {timeSlots.map((timeSlot, index) => (
          <Slot key={index} isSelected={false} timeSlot={timeSlot} onSlotClick={handleSelectSlot} />
        ))}
      </div>
    </div>
  );
}
