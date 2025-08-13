import Column from './part/Colum';
import SlotTitle from './part/SlotTitle';
import * as styles from './TimeTable.css';
import type { TimeDTO } from 'api/data-contracts';

interface TimeTableProps {
  suggestedStartDate: string;
  suggestedEndDate: string;
  handleSelectSlot: (slot: TimeDTO) => void;
}

export default function TimeTable({
  suggestedStartDate,
  suggestedEndDate,
  handleSelectSlot,
}: TimeTableProps) {
  const startDate = new Date(suggestedStartDate);
  const endDate = new Date(suggestedEndDate);

  const dateArray = [];
  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    dateArray.push(new Date(date));
  }

  return (
    <div className={styles.timeTableWrapper}>
      <SlotTitle />
      <div className={styles.columnWrapper}>
        {dateArray.map(date => (
          <Column
            key={date.toISOString()}
            date={date.toISOString()}
            handleSelectSlot={handleSelectSlot}
          />
        ))}
      </div>
    </div>
  );
}
