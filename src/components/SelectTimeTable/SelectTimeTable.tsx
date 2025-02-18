import React from "react";
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
    const formattedDate = `
      ${currentDate.getMonth() + 1}/${currentDate.getDate()} (${
      daysOfWeek[currentDate.getDay()]
    })`;
    dates.push(formattedDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};
export default function SelectTimeTable({
  dateStart,
  dateEnd,
  timeTable,
  setTimeTable,
}) {
  const dates = getDateRangeWithDay(dateStart, dateEnd);

  const toggleBlockSelection = (
    date: string,
    hour: number,
    minutes: string
  ) => {
    setTimeTable((prev) => {
      const time_start = `${hour.toString().padStart(2, "0")}:${minutes}:00`;
      const time_end =
        `${minutes === "00" ? hour : hour + 1}`.padStart(2, "0") +
        `:${minutes === "00" ? "30" : "00"}:00`;

      const newEntry = { date, time_start, time_end };

      const isSelected = prev.some(
        (slot) =>
          slot.date === newEntry.date &&
          slot.time_start === newEntry.time_start &&
          slot.time_end === newEntry.time_end
      );

      return isSelected
        ? prev.filter(
            (slot) =>
              !(
                slot.date === newEntry.date &&
                slot.time_start === newEntry.time_start &&
                slot.time_end === newEntry.time_end
              )
          )
        : [...prev, newEntry];
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
      <div className="main-content">
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
        <TimeWrapper datesLength={dates.length}>
          {dates.map((date) => (
            <div key={date} className="column">
              {[...Array(34)].map((_, index) => {
                const hour = Math.floor(index / 2) + 7;
                const minutes = index % 2 === 0 ? "00" : "30";

                return (
                  <TimeBlock
                    key={`${date}-${hour}:${minutes}`}
                    isSelected={timeTable.some(
                      (slot) =>
                        slot.date === date &&
                        slot.time_start ===
                          `${hour.toString().padStart(2, "0")}:${minutes}:00`
                    )}
                    onClick={() => toggleBlockSelection(date, hour, minutes)}
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
