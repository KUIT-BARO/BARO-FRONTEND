import * as styles from '@shared/components/calendar/Calendar.css';
import Text from '@shared/components/text/Text';
import clsx from 'clsx';
import { IcArrowBlueLeft, IcArrowBlueRight } from '@svg/index';
import {
  DateArray,
  getDateStatus,
  getDateStyles,
} from '@shared/components/calendar/utils/CalendarUtils';
import type { DateArrayAnswer } from '@shared/components/calendar/types/Calendar.type';
import { format, addMonths, subMonths} from 'date-fns';
import { week } from '@shared/components/kakaoMap/constant/week';
import { useDateSelection } from '@shared/components/calendar/hooks/useDateSelection';

export default function Calendar() {
  const { todayDate, currentDate, setCurrentDate, handleDateClick, getSelectedDates } =
    useDateSelection();

  const selectedMonthYear = format(currentDate, 'yyyy MMM');
  const dayArray: DateArrayAnswer[][] = DateArray({ date: currentDate });

  const handleClickPrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  const handleClickNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const { startDate: clickStart, endDate: clickEnd } = getSelectedDates();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text tag="body_bold_16" color="black">
          {selectedMonthYear}
        </Text>
        <div className={styles.monthMove}>
          <IcArrowBlueLeft className={styles.arrow} onClick={handleClickPrevMonth} />
          <IcArrowBlueRight className={styles.arrow} onClick={handleClickNextMonth} />
        </div>
      </div>
      <div className={styles.weekdayContainer}>
        {week.map(day => (
          <Text key={day} tag="body_bold_14" color="gray0" className={clsx(styles.weekdayItem)}>
            {day}
          </Text>
        ))}
      </div>
      {dayArray.map((week, index) => (
        <div key={week[index].date.toDateString()} className={styles.dateRow}>
          {week.map(day => {
            const dateStatus = getDateStatus(day, todayDate, clickStart, clickEnd);
            const { dateItemClass, textColor } = getDateStyles(dateStatus);

            return (
              <div
                key={day.date.toDateString()}
                className={dateItemClass}
                onClick={() => handleDateClick(day.date)}
              >
                <Text tag="calendar_16" color={textColor} className={clsx(styles.dayText)}>
                  {day.day}
                </Text>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
