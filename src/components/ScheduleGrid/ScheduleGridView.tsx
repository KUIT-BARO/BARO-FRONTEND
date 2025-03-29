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

export interface Schedule {
  id: number;
  title: string;
  startTime: number;
  endTime: number;
  day: string;
  color?: string;
}

interface ScheduleGridViewProps {
  schedules: Schedule[];
  onClickSchedule?: (schedule: Schedule) => void;
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

  const getScheduleStyle = (schedule: Schedule) => {
    const startMinutes = (schedule.startTime - 7) * 60;
    const endMinutes = (schedule.endTime - 7) * 60;
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
          {days.map((day) => (
            <DayColumn key={day} style={{ position: "relative" }}>
              {schedules
                .filter((s) => s.day === day)
                .map((schedule) => (
                  <ScheduleItem
                    key={schedule.id}
                    style={{
                      ...getScheduleStyle(schedule),
                      backgroundColor: schedule.color,
                      position: "absolute",
                    }}
                    onClick={() => onClickSchedule?.(schedule)}
                  >
                    {schedule.title}
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
