import React, { useEffect, useState } from "react";
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
  dateStart,
  dateEnd,
  timeTable,
  setTimeTable,
  disableTimeTable,
}) {
  const [selectedTimes, setSelectedTimes] = useState<Set<string>>(new Set());
  const dates = getDateRangeWithDay(dateStart, dateEnd);

  const daysOfWeekMap = {
    일: "SUNDAY",
    월: "MONDAY",
    화: "TUESDAY",
    수: "WEDNESDAY",
    목: "THURSDAY",
    금: "FRIDAY",
    토: "SATURDAY",
  };

  // 🔹 `timeTable` 변경 시 `selectedTimes` 최신화
  useEffect(() => {
    const updatedSelectedTimes = new Set(
      timeTable.map((slot) => `${slot.date}-${slot.time_start}`)
    );
    setSelectedTimes(updatedSelectedTimes);
  }, [timeTable]);

  const toggleBlockSelection = (
    date: string,
    hour: number,
    minutes: string
  ) => {
    setTimeTable((prev) => {
      const time_start = `${hour.toString().padStart(2, "0")}:${minutes}:00`;
      const nextHour = minutes === "00" ? hour : hour + 1;
      const nextMinutes = minutes === "00" ? "30" : "00";
      const time_end = `${nextHour
        .toString()
        .padStart(2, "0")}:${nextMinutes}:00`;

      const newEntry = { date, time_start, time_end };

      const isSelected = prev.some(
        (slot) =>
          slot.date === newEntry.date &&
          slot.time_start === newEntry.time_start &&
          slot.time_end === newEntry.time_end
      );

      const updatedTable = isSelected
        ? prev.filter(
            (slot) =>
              !(
                slot.date === newEntry.date &&
                slot.time_start === newEntry.time_start &&
                slot.time_end === newEntry.time_end
              )
          )
        : [...prev, newEntry];

      // 🔹 `selectedTimes` 업데이트
      setSelectedTimes(
        new Set(updatedTable.map((slot) => `${slot.date}-${slot.time_start}`))
      );

      return updatedTable;
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
            const hour = index + 7;
            return (
              <div key={hour} className="label">
                {hour}:00
              </div>
            );
          })}
        </TimeLabel>
        <TimeWrapper datesLength={dates.length}>
          {dates.map((date) => {
            const dayOfWeek = daysOfWeekMap[date.split("(")[1][0]];
            return (
              <div key={date} className="column">
                {[...Array(34)].map((_, index) => {
                  const hour = Math.floor(index / 2) + 7;
                  const minutes = index % 2 === 0 ? "00" : "30";
                  const time_start = `${hour
                    .toString()
                    .padStart(2, "0")}:${minutes}:00`;

                  const isDisabled = (disableTimeTable ?? []).some((slot) => {
                    // 🔹 `slot.timeStart`와 `slot.timeEnd`가 `undefined`인지 체크 후 기본값 할당
                    const timeStart = slot.time_start || "00:00";
                    const timeEnd = slot.time_end || "23:59";

                    // 🔹 `HH:MM` 형식이 맞는지 검사 후 변환
                    const [slotStartHour, slotStartMin] = timeStart
                      .split(":")
                      .map(Number);
                    const [slotEndHour, slotEndMin] = timeEnd
                      .split(":")
                      .map(Number);
                    const [checkHour, checkMin] = time_start
                      ?.split(":")
                      .map(Number) || [0, 0];

                    // 🔹 시간을 `분` 단위로 변환하여 비교
                    const slotStartTotalMinutes =
                      slotStartHour * 60 + slotStartMin;
                    const slotEndTotalMinutes = slotEndHour * 60 + slotEndMin;
                    const checkTotalMinutes = checkHour * 60 + checkMin;

                    return (
                      slot.dayOfWeek === dayOfWeek &&
                      slotStartTotalMinutes <= checkTotalMinutes &&
                      slotEndTotalMinutes > checkTotalMinutes
                    );
                  });

                  const isSelected = selectedTimes.has(`${date}-${time_start}`);

                  return (
                    <TimeBlock
                      key={`${date}-${hour}:${minutes}`}
                      isSelected={isSelected}
                      isDisabled={isDisabled}
                      onClick={
                        !isDisabled
                          ? () => toggleBlockSelection(date, hour, minutes)
                          : undefined
                      }
                    />
                  );
                })}
              </div>
            );
          })}
        </TimeWrapper>
      </div>
    </TimeTableWrapper>
  );
}
