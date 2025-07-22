import { startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';

interface DateArrayProps {
  date: Date;
}

export interface DateArrayAnswer {
  day: number;
  date: Date;
  isCurrentMonth: boolean;
}

export function DateArray({ date }: DateArrayProps): DateArrayAnswer[][] {
  const startMonth = startOfMonth(date);
  const endMonth = endOfMonth(date);
  const startDate = startOfWeek(startMonth);
  const endDate = endOfWeek(endMonth);
  const currentMonth = date.getMonth();

  const daysInMonth = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
  const days: DateArrayAnswer[] = daysInMonth.map(d => ({
    day: d.getDate(),
    date: d,
    isCurrentMonth: d.getMonth() === currentMonth,
  }));
  const weeks: DateArrayAnswer[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
}
