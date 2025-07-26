import {
  IcVoteBlue,
  IcVotingRed,
  IcVotingYellow,
  IcPinLocBlue,
  IcPinLocYellow,
  IcPinLocRed,
  IcDateBlue,
  IcDateYellow,
  IcDateRed,
} from '@svg/index.ts';
import React from 'react';
import type { AppointmentManagementItemProps } from '@shared/components/appointmentmanagementbox/appointmentmanagementitemtype/AppointmentManagementItem.type';

type StatusType = 'suggestedPromises' | 'votingPromises' | 'confirmedPromises';

interface StatusIconSet {
  vote: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  pin: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  date: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const StatusSet: Record<StatusType, StatusIconSet> = {
  suggestedPromises: {
    vote: IcVoteBlue,
    pin: IcPinLocBlue,
    date: IcDateBlue,
  },
  votingPromises: {
    vote: IcVotingYellow,
    pin: IcPinLocYellow,
    date: IcDateYellow,
  },
  confirmedPromises: {
    vote: IcVotingRed,
    pin: IcPinLocRed,
    date: IcDateRed,
  },
};

export function formatDateWithDay(dateStr: string): string {
  const date = new Date(dateStr);

  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = dayNames[date.getDay()];

  return `${month}/${day}(${dayOfWeek})`;
}

export function getStatusLines(props: AppointmentManagementItemProps): {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
} {
  switch (props.status) {
  case 'suggestedPromises':
    return {
      firstLine: `${props.untilVoteDate}일`,
      secondLine: props.suggestedRegion,
      thirdLine: `${formatDateWithDay(props.suggestedStartDate)} ~ ${formatDateWithDay(props.suggestedEndDate)}`
    };
  case 'votingPromises':
    return {
      firstLine: `${props.untilVoteEndDate}일`,
      secondLine: props.suggestedRegion,
      thirdLine: `${formatDateWithDay(props.suggestedStartDate)} ~ ${formatDateWithDay(props.suggestedEndDate)}`
    };
  case 'confirmedPromises':
    return {
      firstLine: props.promiseMembersNames.join(', '),
      secondLine: props.placeName,
      thirdLine: formatDateWithDay(props.fixedDate)
    };
  }
}