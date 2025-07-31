import type { AvatarType } from '@shared/constant/promise';

export type SuggestionProgress = 'NONE' | 'HALF' | 'COMPLETE';

export type User = {
  userId: number;
  avatarType: AvatarType;
  isHost: boolean;
  suggestionProgress: SuggestionProgress;
};

export type PromiseTrackerProps = {
  users: User[];
};
