import type { AvatarType, PromiseType } from '@shared/constant/promise';

export type SuggestionProgress = 'NONE' | 'HALF' | 'COMPLETE';

export type User = {
  userId: number;
  avatarType: AvatarType;
  isHost: boolean;
  // PENDING일 때는 suggestionProgress, VOTING일 때는 hasVoted 사용
  suggestionProgress?: SuggestionProgress;
  hasVoted?: boolean;
};

export type PromiseTrackerProps = {
  users: User[];
  variant: PromiseType;
};
