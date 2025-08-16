import Text from '@shared/components/text/Text';
import Slot from './Slot';
import type { TimeDTO } from 'api/data-contracts';
import * as styles from '../TimeTable.css';
import { DAY } from '@shared/constant/day';

interface ColumnProps {
  date: string;
  handleSelectSlot: (_slot: TimeDTO) => void;
  selectedSlots?: TimeDTO[];
}

export default function Column({ date, handleSelectSlot, selectedSlots = [] }: ColumnProps) {
  const timeSlots: TimeDTO[] = Array.from({ length: 34 }, (_slot, index) => {
    const totalMinutes = index * 30 + 7 * 60;
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;

    return {
      date: date,
      startTime: {
        hour: hour,
        minute: minute,
      },
      endTime: {
        hour: minute === 0 ? hour : hour + 1,
        minute: minute === 0 ? 30 : 0,
      },
    };
  });
  const renderTitle = () => {
    const dateObj = new Date(date);
    const weekday = dateObj.getDay();
    return `${dateObj.getMonth() + 1}/${dateObj.getDate()} (${DAY[weekday]})`;
  };

  return (
    <div className={styles.column}>
      <Text tag="body_12" color="gray3">
        {renderTitle()}
      </Text>
      <div className={styles.timeSlotWrapper}>
        {timeSlots.map((timeSlot, index) => {
          const isSelected = selectedSlots.some(
            selectedSlot =>
              selectedSlot.date === timeSlot.date &&
              selectedSlot.startTime?.hour === timeSlot.startTime?.hour &&
              selectedSlot.startTime?.minute === timeSlot.startTime?.minute
          );

          return (
            <Slot
              key={index}
              isSelected={isSelected}
              timeSlot={timeSlot}
              onSlotClick={handleSelectSlot}
            />
          );
        })}
      </div>
    </div>
  );
}
