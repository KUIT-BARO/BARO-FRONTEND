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
import { PROMISE_STATUS, type PromiseStatusType } from '@shared/constant/promiseStatus';

interface StatusIconSet {
  vote: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  pin: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  date: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export default function getStatusSet(): Record<PromiseStatusType, StatusIconSet> {
  return {
    [PROMISE_STATUS.PENDING]: {
      vote: IcVoteBlue,
      pin: IcPinLocBlue,
      date: IcDateBlue,
    },
    [PROMISE_STATUS.VOTING]: {
      vote: IcVotingYellow,
      pin: IcPinLocYellow,
      date: IcDateYellow,
    },
    [PROMISE_STATUS.CONFIRMED]: {
      vote: IcVotingRed,
      pin: IcPinLocRed,
      date: IcDateRed,
    },
  };
}
