import Text from '@shared/components/text/Text';
import * as styles from './Step.css';

interface Step3Props {
  navigate: (path: string) => void;
}
export default function Step3({ navigate }: Step3Props) {
  return (
    <div className={styles.stepWrapper}>
      <section className={styles.stepSectionWrapper}>
        <div className={styles.textWrapper}>
          <Text tag="body_bold_25">약속 마감일</Text>
          <Text tag="body_17" color="gray4">
            약속 마감일을 설정해주세요.
          </Text>
        </div>
      </section>
    </div>
  );
}
