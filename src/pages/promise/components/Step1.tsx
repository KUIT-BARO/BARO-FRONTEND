import Text from '@shared/components/text/Text';
import * as styles from '../Promise.css';

export default function Step1() {
  return (
    <div className={styles.stepWrapper}>
      <div className={styles.textWrapper}>
        <Text tag="body_bold_25">어떤 약속인가요?</Text>
        <Text tag="body_17" color="gray4">
          약속 이름을 입력해주세요.
        </Text>
      </div>
    </div>
  );
}
