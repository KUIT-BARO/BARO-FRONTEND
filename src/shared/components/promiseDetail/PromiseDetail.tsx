import type { PromiseDetailProps } from '@shared/components/promiseContainer/types/PromiseContainer.type';

import * as styles from '@shared/components/promiseDetail/PromiseDetail.css';
import getStatusSet from '@shared/components/promiseDetail/utils/getStatusSet';
import getStatusLines from '@shared/components/promiseDetail/utils/getStatusLines';
import { PROMISE_STATUS_CONFIG } from '@shared/constant/promiseStatus';
import Text from '@shared/components/text/Text';

export default function PromiseDetail(props: PromiseDetailProps) {
  const { vote: VoteIcon, pin: PinIcon, date: DateIcon } = getStatusSet()[props.status];
  const { firstLine, secondLine, thirdLine } = getStatusLines(props);

  return (
    <div className={styles.container}>
      <div className={styles.itembox}>
        <VoteIcon className={styles.iconStyle} />
        <Text tag="body_thin_14" color="black" className={styles.textStyle}>
          {firstLine}
        </Text>
      </div>
      <div className={styles.itembox}>
        <PinIcon className={styles.iconStyle} />
        <Text tag="body_thin_14" color="black" className={styles.textStyle}>
          {secondLine}
        </Text>
      </div>
      <div className={styles.thirdStyle}>
        <div className={styles.itembox}>
          <DateIcon className={styles.iconStyle} />
          <Text tag="body_thin_14" color="black" className={styles.textStyle}>
            {thirdLine}
          </Text>
        </div>

        {props.showStatusBadge && (
          <div className={styles.statusBadge({ background: props.status })}>
            <Text tag="body_bold_14" color="white">
              {PROMISE_STATUS_CONFIG[props.status].text}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
}
