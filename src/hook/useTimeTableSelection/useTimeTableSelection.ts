import { useState } from "react";
import TimeTableInterface from "../../interface/TimeTable/TimeTable";
import { convertDate } from "../../utils/convertDate";

export default function useTimeTableSelection(
  timeTable: TimeTableInterface[],
  setTimeTable: React.Dispatch<React.SetStateAction<TimeTableInterface[]>>
) {
  const [isDragging, setIsDragging] = useState(false);
  const [isSelecting, setIsSelecting] = useState(true);

  const toggleTime = (date: string, time: string, selecting: boolean) => {
    const formattedDate = convertDate(date);
    const exists = timeTable.some(
      (t) => t.date === formattedDate && t.startTime === time
    );

    if (selecting && !exists) {
      setTimeTable((prev) => [
        ...prev,
        { date: formattedDate, startTime: time, endTime: time },
      ]);
    }

    if (!selecting && exists) {
      setTimeTable((prev) =>
        prev.filter((t) => !(t.date === formattedDate && t.startTime === time))
      );
    }
  };

  const handleMouseDown = (date: string, time: string) => {
    const formattedDate = convertDate(date);
    const exists = timeTable.some(
      (t) => t.date === formattedDate && t.startTime === time
    );
    const selecting = !exists;

    setIsSelecting(selecting);
    setIsDragging(true);
    toggleTime(date, time, selecting);
  };

  const handleMouseMove = (date: string, time: string) => {
    if (!isDragging) return;
    toggleTime(date, time, isSelecting);
  };

  const handleMouseUp = () => setIsDragging(false);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    isDragging,
  };
}
