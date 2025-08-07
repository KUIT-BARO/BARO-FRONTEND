import Text from '@shared/components/text/Text';
import * as styles from './Step.css';
import Button from '@shared/components/button/Button';
import { vars } from '@shared/styles/theme.css';
import type { Step4Props } from '../types/Step';

export default function Step4({
  navigate,
  promiseDeadline,
  handleDeadlineChange,
  onSubmit,
  suggestStartDate,
}: Step4Props) {
  const isFormValid = () => {
    return promiseDeadline.length > 0 && promiseDeadline <= suggestStartDate;
  };
  const handleNextBtn = () => {
    onSubmit();
    navigate('/');
  };
  return (
    <>
      <div className={styles.stepWrapper}>
        <section className={styles.stepSectionWrapper}>
          <div className={styles.textWrapper}>
            <Text tag="body_bold_25">약속 마감일</Text>
            <Text tag="body_17" color="gray4">
              약속 마감일을 설정해주세요.
            </Text>
          </div>
          <input
            type="date"
            name="promiseDeadline"
            value={promiseDeadline}
            onChange={handleDeadlineChange}
          />
          {promiseDeadline > suggestStartDate && (
            <Text tag="body_14" color="red1">
              약속 마감일은 약속 시작일 이전여야 합니다.
            </Text>
          )}
        </section>
        <div className={styles.buttonWrapper}>
          <Button
            variant={isFormValid() ? 'enabled' : 'disabled'}
            size="long"
            text="약속 생성"
            onClick={handleNextBtn}
            backgroundColor={vars.color.baroBlue}
          />
        </div>
      </div>
    </>
  );
}
