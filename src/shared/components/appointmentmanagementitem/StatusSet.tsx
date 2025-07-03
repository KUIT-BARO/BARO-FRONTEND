import {
  IcVote,
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
    vote: IcVote,
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
