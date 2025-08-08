import Text from '@shared/components/text/Text';
import * as styles from './Step.css';
import Button from '@shared/components/button/Button';
import { vars } from '@shared/styles/theme.css';
import type { Step1Props } from '../types/Step';
import InputBar from '@shared/components/inputBar/InputBar';
import { STEP } from '../constant/step';

export default function Step1({ promiseName, handlePlaceNameChange, navigate }: Step1Props) {
  const handleNextBtn = () => {
    navigate(`/promise?step=${STEP.PROMISE_DETAIL}`);
  };

  const isFormValid = () => {
    return promiseName.length > 0 && promiseName.length <= 15;
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
        <InputBar
          placeholder="약속 이름을 입력해주세요."
          value={promiseName}
          onChange={handlePlaceNameChange}
          hasBackground={false}
          maxLength={15}
          showMaxLength={true}
        />
        {promiseName.length >= 15 && (
          <Text tag="body_bold_13" color="red1">
            약속 이름은 15자 이하로 입력해주세요.
          </Text>
        )}
      </section>
      <div className={styles.buttonWrapper}>
        <Button
          variant={isFormValid() ? 'enabled' : 'disabled'}
          size="long"
          text="다음"
          onClick={handleNextBtn}
          backgroundColor={vars.color.baroBlue}
        />
      </div>
    </div>
  );
}
