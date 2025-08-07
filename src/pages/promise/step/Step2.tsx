import Text from '@shared/components/text/Text';
import * as styles from './Step.css';
import Button from '@shared/components/button/Button';
import { vars } from '@shared/styles/theme.css';
import type { Step2Props } from '../types/Step';
import Calendar from '@shared/components/calendar/Calendar';

export default function Step2({ navigate, dateSelection, handleDateClick }: Step2Props) {
  const handleNextBtn = () => {
    navigate('/promise?step=PROMISE_LOCATION');
  };

  return (
    <>
      <div className={styles.stepWrapper}>
        <section className={styles.stepSectionWrapper}>
          <div className={styles.textWrapper}>
            <Text tag="body_bold_25">언제 만나실건가요?</Text>
            <Text tag="body_17" color="gray4">
              조정 가능한 날짜 범위를 지정해주세요
            </Text>
          </div>
          <div className={styles.calendarWrapper}>
            <Calendar dateSelection={dateSelection} handleDateClick={handleDateClick} />
          </div>
        </section>
        <div className={styles.buttonWrapper}>
          <Button
            variant="enabled"
            size="long"
            text="다음"
            onClick={handleNextBtn}
            backgroundColor={vars.color.baroBlue}
          />
        </div>
      </div>
    </>
  );
}
