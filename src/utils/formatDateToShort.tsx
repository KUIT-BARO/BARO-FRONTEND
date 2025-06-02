export default function formatDateToShort(dateStr: string) {
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date(dateStr); // 문자열을 Date 객체로 변환
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = dayNames[date.getDay()];

  return `${month}/${day} (${weekday})`;
}
