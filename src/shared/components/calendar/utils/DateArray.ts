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

export function isInRange(day: Date, start: Date, end: Date | null) {
  if (!end) {
    return start.toDateString() === day.toDateString();
  }
  const [from, to] = isAfter(start, end) ? [end, start] : [start, end];
  return isWithinInterval(day, { start: from, end: to });
}

export function getDateStatus(
  day: DateArrayAnswer,
  today: Date,
  clickStart: Date,
  clickEnd: Date | null
) {
  const dayDateString = day.date.toDateString();
  const isToday = dayDateString === today.toDateString();
  const isSelected = dayDateString === clickStart.toDateString();
  const isInRangeSelected = clickEnd && isInRange(day.date, clickStart, clickEnd);
  const isHighlighted = isToday || isSelected || isInRangeSelected;

  return {
    isToday,
    isSelected,
    isInRangeSelected,
    isHighlighted,
    isCurrentMonth: day.isCurrentMonth,
  };
}
