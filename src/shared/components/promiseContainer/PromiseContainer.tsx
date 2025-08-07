import type { PromisesDetailProps } from '@shared/components/promiseContainer/types/PromiseContainer.type';
import * as styles from '@shared/components/promiseContainer/PromiseContainer.css';
import PromisesDetail from '@shared/components/promisesDetail/PromisesDetail';
import { IcArrowRight } from '@svg/index';
import Text from '@shared/components/text/Text';

export default function PromiseContainer(props: PromisesDetailProps) {
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
