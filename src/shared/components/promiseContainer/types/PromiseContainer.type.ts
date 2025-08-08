import { PROMISE_STATUS } from '@shared/constant/promiseStatus';

interface BasePromises {
  promiseId: number;
  promiseName: string;
}

export interface PendingPromise extends BasePromises {
  status: typeof PROMISE_STATUS.PENDING;
  untilVoteDate: number;
  suggestedRegion: string;
  suggestedStartDate: string;
  suggestedEndDate: string;
  showStatusBadge?: boolean;
}

export interface VotingPromise extends BasePromises {
  status: typeof PROMISE_STATUS.VOTING;
  untilVoteEndDate: number;
  suggestedRegion: string;
  suggestedStartDate: string;
  suggestedEndDate: string;
  showStatusBadge?: boolean;
}

export interface ConfirmedPromise extends BasePromises {
  status: typeof PROMISE_STATUS.CONFIRMED;
  fixedDate: string;
  placeName: string;
  promiseMembersNames: string[];
  showStatusBadge?: boolean;
}

export type PromisesDetailProps = PendingPromise | VotingPromise | ConfirmedPromise;
