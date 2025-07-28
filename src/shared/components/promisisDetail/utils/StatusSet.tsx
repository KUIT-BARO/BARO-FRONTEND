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
import type { PromisisDetailProps,StatusType } from '@shared/components/promiseContainer/types/PromiseContainer.type';
import { formatDateWithDay } from '@shared/utils/formatDateWithDay';

interface StatusIconSet {
  vote: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  pin: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  date: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const StatusSet: Record<StatusType, StatusIconSet> = {
  PENDING: {
    vote: IcVoteBlue,
    pin: IcPinLocBlue,
    date: IcDateBlue,
  },
  VOTING: {
    vote: IcVotingYellow,
    pin: IcPinLocYellow,
    date: IcDateYellow,
  },
  CONFIRMED: {
    vote: IcVotingRed,
    pin: IcPinLocRed,
    date: IcDateRed,
  },
};

export function getStatusLines(props: PromisisDetailProps): {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
} {
  switch (props.status) {
  case 'PENDING':
    return {
      firstLine: `${props.untilVoteDate}일`,
      secondLine: props.suggestedRegion,
      thirdLine: `${formatDateWithDay(props.suggestedStartDate)} ~ ${formatDateWithDay(props.suggestedEndDate)}`
    };
  case 'VOTING':
    return {
      firstLine: `${props.untilVoteEndDate}일`,
      secondLine: props.suggestedRegion,
      thirdLine: `${formatDateWithDay(props.suggestedStartDate)} ~ ${formatDateWithDay(props.suggestedEndDate)}`
    };
  case 'CONFIRMED':
    return {
      firstLine: props.promiseMembersNames.join(', '),
      secondLine: props.placeName,
      thirdLine: formatDateWithDay(props.fixedDate)
    };
  }
}