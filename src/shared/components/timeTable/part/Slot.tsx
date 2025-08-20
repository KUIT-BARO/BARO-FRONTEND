import * as styles from '../TimeTable.css';
import type { TimeDTO } from 'api/data-contracts';

interface SlotProps {
  isSelected: boolean;
  timeSlot?: TimeDTO;
  onSlotClick?: (_slot: TimeDTO) => void;
}

export default function Slot({ isSelected, timeSlot, onSlotClick }: SlotProps) {
  const handleClick = () => {
    if (timeSlot && onSlotClick) {
      onSlotClick(timeSlot);
    }
  };

  return <div className={styles.slotWrapper({ isSelected })} onClick={handleClick}></div>;
}
