export default function formatDateToShort(date: Date) {
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();
  const weekday = dayNames[date.getDay()]; // 요일 가져오기

  return `${month}/${day} (${weekday})`;
}
