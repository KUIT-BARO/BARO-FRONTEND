import { useState, useRef } from 'react';
import * as styles from '@shared/components/calendar/Calendar.css';
import Text from '@shared/components/text/Text';
import clsx from 'clsx';
import { IcArrowBlueLeft, IcArrowBlueRight } from '@svg/index';
import { DateArray,type DateArrayAnswer,getDayColor,isInRange } from '@shared/components/calendar/DateArray';
import { format,addMonths,subMonths } from 'date-fns';
import { week } from '@shared/components/kakaoMap/constant/week';

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const todayRef = useRef(new Date());
  const today = todayRef.current;
  const selectedMonthYear = format(selectedDate, 'yyyy MMM');
  const dayArray: DateArrayAnswer[][] = DateArray({ date: selectedDate });
  const [dragStart, setDragStart] = useState<Date | null>(null);
  const [dragEnd, setDragEnd] = useState<Date | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const onPrevMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  };
  const onNextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text tag='body_bold_16' color='calendarText' className={clsx(styles.calendarTexts)}>
          {selectedMonthYear}
        </Text>
        <div className={styles.monthMove}>
          <IcArrowBlueLeft className={styles.arrow} onClick={onPrevMonth} />
          <IcArrowBlueRight className={styles.arrow} onClick={onNextMonth} />
        </div>
      </div>
      <div className={styles.weekdayContainer}>
        {week.map((day) => (
          <Text key={day} tag='body_bold_14' color='dayText' className={clsx(styles.weekdayItem)}>
            {day}
          </Text>
        ))}
      </div>
      {dayArray.map((week, index) => (
        <div key={index} className={styles.dateRow}>
          {week.map((day,index) => {
            const dayStr = day.date.toDateString();
            return (
              <div
                key={index}
                onMouseDown={() => {
                  setDragStart(day.date);
                  setDragEnd(day.date);
                  setIsDragging(true);
                  setSelectedDate(day.date);
                }}
                onMouseEnter={() => {
                  if (isDragging) setDragEnd(day.date);
                }}
                onMouseUp={() => {
                  setIsDragging(false);
                }}
                className={styles.dateItem({
                  isToday: dayStr === today.toDateString() ? 'True' : 'default',
                  isSelected: dayStr === selectedDate.toDateString() ? 'True' : 'default',
                  isInRange: dragStart && dragEnd && isInRange(day.date, dragStart, dragEnd) ? 'True' : 'default',
                })}
                onClick={() => setSelectedDate(day.date)
                }
              >
                <Text tag='calendartext' color={getDayColor(day, today, selectedDate, dragStart, dragEnd)}  className={clsx(styles.dayText)} >
                  {day.day}
                </Text>
              </div>
            )
          })}
        </div>
      ))}

    </div>
  )
}
