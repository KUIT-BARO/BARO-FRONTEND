import React, { useEffect, useState, useRef } from "react";
import {
  Day,
  TimeTableWrapper,
  TimeWrapper,
  TimeBlock,
  TimeLabel,
} from "./SelectTimeTable.styles";
import TimeTableInterface from "../../interface/TimeTable";

interface SelectTimeTableProps {
  dateStart: Date;
  dateEnd: Date;
  timeTable: TimeTableInterface[];
  setTimeTable: React.Dispatch<React.SetStateAction<TimeTableInterface[]>>;
  userIdTimeTable: TimeTableInterface[];
}

export default function SelectTimeTable({
  dateStart,
  dateEnd,
  timeTable,
  setTimeTable,
  userIdTimeTable,
}: SelectTimeTableProps) {
  const [selectedTimes, setSelectedTimes] = useState<Set<string>>(new Set());
  const [isDragging, setIsDragging] = useState(false);
  const [isSelecting, setIsSelecting] = useState(true); // 선택 or 취소 여부
  const dates = getDateRangeWithDay(dateStart, dateEnd);
  const selectedTimesRef = useRef<Set<string>>(new Set());

  const daysOfWeekMap: Record<string, string> = {
    일: "SUNDAY",
    월: "MONDAY",
    화: "TUESDAY",
    수: "WEDNESDAY",
    목: "THURSDAY",
    금: "FRIDAY",
    토: "SATURDAY",
  };

  // 🔹 timeTable 변경 시 selectedTimes 업데이트
  useEffect(() => {
    const updatedSelectedTimes = new Set(
      timeTable.map((slot) => `${slot.date}-${slot.time_start}`)
    );
    setSelectedTimes(updatedSelectedTimes);
    selectedTimesRef.current = updatedSelectedTimes;
  }, [timeTable]);

  // 🔹 블럭 선택/취소 함수 (드래그 지원)
  const handleBlockSelection = (
    date: string,
    hour: number,
    minutes: string,
    isSelecting: boolean
  ) => {
    setTimeTable((prev) => {
      const timeStart = `${hour.toString().padStart(2, "0")}:${minutes}:00`;
      const nextHour = minutes === "00" ? hour : hour + 1;
      const nextMinutes = minutes === "00" ? "30" : "00";
      const timeEnd = `${nextHour
        .toString()
        .padStart(2, "0")}:${nextMinutes}:00`;

      const newEntry = { date, time_start: timeStart, time_end: timeEnd };

      const isSelected = prev.some(
        (slot) =>
          slot.date === newEntry.date &&
          slot.time_start === newEntry.time_start &&
          slot.time_end === newEntry.time_end
      );

      let updatedTable;
      if (isSelecting) {
        updatedTable = isSelected ? prev : [...prev, newEntry];
      } else {
        updatedTable = prev.filter(
          (slot) =>
            slot.date !== newEntry.date ||
            slot.time_start !== newEntry.time_start ||
            slot.time_end !== newEntry.time_end
        );
      }

      // 🔹 선택 상태 업데이트
      setSelectedTimes(
        new Set(updatedTable.map((slot) => `${slot.date}-${slot.time_start}`))
      );
      selectedTimesRef.current = new Set(
        updatedTable.map((slot) => `${slot.date}-${slot.time_start}`)
      );

      return updatedTable;
    });
  };

  // 🔹 드래그 시작
  const handleMouseDown = (date: string, hour: number, minutes: string) => {
    setIsDragging(true);
    const key = `${date}-${hour}:${minutes}:00`;
    const isAlreadySelected = selectedTimes.has(key);
    setIsSelecting(!isAlreadySelected); // 선택 or 취소 결정
    handleBlockSelection(date, hour, minutes, !isAlreadySelected);
  };

  // 🔹 드래그 중
  const handleMouseMove = (
    date: string,
    hour: number,
    minutes: string,
    event: React.MouseEvent
  ) => {
    if (isDragging) {
      event.preventDefault();
      handleBlockSelection(date, hour, minutes, isSelecting);
    }
  };

  // 🔹 드래그 종료
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <TimeTableWrapper onMouseUp={handleMouseUp}>
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
        <LeftTimeLabel />
        <TimeWrapper datesLength={dates.length}>
          {dates.map((date) => {
            const dayOfWeek = daysOfWeekMap[date.split("(")[1][0]];
            return (
              <div key={date} className="column">
                {[...Array(34)].map((_, index) => {
                  const hour = Math.floor(index / 2) + 7;
                  const minutes = index % 2 === 0 ? "00" : "30";
                  const timeStart = `${hour
                    .toString()
                    .padStart(2, "0")}:${minutes}:00`;

                  const isDisabled = (userIdTimeTable ?? []).some((slot) => {
                    const timeStart = slot.time_start || "00:00";
                    const timeEnd = slot.time_end || "23:59";
                    const [slotStartHour, slotStartMin] = timeStart
                      .split(":")
                      .map(Number);
                    const [slotEndHour, slotEndMin] = timeEnd
                      .split(":")
                      .map(Number);
                    const [checkHour, checkMin] = timeStart
                      .split(":")
                      .map(Number) || [0, 0];

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

                  const isSelected = selectedTimes.has(`${date}-${timeStart}`);

                  return (
                    <TimeBlock
                      key={`${date}-${hour}:${minutes}`}
                      isSelected={isSelected}
                      isDisabled={isDisabled}
                      onMouseDown={() =>
                        !isDisabled && handleMouseDown(date, hour, minutes)
                      }
                      onMouseMove={(event) =>
                        !isDisabled &&
                        handleMouseMove(date, hour, minutes, event)
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

// 🔹 시간 레이블 컴포넌트
const LeftTimeLabel = () => (
  <TimeLabel>
    {[...Array(18)].map((_, index) => (
      <div key={index} className="label">
        {index + 7}:00
      </div>
    ))}
  </TimeLabel>
);

// 🔹 날짜 범위 반환 함수
const getDateRangeWithDay = (start: Date, end: Date): string[] => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dates: string[] = [];
  const currentDate = new Date(start);

  while (currentDate <= end) {
    dates.push(
      `${currentDate.getMonth() + 1}/${currentDate.getDate()} (${
        daysOfWeek[currentDate.getDay()]
      })`
    );
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};
