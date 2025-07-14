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