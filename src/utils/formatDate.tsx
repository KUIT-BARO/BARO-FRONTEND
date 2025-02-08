export default function formatDate(dateString: string) {
  const [year, month, day] = dateString.split("-");
  return `${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
}
