export const randomColor = () => {
  const colors = ["#6699FF", "#708AFF", "#7893FF", "#7BB2FF"];
  return colors[Math.floor(Math.random() * colors.length)];
};
export const timeStringToDecimal = (timeStr: string): number => {
  const [hourStr, minStr] = timeStr.split(":");
  const hours = parseInt(hourStr, 10);
  const minutes = parseInt(minStr, 10);
  return hours + minutes / 60;
};
export const getKoreanDay = (dayNumber: number): string => {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  return days[dayNumber - 1] || "";
};
export const getDayNumber = (dayText: string): number => {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const index = days.indexOf(dayText);
  return index !== -1 ? index + 1 : 0; // 0은 에러 또는 잘못된 값
};

export const formatToHourMinute = (timeString: string): string => {
  const [hours, minutes] = timeString.split(":");
  return `${hours}:${minutes}`;
};

export const formatToHourMinuteSecond = (timeString: string): string => {
  return `${timeString}:00`;
};
