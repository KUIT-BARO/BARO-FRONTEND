// ScheduleGridView.tsx
import React from "react";
import {
  Wrapper,
  DaysHeader,
  DayItem,
  MainGridContainer,
  TimeColumn,
  TimeSlot,
  ScheduleGridContainer,
  DayColumn,
  GridCell,
  ScheduleItem,
} from "./ScheduleGrid.styles";

import { ResponseSchedule } from "../../interface/api/schedules/schedule";

interface ScheduleGridViewProps {
  schedules: ResponseSchedule[];
  onClickSchedule?: (schedule: ResponseSchedule) => void;
}

const ScheduleGridView: React.FC<ScheduleGridViewProps> = ({
  schedules,
  onClickSchedule,
}) => {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const timeSlots = Array.from({ length: 36 }, (_, i) => ({
    hour: Math.floor(i / 2) + 7,
    minute: i % 2 === 0 ? "00" : "30",
  }));
  const timeStringToDecimal = (timeStr: string): number => {
    const [hourStr, minStr] = timeStr.split(":");
    const hours = parseInt(hourStr, 10);
    const minutes = parseInt(minStr, 10);
    return hours + minutes / 60;
  };
  const getScheduleStyle = (schedule: ResponseSchedule) => {
    const start = timeStringToDecimal(schedule.startTime); // 예: "15:30:00"
    const end = timeStringToDecimal(schedule.endTime);
    const startMinutes = (start - 7) * 60;
    const endMinutes = (end - 7) * 60;
    const top = (startMinutes / 30) * 20;
    const height = ((endMinutes - startMinutes) / 30) * 20;
    return { top: `${top}px`, height: `${height}px` };
  };

  return (
    <Wrapper>
      <DaysHeader>
        {days.map((day) => (
          <DayItem key={day}>{day}</DayItem>
        ))}
      </DaysHeader>

      <MainGridContainer>
        <TimeColumn>
          {timeSlots.map((slot) => (
            <TimeSlot
              key={`${slot.hour}-${slot.minute}`}
              halfHour={slot.minute === "30"}
            >
              {slot.minute === "00" ? slot.hour : ""}
            </TimeSlot>
          ))}
        </TimeColumn>

        <ScheduleGridContainer>
          {days.map((day, index) => (
            <DayColumn key={day} style={{ position: "relative" }}>
              {schedules
                .filter((s) => s.dayOfWeek === index + 1)
                .map((schedule) => (
                  <ScheduleItem
                    key={schedule.scheduleId}
                    style={{
                      ...getScheduleStyle(schedule),
                      backgroundColor: "blue",
                      position: "absolute",
                    }}
                    onClick={() => onClickSchedule?.(schedule)}
                  >
                    {schedule.scheduleName}
                  </ScheduleItem>
                ))}

              {timeSlots.map((slot) => (
                <GridCell
                  key={`${day}-${slot.hour}-${slot.minute}`}
                  halfHour={slot.minute === "30"}
                />
              ))}
            </DayColumn>
          ))}
        </ScheduleGridContainer>
      </MainGridContainer>
    </Wrapper>
  );
};

export default ScheduleGridView;
