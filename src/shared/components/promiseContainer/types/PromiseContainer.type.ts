import { PROMISE_STATUS } from '@shared/constant/promiseStatus';

interface BasePromisis {
  promiseId: number;
  promiseName: string;
}

export interface PendingPromise extends BasePromisis {
  status: typeof PROMISE_STATUS.PENDING;
  untilVoteDate: number;
  suggestedRegion: string;
  suggestedStartDate: string;
  suggestedEndDate: string;
  showStatusBadge?: boolean;
}

export interface VotingPromise extends BasePromisis {
  status: typeof PROMISE_STATUS.VOTING;
  untilVoteEndDate: number;
  suggestedRegion: string;
  suggestedStartDate: string;
  suggestedEndDate: string;
  showStatusBadge?: boolean;
}

export interface ConfirmedPromise extends BasePromisis {
  status: typeof PROMISE_STATUS.CONFIRMED;
  fixedDate: string;
  placeName: string;
  promiseMembersNames: string[];
  showStatusBadge?: boolean;
}

export type PromisisDetailProps = PendingPromise | VotingPromise | ConfirmedPromise;
