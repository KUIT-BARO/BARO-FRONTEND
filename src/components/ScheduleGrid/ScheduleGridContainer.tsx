// ScheduleGridContainer.tsx
import React, { useState, useImperativeHandle, forwardRef } from "react";
import ScheduleGridView from "./ScheduleGridView";
import ScheduleAddModal from "../ScheduleAddModal/ScheduleAddModal";
import ScheduleDetailModal from "../ScheduleDetailModal/ScheduleDetailModal";
import { ResponseSchedule } from "../interface/api/schedules/schedule.ts";

const dummySchedules: ResponseSchedule[] = [
  {
    scheduleId: 1,
    scheduleName: "리액트 강의",
    startTime: "9:00:00",
    endTime: "10:30:00",
    dayOfWeek: 1,
  },
  {
    scheduleId: 2,
    scheduleName: "운동",
    startTime: "12:30:00",
    endTime: "13:30:00",
    dayOfWeek: 3,
  },
  {
    scheduleId: 3,
    scheduleName: "스터디 모임",
    startTime: "15:00:00",
    endTime: "16:30:00",
    dayOfWeek: 5,
  },
];

const randomColor = () => {
  const colors = ["#6699FF", "#708AFF", "#7893FF", "#7BB2FF"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ScheduleGridContainer = forwardRef<ScheduleGridHandle>((_, ref) => {
  const [schedules, setSchedules] =
    useState<ResponseSchedule[]>(dummySchedules);
  const [selectedSchedule, setSelectedSchedule] =
    useState<ResponseSchedule | null>(null);
  const [isAddOpen, setAddOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openAddModal: () => setAddOpen(true),
  }));

  const handleAdd = (data: Omit<Schedule, "scheduleId" | "color">) => {
    const newSchedule: Schedule = {
      ...data,
      scheduleId: Date.now(),
      color: randomColor(),
    };
    setSchedules([...schedules, newSchedule]);
    setAddOpen(false);
  };

  const handleDelete = (scheduleId: number) => {
    setSchedules((prev) => prev.filter((s) => s.scheduleId !== scheduleId));
    setSelectedSchedule(null);
  };

  const handleUpdate = (scheduleId: number, update: Partial<Schedule>) => {
    setSchedules((prev) =>
      prev.map((s) => (s.scheduleId === scheduleId ? { ...s, ...update } : s))
    );
    setSelectedSchedule(null);
  };

  return (
    <>
      <ScheduleGridView
        schedules={schedules}
        onClickSchedule={(s) => setSelectedSchedule(s)}
      />
      <ScheduleAddModal
        isOpen={isAddOpen}
        onClose={() => setAddOpen(false)}
        onAdd={handleAdd}
      />
      <ScheduleDetailModal
        isOpen={!!selectedSchedule}
        schedule={selectedSchedule}
        onClose={() => setSelectedSchedule(null)}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </>
  );
});

export default ScheduleGridContainer;
