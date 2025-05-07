export const getDateRangeWithDay = (start: string, end: string): string[] => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dates: string[] = [];
  const startDate = new Date(start);
  const endDate = new Date(end);
  const current = new Date(startDate);

  while (current <= endDate) {
    const year = current.getFullYear();
    const month = String(current.getMonth() + 1).padStart(2, "0");
    const date = String(current.getDate()).padStart(2, "0");
    const day = daysOfWeek[current.getDay()];
    dates.push(`${year}/${month}/${date}(${day})`);
    current.setDate(current.getDate() + 1);
  }

  return dates;
};
