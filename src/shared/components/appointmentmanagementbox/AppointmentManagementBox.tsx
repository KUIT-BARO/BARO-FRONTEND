import type { AppointmentManagementItemProps } from '@shared/components/appointmentmanagementbox/appointmentmanagementitemtype/AppointmentManagementItem.type';
import * as styles from '@shared/components/appointmentmanagementbox/AppointmentManagementBox.css';
import AppointmentManagementItem from '@shared/components/appointmentmanagementitem/AppointmentManagementItem';
import { IcArrow } from '@svg/index';
import React from 'react';
import Text from '@shared/components/text/Text';

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

function AppointmentManagementBox(props: AppointmentManagementItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.topBox({ background: props.status })}>
        <Text tag="body_bold_20" color="black">{props.promiseName}</Text>
        <IcArrow className={styles.imgStyle}/>
      </div>
      <div className={styles.bottomBox}>
        <AppointmentManagementItem {...props} />
        <Minibutton status={props.status} />
      </div>
    </div>
  )
}

export default AppointmentManagementBox