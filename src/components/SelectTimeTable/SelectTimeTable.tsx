import React, { useState } from "react";
import {
  TimeTableWrapper,
  TimeBlock,
  TimeLabel,
  DaysLabelWrapper,
  DayLabel,
  TimeLabelsWrapper,
  MainContent,
  TimeColumnWrapper,
  TimeColumn,
} from "./SelectTimeTable.styles";
import TimeTableInterface from "../../interface/TimeTable/TimeTable";
import { getDateRangeWithDay } from "../../utils/getDateRangeWithDay";
import { convertDate } from "../../utils/convertDate";

interface SelectTimeTableProps {
  suggestedStartDate: string;
  suggestedEndDate: string;
  timeTable: TimeTableInterface[];
  setTimeTable: React.Dispatch<React.SetStateAction<TimeTableInterface[]>>;
  othersTimeTable: TimeTableInterface[] | null;
}

export default function SelectTimeTable({
  suggestedStartDate,
  suggestedEndDate,
  timeTable,
  setTimeTable,
  othersTimeTable,
}: SelectTimeTableProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isSelecting, setIsSelecting] = useState(true);
  const dates = getDateRangeWithDay(suggestedStartDate, suggestedEndDate);
  const isOtherViewMode = othersTimeTable !== null;

  const toggleTime = (date: string, time: string, selecting: boolean) => {
    const newTimeTable = [...timeTable];
    const exists = timeTable.find(
      (t) => t.date === convertDate(date) && t.startTime === `${time}`
    );

    if (selecting && !exists) {
      newTimeTable.push({
        date: convertDate(date),
        startTime: `${time}`,
        endTime: `${time}`,
      });
    }

    if (!selecting && exists) {
      const filtered = newTimeTable.filter(
        (t) => !(t.date === convertDate(date) && t.startTime === `${time}`)
      );
      setTimeTable(filtered);
      return;
    }

    setTimeTable(newTimeTable);
  };

  const handleMouseDown = (date: string, time: string) => {
    const exists = timeTable.find(
      (t) => t.date === convertDate(date) && t.startTime === `${time}`
    );
    const selecting = !exists;

    setIsSelecting(selecting);
    setIsDragging(true);
    toggleTime(date, time, selecting);
  };

  const handleMouseMove = (date: string, time: string, e: React.MouseEvent) => {
    if (!isDragging) return;
    toggleTime(date, time, isSelecting);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <TimeTableWrapper onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
      <DaysLabelWrapper>
        {dates.map((date) => {
          const shortDate = date.split("/").slice(1).join("/");
          return <DayLabel key={date}>{shortDate}</DayLabel>;
        })}
      </DaysLabelWrapper>

      <MainContent>
        <TimeLabelsWrapper>
          {[...Array(18)].map((_, index) => (
            <TimeLabel key={index}>{index + 7}:00</TimeLabel>
          ))}
        </TimeLabelsWrapper>
        <TimeColumnWrapper datesLength={dates.length}>
          {dates.map((date) => (
            <TimeColumn key={date}>
              {[...Array(34)].map((_, index) => {
                const hour = Math.floor(index / 2) + 7;
                const minutes = index % 2 === 0 ? "00" : "30";
                const time = `${hour.toString().padStart(2, "0")}:${minutes}`;

                const isSelected = isOtherViewMode
                  ? othersTimeTable!.some(
                      (t) =>
                        t.date === convertDate(date) &&
                        t.startTime === `${time}`
                    )
                  : timeTable.some(
                      (t) =>
                        t.date === convertDate(date) &&
                        t.startTime === `${time}`
                    );

                return (
                  <TimeBlock
                    //2023/03/02(월)-
                    key={`${date}-${time}`}
                    isSelected={isSelected}
                    isOtherSelected={isOtherViewMode}
                    {...(!isOtherViewMode && {
                      onMouseDown: () => handleMouseDown(date, time),
                      onMouseMove: (e) => handleMouseMove(date, time, e),
                      onMouseUp: handleMouseUp,
                    })}
                  />
                );
              })}
            </TimeColumn>
          ))}
        </TimeColumnWrapper>
      </MainContent>
    </TimeTableWrapper>
  );
}
