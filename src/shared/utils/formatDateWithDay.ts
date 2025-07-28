import { DAY_NAMES } from '@shared/components/promisisDetail/constant/DayNames';

export function formatDateWithDay(dateStr: string): string {
  const date = new Date(dateStr);

  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dayOfWeek = DAY_NAMES[date.getDay()];

  return `${month}/${day}(${dayOfWeek})`;
}
