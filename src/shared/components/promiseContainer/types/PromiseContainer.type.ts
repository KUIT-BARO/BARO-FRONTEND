export type StatusType = 'PENDING' | 'VOTING' | 'CONFIRMED';

interface BasePromisis {
  promiseId: number;
  promiseName: string;
}

export interface SuggestedAppointment extends BasePromisis {
  status: 'PENDING';
  untilVoteDate: number;
  suggestedRegion: string;
  suggestedStartDate: string;
  suggestedEndDate: string;
  disabled?: boolean;
}

export interface VotingAppointment extends BasePromisis {
  status: 'VOTING';
  untilVoteEndDate: number;
  suggestedRegion: string;
  suggestedStartDate: string;
  suggestedEndDate: string;
  disabled?: boolean;
}

export interface ConfirmedAppointment extends BasePromisis {
  status: 'CONFIRMED';
  fixedDate: string;
  placeName: string;
  promiseMembersNames: string[];
  disabled?: boolean;
}

export type PromisisDetailProps = SuggestedAppointment | VotingAppointment | ConfirmedAppointment;
