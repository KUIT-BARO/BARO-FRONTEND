import Column from './part/Colum';
import SlotTitle from './part/SlotTitle';
import * as styles from './TimeTable.css';
import type { TimeDTO } from 'api/data-contracts';

interface TimeTableProps {
  suggestedStartDate: string;
  suggestedEndDate: string;
  handleSelectSlot: (slot: TimeDTO) => void;
  selectedSlots?: TimeDTO[];
}

export default function TimeTable({
  suggestedStartDate,
  suggestedEndDate,
  handleSelectSlot,
  selectedSlots = [],
}: TimeTableProps) {
  const startDate = new Date(suggestedStartDate);
  const endDate = new Date(suggestedEndDate);
  const dateArray = [];

  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    dateArray.push(new Date(date).toISOString().split('T')[0]);
  }

  return (
    <div className={styles.timeTableWrapper}>
      <SlotTitle />
      <div className={styles.columnWrapper}>
        {dateArray.map((date, index) => {
          const columnSelectedSlots = selectedSlots.filter(slot => slot.date === date);

          return (
            <Column
              key={`${date}-${index}`}
              date={date}
              handleSelectSlot={handleSelectSlot}
              selectedSlots={columnSelectedSlots}
            />
          );
        })}
      </div>
    </div>
  );
}
