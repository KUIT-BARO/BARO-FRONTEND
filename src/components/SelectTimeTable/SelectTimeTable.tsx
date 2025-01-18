import React, { useState } from "react";
import {
  Day,
  TimeTableWrapper,
  TimeWrapper,
  TimeBlock,
  TimeLabel,
} from "./SelectTimeTable.styles";

const getDateRangeWithDay = (start: Date, end: Date): string[] => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dates: string[] = [];

  const currentDate = new Date(start);
  const endDate = new Date(end);

  while (currentDate <= endDate) {
    const formattedDate = `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()} (${daysOfWeek[currentDate.getDay()]})`;
    dates.push(formattedDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

export default function SelectTimeTable({
  startDate = new Date("2025-01-02"),
  endDate = new Date("2025-01-12"),
  timeTable,
  setTimeTable,
}) {
  const [isDragging, setIsDragging] = useState(false);

  const dates = getDateRangeWithDay(startDate, endDate);

  const handleBlockMouseDown = (block: string) => {
    setIsDragging(true);
    toggleBlockSelection(block);
  };

  const handleBlockMouseEnter = (block: string) => {
    if (isDragging && !timeTable.includes(block)) {
      toggleBlockSelection(block);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    console.log("in");
  };

  const toggleBlockSelection = (block: string) => {
    setTimeTable((prev) => {
      const isSelected = prev.includes(block);
      return isSelected ? prev.filter((b) => b !== block) : [...prev, block];
    });
  };

  return (
    <TimeTableWrapper>
      <div className="header">
        <Day>
          {dates.map((date) => (
            <div key={date} className="day">
              {date}
            </div>
          ))}
        </Day>
      </div>
      <div className="content">
        <TimeLabel>
          {[...Array(18)].map((_, index) => {
            const hour = index + 7; // 7시부터 24시까지
            return (
              <div key={hour} className="label">
                {hour}:00
              </div>
            );
          })}
        </TimeLabel>
        <TimeWrapper datesLength={dates.length} onMouseUp={handleMouseUp}>
          {dates.map((date) => (
            <div key={date} className="column">
              {[...Array(34)].map((_, index) => {
                const hour = Math.floor(index / 2) + 7;
                const minutes = index % 2 === 0 ? "00" : "30";
                const time = `${date}-${hour}:${minutes}`;
                return (
                  <TimeBlock
                    key={time}
                    isSelected={timeTable.includes(time)}
                    onMouseDown={() => handleBlockMouseDown(time)}
                    onMouseEnter={() => handleBlockMouseEnter(time)}
                  />
                );
              })}
            </div>
          ))}
        </TimeWrapper>
      </div>
    </TimeTableWrapper>
  );
}
