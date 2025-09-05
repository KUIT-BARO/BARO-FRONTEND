export default function ScheduleSlots() {
  return Array.from({ length: 34 }, (_, index) => {
    const totalMinutes = index * 30 + 7 * 60;
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    return {
      startTime: {
        hour: hour,
        minute: minute,
      },
      endTime: {
        hour: minute === 0 ? hour : hour + 1,
        minute: minute === 0 ? 30 : 0,
      },
    };
  });
}
