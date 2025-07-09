interface BaseAppointment {
  promiseId: number;
  promiseName: string;
}

export interface SuggestedAppointment extends BaseAppointment {
  status: 'suggestedPromises';
  untilVoteDate: number;
  suggestedRegion: string;
  suggestedStartDate: string;
  SuggestedEndDate: string;
  disabled?: boolean;
}

export interface VotingAppointment extends BaseAppointment {
  status: 'votingPromises';
  untilVoteEndDate: number;
  suggestedRegion: string;
  suggestedStartDate: string;
  SuggestedEndDate: string;
  disabled?: boolean;
}

export interface ConfirmedAppointment extends BaseAppointment {
  status: 'confirmedPromises';
  fixedDate: string;
  placeName: string;
  promiseMembersNames: string[];
  disabled?: boolean;
}

export type AppointmentManagementItemProps =
  | SuggestedAppointment
  | VotingAppointment
  | ConfirmedAppointment;
