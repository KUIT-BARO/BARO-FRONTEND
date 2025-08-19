import { DAYS } from '@shared/components/promiseDetail/constant/Days';

export function formatDateWithDay(dateStr: string): string {
  const date = new Date(dateStr);

  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dayOfWeek = DAYS[date.getDay()];

  return `${month}/${day}(${dayOfWeek})`;
}
