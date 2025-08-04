import Text from '@shared/components/text/Text';
import * as styles from './Step.css';
import Button from '@shared/components/button/Button';
import { vars } from '@shared/styles/theme.css';
import type { StepProps } from '../types/Step';

export default function Step2({ navigate, formData, handleChange, error, isValid }: StepProps) {
  const handleNextBtn = () => {
    navigate('/promise?step=PROMISE_DEADLINE');
  };
  return (
    <div className={styles.stepWrapper}>
      <section>
        <div className={styles.textWrapper}>
          <Text tag="body_bold_25">언제 만나실건가요?</Text>
          <Text tag="body_17" color="gray4">
            조정 가능한 날짜 범위를 지정해주세요
          </Text>
        </div>
        <input
          type="date"
          name="suggestedStartDate"
          value={formData.suggestedStartDate}
          onChange={handleChange}
        />
      </section>
      <section>
        <div className={styles.textWrapper}>
          <Text tag="body_bold_25">만나고 싶은 장소를 설정해주세요.</Text>
          <Text tag="body_17" color="gray4">
            친구들과 함께 할 장소를 제안해보세요
          </Text>
        </div>
        <input
          type="date"
          name="suggestedEndDate"
          value={formData.suggestedEndDate}
          onChange={handleChange}
        />
      </section>
      <div className={styles.buttonWrapper}>
        <Button
          variant={'enabled'}
          size="long"
          text="다음"
          onClick={handleNextBtn}
          backgroundColor={vars.color.baroBlue}
        />
      </div>
    </div>
  );
}
