import React from 'react';
import { StatusSet } from '@shared/components/appointmentmanagementitem/StatusSet';
import * as styles from '@shared/components/appointmentmanagementitem/AppointmentManagementItem.css.ts';
import type { AppointmentManagementItemProps } from '@shared/components/appointmentmanagementbox/appointmentmanagementitemtype/AppointmentManagementItem.type';
import Text from '@shared/components/text/Text';
import clsx from 'clsx';

const AppointmentManagementItem: React.FC<AppointmentManagementItemProps> = (props) => {
  const { vote: VoteIcon, pin: PinIcon, date: DateIcon } = StatusSet[props.status];
  let firstLine = '';
  let secondLine = '';
  let thirdLine = '';

  switch (props.status) {
  case 'suggestedPromises':
    firstLine = `${props.untilVoteDate}일`;
    secondLine = props.suggestedRegion;
    thirdLine = `${props.suggestedStartDate} ~ ${props.SuggestedEndDate}`;
    break;
  case 'votingPromises':
    firstLine = `${props.untilVoteEndDate}일`;
    secondLine = props.suggestedRegion;
    thirdLine = `${props.suggestedStartDate} ~ ${props.SuggestedEndDate}`;
    break;
  case 'confirmedPromises':
    firstLine = props.promiseMembersNames.join(', ');
    secondLine = props.placeName;
    thirdLine = props.fixedDate;
    break;
  }
  return (
    <div className={styles.container}>
      <div className={styles.itembox}>
        <VoteIcon className={styles.iconStyle}/>
        <Text
          tag="body_thin_14"
          color="gray3"
          className={clsx(styles.textStyle)}
        >{firstLine}</Text>
      </div>
      <div className={styles.itembox}>
        <PinIcon className={styles.iconStyle}/>
        <Text
          tag="body_thin_14"
          color="gray3"
          className={clsx(styles.textStyle)}
        >{secondLine}</Text>
      </div>
      <div className={styles.itembox}>
        <DateIcon className={styles.iconStyle}/>
        <Text
          tag="body_thin_14"
          color="gray3"
          className={clsx(styles.textStyle)}
        >{thirdLine}</Text>
      </div>
    </div>
  );
};

export default AppointmentManagementItem;
