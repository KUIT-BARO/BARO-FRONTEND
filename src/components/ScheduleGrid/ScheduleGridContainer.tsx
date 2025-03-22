// ScheduleGridContainer.tsx
import React, { useState, useImperativeHandle, forwardRef } from "react";
import ScheduleGridView, { Schedule } from "./ScheduleGridView";
import ScheduleAddModal from "../ScheduleAddModal/ScheduleAddModal";
import ScheduleDetailModal from "../ScheduleDetailModal/ScheduleDetailModal";

export interface ScheduleGridHandle {
  openAddModal: () => void;
}
const dummySchedules: Schedule[] = [
  {
    id: 1,
    title: "리액트 강의",
    startTime: 9,
    endTime: 10.5,
    day: "월",
    color: "#6699FF",
  },
  {
    id: 2,
    title: "운동",
    startTime: 12.5,
    endTime: 13.5,
    day: "수",
    color: "#708AFF",
  },
  {
    id: 3,
    title: "스터디 모임",
    startTime: 15,
    endTime: 16.5,
    day: "금",
    color: "#7893FF",
  },
];

const randomColor = () => {
  const colors = ["#6699FF", "#708AFF", "#7893FF", "#7BB2FF"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ScheduleGridContainer = forwardRef<ScheduleGridHandle>((_, ref) => {
  const [schedules, setSchedules] = useState<Schedule[]>(dummySchedules);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(
    null
  );
  const [isAddOpen, setAddOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openAddModal: () => setAddOpen(true),
  }));

  const handleAdd = (data: Omit<Schedule, "id" | "color">) => {
    const newSchedule: Schedule = {
      ...data,
      id: Date.now(),
      color: randomColor(),
    };
    setSchedules([...schedules, newSchedule]);
    setAddOpen(false);
  };

  const handleDelete = (id: number) => {
    setSchedules((prev) => prev.filter((s) => s.id !== id));
    setSelectedSchedule(null);
  };

  const handleUpdate = (id: number, update: Partial<Schedule>) => {
    setSchedules((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...update } : s))
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
