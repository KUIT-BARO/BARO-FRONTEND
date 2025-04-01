import React, { useState, useImperativeHandle, forwardRef } from "react";
import ScheduleGridView from "./ScheduleGridView";
import ScheduleAddModal from "../ScheduleAddModal/ScheduleAddModal";
import ScheduleDetailModal from "../ScheduleDetailModal/ScheduleDetailModal";
import { ResponseSchedule } from "../../interface/api/schedules/schedule.ts";
import { ScheduleGridHandle } from "../../interface/api/schedules/schedule.ts";
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

const ScheduleGridContainer = forwardRef<ScheduleGridHandle>((_, ref) => {
  useImperativeHandle(ref, () => ({
    openAddModal: () => setAddOpen(true),
  }));
  const [schedules, setSchedules] =
    useState<ResponseSchedule[]>(dummySchedules);
  const [selectedSchedule, setSelectedSchedule] =
    useState<ResponseSchedule | null>(null);
  const [isAddOpen, setAddOpen] = useState(false);

  return (
    <>
      <ScheduleGridView
        schedules={schedules}
        onClickSchedule={(s) => setSelectedSchedule(s)}
      />
      <ScheduleAddModal isOpen={isAddOpen} onClose={() => setAddOpen(false)} />
      <ScheduleDetailModal
        isOpen={!!selectedSchedule}
        schedule={selectedSchedule}
        onClose={() => setSelectedSchedule(null)}
      />
    </>
  );
});

export default ScheduleGridContainer;
