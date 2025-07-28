import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isAfter,
  isWithinInterval,
} from 'date-fns';
import type {
  DateArrayProps,
  DateArrayAnswer,
} from '@shared/components/calendar/types/Calendar.type';

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

export function isInRange(day: Date, start: Date, end: Date) {
  const [from, to] = isAfter(start, end) ? [end, start] : [start, end];
  return isWithinInterval(day, { start: from, end: to });
}

export function getDayColor(
  day: DateArrayAnswer,
  today: Date,
  selectedDate: Date,
  dragStart: Date | null,
  dragEnd: Date | null
) {
  const dayDateString = day.date.toDateString();
  if (dayDateString === today.toDateString() || dayDateString === selectedDate.toDateString()) {
    return 'white';
  }
  if (dragStart && dragEnd && isInRange(day.date, dragStart, dragEnd)) {
    return 'white';
  }
  if (day.isCurrentMonth) {
    return 'isMonth';
  }

  return 'notMonth';
}
