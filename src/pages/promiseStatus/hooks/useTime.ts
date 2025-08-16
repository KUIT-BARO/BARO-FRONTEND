import type { TimeDTO } from 'api/data-contracts';
import { useState } from 'react';

export const useTime = (_promiseId: string) => {
  const [isTimePopUp, setIsTimePopUp] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TimeDTO[]>([]);
  const handleSelectSlot = (slot: TimeDTO) => {
    const isAlreadySelected = selectedSlot.some(
      selected =>
        selected.date === slot.date &&
        selected.startTime?.hour === slot.startTime?.hour &&
        selected.startTime?.minute === slot.startTime?.minute
    );

    if (isAlreadySelected) {
      // 이미 선택된 슬롯이면 제거
      setSelectedSlot(
        selectedSlot.filter(
          selected =>
            !(
              selected.date === slot.date &&
              selected.startTime?.hour === slot.startTime?.hour &&
              selected.startTime?.minute === slot.startTime?.minute
            )
        )
      );
    } else {
      // 선택되지 않은 슬롯이면 추가
      setSelectedSlot([...selectedSlot, slot]);
    }
  };

  const handleClickTime = () => {
    setIsTimePopUp(true);
  };

  const handleCloseTimePopUp = () => {
    //TODO:api 호출
    setIsTimePopUp(false);
  };
  return {
    selectedSlot,
    isTimePopUp,
    handleSelectSlot,
    handleClickTime,
    handleCloseTimePopUp,
  };
};
