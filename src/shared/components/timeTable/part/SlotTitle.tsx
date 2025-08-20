import * as styles from '@shared/components/timeTable/TimeTable.css';
import Text from '@shared/components/text/Text';

export default function SlotTitle() {
  const timeSlots = Array.from({ length: 35 }, (_, index) => {
    const totalMinutes = index * 30 + 7 * 60;
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    return `${hour}:${minute.toString().padStart(2, '0')}`;
  });
  return (
    <div className={styles.slotTitleWrapper}>
      {timeSlots.map(time => (
        <Text key={time} color="gray3" tag="body_bold_11">
          {time}
        </Text>
      ))}
    </div>
  );
}
