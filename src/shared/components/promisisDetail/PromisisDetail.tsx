import React from 'react';
import { StatusSet, getStatusLines } from '@shared/components/promisisDetail/utils/StatusSet';
import * as styles from '@shared/components/promisisDetail/PromisisDetail.css';
import type { PromisisDetailProps } from '@shared/components/promiseContainer/types/PromiseContainer.type';
import { PROMISE_STATUS_CONFIG, type PromiseStatusType } from '@shared/constant/promiseStatus';
import Text from '@shared/components/text/Text';
import clsx from 'clsx';

interface MinibuttonProps {
  status: PromiseStatusType;
}

const Minibutton: React.FC<MinibuttonProps> = ({ status }) => {
  return (
    <div className={styles.minibutton({ background: status })}>
      <Text tag="body_bold_14" color="white">
        {PROMISE_STATUS_CONFIG[status].text}
      </Text>
    </div>
  );
};

const PromisisDetail: React.FC<PromisisDetailProps> = props => {
  const { vote: VoteIcon, pin: PinIcon, date: DateIcon } = StatusSet[props.status];
  const { firstLine, secondLine, thirdLine } = getStatusLines(props);

  return (
    <div className={styles.container}>
      <div className={styles.itembox}>
        <VoteIcon className={styles.iconStyle} />
        <Text tag="body_thin_14" color="black" className={clsx(styles.textStyle)}>
          {firstLine}
        </Text>
      </div>
      <div className={styles.itembox}>
        <PinIcon className={styles.iconStyle} />
        <Text tag="body_thin_14" color="black" className={clsx(styles.textStyle)}>
          {secondLine}
        </Text>
      </div>
      <div className={styles.thirdStyle}>
        <div className={styles.itembox}>
          <DateIcon className={styles.iconStyle} />
          <Text tag="body_thin_14" color="black" className={clsx(styles.textStyle)}>
            {thirdLine}
          </Text>
        </div>

        {props.disabled && <Minibutton status={props.status} />}
      </div>
    </div>
  );
};

export default PromisisDetail;
