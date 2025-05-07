import React from "react";
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
import TimeTableInterface from "../../../../../interface/TimeTable/TimeTable";
import { getDateRangeWithDay } from "../../../../../utils/getDateRangeWithDay";
import { convertDate } from "../../../../../utils/convertDate";
import useTimeTableSelection from "../../../../../hook/useTimeTableSelection/useTimeTableSelection";

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
  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    useTimeTableSelection(timeTable, setTimeTable);

  const dates = getDateRangeWithDay(suggestedStartDate, suggestedEndDate);
  const isOtherViewMode = !!othersTimeTable;

  const isTimeSelected = (date: string, time: string): boolean => {
    const formattedDate = convertDate(date);
    const source = isOtherViewMode ? othersTimeTable : timeTable;
    return (
      source?.some((t) => t.date === formattedDate && t.startTime === time) ??
      false
    );
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
          {Array.from({ length: 18 }, (_, i) => (
            <TimeLabel key={i}>{i + 7}:00</TimeLabel>
          ))}
        </TimeLabelsWrapper>

        <TimeColumnWrapper datesLength={dates.length}>
          {dates.map((date) => (
            <TimeColumn key={date}>
              {Array.from({ length: 34 }, (_, idx) => {
                const hour = Math.floor(idx / 2) + 7;
                const minutes = idx % 2 === 0 ? "00" : "30";
                const time = `${hour.toString().padStart(2, "0")}:${minutes}`;
                const isSelected = isTimeSelected(date, time);

                return (
                  <TimeBlock
                    key={`${date}-${time}`}
                    isSelected={isSelected}
                    isOtherSelected={isOtherViewMode}
                    {...(!isOtherViewMode && {
                      onMouseDown: () => handleMouseDown(date, time),
                      onMouseMove: () => handleMouseMove(date, time),
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
