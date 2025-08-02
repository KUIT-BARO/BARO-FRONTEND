import Text from '@shared/components/text/Text';
import * as styles from './Step.css';
import Button from '@shared/components/button/Button';
import { vars } from '@shared/styles/theme.css';

interface Step1Props {
  promiseName: string;
  onPromiseNameChange: (name: string) => void;
  navigate: (path: string) => void;
}

export default function Step1({ promiseName, onPromiseNameChange, navigate }: Step1Props) {
  console.log(promiseName);
  console.log(onPromiseNameChange);

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
