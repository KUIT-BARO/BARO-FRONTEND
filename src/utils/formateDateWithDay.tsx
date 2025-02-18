export default function formatDateWithDay(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "유효하지 않은 날짜"; // 에러 방지
  }

  const month = date.getMonth() + 1; // 월 (0부터 시작하므로 +1)
  const day = date.getDate(); // 일
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = weekDays[date.getDay()]; // 요일 가져오기

  return `${month}/${day}(${dayOfWeek})`;
}
