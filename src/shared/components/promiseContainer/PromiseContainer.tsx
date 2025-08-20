import type { PromiseDetailProps } from '@shared/components/promiseContainer/types/PromiseContainer.type';
import * as styles from '@shared/components/promiseContainer/PromiseContainer.css';
import PromisesDetail from '@shared/components/promiseDetail/PromiseDetail';
import { IcArrowRight } from '@svg/index';
import Text from '@shared/components/text/Text';

export default function PromiseContainer(props: PromiseDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.headerSection({ background: props.status })}>
        <Text tag="body_bold_20" color="black">
          {props.promiseName}
        </Text>
        <IcArrowRight className={styles.imgStyle} />
      </div>
      <div className={styles.contentSection}>
        <PromisesDetail {...props} showStatusBadge={true} />
      </div>
    </div>
  );
}
