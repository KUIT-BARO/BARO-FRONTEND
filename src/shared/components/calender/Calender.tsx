import React ,{useState} from 'react';
import * as styles from '@shared/components/calender/Calender.css';
import Text from '@shared/components/text/Text';
import clsx from 'clsx';
import { IcArrowBlueLeft, IcArrowBlueRight } from '@svg/index';
import { DateArray,type DateArrayAnswer } from '@shared/components/calender/DateArray';
import { format,addMonths,subMonths } from 'date-fns';


const Calender: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const today = new Date();
  const todayMonth = format(selectedDate, 'MMM');
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayArray: DateArrayAnswer[][] = DateArray({ date: selectedDate });
  const getDayColor = (d: DateArrayAnswer) => {
    if (d.date.toDateString() === today.toDateString() || d.date.toDateString() === selectedDate.toDateString()) {
      return 'white';
    }
    if (d.isCurrentMonth) {
      return 'isMonth';
    }
    return 'notMonth';
  }
  const onPrevMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  };
  const onNextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text tag='body_bold_16' color='calenderText'>
          {`${todayMonth}  ${selectedDate.getFullYear()}`}
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
          {week.map((day,index) => (
            <div
              key={index}
              className={styles.dateItem({
                isToday: day.date.toDateString() === today.toDateString() ? 'True' : 'default',
                isSelected: day.date.toDateString() === selectedDate.toDateString() ? 'True' : 'default',
              })}
              onClick={() => setSelectedDate(day.date)
              }
            >
              <Text tag='calendertext' color={getDayColor(day)}  className={clsx(styles.dayText)} >
                {day.day}
              </Text>
            </div>
          ))}
        </div>
      ))}

    </div>
  )
}

export default Calender;