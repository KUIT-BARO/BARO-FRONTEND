import React from 'react';
import { StatusSet } from '@shared/components/appointmentmanagementitem/StatusSet';
import * as styles from '@shared/components/appointmentmanagementitem/AppointmentManagementItem.css.ts';
import type { AppointmentManagementItemProps } from '@shared/types/appointmentmanagementitemtype/AppointmentManagementItem.type';

const AppointmentManagementItem: React.FC<AppointmentManagementItemProps> = props => {
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
        <VoteIcon />
        <span className={styles.textStyle}>{firstLine}</span>
      </div>
      <div className={styles.itembox}>
        <PinIcon />
        <span className={styles.textStyle}>{secondLine}</span>
      </div>
      <div className={styles.itembox}>
        <DateIcon />
        <span className={styles.textStyle}>{thirdLine}</span>
      </div>
    </div>
  );
};

export default AppointmentManagementItem;
