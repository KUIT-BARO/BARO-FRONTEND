import { useState, useRef } from 'react';
import * as styles from '@shared/components/calendar/Calendar.css';
import Text from '@shared/components/text/Text';
import clsx from 'clsx';
import { IcArrowBlueLeft, IcArrowBlueRight } from '@svg/index';
import { DateArray, getDayColor, isInRange } from '@shared/components/calendar/utils/DateArray';
import type { DateArrayAnswer } from '@shared/components/calendar/types/Calendar.type';
import { format, addMonths, subMonths } from 'date-fns';
import { week } from '@shared/components/kakaoMap/constant/week';

export default function Calendar() {
  const todayRef = useRef(new Date());
  const today = todayRef.current;
  const [clickStart, setClickStart] = useState<Date>(new Date());
  const [clickEnd, setClickEnd] = useState<Date | null>(null);
  const [isOneClicked, setIsOneClicked] = useState(false);
  const selectedMonthYear = format(clickStart, 'yyyy MMM');
  const dayArray: DateArrayAnswer[][] = DateArray({ date: clickStart });

  const onPrevMonth = () => {
    setClickStart(subMonths(clickStart, 1));
  };
  const onNextMonth = () => {
    setClickStart(addMonths(clickStart, 1));
  };

  const handleClick = (date: Date) => {
    if (!isOneClicked) {
      setClickStart(date);
      setIsOneClicked(true);
      setClickEnd(null);
    } else {
      setClickEnd(date);
      setIsOneClicked(false);
    }
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
        <div key={week[index].date.toDateString()} className={styles.dateRow}>
          {week.map((day) => {
            const dayStr = day.date.toDateString();
            return (
              <div
                key={dayStr}
                className={styles.dateItem({
                  isToday: dayStr === today.toDateString() ? 'True' : 'default',
                  isSelected: dayStr === clickStart.toDateString() ? 'True' : 'default',
                  isInRange: clickStart && clickEnd && isInRange(day.date, clickStart, clickEnd) ? 'True' : 'default',
                })}
                onClick={() => handleClick(day.date)}

              >
                <Text tag='calendartext' color={getDayColor(day, today, clickStart, clickStart, clickEnd)}  className={clsx(styles.dayText)} >
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
