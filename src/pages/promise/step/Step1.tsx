import Text from '@shared/components/text/Text';
import * as styles from './Step.css';
import Button from '@shared/components/button/Button';
import { vars } from '@shared/styles/theme.css';
import type { StepProps } from '../types/Step';

export default function Step1({ navigate, formData, handleChange, error, isValid }: StepProps) {
  const handleNextBtn = () => {
    navigate('/promise?step=PROMISE_DETAIL');
  };
  return (
    <div className={styles.stepWrapper}>
      <section className={styles.stepSectionWrapper}>
        <div className={styles.textWrapper}>
          <Text tag="body_bold_25">어떤 약속인가요?</Text>
          <Text tag="body_17" color="gray4">
            약속 이름을 입력해주세요.
          </Text>
        </div>
        <input
          type="text"
          placeholder="약속 이름을 입력해주세요."
          name="promiseName"
          value={formData.promiseName}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
          }}
        />
        {error && (
          <Text tag="body_bold_13" color="red1">
            {error}
          </Text>
        )}
      </section>
      <div className={styles.buttonWrapper}>
        <Button
          variant={isValid ? 'enabled' : 'disabled'}
          size="long"
          text="다음"
          onClick={handleNextBtn}
          backgroundColor={vars.color.baroBlue}
        />
      </div>
    </div>
  );
}
