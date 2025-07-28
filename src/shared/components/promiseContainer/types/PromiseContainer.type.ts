import { PROMISE_STATUS, type PromiseStatusType } from '@shared/constant/promiseStatus';

export type StatusType = PromiseStatusType;

interface BasePromisis {
  promiseId: number;
  promiseName: string;
}

export interface SuggestedAppointment extends BasePromisis {
  status: typeof PROMISE_STATUS.PENDING;
  untilVoteDate: number;
  suggestedRegion: string;
  suggestedStartDate: string;
  suggestedEndDate: string;
  disabled?: boolean;
}

export interface VotingAppointment extends BasePromisis {
  status: typeof PROMISE_STATUS.VOTING;
  untilVoteEndDate: number;
  suggestedRegion: string;
  suggestedStartDate: string;
  suggestedEndDate: string;
  disabled?: boolean;
}

export interface ConfirmedAppointment extends BasePromisis {
  status: typeof PROMISE_STATUS.CONFIRMED;
  fixedDate: string;
  placeName: string;
  promiseMembersNames: string[];
  disabled?: boolean;
}

export type PromisisDetailProps = SuggestedAppointment | VotingAppointment | ConfirmedAppointment;
