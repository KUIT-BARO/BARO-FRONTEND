import React from 'react';
import { StatusSet,getStatusLines} from '@shared/components/appointmentmanagementitem/StatusSet';
import * as styles from '@shared/components/appointmentmanagementitem/AppointmentManagementItem.css.ts';
import type { AppointmentManagementItemProps } from '@shared/components/appointmentmanagementbox/appointmentmanagementitemtype/AppointmentManagementItem.type';
import Text from '@shared/components/text/Text';
import clsx from 'clsx';

type StatusType = 'suggestedPromises' | 'votingPromises' | 'confirmedPromises';
interface MinibuttonProps {
  status: StatusType;
}

const Minibutton: React.FC<MinibuttonProps> = ({ status }) => {
  const title =
    status === 'suggestedPromises'
      ? '미정'
      : status === 'votingPromises'
        ? '투표'
        : status === 'confirmedPromises'
          ? '확정'
          : '?';

  return (
    <div className={styles.minibutton({ background: status })}>
      <Text tag="body_bold_14" color="white">
        {title}
      </Text>
    </div>
  );
};
const AppointmentManagementItem: React.FC<AppointmentManagementItemProps> = (props) => {
  const { vote: VoteIcon, pin: PinIcon, date: DateIcon } = StatusSet[props.status];
  const { firstLine, secondLine, thirdLine } = getStatusLines(props);


  return (
    <div className={styles.container}>
      <div className={styles.itembox}>
        <VoteIcon className={styles.iconStyle}/>
        <Text
          tag="body_thin_14"
          color="black"
          className={clsx(styles.textStyle)}
        >{firstLine}</Text>
      </div>
      <div className={styles.itembox}>
        <PinIcon className={styles.iconStyle}/>
        <Text
          tag="body_thin_14"
          color="black"
          className={clsx(styles.textStyle)}
        >{secondLine}</Text>
      </div>
      <div className={styles.thirdStyle}>
        <div className={styles.itembox}>
          <DateIcon className={styles.iconStyle}/>
          <Text
            tag="body_thin_14"
            color="black"
            className={clsx(styles.textStyle)}
          >{thirdLine}</Text>
        </div>

        {props.disabled&&<Minibutton status={props.status} />}
      </div>


    </div>
  );
};

export default AppointmentManagementItem;
